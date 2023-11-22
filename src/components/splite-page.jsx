import styled from "styled-components"

const SplitPageContainer = styled.div`
display:flex;
`

const Side = styled.div`
flex:1;
`

const SplitPage = ({ Left, Right }) => {
  return (
    <SplitPageContainer>
      <Side>
        <Left />
      </Side>

      <Side>
        <Right />
      </Side>
    </SplitPageContainer>
  )
}

export default SplitPage