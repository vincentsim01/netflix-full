import React,{useState,useEffect} from 'react';


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
        <div>
            This is Horizontal

            {movielist.map((rai)=>{return (<div><img src={rai.thumbnail}></img></div>)})}


        </div>

    )
}

export default Horizontal;