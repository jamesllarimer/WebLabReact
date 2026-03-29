import type {Route} from "./+types/home";
import {ReservationForm} from "~/components/reservationForm";
import {Container} from "reactstrap";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Reservation"},
        {name: "description", content: "Restaurant reservations"},
    ];
}

export default function Reservations() {
    return <Container>
        <ReservationForm/>
    </Container>;
}
