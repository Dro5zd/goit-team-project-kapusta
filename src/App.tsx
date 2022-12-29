import {useAppDispatch, useAppSelector} from './redux/store';
import {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import {Layout} from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Report from './pages/Report/Report';
import {Loader} from './components/Loader/Loader';

import GlobalStyle from './globalStyles';
import Expenses from './pages/Expenses/Expenses';
import Income from './pages/Income/Income';
import {Header} from './components/Header/Header';
import {PublicRoute} from './components/PublicRoute/PublicRoute';
import {getUser} from './redux/auth/auth-operations';
import {selectIsLoading} from './redux/auth/auth-selectors';
import {selectIsLoadingTransaction} from './redux/transaction/transactions-selectors';
import {addToken} from './redux/auth/authSlice';
import {changeAccessToken} from './http/services.user';
import {toast} from 'react-toastify';

export const App = () => {
    /*eslint-disable */
    const urlSearchParams = new URLSearchParams(location.search);
    const dispatch = useAppDispatch();
    const accessToken = urlSearchParams.get('accessToken');
    const isLoading = useAppSelector(selectIsLoading);
    const isLoadingTrx = useAppSelector(selectIsLoadingTransaction);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (accessToken) {
            changeAccessToken(accessToken)
                .then(() => {
                    // @ts-ignore
                    dispatch(addToken(accessToken)).unwrap();
                })
                .then(() => dispatch(getUser()))
                .catch(() => toast.error('Error'));

            if (location.pathname === '/') {
                location.pathname = '/goit-team-project-kapusta/home';
                /*eslint-enable */
            }
        }
    }, [accessToken]);

    return (
        <BrowserRouter basename="goit-team-project-kapusta">
            <div>
                <Loader isLoading={isLoading || isLoadingTrx}/>
                <GlobalStyle/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route
                            index
                            element={
                                <PublicRoute redirectTo="/home">
                                    <Login/>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute redirectTo="/home">
                                    <Register/>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute redirectTo="/home">
                                    <Login/>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute>
                                    <Home/>
                                </PrivateRoute>
                            }
                        >
                            {/* <Route index element={<Expenses />} /> */}
                            <Route index element={<Navigate to="/home/expenses"/>}/>
                            <Route path="expenses" element={<Expenses/>}/>
                            <Route path="income" element={<Income/>}/>
                        </Route>
                        <Route
                            path="/report"
                            element={
                                <PrivateRoute>
                                    <Report/>
                                </PrivateRoute>
                            }
                        />
                        <Route path="/*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
