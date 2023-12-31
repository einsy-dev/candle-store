import { useContext } from 'react';
import { ReactComponent as BurgerIcon } from '../../images/icons8-menu.svg'
import { NavLink } from 'react-router-dom';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';


const Menu = observer(() => {
    const { store } = useContext(Context)

    return (
        <>
            <button className="btn btn-light p-0 px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <BurgerIcon width={38} height={38} />
            </button>

            <div className="offcanvas offcanvas-start" style={{maxWidth: '75%'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title m-auto" id="offcanvasNavbarLabel">Категории</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group list-group-flush">
                        {store.category.map((item, id) => (
                            <NavLink to={`/${item.value}`} key={id} className=" list-group-item" id={item._id}>{item.value}</NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
})
export default Menu;
