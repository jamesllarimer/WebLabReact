import {Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, NavLink} from "reactstrap";

export default function HeroSection() {
    return (
        <div>
            <Card inverse>
                <CardImg
                    alt="Lefty's Cabin Image"
                    src="app/images/HeroImage.png"
                    width="100%"
                    style={{
                        filter: 'brightness(70%)'
                    }}
                />
                <CardImgOverlay className={"align-content-center text-center"}>
                    <CardTitle tag="h1"
                               style={{
                        fontSize: '8vw'
                    }}>
                        Lefty's Appalachian Kitchen
                    </CardTitle>
                    <CardText
                        style={{
                            fontSize: '4vw'
                        }}>
                        When you're here you're hillbilly
                    </CardText>
                    <CardText>
                        <NavLink href="/reservations"><Button className="button-custom">Make a
                            Reservation</Button></NavLink>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>

    )
}