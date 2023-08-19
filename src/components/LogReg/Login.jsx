import { useRef, useState } from "react";
import { loginUser } from "../../http/userAPI";
import { observer } from 'mobx-react-lite';
import { NavLink } from "react-router-dom";
import { ReactComponent as EyeIcon } from '../../images/eye.svg'

const Login = observer(() => {
    const formRef = useRef();
    const [showPass, setShowPass] = useState('password')


    function submitForm(e) {
        e.preventDefault();
        loginUser(formRef.current.elements[0].value, formRef.current.elements[1].value)
            .then(data => localStorage.setItem('token', data.token))
            .catch(err => console.log(err))
    }

    function handleClick(e) {
        e.preventDefault();
        showPass === 'password' ? setShowPass('text') : setShowPass('password')
    }

    return (
        <form ref={formRef} >
            <div className="mb-4">
                <label htmlFor="loginEmail" className="form-label">Email</label>
                <input type="email" required={true} className="form-control" id="loginEmail" placeholder="example@gmail.com" />
            </div>
            <div className=" mb-4">
                <label htmlFor="loginPassword" className="form-label">Пароль</label>
                <div className="d-flex input-group">
                    <input type={showPass} required={true} id="loginPassword" className="form-control" />
                    <button onClick={handleClick} className="input-group-text bg-white"><EyeIcon /></button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <button onClick={submitForm} className="btn btn-primary me-4">Войти</button>
                <div className="">
                    <span className="me-2">Нет аккаунта?</span>
                    <NavLink to={'/register'}>Зарегистрироваться</NavLink>
                </div>
            </div>
        </form>
    )
})

export default Login;
