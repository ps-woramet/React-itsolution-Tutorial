import styled from "styled-components"

export const Container = styled.div`
  padding: 10px 20px;
  margin-top: 40px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  margin: 0px 140px 0px 148px;
  gap: 20px;
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
`

export const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
`

export const Left =styled.div`
  width: 60%;
`

export const Right =styled.div`
  width: 40%;
`

export const Image =styled.img`
  width: 100%;
`

export const List = styled.div`
  list-style:none;
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
`

export const ListItem = styled.div`
  color: ${(props)=>props.theme.colors.primary};
  border: 2px solid white;
  border-left: 5px solid ${(props)=>props.theme.colors.primary};
  min-width: 200px;
  text-align: left;
  margin: 5px;
  padding: 20px 20px;
  box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
  -webkit-box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
`