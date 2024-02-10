import styled from "styled-components/native";

export const PostView = styled.View`
  padding: 15px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #00000010;
  border-bottom-style: solid;
  width: 1000px;
`;


export const PostDetails = styled.View`
    justify-content: center;
    flex: 1;
`

export const Title = styled.Text`
    font-size: 17px;
    font-weight: 700;
`

export const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-right: 2px;
`