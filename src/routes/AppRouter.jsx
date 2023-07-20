import { Routes, Route, Navigate } from 'react-router-dom'
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/item/:id" element={<ShopItem />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
