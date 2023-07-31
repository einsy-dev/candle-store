import { useRef, useContext } from "react"
import { Context } from './../../main';
import { observer } from "mobx-react-lite";
import { createStoreItem } from "../../http/shopAPI";



const CreateStoreItem = observer(({ changeState }) => {
    const formRef = useRef()
    const { store } = useContext(Context)


    function handleClick(e) {
        e.preventDefault();
        createStoreItem({
            title: formRef.current.elements[0].value,
            description: formRef.current.elements[1].value,
            specs: formRef.current.elements[2].value,
            category: formRef.current.elements[3].value,
            price: formRef.current.elements[4].value,
            file: formRef.current.elements[5].files,
        })
    }

    return (
        <form ref={formRef}>
            <div className="mb-4">
                <label htmlFor="categoryInput" className="form-label">Title</label>
                <input type="text" required={true} className="form-control mb-3" id="categoryInput" />

                <label htmlFor="categoryInput1" className="form-label">Description</label>
                <textarea type="text" required={true} className="form-control mb-3" id="categoryInput1" />

                <label htmlFor="categoryInput2" className="form-label">Specs</label>
                <textarea type="text" required={true} className="form-control mb-3" id="categoryInput2" placeholder="Материал: Глина, Форма: Круглая" />

                <label htmlFor="categoryInput3" className="form-label">Category</label>
                <select id="categoryInput3" className="form-select mb-3" aria-label="Default select example" defaultValue={store.category[0]}>
                    {store.category.map((item, id) => <option key={id} value={item}>{item}</option>)}
                </select>

                <label htmlFor="categoryInput4" className="form-label">Price</label>
                <input type="number" required={true} className="form-control mb-3" id="categoryInput4" />

                <label className="form-label" htmlFor='customFile'>Images</label>
                <input type="file" multiple className="form-control mb-3" id='customFile' />

            </div>
            <div>
                <button className="btn btn-primary" onClick={handleClick}>Create</button>
                <button className="btn btn-light ms-4" onClick={() => changeState('category')}>Category</button>
            </div>
        </form >
    )
})
export default CreateStoreItem