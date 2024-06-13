import './Post.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Calcread from "../../components/helpers/calcread.jsx";

function Post() {
    const [form, setForm] = useState({
            author: '',
            subtitle: '',
            title: '',
            content: '',
        }
    )

    const navigate = useNavigate()
    const event = new Date

    function handleChange(e) {

        const changedFieldName = e.target.name

        let readTime = Calcread(e.target.value.length)

        setForm({
                ...form,
                [changedFieldName]: e.target.value,
                created: event.toISOString(),
                comments: 0,
                shares: 0,
                readTime,
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        navigate('/overview')
    }

    return (
        <div className='page-container'>
            <h1>Post toevoegen</h1>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="title">Titel </label><br/>
                <input value={form.title} name='title' id='title' type="text" onChange={handleChange} required/>
                <br/>
                <label htmlFor="subtitle">Subtitel </label><br/>
                <input value={form.subtitle} name='subtitle' id='subtitle' type="text" onChange={handleChange}
                       required/>
                <br/>
                <label htmlFor="author">Auteur </label><br/>
                <input value={form.author} name='author' id='author' type="text" onChange={handleChange} required/>
                <br/>
                <label htmlFor="content">Blogpost</label><br/>
                <textarea value={form.content} name="content" minLength='300' maxLength='2000' id="content" cols="110"
                          rows="8" onChange={handleChange} required></textarea><br/>

                <button type='submit'>Toevoegen</button>

            </form>


            {/*De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn. */}
            {/*Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.*/}


        </div>
    );
}

export default Post;