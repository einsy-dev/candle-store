import { useRef, useState } from "react"
import { createCategory } from "../../http/shopAPI"

export default function CreateCategory({ changeState }) {
    const [state, setState] = useState('');
    const formRef = useRef()
    function handleClick(e) {
        e.preventDefault()
        createCategory(formRef.current.elements[0].value)
            .then(() => formRef.current.elements[0].value = '')
            .then(() => setState("Category created"))
            .catch(err => setState(err.message))
            .finally(() => setTimeout(() => setState(''), 2000))
    }
    return (
        <form ref={formRef}>
            <div className="mb-4">
                <label htmlFor="categoryInput" className="form-label">Категория</label>
                <input type="text" required={true} className="form-control" id="categoryInput" />
                <label htmlFor="categoryInput" className="form-label">Status: {state}</label>
            </div>
            <div>
                <button className="btn btn-primary" onClick={handleClick}>Create</button>
                <button className="btn btn-light ms-4" onClick={() => changeState('storeItem')}>StoreItem</button>
            </div>
        </form>
    )
}
