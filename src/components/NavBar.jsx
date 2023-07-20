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
          <li className="list-group-item p-0 border-end-0"><a target='_blank' href='https://t.me/Ellina_psiholog' rel="noreferrer"><TelegramIcon width={40} height={40} /></a></li>
          <li className="list-group-item p-0 ms-3 me-5"><a target='_blank' href='https://pin.it/6wf4CY4' rel="noreferrer"><PinterestIcon width={40} height={40} /></a></li>
        </ul>
      </Container>

    </nav>
  )
}   
