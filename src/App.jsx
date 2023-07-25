import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ minHeight: "100vh" }}>
                <NavBar />
                <AppRouter />
                <Footer />
            </div>
        </BrowserRouter >
    )
}