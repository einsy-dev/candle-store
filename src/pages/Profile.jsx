import { useContext, useLayoutEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

const Profile = observer(() => {
  const { user } = useContext(Context)
  const [state, setState] = useState('info')
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (!user.isAuth) navigate('/login')
  })

  return (
    <>
      <div className='d-flex flex-wrap mb-auto pt-1 w-100'>
        <ul className="nav nav-tabs w-100">
          <li className="nav-item">
            <button onClick={() => setState('info')} className={`nav-link ${state == 'info' && 'active'}`}> Пользователь</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setState('history')} className={`nav-link ${state == 'history' && 'active'}`}>История заказов</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setState('setting')} className={`nav-link ${state == 'setting' && 'active'}`}>Настройки</button>
          </li>
        </ul>
        <div className="w-100 d-flex flex-column">
          {state == 'info' && <>
            <div className="container my-4">
              <div className="row m-0 ">
                <div className="col">Имя:</div>
                <div className="col">{user.info.name}</div>
              </div>
              <div className="row m-0">
                <div className="col">email:</div>
                <div className="col">{user.info.email}</div>
              </div>
            </div>
            <button className='btn btn-danger' onClick={() => { localStorage.clear(), window.location.reload() }}>Выйти</button>
          </>
          }
          {state == 'history' && <div>2</div>}
          {state == 'setting' && <div>3</div>}
        </div>
      </div >
    </>
  )
}
)

export default Profile