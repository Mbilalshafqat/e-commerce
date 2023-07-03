import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Container from './components/Container/Container';

const App = () => {
    const Layout = () => {
        return (
            <Container>
                <Navbar />
                <Outlet />
                <Footer />
            </Container>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/contact', element: <Contact /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
