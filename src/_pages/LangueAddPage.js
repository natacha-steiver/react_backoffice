import React,{ useState,useEffect } from 'react';

import LangueAddForm from '../_components/Form/LangueAddForm';
import { useDispatch,useSelector } from 'react-redux';

import { history } from '../_helpers/history';
//import classes from './RegisterPage.module.scss';

const LangueAddPage = (props) => {




    return (

            <LangueAddForm />

    );
}

export default LangueAddPage;
