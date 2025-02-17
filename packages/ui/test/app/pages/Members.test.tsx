import { cryptoWaitReady } from '@polkadot/util-crypto'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import { GlobalModals } from '@/app/GlobalModals'
import { Members } from '@/app/pages/Members/Members'
import { ModalContextProvider } from '@/common/providers/modal/provider'
import { seedMembers } from '@/mocks/data'
import { seedWorkers } from '@/mocks/data/seedWorkers'
import { seedWorkingGroups } from '@/mocks/data/seedWorkingGroups'

import { seedApplications } from '../../../src/mocks/data/seedApplications'
import { seedOpenings } from '../../../src/mocks/data/seedOpenings'
import { MockQueryNodeProviders } from '../../_mocks/providers'
import { setupMockServer } from '../../_mocks/server'

describe('Members', () => {
  const server = setupMockServer()
  beforeAll(cryptoWaitReady)

  beforeEach(() => {
    seedMembers(server.server)
    seedWorkingGroups(server.server)
    seedOpenings(server.server)
    seedApplications(server.server)
    seedWorkers(server.server)
  })

  it('Renders the page', async () => {
    renderPage()
    expect(await screen.findByText(/all members/i)).toBeDefined()
    expect(await screen.findByText(/alice/i)).toBeDefined()
  })

  it('Renders the page with Member Profile', async () => {
    renderPage('/members/1')
    expect(await screen.findByText(/my profile/i)).toBeDefined()
    expect(await screen.findByText(/Member Details/i)).toBeDefined()
    expect(await screen.findByText(/Member Name/i)).toBeDefined()
    const idElement = (await screen.findAllByText(/member id/i))[1]
    expect(idElement.parentNode?.textContent).toMatch(/^Member ID1$/)
  })

  function renderPage(path = '/members/') {
    const history = createMemoryHistory()
    history.push(path)

    render(
      <Router history={history}>
        <ModalContextProvider>
          <MockQueryNodeProviders>
            <Switch>
              <Route path="/members/:id" component={Members} />
              <Route path="/members/" component={Members} />
            </Switch>
            <GlobalModals />
          </MockQueryNodeProviders>
        </ModalContextProvider>
      </Router>
    )
  }
})
