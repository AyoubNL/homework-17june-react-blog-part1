import './Error.css'
import {Link} from "react-router-dom";

function Error() {
    return (
        <main className='page-container'>
            <h2>Oops... This page does not exist</h2>
            <p>Take me back to the <Link to='/'>home page.</Link> </p>

        </main>
    );
}

export default Error;