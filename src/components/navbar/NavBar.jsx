import { ReactComponent as CartIcon } from '../../images/bag.svg'
import { ReactComponent as WishListIcon } from '../../images/heart.svg'
import { ReactComponent as TelegramIcon } from '../../images/icons8-telegram.svg'
import { ReactComponent as PinterestIcon } from '../../images/icons8-pinterest.svg'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Menu from './Menu';
import { observer } from 'mobx-react-lite';
import ModalMenu from './ModalMenu'
import Admin from './Admin';
import { Context } from './../../main';
import { useContext } from 'react';

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light p-1">
      <Container className=''>

        <NavLink to="/" className="navbar-brand">Home</NavLink>

        <Menu />

        <div className="d-block d-sm-none m-0 m-auto"></div> {/* Затычка */}
 
        <ul className="d-none d-sm-flex list-unstyled m-0 m-auto">
          <li className="me-4"><a target='_blank' href='https://t.me/Ellina_psiholog' rel="noreferrer"><TelegramIcon width={40} height={40} /></a></li>
          <li><a target='_blank' href='https://pin.it/6wf4CY4' rel="noreferrer"><PinterestIcon width={40} height={40} /></a></li>
        </ul>

        <ul className='navbar p-0 m-0'>
          <li className='list-group-item  p-0 m-0 me-4'><NavLink to="/wishlist"><WishListIcon width={32} height={32} fill={"black"} /></NavLink></li>
          <li className='list-group-item  p-0 m-0 me-4'><NavLink to="/cart"><CartIcon width={32} height={32} fill={"black"} /></NavLink></li>
          {user.role === 'ADMIN' && <li className='list-group-item  p-0 m-0 me-4'><Admin /></li>}
          <li className='list-group-item  p-0 m-0'><ModalMenu /></li>
        </ul>

      </Container>
    </nav>
  )
}
)

export default NavBar;