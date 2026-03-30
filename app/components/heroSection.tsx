import {Button, NavLink} from "reactstrap";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <img className="hero-image img-fluid" src="app/images/HeroImage.png" alt="Lefty's Cabin Image"/>
            <div className="hero-text">
                <h1>Lefty's Appalachian Kitchen</h1>
                <p>When you're here you're hillbilly</p>
                <NavLink href="/reservations"><Button>Make a Reservation</Button></NavLink>

            </div>
        </div>
    )
}