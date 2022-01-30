import React,{useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from 'react-redux';
import { register,login} from '../../../_actions/userActions';
import { Link,useHistory } from 'react-router-dom'


const Register = () => {

  const loggingIn = useSelector(state => state.authentication.loggedIn);
  const dispatch = useDispatch();
  const [emailNew, setEmail] = useState('');
  const [passwordNew, setPassword] = useState('');
  const [usernameNew, setUsername] = useState('');
  const [repeatNew, setRepeat] = useState('');

  const history = useHistory();

    const routeChange = () =>{
      let path = `/`;
      history.push(path);
    }
  const submits = () =>{
      dispatch(register(emailNew,usernameNew,passwordNew,repeatNew));
      dispatch(login(emailNew,passwordNew));
             loggingIn===true?
             localStorage.setItem("connecté","true")
             :  localStorage.setItem("connecté","false");
        if(localStorage.getItem("connecté")=="true"){
          routeChange();
        }
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" name="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" name="repeatpassword" onChange={(e)=>{setRepeat(e.target.value)}}/>
                  </CInputGroup>
                  <CButton color="success" block type="button" onClick={()=>{submits()}}>Create Account</CButton>
                </CForm>
              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
