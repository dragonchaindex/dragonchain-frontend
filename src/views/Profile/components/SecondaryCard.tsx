import styled from 'styled-components'
import { Text } from '@dragonchaindex/toolkit'

const SecondaryCard = styled(Text)`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
`

SecondaryCard.defaultProps = {
  p: '24px',
}

export default SecondaryCard
