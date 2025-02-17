import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { usePopper } from 'react-popper'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BorderRad, Colors, Transitions, ZIndex } from '../../constants'
import { LinkSymbol, LinkSymbolStyle } from '../icons/symbols'

import { DefaultTooltip } from './TooltipDefault'

export interface TooltipProps extends Omit<TooltipPopupProps, 'popUpHandlers' | 'position'> {
  absolute?: boolean
  children: React.ReactNode
}

export interface TooltipPopupProps {
  className?: string
  tooltipText?: string
  tooltipTitle?: string
  tooltipLinkText?: React.ReactNode
  tooltipLinkURL?: string
  popupContent?: React.ReactNode
  popUpHandlers: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
}

export interface DarkTooltipInnerItemProps {
  isOnDark?: boolean
}

export const Tooltip = ({
  absolute,
  children,
  tooltipText,
  tooltipTitle,
  tooltipLinkText,
  tooltipLinkURL,
  popupContent,
  className,
}: TooltipProps) => {
  const [isTooltipActive, setTooltipActive] = useState(false)
  const [referenceElementRef, setReferenceElementRef] = useState<HTMLButtonElement | null>(null)
  const [popperElementRef, setPopperElementRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElementRef, popperElementRef, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 0],
        },
      },
    ],
  })

  const mouseIsOver = () => {
    setTooltipActive(true)
  }
  const mouseLeft = () => {
    setTooltipActive(false)
  }

  const tooltipHandlers = {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
      setTooltipActive(false)
    },
    onFocus: mouseIsOver,
    onBlur: mouseLeft,
    onMouseEnter: mouseIsOver,
    onMouseLeave: mouseLeft,
  }
  const popUpHandlers = {
    onMouseEnter: mouseIsOver,
    onMouseLeave: mouseLeft,
  }

  return (
    <TooltipContainer absolute={absolute}>
      <TooltipComponent ref={setReferenceElementRef} {...tooltipHandlers} z-index={0}>
        {children}
      </TooltipComponent>
      {isTooltipActive &&
        (popupContent
          ? ReactDOM.createPortal(
              <TooltipPopupContainer
                ref={setPopperElementRef}
                className={className}
                style={styles.popper}
                {...attributes.popper}
                {...popUpHandlers}
                isTooltipActive={isTooltipActive}
              >
                {popupContent}
              </TooltipPopupContainer>,
              document.body
            )
          : ReactDOM.createPortal(
              <TooltipPopupContainer
                ref={setPopperElementRef}
                className={className}
                style={styles.popper}
                {...attributes.popper}
                {...popUpHandlers}
                isTooltipActive={isTooltipActive}
              >
                {tooltipTitle && <TooltipPopupTitle>{tooltipTitle}</TooltipPopupTitle>}
                <TooltipText>{tooltipText}</TooltipText>
                {tooltipLinkURL && (
                  <TooltipLink to={tooltipLinkURL} target="_blank">
                    {tooltipLinkText ?? 'Link'}
                    <LinkSymbol />
                  </TooltipLink>
                )}
              </TooltipPopupContainer>,
              document.body
            ))}
    </TooltipContainer>
  )
}

const TooltipPopupContainer = styled.div<{ isTooltipActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${Colors.Black[900]};
  background-color: ${Colors.Black[700]};
  border-radius: ${BorderRad.m};
  opacity: ${({ isTooltipActive }) => (isTooltipActive ? '1' : '0')};
  transition: opacity ${Transitions.duration} ease;
  z-index: ${ZIndex.tooltip};

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${Colors.Black[700]};
    border: 1px solid ${Colors.Black[900]};
    transform: rotate(45deg);
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    z-index: -1;
  }

  &[data-popper-placement^='top'] {
    &:after {
      bottom: -4px;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }
  }
  &[data-popper-placement^='bottom']:after {
    top: -4px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
  &[data-popper-placement='top-start']:after,
  &[data-popper-placement='bottom-start']:after {
    left: 19px;
  }
  &[data-popper-placement='top-end']:after,
  &[data-popper-placement='bottom-end']:after {
    right: 19px;
  }
  &[data-popper-placement='top-start'] {
    inset: auto auto 4px -16px !important;
  }
  &[data-popper-placement='top-end'] {
    inset: auto auto 4px 16px !important;
  }
  &[data-popper-placement='bottom-start'] {
    inset: 4px auto auto -16px !important;
  }
  &[data-popper-placement='bottom-end'] {
    inset: 4px auto auto 16px !important;
  }
`

export const TooltipPopupTitle = styled.h6`
  color: ${Colors.Black[900]};
  margin-bottom: 10px;
  color: ${Colors.White};
`

export const TooltipText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${Colors.Black[500]};
  color: ${Colors.Black[400]};
`

export const TooltipLink = styled(Link)<{ to: string; target: string }>`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${Colors.Black[400]};
  transition: ${Transitions.all};
  text-transform: capitalize;

  ${LinkSymbolStyle} {
    width: 12px;
    height: 12px;

    .blackPart,
    .primaryPart {
      fill: ${Colors.Black[300]};
    }
  }

  &:hover {
    color: ${Colors.Blue[500]};

    ${LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${Colors.Blue[500]};
      }
    }
  }
`

export const TooltipComponent = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    ${DefaultTooltip} {
      color: ${Colors.Blue[500]};
      border-color: ${Colors.Blue[100]};
      background-color: ${Colors.Black[100]};
    }
  }
`

export const TooltipContainer = styled.div<{ absolute?: boolean }>`
  display: flex;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  right: ${({ absolute }) => (absolute ? '-24px' : 'auto')};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  text-transform: none;
`
