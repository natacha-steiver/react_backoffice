import { userConstants } from '../_constants/userConstants';
import axios from "axios";
//import { userService } from '../_services/userService';
//import { alertActions } from './alertActions';
//
import { history } from '../_helpers/history';

export const login = (email,password) => {
  return (dispatch) => {
    //console.log("test axios:"+email+password);
    return axios.post(`api/login`, {email:email,password:password},{
      headers:{'Content-Type':'application/json'}
    })


      .then(response => {
          console.log("test login"+JSON.stringify(response));
          if(response.data.message){
            let bool = false;
            localStorage.setItem("connecté",JSON.stringify(bool));

            dispatch(loginFailure("error"));
          }else{
            dispatch(loginSuccess(response.data.user));
            let bool = true;
            localStorage.setItem("connecté",JSON.stringify(bool));
            document.cookie =JSON.stringify(response.data.access_token);
            axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.access_token;
          }


      })
      .catch(error => {
        console.log(error);
        let bool = false;
        localStorage.setItem("connecté",JSON.stringify(bool));
        dispatch(loginFailure(JSON.stringify(error)));
        throw(error);
      });
  };
};

 const loginSuccess =  (data) => {

  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: data
  }
};

const loginFailure =  (error) => {

 return {
   type: userConstants.LOGIN_FAILURE,
   payload: error
 }
};

const registerFailure =  (error) => {

 return {
   type: userConstants.REGISTER_FAILURE,
   payload: error
 }
};
//prévoir failure si existe alors login redirect
export const register = (email,username,password,repeat) => {

  return (dispatch) => {
    return axios.post(`api/register`, {email:email,name:username,password:password,password_confirmation:repeat},{
      headers:{'Content-Type':'application/json'}
    })


      .then(response => {
          console.log("test register"+JSON.stringify(response));


         if(response.data.message){

           dispatch(registerFailure(JSON.stringify(response.data.message)));

         }else{
           dispatch(registerSuccess(response.data.user))

         }

      })
      .catch(error => {
        dispatch(registerFailure(JSON.stringify(error)));
        console.log(error);
        throw(error);
      });
  };
};

 const registerSuccess =  (data) => {

  return {
    type: userConstants.REGISTER_SUCCESS,
    payload: data
  }
};
