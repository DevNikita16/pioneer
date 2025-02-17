import faker from 'faker'

import { Mocks } from './types'
import { randomFromRange } from './utils'

let nextRewardPaidEventId = 0
let nextBudgetSpendingEventId = 0
let nextAppliedOnOpeningEventId = 0
let nextApplicationWithdrawnEventId = 0

const generateRewardPaidEvent = (mocks: Mocks) => {
  return () => {
    const worker = mocks.workers[randomFromRange(0, mocks.workers.length - 1)]

    return {
      id: (nextRewardPaidEventId++).toString(),
      createdAt: faker.date.recent(30),
      groupId: worker?.groupId,
      workerId: worker?.id.toString(),
      rewardAccount: '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
      amount: randomFromRange(100, 1000) * 10,
      type: 'REGULAR',
    }
  }
}

const generateBudgetSpending = (mocks: Mocks) => () => {
  const worker = mocks.workers[randomFromRange(0, mocks.workers.length - 1)]

  return {
    id: (nextBudgetSpendingEventId++).toString(),
    createdAt: faker.date.recent(30),
    groupId: worker?.groupId,
    workerId: worker?.id.toString(),
    rewardAccount: '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
    amount: randomFromRange(0, 10000),
    reciever: '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
  }
}

const generateApplicationEvents = (mocks: Mocks) => () => {
  const application = mocks.applications[randomFromRange(0, mocks.applications.length - 1)]
  const opening = mocks.openings.find(opening => opening.id == application.openingId)

  const date = faker.date.recent(30)

  const appliedEvent = {
    id: (nextAppliedOnOpeningEventId++).toString(),
    createdAt: faker.date.recent(5, date),
    applicationId: application.id,
    openingId: application.openingId,
    groupId: opening?.groupId,
  }

  if (application.status === 'withdrawn') {
    return {
      withdrawnEvent: {
        id: (nextApplicationWithdrawnEventId++).toString(),
        createdAt: date,
        applicationId: application.id,
        groupId: opening?.groupId,
      },
      appliedEvent
    }
  }
  return { appliedEvent }
}

const generateStakeChanged = (mocks: Mocks) => () => {
  const worker = mocks.workers[randomFromRange(0, mocks.workers.length -1)]
  return {
    createdAt: faker.date.recent(7),
    groupId: worker?.groupId,
    workerId: worker?.id,
    amount: randomFromRange(100, 10000)
  }
}

const generateStakeSlashedEvent = (mocks: Mocks) => () => {
  const worker = mocks.workers[randomFromRange(0, mocks.workers.length -1)]
  return {
    createdAt: faker.date.recent(7),
    groupId: worker?.groupId,
    workerId: worker?.id,
    requestedAmount: 1000,
    slashedAmount: 1000,
    rationale: 'rationale',
  }
}

const generateOpeningFilledEvent = (mocks: Mocks) => () => {
  const filled = mocks.openings.filter(o => o.status === 'filled')
  const opening = filled[randomFromRange(0, filled.length - 1)]
  const workers = mocks.workers.filter(w => w && w.groupId === opening.groupId)
  return {
    createdAt: faker.date.recent(7),
    groupId: opening.groupId,
    openingId: opening.id,
    workersHiredIds: Array.from({ length: opening.metadata.hiringLimit })
      .map(() => workers[randomFromRange(0, workers.length - 1)]?.id)
  }
}

export const generateAllEvents = (mocks: Mocks) => {
  const rewardPaidEvents = Array.from({ length: 10 }).map(generateRewardPaidEvent(mocks))
  const budgetSpendingEvents = Array.from({ length: 10 }).map(generateBudgetSpending(mocks))
  const applicationEvents = Array.from({ length: 20 }).map(generateApplicationEvents(mocks))
  const appliedOnOpeningEvents = applicationEvents.map(({ appliedEvent }) => appliedEvent)
  const applicationWithdrawnEvents = applicationEvents
    .filter((item) => 'withdrawnEvent' in item)
    .map(({ withdrawnEvent }) => withdrawnEvent)
  const stakeDecreasedEvents = Array.from({ length: 10 }).map(generateStakeChanged(mocks))
  const stakeIncreasedEvents = Array.from({ length: 10 }).map(generateStakeChanged(mocks))
  const stakeSlashedEvents = Array.from({ length: 10 }).map(generateStakeSlashedEvent(mocks))
  const openingFilledEvents = Array.from({ length: 15 }).map(generateOpeningFilledEvent(mocks))

  return {
    rewardPaidEvents,
    budgetSpendingEvents,
    appliedOnOpeningEvents,
    applicationWithdrawnEvents,
    stakeDecreasedEvents,
    stakeIncreasedEvents,
    stakeSlashedEvents,
    openingFilledEvents,
  }
}
