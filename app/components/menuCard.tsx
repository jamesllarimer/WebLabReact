import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input, InputGroup} from "reactstrap";
import type {MenuItem} from "~/types";
//ToDo
function addToCart(name:string) {
    console.log("name", name);
    return undefined;
}

export function MenuCard({id, name, description, price}: MenuItem) {
    return (
        <Card className="my-2"
            key={id}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    {`Price: ${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}`}
                </CardText>
               <InputGroup>
                   <Input type="select">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                   </Input>
                   <Button color="primary" >Add To Cart</Button>
               </InputGroup>
            </CardBody>
        </Card>
    )
}