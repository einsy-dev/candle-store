import { registerUser } from "../../http/userAPI";
import { useRef, useContext } from 'react';
import { Context } from './../../main';

export default function Register({ changeState }) {

    const formRef = useRef()
    const { user } = useContext(Context)

    function handleClick(e) {
        e.preventDefault();
        registerUser(formRef.current.elements[0].value, formRef.current.elements[1].value, formRef.current.elements[2].value).then(data => localStorage.setItem('token', data.token)).finally(() => user.isAuth = true).catch(err => console.log(err))
    }

    return (
        <form ref={formRef}>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                <input type="password" required={true} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" required={true} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" required={true} className="form-control" id="exampleInputPassword1" />
            </div>


            <div className="modal-footer">
                <button onClick={() => changeState('login')} className="btn btn-light me-4">Login</button>
                <button onClick={handleClick} className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
