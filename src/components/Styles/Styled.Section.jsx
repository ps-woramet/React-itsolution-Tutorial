import styled from "styled-components"

export const Container = styled.div`
  padding: 50px 20px;
  background-color: ${(props) => props.theme.colors.bgDefault};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  margin: 0px 140px 0px 148px;
  gap: 20px;
  @media only screen and (max-width: 600px) {
    margin: 0px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    margin: 0px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    margin: 0px 140px 0px 140px;
  }
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
  //for Mobiles
  @media only screen and (max-width: 600px) {
  text-align: center;
  font-size: 25px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    font-size: 35px;
    text-align: left;
  }
`

export const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  @media only screen and (max-width: 600px) {
    font-weight: bold;
    text-align: center;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    font-weight: bold;
    padding-right: 5%;
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    font-size: 25px;
    font-weight: lighter;
    padding-right: 0%;
    text-align: left;
  }
`

export const Left =styled.div`
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 55%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 55%;
  }
`

export const Right =styled.div`
  width: 40%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 50%;
    margin: 0% 5% 0% 0%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
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
  @media only screen and (max-width: 600px) {
    margin: 2px;
    padding: 10px 10px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    margin: 5px;
    padding: 10px 10px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    padding: 20px 20px;
  }
`