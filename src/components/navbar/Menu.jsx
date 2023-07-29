import { ReactComponent as BurgerIcon } from '../../images/icons8-menu.svg'
import { Container } from 'react-bootstrap';


export default function Menu() {
    return (
        <Container className='w-auto ms-4 p-0'>
            <button className="btn btn-light p-0 px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <BurgerIcon width={38} height={38} />
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Категории</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Свечи</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
