import { ReactComponent as CartIcon } from '../../images/bag.svg'
import { ReactComponent as WishListIcon } from '../../images/heart.svg'
import { ReactComponent as ProfileIcon } from '../../images/person-circle.svg'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Menu from './Menu';
import { observer } from 'mobx-react-lite';
import { Context } from './../../main';
import { useContext } from 'react';

const NavBar = observer(() => {
  const { user } = useContext(Context)
  
  return (
    <nav className="navbar navbar-light bg-light p-1">
      <Container>

        <Menu />

        <ul className='navbar p-0 m-0'>

          {user._role == 'ADMIN' && <>
            <li className='list-group-item  p-0 m-0 me-4' style={{ cursor: 'pointer' }}>
              <NavLink to="/admin"><ProfileIcon width={32} height={32} fill={"green"} /></NavLink>
            </li>
          </>}

          <li className='list-group-item  p-0 m-0 me-4'>
            <NavLink to="/wishlist"><WishListIcon width={32} height={32} fill={"black"} /></NavLink>
          </li>
          <li className='list-group-item  p-0 m-0 me-4'>
            <NavLink to="/basket"><CartIcon width={32} height={32} fill={"black"} /></NavLink>
          </li>

          <li className='list-group-item  p-0 m-0' style={{ cursor: 'pointer' }}>
            <NavLink to={'/login'}><ProfileIcon width={32} height={32} fill={"black"} /></NavLink>
          </li>
        </ul>

      </Container>
    </nav>
  )
}
)

export default NavBar;
