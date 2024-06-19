import './postdetail.css'
import {Link, useParams} from "react-router-dom";
import Calctime from "../helpers/calctime.jsx";
import {useEffect, useState} from "react";
import axios from 'axios'

function Postdetail() {
    const {id} = useParams();

    const [post, setPost] = useState([])

    useEffect(() => {
        fetchPost()
    });

    async function fetchPost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            setPost(response.data)
        } catch (e) {
            alert('Het ophalen van één specifieke post is mislukt.')
        }
    }

    return (
        <div className='blog-container'>
            {post.title ? <h2>{post.title}</h2> : <h2>Lege object</h2>}
                <h3>{post.subtitle}</h3>
                <p>{post.readTime} minuten lezen</p>
    <h4>Geschreven door {post.author} op {Calctime(post.created)} </h4>
    <p className='content'>{post.content}</p>
    <p>{post.comments} reacties - {post.shares} gedeeld</p>

    <Link className='link' to='/overview'>Terug naar de overzichtspagina</Link>
        </div>
)

}

export default Postdetail;