import { createType } from '@joystream/types'
import { ApiRx } from '@polkadot/api'
import BN from 'bn.js'
import { set } from 'lodash'
import { from, of } from 'rxjs'

import { BN_ZERO } from '@/common/constants'
import { UseApi } from '@/common/providers/api/provider'
import { proposalDetails } from '@/proposals/model/proposalDetails'

import { createBalance, getBalanceLock, toRuntimeDispatchInfo } from './chainTypes'

const getSuccessEvents = (data: number[], section: string, method: string) => [
  {
    phase: { ApplyExtrinsic: 2 },
    event: { index: '0x0502', data, method, section },
  },
  {
    phase: { ApplyExtrinsic: 2 },
    event: { index: '0x0000', data: [{ weight: 190949000, class: 'Normal', paysFee: 'Yes' }] },
  },
]

const getErrorEvents = () => [
  {
    phase: { ApplyExtrinsic: 2 },
    event: {
      index: '0x0001',
      data: [{ Module: { index: 5, error: 3 } }, { weight: 190949000, class: 'Normal', paysFee: 'Yes' }],
      section: 'system',
      method: 'ExtrinsicFailed',
    },
  },
]

export const stubTransactionResult = (events: any[]) =>
  from([
    {
      status: { isReady: true, type: 'Ready' },
    },
    {
      status: { type: 'InBlock', isInBlock: true, asInBlock: '0x93XXX' },
      events: [...events],
    },
    {
      status: { type: 'Finalized', isFinalized: true, asFinalized: '0x93XXX' },
      events: [...events],
    },
  ])

const getBatchSuccessEvents = () => [
  {
    phase: { ApplyExtrinsic: 2 },
    event: {
      section: 'utility',
      method: 'BatchCompleted',
      index: '0x0502',
    },
  },
  {
    phase: { ApplyExtrinsic: 2 },
    event: { index: '0x0000', data: [{ weight: 190949000, class: 'Normal', paysFee: 'Yes' }] },
  },
]

const getBatchErrorEvents = () => [
  {
    phase: { ApplyExtrinsic: 2 },
    event: {
      index: '0x0001',
      data: [{ Module: { index: 20, error: 5 } }, { weight: 190949000, class: 'Normal', paysFee: 'Yes' }],
      section: 'utility',
      method: 'BatchInterrupted',
    },
  },
]

export const stubTransactionFailure = (transaction: any) => {
  set(transaction, 'signAndSend', () => stubTransactionResult(getErrorEvents()))
}

export const stubTransactionSuccess = (transaction: any, data: any, section = '', method = '') => {
  set(transaction, 'signAndSend', () => stubTransactionResult(getSuccessEvents(data, section, method)))
}

export const stubBatchTransactionFailure = (transaction: any) => {
  set(transaction, 'signAndSend', () => stubTransactionResult(getBatchErrorEvents()))
}

export const stubBatchTransactionSuccess = (transaction: any) => {
  set(transaction, 'signAndSend', () => stubTransactionResult(getBatchSuccessEvents()))
}

export const stubTransaction = (api: UseApi, transactionPath: string, fee = 25) => {
  const transaction = {}
  set(transaction, 'paymentInfo', () => of(toRuntimeDispatchInfo(fee)))
  set(api, transactionPath, () => transaction)
  return transaction
}

export const stubQuery = (api: UseApi, querySubPath: string, response: unknown) => {
  return set(api, `api.query.${querySubPath}`, () => of(response))
}

export const stubApi = () => {
  const api: UseApi = {
    api: ({} as unknown) as ApiRx,
    isConnected: true,
  }
  return api
}

export const stubDefaultBalances = (api: UseApi) => {
  stubBalances(api, {
    available: 1000,
    locked: 0,
  })
}

export const stubProposalConstants = (api: UseApi, constants?: { requiredStake: number }) => {
  for (const proposalType of proposalDetails) {
    set(api, `api.consts.proposalsCodex.${proposalType}ProposalParameters`, {
      votingPeriod: new BN(10),
      gracePeriod: new BN(10),
      approvalQuorumPercentage: new BN(10),
      approvalThresholdPercentage: new BN(10),
      slashingQuorumPercentage: new BN(10),
      slashingThresholdPercentage: new BN(10),
      requiredStake: new BN(constants && constants.requiredStake ? constants.requiredStake : 10),
      constitutionality: new BN(10),
    })
  }
}

type Balances = { available?: number; locked?: number; lockId?: number }

export const stubBalances = (api: UseApi, { available, lockId, locked }: Balances) => {
  const availableBalance = new BN(available ?? 0)
  const lockedBalance = new BN(locked ?? 0)

  set(api, 'api.derive.balances.all', () =>
    from([
      {
        availableBalance: createType('Balance', availableBalance),
        lockedBalance: createType('Balance', lockedBalance),
        accountId: createType('AccountId', '0x00'),
        accountNonce: createType('Index', 1),
        freeBalance: createType('Balance', availableBalance.add(lockedBalance)),
        frozenFee: new BN(0),
        frozenMisc: new BN(0),
        isVesting: false,
        lockedBreakdown: lockedBalance.eq(BN_ZERO) ? [] : [getBalanceLock(locked!, lockId ?? 11)],
        reservedBalance: new BN(0),
        vestedBalance: new BN(0),
        vestedClaimable: new BN(0),
        vestingEndBlock: createType('BlockNumber', 1234),
        vestingLocked: new BN(0),
        vestingPerBlock: new BN(0),
        vestingTotal: new BN(0),
        votingBalance: new BN(0),
      },
    ])
  )
}

export const EMPTY_BALANCES = {
  accountId: createType('AccountId', '0x00'),
  accountNonce: createType('Index', 1),
  availableBalance: createBalance(0),
  freeBalance: createBalance(0),
  frozenFee: createBalance(0),
  frozenMisc: createBalance(0),
  isVesting: false,
  lockedBalance: createBalance(0),
  lockedBreakdown: [],
  reservedBalance: createBalance(0),
  vestedBalance: createBalance(0),
  vestedClaimable: createBalance(0),
  vestingEndBlock: createType('BlockNumber', 1234),
  vestingLocked: createBalance(0),
  vestingPerBlock: createBalance(0),
  vestingTotal: createBalance(0),
  votingBalance: createBalance(0),
}
