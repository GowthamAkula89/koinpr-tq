import React, { useContext } from "react";
import Header from "../../Components/Header";
import CartSection from "../../Components/CartSection";
import DataContext from "../../Components/DataContext";
const CartPage = () => {
    const {cart} =useContext(DataContext);
    const data = cart[0];
    console.log(data);
    return(
        <div>
            <Header/>
            <CartSection/>
        </div>
    )
}
export default CartPage;