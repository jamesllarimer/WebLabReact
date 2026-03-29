import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import type {MenuItem} from "~/types";

export function MenuCard({id, name, category, description, price}: MenuItem) {
    return (
        <Card key={id}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle tag="h5">{category}</CardSubtitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    {price}
                </CardText>
                <Button>
                    Button
                </Button>
            </CardBody>
        </Card>
    )
}