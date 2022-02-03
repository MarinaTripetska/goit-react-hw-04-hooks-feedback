import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background-color: beige;

  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 400;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }
`
export const ButtonRefreshStyled = styled(Button)`
  align-self: center;
  margin-top: 30px;
`
