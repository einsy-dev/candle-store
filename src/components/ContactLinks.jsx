import { ReactComponent as TelegramIcon } from '../images/icons8-telegram.svg'
import { ReactComponent as PinterestIcon } from '../images/icons8-pinterest.svg'

export default function ContactLinks() {
  return (
    <ul className="navbar navbar-light m-0 p-0 me-4">
      <li className="list-group-item border-end-0"><a target='_blank' href='https://t.me/Ellina_psiholog' rel="noreferrer"><TelegramIcon width={40} height={40} /></a></li>
      <li className="list-group-item mx-4"><a target='_blank' href='https://pin.it/6wf4CY4' rel="noreferrer"><PinterestIcon width={40} height={40} /></a></li>
    </ul>
  )
}
