import './Overview.css'
import data from "../../constants/data.json";
import {Link} from "react-router-dom";

function Overview() {
    return (
        <div className='home-container'>
            <div><h1>Bekijk alle {data.length} posts op het platform</h1></div>

            {data.map((blog, index) => (

                    <section key={index} className='blogInfo'>
                        <span><Link className='link' to={`/postdetail/${index}`}>{`${blog.title}`} </Link></span>
                        <span>{`(${blog.author})`}</span>
                        <p>{`${blog.comments} reacties - ${blog.shares} gedeeld`}</p>
                    </section>

                )
            )}
        </div>
    );
}

export default Overview;