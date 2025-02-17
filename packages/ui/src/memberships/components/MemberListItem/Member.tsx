import React, { useCallback } from 'react'

import { MemberInfo } from '..'
import { TokenValue } from '../../../common/components/typography/TokenValue'
import { useModal } from '../../../common/hooks/useModal'
import { Member } from '../../types'
import { MemberModalCall } from '../MemberProfile'
import { MemberRoles } from '../MemberRoles'

import { CountInfo, Info, MemberColumn, MemberItemWrap, MemberRolesColumn } from './Fileds'

export const MemberListItem = ({ member }: { member: Member }) => {
  const { showModal } = useModal()

  const showMemberModal = useCallback(() => {
    showModal<MemberModalCall>({ modal: 'Member', data: { id: member.id } })
  }, [member.id])

  return (
    <MemberItemWrap kind="Member">
      <MemberColumn>
        <Info>#{member.id}</Info>
      </MemberColumn>

      <MemberColumn>
        <MemberInfo member={member} onClick={showMemberModal} showGroup={false} />
      </MemberColumn>

      <MemberColumn>
        <Info>NO</Info>
      </MemberColumn>

      <MemberRolesColumn>
        <MemberRoles wrapable roles={member.roles} size="l" />
      </MemberRolesColumn>
      <MemberColumn>
        <CountInfo count={0} />
      </MemberColumn>
      <MemberColumn>
        <CountInfo count={0} />
      </MemberColumn>

      <MemberColumn>
        <TokenValue value={0} />
      </MemberColumn>
      <MemberColumn>
        <TokenValue value={0} />
      </MemberColumn>
    </MemberItemWrap>
  )
}
