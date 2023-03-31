import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, CardTitle, Description, Button } from '../Styles/Styled.Card'
import Textbanner from '../Textbanner/Textbanner'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function Infoboxes() {
  return (
    <div>
        <Textbanner title = {'What we provid'} subtitle = {'Our Services'} />
        <Container>
            <Card>
                <CardContent>
                    <CardTitle>Title1</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
            <Card>
                <CardContent>
                    <CardTitle>Title2</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
            <Card>
                <CardContent>
                    <CardTitle>Title3</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
            <Card>
                <CardContent>
                    <CardTitle>Title4</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
            <Card>
                <CardContent>
                    <CardTitle>Title5</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
            <Card>
                <CardContent>
                    <CardTitle>Title6</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat similique perferendis illum ut quam dicta. Ipsam illum nostrum ad iure, asperiores non vel reprehenderit quos similique, tempora dolorum perspiciatis?
                    </Description>
                    <Button>
                        Read More
                    </Button>
                </CardContent>      
            </Card>
        </Container>
    </div>
  )
}

export default Infoboxes
