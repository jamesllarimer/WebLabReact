import {Button, Card, CardBody, CardFooter, CardHeader, NavLink} from "reactstrap";
import {useCart} from "~/context/CartContext";
import {Link} from "react-router";
export function Cart(){
    const {cartCount, cartTotal}= useCart();
    return (
        <Card className={"sticky-bottom"}>
            <CardHeader tag="h5" className={"menu-section-header"}>
                Cart
            </CardHeader>
            <CardBody>
                Total items: {cartCount}
            </CardBody>
            <CardFooter>
                <Link to="/checkout"><Button variant="contained" color="secondary">Checkout</Button></Link>
                <span>${cartTotal}</span>
            </CardFooter>
        </Card>
    )
}
