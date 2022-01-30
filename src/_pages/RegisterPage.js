import React,{ useState,useEffect } from 'react';

import RegisterForm from '../_components/Form/RegisterForm';
import { useDispatch,useSelector } from 'react-redux';

import { history } from '../_helpers/history';
//import classes from './RegisterPage.module.scss';

const RegisterPage = (props) => {
    const role = useSelector(state => state.authentication.roles);

    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        if (typeof role !== 'undefined') {
            if (role.includes('Super Admin')) {
                setIsAdmin(true);
            }
            if (role.includes('User Manager')) {
                setIsAdmin(false);
                history.push('/');
            }
        }
    },[]);

    return (

            <RegisterForm />

    );
}

export default RegisterPage;
