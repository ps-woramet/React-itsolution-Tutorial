import styled from 'styled-components'

export const Card = styled.div`
    width: 350px;
    margin: 10px 10px;
    box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
    -webkit-box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
    background: linear-gradient(to right, ${(props) => props.theme.colors.hoverColor} 50%, ${(props) => props.theme.colors.bgDefault} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    &:hover{
        color: snow;
        background-position: left bottom;
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({padding}) => padding};
    flex-direction: column;
`

export const CardTitle = styled.h3`
    color: ${(props) => props.theme.colors.primary};

`

export const Description = styled.div`
    color: ${(props) => props.theme.colors.textDark};
    font-size: 15px;
    text-align: center;
`

export const Button = styled.a`
    color: red;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
`

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;