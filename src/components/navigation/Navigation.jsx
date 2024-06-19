import './Navigation.css'
import {NavLink} from "react-router-dom";
import logosmall from "../../assets/logo-small.png";

function Navigation() {

    return (
        <nav>
            <img className='companylogo' src={logosmall} alt="Company logo"/>
            <h3>BlOgventure</h3>
            <ul>
                <li><NavLink to='/'
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                </li>
                <li><NavLink to='/overview' className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle
                    posts</NavLink></li>
                <li><NavLink to='/posts'
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe
                    post maken</NavLink></li>

            </ul>


        </nav>
    );
}

export default Navigation;