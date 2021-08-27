import React from "react";
import { Link } from "react-router-dom";


const Delete = (props) => {
    //console.log(props);

const { id } = props.contact || {};


return (
    
    <div className="dialog" style={{ alignItems: "center", textAlign: "center", marginTop: "20px" }}>
    <div>
    
      <h3>Confirm delete:</h3>
    </div>
    <Link to="/"><button 
        className="ui button blue center" 
        style={{ marginTop: "20px" }}>
        No
    </button></Link>
    <Link to="/"><button onClick={() => props?.clickHandler(id)}
        className="ui button blue center" 
        style={{ marginTop: "20px" }}>
        Yes
    </button></Link>

    </div>
  );
}

export default Delete;