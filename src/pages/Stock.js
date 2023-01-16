import { useParams } from 'react-router-dom';
import React from "react";

const Stock = (props) => {
    const params = useParams();
    console.log(params)
    const stock = props.stockData.filter(
        d => d.symbol === params.symbol)[0]
    return (
        <div>
            <h3>Name: {stock.name}</h3>
            <h3>Price: {stock.lastPrice}</h3>
        </div>
    )
}
export default Stock;
