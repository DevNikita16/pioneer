import React from 'react'
import styled from 'styled-components'

import { RemoveScrollbar } from '@/common/constants'

interface SidePanelProps {
  className?: string
  children?: React.ReactNode
  neighbor: React.MutableRefObject<HTMLDivElement | null>
}

export const SidePanel = ({ neighbor, className, children }: SidePanelProps) => {
  return (
    <SidePanelStyles neighborHeight={neighbor.current?.getBoundingClientRect().height} className={className}>
      {children}
    </SidePanelStyles>
  )
}

export const SidePanelStyles = styled.div<{ neighborHeight?: number }>`
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 280px;
  height: fit-content;
  max-height: max(564px, ${({ neighborHeight }) => neighborHeight + 'px'});
  padding-left: 24px;
  overflow: hidden;
  overflow-y: scroll;
  ${RemoveScrollbar};

  &:after {
    content: '';
    height: 24px;
  }
`
