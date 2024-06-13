import React, { useContext } from "react";
import "./addOfferingSidebar.css";
import { MdDone } from "react-icons/md";
import DataContext from "../DataContext";
const AddOfferingSidebar = () => {
    const {offeringDone, contentDone, reviewDone} = useContext(DataContext);
    return(
        <div className="add-offering-sidebar">
            <div className="side-bar-name">Progress</div>
            <hr/>
            <div className="side-bar-items">
                <div className="sibe-bar-item">
                    <div className={`sibebar-item-status ${offeringDone.done ? "done": ""} ${offeringDone.progress ? "progress": ""}`}><MdDone className="done-status"/></div>
                    <div className="sibebar-item-name">Add Offering</div>
                </div>
                <div className="sibe-bar-item">
                    <div className={`sibebar-item-status ${contentDone.done ? "done": ""} ${contentDone.progress ? "progress": ""}`}><MdDone className="done-status"/></div>
                    <div className="sibebar-item-name">Add Content Offerings</div>
                </div>
                <div className="sibe-bar-item">
                    <div className={`sibebar-item-status ${reviewDone.done ? "done": ""} ${reviewDone.progress ? "progress": ""}`}><MdDone className="done-status"/></div>
                    <div className="sibebar-item-name">Review</div>
                </div>
            </div>
        </div>
    )
}
export default AddOfferingSidebar;