import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import { HashRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { useContext, useEffect } from 'react';
import { Context } from './main';
import { authUser } from './http/userAPI';
import { getCategory } from './http/shopAPI';

export default function App() {
    const { user, store } = useContext(Context)
    useEffect(() => {
        authUser().then(data => {
            user.isAuth = true
            user.role = data.role
            user.info = data;
        }).catch(err => console.log(err))
        getCategory().then(data => store.category = data).catch(err => console.log(err))
    }, [user, store])

    return (
        <HashRouter>
            <div style={{ minHeight: "100vh" }}>
                <NavBar />
                <AppRouter />
                <Footer />
            </div>
        </HashRouter >
    )
}