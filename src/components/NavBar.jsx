import { ReactComponent as ProfileIcon } from '../images/person-circle.svg'
import { ReactComponent as CartIcon } from '../images/bag.svg'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Menu from './Menu';
import ContactLinks from './ContactLinks';

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light p-1">
      <Container>
        <Menu />
        <ContactLinks />

        <ul className='navbar p-0 m-0'>
          <li className='list-group-item  p-0 m-0 me-4'><NavLink to="/cart"><CartIcon width={32} height={32} fill={"black"} /></NavLink></li>
          <li className='list-group-item  p-0 m-0 me-5'> <NavLink to="/profile"><ProfileIcon width={32} height={32} fill={"black"} /></NavLink></li>
        </ul>

      </Container>
    </nav>
  )
}   
  