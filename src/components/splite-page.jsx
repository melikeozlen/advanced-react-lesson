import styled from "styled-components"

const SplitPageContainer = styled.div`
display:flex;
`

const Side = styled.div`
flex:${(p) => p.width};
background-color: ${(p) => p.color};
`

const SplitPage = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [LeftComponent, RightComponent] = children;
  return (
    <SplitPageContainer>
      <Side width={leftWidth} color="red">
        {LeftComponent}
      </Side>

      <Side width={rightWidth} color="blue">
        {RightComponent}
      </Side>
    </SplitPageContainer>
  )
}

export default SplitPage