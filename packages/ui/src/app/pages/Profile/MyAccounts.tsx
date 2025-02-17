import React from 'react'

import { useMyTotalBalances } from '@/accounts/hooks/useMyTotalBalances'
import { PageLayout } from '@/app/components/PageLayout'
import { RowGapBlock } from '@/common/components/page/PageContent'
import { PageHeader } from '@/common/components/page/PageHeader'
import { PageTitle } from '@/common/components/page/PageTitle'
import { Statistics, TokenValueStat } from '@/common/components/statistics'

import { Accounts } from './components/Accounts'
import { MyProfileTabs } from './components/MyProfileTabs'

export const MyAccounts = () => {
  const { total, transferable, locked, recoverable } = useMyTotalBalances()

  return (
    <PageLayout
      header={
        <RowGapBlock gap={24}>
          <PageHeader>
            <PageTitle>My Profile</PageTitle>
            <MyProfileTabs />
          </PageHeader>
          <Statistics>
            <TokenValueStat title="Total balance" tooltipText="Lorem ipsum..." value={total} />
            <TokenValueStat title="Total transferable balance" tooltipText="Lorem ipsum..." value={transferable} />
            <TokenValueStat title="Total locked balance" tooltipText="Lorem ipsum..." value={locked} />
            <TokenValueStat title="Total recoverable" tooltipText="Lorem ipsum..." value={recoverable} />
          </Statistics>
        </RowGapBlock>
      }
      main={<Accounts />}
    />
  )
}
