import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    Container,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import {useCart} from "~/context/CartContext";
import type {Route} from "../../.react-router/types/app/pages/+types/checkout";
import ActionModal from "~/components/actionModal";
import {useState} from "react";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Lefty's Appalachian Kitchen Checkout"},
        {name: "description", content: "Lefty's Appalachian Kitchen Restaurant Checkout page"},
    ];
}

export default function Checkout() {
    const navigate = useNavigate();
    const {cartItems, cartCount, cartTotal, clearCart} = useCart();
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
    const [clearCartModalOpen, setClearCartModalOpen] = useState(false);
    const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
    let cartItemList = cartItems.map((item) => {
        return <li key={item.id}>{`${item.quantity}: ${item.name}`}</li>
    });

    function confirmClearCart() {
        clearCart();
        setClearCartModalOpen(false);
        setThankYouModalOpen(true);
    }

    function clearCartAfterCheckout() {
        clearCart();
        setCheckoutModalOpen(false);
        navigate("/menu");
    }

    return (
        <Container>
            <h1>Checkout</h1>
            <Card>
                <CardHeader tag="h3" className={"menu-section-header"}>
                    Cart
                </CardHeader>
                <CardBody>
                    <h4>Cart Items</h4>
                <ul>
                    {cartItemList}
                </ul>
                </CardBody>
                <CardBody>
                    <CardText>Subtotal {cartTotal}</CardText>
                    <CardText>Tax Rate: 8%</CardText>
                    <CardText>Tax: {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format((cartTotal * 0.08))} </CardText>
                    <CardText>Total: {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format((cartTotal * 1.08))}</CardText>
                </CardBody>
                <CardFooter>
                    <Button color="primary" onClick={() => setCheckoutModalOpen(!checkoutModalOpen)}>Checkout</Button>
                    {' '}
                    <Button color="danger" onClick={() => setClearCartModalOpen(!clearCartModalOpen)}>Clear
                        Cart</Button>
                </CardFooter>
            </Card>

            <ActionModal title={"Checkout Complete"}
                         body={"Thank you for your order!"}
                         cancelFunction={() => clearCartAfterCheckout()}
                         isModalOpen={checkoutModalOpen}
                         toggle={() => setCheckoutModalOpen(!checkoutModalOpen)}
                         cancelText={"Close"}
            />

            <ActionModal title={"Clear Cart"}
                         body={"Are you sure you want to cancel your order?"}
                         cancelFunction={() => setClearCartModalOpen(!clearCartModalOpen)}
                         submitFunction={() => confirmClearCart()}
                         isModalOpen={clearCartModalOpen}
                         toggle={() => setClearCartModalOpen(!clearCartModalOpen)}
                         cancelText={"Cancel"}
                         submitText={"Confirm"}
            />

            <ActionModal title={"Order Canceled"}
                         body={"Come back when you're hungry y'all!"}
                         cancelFunction={() => navigate("/menu")}
                         isModalOpen={thankYouModalOpen}
                         toggle={() => setCheckoutModalOpen(!checkoutModalOpen)}
                         cancelText={"Go Back To Menu"}
            />
        </Container>
    )
}