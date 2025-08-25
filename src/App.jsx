// src/App.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Contacts from './pages/Contact';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div>Refreshing user...</div>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
        />
      </Routes>
    </Layout>
  );
}
