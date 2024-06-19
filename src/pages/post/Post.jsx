import './Post.css'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Calcread from "../../components/helpers/calcread.jsx";
import axios from 'axios'

function Post() {
    const [form, setForm] = useState({
            author: '',
            subtitle: '',
            title: '',
            content: '',
        }
    )
    const [message, setMessage] = useState('')
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)

    // const navigate = useNavigate()
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

    async function handleSubmit(e) {
        e.preventDefault()
        toggleError(false)
        toggleLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/posts', form)
            setMessage(response.data.id)
        } catch (e) {
            alert('Het plaatsen is mislukt')
            toggleError(true)
        }
        finally {
            toggleLoading(false)
        }
        // navigate('/overview')
    }

    return (
        <div className='page-container'>
            <h1>Post toevoegen</h1>
            {message && <div><p>De blogpost is succesvol toegevoegd.
                Je kunt deze <Link className='link' to={`http://localhost:5173/postdetail/${message}`}> hier < /Link> bekijken.</p></div>}
            {error && <div><p className='error-message'>Er is iets misgegaan bij het plaatsen van de post</p></div>}
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
                <button type='submit' disabled={loading}>Toevoegen</button>
            </form>
        </div>
                );
       }

                export default Post;