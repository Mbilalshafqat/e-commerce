import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    const Layout = () => {
        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                <Outlet />
                <Footer />
            </ThemeProvider>
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
