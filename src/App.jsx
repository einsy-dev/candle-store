import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import AppRouter from './routes/AppRouter';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { useContext, useEffect } from 'react';
import { Context } from './main';
import { authUser } from './http/userAPI';
import { useNavigate } from 'react-router';
import { getCategory } from './http/shopAPI';

export default function App() {
    const { user, store } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        authUser()
            .then(data => {
                user.init = data
            })
            .catch(() => {
                localStorage.getItem('token') && navigate('/login');
            })
        getCategory()
            .then(data => store.category = data)
            .catch(err => console.log(err))
    }, [])

    return (
        <div style={{ minHeight: "100vh" }}>
            <NavBar />
            <AppRouter />
            <Footer />
        </div>
    )
}