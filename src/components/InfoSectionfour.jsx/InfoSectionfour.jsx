import React from 'react'
import styled from 'styled-components';
import { Container } from '../InfoSectionTwo/InfoSectionTwo'
import sectionImage4 from "../../images/bg2.jpg";

const Card = styled.div`
    width: 250px;
`

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Number = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: ${(props) => props.theme.colors.text};
`

const Subtitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
`


function InfoSectionfour() {
  return (
    <Container height = "300px" sectionImage = {sectionImage4}>
        <Card>
            <CardContent>
                <Number>
                    100+
                </Number>

                <Subtitle>
                    Subscribers
                </Subtitle>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Number>
                    1000+
                </Number>

                <Subtitle>
                    Complete Projects
                </Subtitle>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Number>
                    80K+
                </Number>

                <Subtitle>
                    5 Star Rating
                </Subtitle>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Number>
                    9000+
                </Number>

                <Subtitle>
                    Likes
                </Subtitle>
            </CardContent>
        </Card>
    </Container>
  )
}

export default InfoSectionfour
