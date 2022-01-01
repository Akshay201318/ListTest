import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

 const List = ()=> {
    const [listData, setListData] = useState({results: [], page: 0, totalResults: 0});
    const [buttonClicked, setButtonClicked] = useState("");
    const [count, setCount] = useState(0);

    const getListData= async (limit, page)=>{ 
        const {data}= await axios.post('https://mayihelpu.herokuapp.com/product/getAllProducts', {limit:limit, page: page});
        setListData(data);
    }

    useEffect(()=>{
        getListData(20);
    });

    useEffect(()=>{
        const nextPage = buttonClicked === 'prev' ? listData.page -1 : listData.page+1;
        getListData(20, nextPage);
    },[count]);


    return (
        <div className = "list">
        <div className ="listTitle">Products({listData.totalResults})</div>
            <div >
             <div className = "listHeader">
                 <div>Id</div>
                 <div>Name</div>
                 <div>Size</div>
                 <div>Status</div>
                 <div>Price</div>
                 <div>Quantity</div>
                 <div>Description</div>
                 </div>
                 <div className="listBody">
                {listData.results.map((data)=> {
                    return <Link to={`/details/${data.id}`}><div className = "listRow">
                      <div> {data.product_id || ""}</div>
                      <div> {data.name || ""}</div>
                      <div> {data.product_size || ""}</div>
                      <div> {data.product_status || ""}</div>
                      <div> {data.product_price || ""}</div>
                      <div> {data.product_quantity || ""}</div>
                      <div> {data.product_decription || ""}</div>
                    </div></Link>
                }
                )}
                </div>
            </div>
            <div className = "button">
                <div onClick = {()=> {setButtonClicked('prev'); setCount(count-1)}}>{"<<Prev"}</div>
                <div onClick = {()=> {setButtonClicked('next'); setCount(count+1)}}>{"Next>>"}</div>
            </div>
        </div>
    )
}

export default List;
