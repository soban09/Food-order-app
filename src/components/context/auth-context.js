import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    dishes: {},
    total: 0,
    Bill: 0,
    cartClick : false,
    activateModal : (val) => {},
    updateDishes: (idx, val) => { }
});

export const AuthContextProvider = (props) => {
    const [selectedDishes, setSelectedDishes] = useState([
        {
            id: 1,
            dishName: 'Sushi',
            dishDetails: 'Finest fish and Veggies',
            price: 22.99,
            quantity: 0
        },
        {
            id: 2,
            dishName: 'Schnitzel',
            dishDetails: 'A german specialiy',
            price: 16.50,
            quantity: 0
        },
        {
            id: 3,
            dishName: 'Barbecue Burger',
            dishDetails: 'American, raw, meaty',
            price: 12.99,
            quantity: 0
        },
        {
            id: 4,
            dishName: 'Green Bowl',
            dishDetails: 'Healthy and Green',
            price: 18.99,
            quantity: 0
        }
    ]);

    const [totalDishes, setTotalDishes] = useState(0);
    const [Bill, setBill] = useState(0);
    const [cartClick, setCartClick] = useState(false);

    const updateDishesHandler = (idx, val) => {
        setSelectedDishes(
            selectedDishes.map((item) => {
                return item.id === idx ? { ...item, quantity: val } : item
            })
        )
    }

    const activateModalHandler = (val) => {
        setCartClick(val);
    }

    useEffect(() => {
        var t = +0, b = 0;
        selectedDishes.map((dish) => {
            t = (+dish.quantity + +t);
            b = +b + (+dish.quantity * dish.price);
            b.toFixed(2);
        })
        // console.log(selectedDishes);
        // console.log(total);
        setTotalDishes(t);
        setBill(b);
    }, [selectedDishes])

    return <AuthContext.Provider
        value={{
            dishes: selectedDishes,
            total: totalDishes,
            Bill: Bill,
            cartClick : cartClick,
            activateModal : activateModalHandler,
            updateDishes: updateDishesHandler
        }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
