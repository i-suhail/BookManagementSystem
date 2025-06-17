import React from "react";
import App from "../App";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = ()=> {
    const [book, setBook] = useState({
        title : "",
        desc : "",
        price : null,
        cover : "",
    });

   const navigate = useNavigate() 

    const handleChange = (e) =>{
        setBook(prev=>({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(book)

    return(
        <div className="form">
            <h1>Add new Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='price' onChange={handleChange} name="price"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
            {/* <input type="text" value={coverUrl} onChange={e => setCoverUrl(e.target.value)} placeholder="Paste image URL" /> */}
            
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add