import React from "react";
import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const AreaCard = ({colors , percentFillValue, cardInfo}) => {

    const filledValue = (percentFillValue/100)*360 //360 degree for circle
    const remainedValue = 360 - filledValue;

    const data = [
        {name : "Remained", value : remainedValue},
        {name : "Achieved Sales", value : filledValue},
    ];

    const renderTooltipContent = (value)=> {
        return `${(value/360)*100}%`;
    };


return(
    <div className="area-card">
        <div className="area-card-info">
            <h5 className="info-title">{cardInfo.title}</h5>
            <div className="info-value">{cardInfo.value}</div>
            <p className="info-text">{}</p>
        </div>
        
    </div>
)
}

export default AreaCard