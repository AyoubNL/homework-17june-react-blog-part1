import './postdetail.css'
import {Link, useParams} from "react-router-dom";
import data from '/src/constants/data.json'
import Calctime from "../helpers/calctime.jsx";

function Postdetail() {
    const {id} = useParams();

    return (
        <div className='blog-container'>
            <h2>{data[id].title}</h2>
            <h3>{data[id].subtitle}</h3>
            <p>{data[id].readTime} minuten lezen</p>
            <h4>Geschreven door {data[id].author} op {Calctime(data[id].created)} </h4>
            <p className='content'>{data[id].content}</p>
            <p>{data[id].comments} reacties - {data[id].shares} gedeeld</p>
            <Link className='link' to='/overview'>Terug naar de overzichtspagina</Link>
        </div>


    );
}

export default Postdetail;