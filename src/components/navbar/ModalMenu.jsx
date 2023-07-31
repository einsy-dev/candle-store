import { useContext, useState } from 'react';
import { ReactComponent as ProfileIcon } from '../../images/person-circle.svg'
import Login from './../modal/Login';
import Register from './../modal/Register';
import { Context } from './../../main';
import { observer } from 'mobx-react-lite';

const ModalMenu = observer(() => {
    const [type, setType] = useState('login');
    const { user } = useContext(Context);
    return (
        <>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal"><ProfileIcon width={32} height={32} fill={"black"} /></a>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {user.isAuth ? <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                username: {user.info.name} <br />
                                email: {user.info.email} <br />
                            </div>
                        </> : <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {type == 'login' && <Login changeState={setType} />}
                                {type == 'register' && <Register changeState={setType} />}
                            </div>
                        </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
)

export default ModalMenu;