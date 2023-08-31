import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};
`

export const ConfirmButton = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
