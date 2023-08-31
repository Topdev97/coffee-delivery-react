import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`
