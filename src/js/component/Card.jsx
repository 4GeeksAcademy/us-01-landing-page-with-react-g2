import React from "react"; 

export const Card = ({language}) => {
    // Code JS

    return (
    
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={language.image} alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{language.name}</h5>
            <p className="card-text">{language.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    
        
    );
    
}