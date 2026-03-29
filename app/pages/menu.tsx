import type { Route } from "./+types/menu";
import MenuCategorySection from "~/components/menuCategorySection";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Menu" },
        { name: "description", content: "Restaurant menu" },
    ];
}

export default function Menu() {
    return <MenuCategorySection/>;
}
