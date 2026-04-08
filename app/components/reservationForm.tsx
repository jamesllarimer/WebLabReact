import {Form, FormGroup, FormText, Label, Input, Button, ButtonGroup, FormFeedback} from "reactstrap";
import {useState} from "react";

export function ReservationForm() {
    let initialValues = {
        name: "",
        email: "",
        date: Date.now().toLocaleString("en-US"),
        time: "",
        dietaryNotes: "",
        newsLetter: false,
        seatingPreference: "Indoor",
        partySize: 1
    }
    const [formData, setFormData] = useState(initialValues)
    const [showSubmitResults, setShowSubmitResults] = useState(false);
    const MAX_DI = 30;
    const remaining = MAX_DI - formData.dietaryNotes.length;

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        e.target.reset();
        setShowSubmitResults(true);
    }
    const handleChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
   const setSeatingPref = (pref: string) => {
       setFormData({...formData, seatingPreference: pref});
   }
    return (
        <>
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={formData.date}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Time">Time</Label>
                <Input
                    id="Time"
                    name="time"
                    type="time"
                    onChange={handleChange}
                    value={formData.time}
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
                    max={MAX_DI}
                    onChange={handleChange}
                />
                <div>
                    Remaining: {remaining}
                </div>
            </FormGroup>
            <FormGroup>
                <legend>
                    Seating Preference
                </legend>
                <ButtonGroup>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSeatingPref('Indoor')}
                        active={formData.seatingPreference === 'Indoor'}
                    >
                        Indoor
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSeatingPref('Outdoor')}
                        active={formData.seatingPreference === 'Outdoor'}
                    >
                        Outdoor
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => setSeatingPref('Bar')}
                        active={formData.seatingPreference === 'Bar'}
                    >
                        Bar
                    </Button>
                </ButtonGroup>
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" id="Newsletter" name="Newsletter" onChange={handleChange} />
                {' '}
                <Label check for="Newsletter">
                    Sign up for our newsletter
                </Label>
            </FormGroup>
            <Button type="submit" >
                Submit
            </Button>
        </Form>
            {showSubmitResults ?  <ul>
                <li>Name: {formData.name}</li>
                <li>Email: {formData.email}</li>
                <li>Party size: {formData.partySize}</li>
                <li>Date: {formData.date}</li>
                <li>Time: {formData.time}</li>
                <li>Dietary Preferences: {formData.dietaryNotes}</li>
                <li>Seating Preference: {formData.seatingPreference}</li>
                <li>Newsletter: {formData.newsLetter}</li>
            </ul> : null
            }
        </>
    )
}