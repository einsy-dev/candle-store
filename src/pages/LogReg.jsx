import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router';
import Login from '../components/LogReg/Login'
import Register from '../components/LogReg/Register';
import { useContext, useState } from 'react';
import { Context } from '../main';

const LogReg = observer(() => {
    const { pathname } = useLocation()
    const { user } = useContext(Context)
    const [state, setState] = useState('info')

    return (
        <div className="d-flex w-100 pt-5 ">
            {user.isAuth ? <div className='d-flex flex-wrap'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button onClick={() => setState('info')} className="nav-link active">Пользователь</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => setState('inf')} className="nav-link active">Пользователь</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => setState('info')} className="nav-link active">Пользователь</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => setState('info')} className="nav-link active">Пользователь</button>
                    </li>
                </ul>
                <div className="border w-100 h-100 border">
                    {state === 'info' && <>
                        <div className="">lkewfwef</div>
                    </>}
                </div>
            </div> :
                <div className="modal-content container border bg-light rounded p-3" style={{ maxWidth: '500px', height: 'fit-content' }}>
                    <div className="modal-body">
                        {pathname === '/login' && <Login />}
                        {pathname === '/register' && <Register />}
                    </div>
                </div>
            }
        </div>
    )
}
)

export default LogReg;