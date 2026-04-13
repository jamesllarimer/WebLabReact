import {FormGroup, Label, Form, Card, CardBody, CardHeader} from "reactstrap";  // ← drop Input
import {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export function ReservationForm() {

    const formSchema = yup.object({
        name: yup.string().max(20, "Maximum 20 characters").required("Name is required"),
        email: yup.string().email("Must be a valid email").required("Email is required"),
        partySize: yup.string().required("Party size is required"),
        dietaryNotes: yup.string().max(30, "Maximum of 30 characters.").optional(),
        date: yup.date().required("Date is required"),
        time: yup.string().required("Time is required"),
        seatingPreference: yup.string().required("Seating preference is required"),
        newsLetter: yup.boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm({resolver: yupResolver(formSchema)});

    const [submittedData, setSubmittedData] = useState<any>(null);
    const MAX_DI = 30;
    const dietaryNotes = watch("dietaryNotes") ?? "";
    const remaining = MAX_DI - dietaryNotes.length;

    const onSubmit = (data: any) => {
        console.log("SUBMITTED:", data);
        setSubmittedData(data);
        reset();
    };

    const onError = (errors: any) => {
        console.log("VALIDATION ERRORS:", errors);
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <input {...register("name")} className="form-control" placeholder="Enter your full name"
                           type="text"/>
                    {errors.name && <p>{errors.name.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <input {...register("email")} className="form-control" placeholder="yourEmail@domain.com"
                           type="email"/>
                    {errors.email && <p>{errors.email.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="partySize">Party Size</Label>
                    <select {...register("partySize")} className="form-select">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    {errors.partySize && <p>{errors.partySize.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <input {...register("date")} className="form-control" type="date"/>
                    {errors.date && <p>{errors.date.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="time">Time</Label>
                    <input {...register("time")} className="form-control" type="time"/>
                    {errors.time && <p>{errors.time.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="dietaryNotes">Dietary Notes</Label>
                    <textarea {...register("dietaryNotes")} className="form-control"/>
                    <div>Remaining: {remaining}</div>
                    {errors.dietaryNotes && <p>{errors.dietaryNotes.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="seatingPreference">Seating Preference</Label>
                    <select {...register("seatingPreference")} className="form-select">
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Bar</option>
                    </select>
                    {errors.seatingPreference && <p>{errors.seatingPreference.message}</p>}
                </FormGroup>

                <FormGroup check>
                    <input type="checkbox" {...register("newsLetter")} className="form-check-input"/>
                    {' '}
                    <Label check htmlFor="newsLetter">Sign up for our newsletter</Label>
                </FormGroup>

                <input type="submit" className="btn btn-light mt-3"/>
            </Form>

            {submittedData && (
                <Card className="mt-5">
                    <CardHeader>
                        Submissions successful
                    </CardHeader>
                    <CardBody>
                        <ul>
                            <li>Name: {submittedData.name}</li>
                            <li>Email: {submittedData.email}</li>
                            <li>Party size: {submittedData.partySize}</li>
                            <li>Date: {submittedData.date?.toLocaleDateString()}</li>
                            <li>Time: {submittedData.time}</li>
                            <li>Dietary Notes: {submittedData.dietaryNotes}</li>
                            <li>Seating: {submittedData.seatingPreference}</li>
                            <li>Newsletter: {submittedData.newsLetter ? "Yes" : "No"}</li>
                        </ul>
                    </CardBody>
                </Card>
            )}
        </>
    );
}