import {
    Button,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from "reactstrap";
import {useCart} from "~/context/CartContext";
import {Link} from "react-router";
import {useEffect, useState} from "react";



export function Cart(){
    const {cartCount, cartTotal, cartItems, clearCart}= useCart();
    let cartItemList =  cartItems.map((item) => {
           return <li key={item.id}>{item.name} x {item.quantity}</li>
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/db4cecc8dc.js";
        script.crossOrigin = "anonymous";
        script.async = true;

        document.body.appendChild(script);
    }, []);
    return (
        <>
            <Button
                size="lg"
                onClick={toggle}
            ><i className="fa-solid fa-cart-shopping"></i> {cartCount}
            </Button>
            <Offcanvas
                direction="end"
                toggle={toggle}
                isOpen={isOpen}
            >
                <OffcanvasHeader toggle={toggle}>
                    Cart
                </OffcanvasHeader>
                <OffcanvasBody>
                    <p><strong>Total items: {cartCount}</strong> </p>
                    <ul>
                        {cartItemList}
                    </ul>
                    <p> <strong> Cart Total: ${cartTotal}</strong></p>
                    <Link to="/checkout"><Button color="primary" onClick={toggle}>Go to checkout</Button></Link>
                    {' '}
                    <Button color="secondary" onClick={clearCart}>Clear Cart</Button>
                </OffcanvasBody>
            </Offcanvas>
        </>

    )
}
