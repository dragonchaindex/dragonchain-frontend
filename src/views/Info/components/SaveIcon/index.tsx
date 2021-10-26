import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { StarFillIcon, StarLineIcon } from '@dragonchaindex/toolkit'
import useTheme from 'hooks/useTheme'

const HoverIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

const SaveIcon: React.FC<{ fill: boolean } & HTMLAttributes<HTMLDivElement>> = ({ fill = false, ...rest }) => {
  const { theme } = useTheme()
  return (
    <HoverIcon {...rest}>
      {fill ? (
        <StarFillIcon stroke="red" color="red" />
      ) : (
        <StarLineIcon stroke="red" />
      )}
    </HoverIcon>
  )
}

export default SaveIcon
