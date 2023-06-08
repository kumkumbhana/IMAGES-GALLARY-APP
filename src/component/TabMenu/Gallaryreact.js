import React, { useState } from "react";
import CatMenu from "../CatMenu";
import '../TabMenu/tab.css';
import Menu from "./Menu";
import MenuItems from "./MenuItems";

const allCatValues = [...new Set (Menu.map((curElem) => curElem.category )), 'All'];
console.log(allCatValues);

const Gallaryreact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems ] = useState(allCatValues);

    const filterItem = (categItem) => {
        if(categItem ==="All"){
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr/>

            {/* Our menu list will come here */}
            <CatMenu filterItem={filterItem} catItems={catItems} />

            {/* my main items section */}
            <MenuItems items={items} />
            
        </> 
    )
    
}

export default Gallaryreact;