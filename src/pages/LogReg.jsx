import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router';
import Login from '../components/LogReg/Login'
import Register from '../components/LogReg/Register';

const LogReg = observer(() => {
    const { pathname } = useLocation()


    return (
        <div className="modal-content container border bg-light rounded p-3 my-4" style={{ maxWidth: '500px', height: 'fit-content' }}>
            <div className="modal-body">
                {pathname === '/login' ? <Login /> : <Register />}
            </div>
        </div>
    )
}
)

export default LogReg;