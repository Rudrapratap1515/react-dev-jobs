import React from "react";
import { Link } from 'react-router-dom';
function Card(props) {
    return (
        <React.Fragment>
            {
                props.entries.map((item) => {
                    return (
                        <div className="job-card" id={item.id}>
                            <img className="company-logo" id={item.id} src={item.company_logo || 'https://www.market-research-companies.in//images/default.jpg'}/>
                            <div className="time-stamp">{item.type}</div>
                            <h3 className="post-name">{item.title}</h3>
                            <div className="time-stamp">{item.company}</div>
                            <div className="location">{item.location}</div>
                        </div>
                    );
                })
            }
        </React.Fragment>
    )
}

export default Card;
