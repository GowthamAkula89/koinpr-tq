import React, { useState, useEffect, useContext } from "react";
import "./checkout.css";
import { BsExclamationCircle } from "react-icons/bs";
import DataContext from "../DataContext";
import { useSnackbar } from 'notistack';

const countryStateMap = {
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: ["Maharashtra", "Gujarat", "Punjab"]
};

const TAX_RATE = 0.1;

const Checkout = () => {
    const { cart } = useContext(DataContext);
    const { enqueueSnackbar } = useSnackbar();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telegram: "",
        country: "",
        state: "",
        paymentMethod: "",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const { firstName, lastName, email, telegram, country, state } = form;
        setIsFormValid(firstName && lastName && email && telegram && country && state);
    }, [form]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [id]: value }));
    };

    const handleCountryChange = (e) => {
        const { value } = e.target;
        setForm((prevForm) => ({ ...prevForm, country: value, state: "" }));
    };

    const handleRadioChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, paymentMethod: e.target.value }));
    };

    const subtotal = () => {
        const total = cart.reduce((accu, item) => accu + Number(item.price), 0);
        return total;
    };

    const tax = () => {
        return subtotal() * TAX_RATE;
    };

    const total = () => {
        return subtotal() + tax();
    };

    const handleCheckoutClick = () => {
        if (!isFormValid) {
            enqueueSnackbar('Please fill out all required fields', { variant: 'warning' });
        } else {
            const checkOutDetails = {
                cartDetails: cart,
                transactionDetails: form
            }
            console.log(checkOutDetails);
            enqueueSnackbar('Order successfully placed', { variant: 'success' });
        }
    };

    const states = form.country ? countryStateMap[form.country] : [];

    return (
        <div className="checkout-container">
            <div className="checkout-note">
                <div className="checkout-note-title">Note:</div>
                <div className="checkout-note-description">
                    Please verify that the information you introduced is correct.
                    Once you submit your order and the payment is confirmed, one
                    of our team members will contact you within 3 business days.
                </div>
            </div>
            <div className="checkout-billing-name">
                Enter Billing Details <span>{<BsExclamationCircle />}</span>
            </div>
            <form>
                <div className="billing-details">
                    <div className="input-details">
                        <label htmlFor="firstName" className="label-name">First Name*</label>
                        <input
                            id="firstName"
                            className="input-value"
                            type="text"
                            placeholder="Enter First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-details">
                        <label htmlFor="lastName" className="label-name">Last Name*</label>
                        <input
                            id="lastName"
                            className="input-value"
                            type="text"
                            placeholder="Enter Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-details">
                        <label htmlFor="email" className="label-name">Email ID*</label>
                        <input
                            id="email"
                            className="input-value"
                            type="email"
                            placeholder="Enter Email ID"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-details">
                        <label htmlFor="telegram" className="label-name">Telegram ID*</label>
                        <input
                            id="telegram"
                            className="input-value"
                            type="text"
                            placeholder="Enter Telegram ID"
                            value={form.telegram}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-details">
                        <label htmlFor="country" className="label-name">Country*</label>
                        <select
                            id="country"
                            className="input-value"
                            value={form.country}
                            onChange={handleCountryChange}
                            required
                        >
                            <option value="">Select Country</option>
                            {Object.keys(countryStateMap).map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-details">
                        <label htmlFor="state" className="label-name">State*</label>
                        <select
                            id="state"
                            className="input-value"
                            value={form.state}
                            onChange={handleChange}
                            required
                            disabled={!form.country}
                        >
                            <option value="">Select State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
            <hr />
            <div className="checkout-details">
                <div className="transaction-details">
                    <div className="checkout-billing-name">
                        Check Out <span>{<BsExclamationCircle />}</span>
                    </div>
                    <div>Select Payment Method</div>
                    <div>
                        <input
                            type="radio"
                            id="stripe"
                            name="paymentMethod"
                            value="Stripe"
                            onChange={handleRadioChange}
                            required
                        />
                        <label htmlFor="stripe">Pay via <span className="payment-name">Stripe</span></label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="coingate"
                            name="paymentMethod"
                            value="Coingate"
                            onChange={handleRadioChange}
                            required
                        />
                        <label htmlFor="coingate">Pay via <span className="payment-name">Coingate</span></label>
                    </div>
                </div>
                <div className="summary-details">
                    <div className="const-container">
                        <div className="cost-details">
                            <div className="cost-details-ele">Sub total</div>
                            <div className="cost-details-ele">$ {subtotal().toFixed(2)}</div>
                        </div>
                        <div className="cost-details">
                            <div className="cost-details-ele">Tax</div>
                            <div className="cost-details-ele">$ {tax().toFixed(2)}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="cost-details">
                        <div className="cost-details-ele">Total</div>
                        <div className="cost-details-ele">$ {total().toFixed(2)}</div>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckoutClick}>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
