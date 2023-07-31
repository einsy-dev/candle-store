import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';
import Cart from '../pages/Cart';
import WishList from './../pages/WishList';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    return (
        <Container className="d-flex flex-wrap justify-content-center" style={{ "minHeight": "85vh" }}>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/:category" element={<Shop />} />
                <Route path="/item/:id" element={<ShopItem />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
}
)

export default AppRouter
