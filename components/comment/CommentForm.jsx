import React,{useContext,useState} from 'react'
import Store from './Store/context'
import {createComment,postComment} from './api/api'


const CommentForm = () => {
    const [input,setInput] = useState('')
    const {state,dispatch} = useContext(Store)

    const handleChange = e => {
        const {value} = {...e.target}
        setInput(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            userid:'king',
            content:input,
        }
        createComment(dispatch,payload); 
        // postComment(dispatch)
        
        setInput('')
    }
    
    return (
        <>
            <li className="comment-form">
                <form onSubmit={handleSubmit}>
                    <span className="ps_box">
                        <input 
                            type="text" 
                            className="int"
                            placeholder="댓글을 입력해주세요."
                            onChange={handleChange}
                            value={input}
                        />
                    </span>
                    <button 
                        type="submit" 
                        className="btn"
                    >
                        등록
                    </button>
                </form>
            </li>
        </>
    )
}

export default CommentForm