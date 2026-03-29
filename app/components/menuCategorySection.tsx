import {useState} from "react";
import type {MenuItem} from "~/types";
import {MENU_ITEMS as initialMenuItems} from "~/data/menuData";
import {MenuCard} from "~/components/menuCard";


export default function MenuCategorySection() {
    const [menu_items, setmenuItems] = useState<MenuItem[]>(initialMenuItems);

    return (
        <div>
            <h3>Menu</h3>
                {menu_items.map((item) => (
                    <MenuCard key={item.id} {...item} />
                ))}
        </div>
    );
}