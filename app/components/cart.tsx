import {Button, Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import {useCart} from "~/context/CartContext";
import {Link} from "react-router";



export function Cart(){
    const {cartCount, cartTotal, cartItems}= useCart();
    let cartItemList =  cartItems.map((item) => {
           return <li key={item.id}>{item.name}</li>
    });
    return (
        <Card className={"sticky-bottom"} >
            <CardHeader tag="h5" className={"menu-section-header"}>
                Cart
            </CardHeader>
            <CardBody>
                Total items: {cartCount}
                <ul>
                    {cartItemList}
                </ul>
            </CardBody>
            <CardFooter>
                <Link to="/checkout"><Button variant="contained" color="secondary">Checkout</Button></Link>
                <span> Cart Total: ${cartTotal}</span>
            </CardFooter>
        </Card>
    )
}
