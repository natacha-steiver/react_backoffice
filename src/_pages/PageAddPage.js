import React,{ useState,useEffect } from 'react';

import PageAddForm from '../_components/Form/PageAddForm';
import { useDispatch,useSelector } from 'react-redux';

import { history } from '../_helpers/history';
//import classes from './RegisterPage.module.scss';

const PageAddPage = (props) => {




    return (

            <PageAddForm />

    );
}

export default PageAddPage;
