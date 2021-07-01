import BN from 'bn.js'
import React, { useEffect, useMemo, useState } from 'react'

import { useMyBalances } from '@/accounts/hooks/useMyBalances'
import { useKeyring } from '@/common/hooks/useKeyring'
import { Address } from '@/common/types'

import { Select, SelectedOption } from '../../../common/components/selects'
import { useMyAccounts } from '../../hooks/useMyAccounts'
import { accountOrNamed } from '../../model/accountOrNamed'
import { isValidAddress } from '../../model/isValidAddress'
import { Account } from '../../types'

import { filterByMinBalance, filterByText } from './helpers'
import { OptionAccount } from './OptionAccount'
import { OptionListAccount } from './OptionListAccount'

export const filterAccount = (filterOut: Account | Address | undefined) => {
  const filterOutAddress = typeof filterOut === 'string' ? filterOut : filterOut?.address
  return filterOut ? (account: Account) => account.address !== filterOutAddress : () => true
}

interface Props {
  onChange: (selected: Account) => void
  filter?: (option: Account) => boolean
  selected?: Account
  disabled?: boolean
  minBalance?: BN
}

export const SelectAccount = React.memo(({ onChange, filter, selected, minBalance }: Props) => {
  const { allAccounts } = useMyAccounts()
  let options = allAccounts.filter(filter || (() => true))
  if (minBalance) {
    const balances = useMyBalances()
    options = filterByMinBalance(options, balances, minBalance)
  }
  const [search, setSearch] = useState('')

  const filteredOptions = useMemo(() => filterByText(options, search), [search, options])
  const keyring = useKeyring()

  useEffect(() => {
    filteredOptions.length === 0 &&
      isValidAddress(search, keyring) &&
      (!selected || selected.address !== search) &&
      onChange(accountOrNamed(allAccounts, search, 'Unsaved account'))
  }, [filteredOptions, search, selected])

  const change = (selected: Account, close: () => void) => {
    onChange(selected)
    close()
  }

  return (
    <Select
      selected={selected}
      onChange={change}
      disabled={false}
      renderSelected={renderSelected}
      placeholder="Select account or paste account address"
      renderList={(onOptionClick) => <OptionListAccount onChange={onOptionClick} options={filteredOptions} />}
      onSearch={(search) => setSearch(search)}
    />
  )
})

const renderSelected = (option: Account) => (
  <SelectedOption>
    <OptionAccount option={option} />
  </SelectedOption>
)
