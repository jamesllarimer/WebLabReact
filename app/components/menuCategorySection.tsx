import {useState} from "react";
import type {MenuItem} from "~/types";
import {MENU_ITEMS as initialMenuItems} from "~/data/menuData";
import {MenuCard} from "~/components/menuCard";
import {Card, CardBody, CardHeader, Container} from "reactstrap";

interface MenuCatProps {category: string}
export default function MenuCategorySection({category}: MenuCatProps) {
    const [menu_items, setmenuItems] = useState<MenuItem[]>(initialMenuItems);
    return (
        <Container>
             <Card className={"my-4"}>
                 <CardHeader tag="h5" className={"menu-section-header"}>{category}</CardHeader>
                 <CardBody>
                {menu_items.filter((item) => item.category === category).map((item) => (
                    <MenuCard key={item.id} {...item} />
                ))}
                 </CardBody>
             </Card>
        </Container>
    );
}