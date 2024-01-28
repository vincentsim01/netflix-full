import React,{useState,useEffect} from 'react';
import './horizontal.css';


import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';

const baseUrl="http://localhost:9320";


const Horizontal = () =>{

    const [movielist,setMovielist]=useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/movies`,{method:'GET'})
        .then((res) => res.json())
        .then ((anu)=>{setMovielist(anu)});

    },[]);

    console.log(movielist);




    return(
        <div className="horizontalcontainer">
        <h1>Our Movie List</h1>
        <div>




            {movielist.map((rai)=>{return (<span className="horizontalimagecontainer"><img src={rai.thumbnail} className="horizontalimage"></img></span>)})}


        </div>
        </div>


    )
}

export default Horizontal;