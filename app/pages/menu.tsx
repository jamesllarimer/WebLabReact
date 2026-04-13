import type {Route} from "./+types/menu";
import MenuCategorySection from "~/components/menuCategorySection";
import {Container, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {Cart} from "~/components/cart";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Menu"},
        {name: "description", content: "Restaurant menu"},
    ];
}

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    //Todo pull from data
    const categories = ["Breakfast", "Lunch", "Dinner", "Drinks"];

    const handleChange = (e:any) => setSelectedCategory(e.target.value);

    return <>
        <Container>
            <FormGroup className="mt-2">
                <Label for="category" id="CategoryFilterLabel">Select a Category</Label>
                <Input
                    name="category"
                    onChange={handleChange}
                    type="select"
                >
                    <option value="All">All</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </Input>
            </FormGroup>
        </Container>

        {categories
            .filter(cat => selectedCategory === "All" || selectedCategory === cat)
            .map(cat => (
                <MenuCategorySection key={cat} category={cat}/>
            ))
        }
        <Cart/>
    </>
}
