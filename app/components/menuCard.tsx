import {Card, CardBody, CardTitle, CardText, Button, Input, InputGroup} from "reactstrap";
import type {MenuItem} from "~/types";
import { useState } from "react";
import { useCart } from "~/context/CartContext";

export function MenuCard({ id, name, description, price }: MenuItem) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>{description}</CardText>
                <CardText>
                    {`Price: ${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}`}
                </CardText>
                <InputGroup>
                    <Input
                        type="select"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                    <Button
                        color="primary"
                        onClick={() => addToCart({ id, name, price, quantity })}
                    >
                        Add To Cart
                    </Button>
                </InputGroup>
            </CardBody>
        </Card>
    );
}