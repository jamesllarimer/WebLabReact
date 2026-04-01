import {Container} from "reactstrap";
import {useCart} from "~/context/CartContext";
import type {Route} from "../../.react-router/types/app/pages/+types/checkout";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Lefty's Appalachian Kitchen Checkout"},
        {name: "description", content: "Lefty's Appalachian Kitchen Restaurant Checkout page"},
    ];
}
export default function Checkout() {
    const {cartItems, cartCount, cartTotal}= useCart();
    return (
        <Container>
            <h1>Checkout</h1>
            <ul>
                <li>Total Count {cartCount}</li>
                <li>Total Amount {cartTotal}</li>
            </ul>
        </Container>
    )
}