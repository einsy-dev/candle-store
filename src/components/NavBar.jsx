
import { ReactComponent as WhatsAppIcon } from '../images/icons8-whatsapp.svg'
import { ReactComponent as TelegramIcon } from '../images/icons8-telegram.svg'
import { ReactComponent as PinterestIcon } from '../images/icons8-pinterest.svg'

import { Container } from 'react-bootstrap'
import Menu from './Menu';

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Container>
        <Menu />

        <ul className="navbar navbar-light bg-light m-0 p-0">
          <li className="list-group-item p-0 border-end-0"><a href='https://icons8.com/icons/set/email'><TelegramIcon width={40} height={40} /></a></li>
          <li className="list-group-item p-0 border-end-0 ps-3  pe-3"><a href='https://icons8.com/icons/set/email'><WhatsAppIcon width={40} height={40} /></a></li>
          <li className="list-group-item p-0"><a href='https://icons8.com/icons/set/email'><PinterestIcon width={40} height={40} /></a></li>
        </ul>
      </Container>

    </nav>
  )
}   
