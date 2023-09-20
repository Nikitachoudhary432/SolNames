import 'styles/bases.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';
import { Blockchain } from './containers/global';
import { CustomToastContainer } from './components/toast/ToastContainer';
import NotFound from './containers/notFound/NotFound';
import { Header } from './components/header';

export function App() {
  return (
    <Router>
      <>
        <CustomToastContainer />
        <Header />
        <Blockchain />

        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export function WrappedApp() {
  return <App />;
}
