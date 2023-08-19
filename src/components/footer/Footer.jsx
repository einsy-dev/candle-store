import { ReactComponent as TelegramIcon } from '../../images/icons8-telegram.svg'
import { ReactComponent as PinterestIcon } from '../../images/icons8-pinterest.svg'

export default function Footer() {
  return (
    <div className="d-flex justify-content-center bg-light align-items-center" style={{ minHeight: '10vh' }} >
      <ul className="list-unstyled d-flex align-items-center my-auto">
        <li className='me-4'><a target='_blank' href='https://t.me/Ellina_psiholog' rel="noreferrer"><TelegramIcon width={42} height={42} /></a></li>
        <li><a target='_blank' href='https://pin.it/6wf4CY4' rel="noreferrer"><PinterestIcon width={42} height={42} /></a></li>
      </ul>
    </div >
  )
}
