import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import type {StaffInfo} from "~/types";

export default function StaffCard({id, name, title, imgUrl, imgAlt}: StaffInfo) {
    return (
        <Card key={id}
            style={{
                width: '18rem'
            }}
        >
            <img
                alt={imgAlt}
                src={imgUrl}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {title}
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}