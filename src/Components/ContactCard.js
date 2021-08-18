import React from "react";
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact || {};
    return (
        <div className="item">
                <img className="ui avatar image" style={{ marginTop:"7px" }} src={user} alt="userimage" />
            <div className="content">
                <div className="header" style={{ marginTop:"7px" }} >{name}</div>
                <div className="email" style={{ marginTop:"5px" }} >{email}</div>
            </div>
            <div classname="icon"><i className="trash alternate outline icon"
            style={{ color: "red", marginTop: "5px", marginBottom:"8px", marginLeft:"88%" }}
            onClick={() => props.clickHandler(id)}
            ></i>
            </div>
        </div>
    );
};

export default ContactCard;