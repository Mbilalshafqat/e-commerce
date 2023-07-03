import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Container from './components/Container/Container';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    const Layout = () => {
        return (
            <Container>
                <Outlet />
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
                { path: '/policy', element: <Policy /> },
                { path: '*', element: <PageNotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
