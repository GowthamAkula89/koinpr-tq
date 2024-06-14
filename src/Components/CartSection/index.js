import React, { useContext } from "react";
import "./cartSection.css";
import DataContext from "../../Components/DataContext";
const CartSection = () => {
    const {cart} =useContext(DataContext);
    const data = cart[0];
    console.log(data);
    return(
        <div className="cart-section">
            <div className="">
                Hi
            </div>
        </div>
    )
}
export default CartSection;