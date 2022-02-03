import styled from 'styled-components'

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  padding: 30px;
  background-color: rgb(174, 215, 216);
`

export const Title = styled.h2`
  font-style: italic;
  margin-bottom: 30px;
`

export const Item = styled.p`
  &::not(:last-child) {
    margin-bottom: 20px;
  }
  span {
    font-weight: 700;
    font-size: 18px;
  }
`
