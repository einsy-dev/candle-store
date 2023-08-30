import { registerUser } from "../../http/userAPI";
import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EyeIcon } from '../../images/eye.svg'

const Register = observer(() => {

    const formRef = useRef()
    const [showPass, setShowPass] = useState('password')

    function submitForm(e) {
        e.preventDefault();
        registerUser(formRef.current.elements[0].value, formRef.current.elements[1].value, formRef.current.elements[2].value)
            .then(data => localStorage.setItem('token', data.token))
            .finally(() => location.reload())
            .catch(err => console.log(err))
    }


    function handleClick(e) {
        e.preventDefault();
        showPass === 'password' ? setShowPass('text') : setShowPass('password')
    }

    return (
        <form ref={formRef}>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword0" className="form-label">Username</label>
                <input type="text" required={true} className="form-control" id="exampleInputPassword0" />
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" required={true} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
            </div>
            <div className=" mb-4">
                <label htmlFor="loginPassword" className="form-label">Пароль</label>
                <div className="d-flex input-group">
                    <input type={showPass} required={true} id="loginPassword" className="form-control" />
                    <button onClick={handleClick} className="input-group-text bg-white"><EyeIcon /></button>
                </div>
            </div>

            <div className="d-flex align-items-center">
                <button onClick={submitForm} className="btn btn-primary me-4">Зарегистрироваться</button>
                <div className="">
                    <span className="me-2">Уже есть аккаунт?</span>
                    <NavLink to={'/login'}>Войти</NavLink>
                </div>
            </div>
        </form>
    )
}
)

export default Register
