import {Form, FormGroup, FormText, Label, Input, Button, ButtonGroup, FormFeedback} from "reactstrap";
import {useState} from "react";

export function ReservationForm() {
    const [selected, setSelected] = useState('');
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        e.target.reset();
    }
    return (
        <Form onSubmit={(event) => handleFormSubmit(event)}>
            <FormGroup>
                <Label for="Name">
                    Name
                </Label>
                <Input
                    id="Name"
                    name="name"
                    placeholder="Enter your full name"
                    type="text"
                    max="20"
                />
            </FormGroup>
            <FormGroup>
                <Label for="Email">
                    Email
                </Label>
                <Input
                    id="Email"
                    name="email"
                    placeholder="yourEmail@domain.com"
                    type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="PartySize">
                    Select
                </Label>
                <Input
                    id="PartySize"
                    name="partySize"
                    type="select"
                >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                    <option>
                        6
                    </option>
                    <option>
                        7
                    </option>
                    <option>
                        8
                    </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="Date">Date</Label>
                <Input
                    id="Date"
                    name="date"
                    type="date"
                />
            </FormGroup>
            <FormGroup>
                <Label for="Time">Time</Label>
                <Input
                    id="Time"
                    name="time"
                    type="time"
                />
            </FormGroup>
            <FormGroup>
                <Label for="DietaryNotes">
                    Dietary Notes
                </Label>
                <Input
                    id="DietaryNotes"
                    name="dietaryNotes"
                    type="textarea"
                    max="30"
                />
            </FormGroup>
            <FormGroup>
                <legend>
                    Seating Preference
                </legend>
                <ButtonGroup>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSelected('Indoor')}
                        active={selected === 'Indoor'}
                    >
                        Indoor
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSelected('Outdoor')}
                        active={selected === 'Outdoor'}
                    >
                        Outdoor
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSelected('Bar')}
                        active={selected === 'Bar'}
                    >
                        Bar
                    </Button>
                </ButtonGroup>
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" id={"Newsletter"} name="Newsletter"/>
                {' '}
                <Label check for="Newsletter">
                    Sign up for our newsletter
                </Label>
            </FormGroup>
            <Button>
                Submit
            </Button>
        </Form>
    )
}