import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const ProductDetails = ()=> {
    const {id} = useParams();
    const [data, setData] = useState({});

    const getProductDetails= async (id)=>{ 
        const {data}= await axios.post('http://localhost:5000/product/getProduct', {id: id});
        setData(data);
    }
    useEffect(()=>{
        getProductDetails(id);
    },[])
    return (
        <div className = "details">
            <Link to={`/`}><div className = "detailsHeader"> {"<<Back"} </div></Link>
            <div className = "productDetails">
            <div className = "item">
                <div className = "key">Product Id:</div>
                <div className = "value">{data.product_id}</div>
            </div>
            <div className = "item">
                <div className = "key">Name:</div>
                <div className = "value">{data.name}</div>
            </div>
            <div className = "item">
                <div className = "key">Price:</div>
                <div className = "value">{data.product_price}</div>
            </div>
            <div className = "item">
                <div className = "key">Size:</div>
                <div className = "value">{data.product_size}</div>
            </div>
            <div className = "item">
                <div className = "key">Status:</div>
                <div className = "value">{data.product_status}</div>
            </div>
            <div className = "item">
                <div className = "key">Description:</div>
                <div className = "value">{data.product_decription}</div>
            </div>
            </div>
        </div>
    )
}

export default ProductDetails;
