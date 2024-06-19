import './App.css'
import {Route, Routes} from "react-router-dom";
import Error from "./pages/error/Error.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Home from "./pages/home/Home.jsx";
import Post from "./pages/post/Post.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Postdetail from "./components/postdetail/postdetail.jsx";

function App() {
    return (
        <div className="page-container">
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/posts' element={<Post/>}/>
                <Route path='/overview' element={<Overview/>}/>
                <Route path='/postdetail/:id' element={<Postdetail/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default App
