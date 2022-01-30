import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../../_actions/userActions';
//import { history } from '../../../_helpers/history';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

const Login = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const dispatch = useDispatch();
  const [emailNew, setEmail] = useState('');
  const [passwordNew, setPassword] = useState('');

  const history = useHistory();



  const routeChange = () =>{
    history.push('/dashboard');

  }

  const submits = () =>{

      dispatch(login(emailNew,passwordNew));
      setTimeout(() => {

     if(JSON.parse(localStorage.getItem("connecté"))===true){
         routeChange();
     }

   }, 3000);


  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type="button" onClick={()=>{submits()}}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Connectez-vous pour accèder au backoffice</p>
                    <Link to="/register">
                      <CButton color="primary" className="btn btn-success" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
