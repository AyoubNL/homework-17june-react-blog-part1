import './Overview.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'
function Overview() {

 const [all, setAll] = useState([])

    async function fetchPost ()
    {
        try {
            const response = await axios.get('http://localhost:3000/posts')
            setAll(response.data)
        } catch (e) {
            console.error(e)
            alert('Het laden van de data is mislukt')
        }
    }

    useEffect( () => {
        fetchPost()
    },[all]);

    return (

        <div className='home-container'>
            <div><h1>Bekijk alle {all.length} posts op het platform</h1></div>

            {all && all.map((all) => (

                    <section key={all.id} className='blogInfo'>
                        <span><Link className='link' to={`/postdetail/${all.id}`}>{`${all.title}`} </Link></span>
                        <span>{`(${all.author})`}</span>
                        <p>{`${all.comments} reacties - ${all.shares} gedeeld`}</p>
                    </section>
                )
            )}

        </div>

    );
}

export default Overview;