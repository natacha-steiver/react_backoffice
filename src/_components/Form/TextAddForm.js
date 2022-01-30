import {React,useEffect,useState} from 'react';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {Text} from "../_crudPage/text";
import { createTexts,fetchAllpages,fetchAllTexts,updateTexts,deleteTexts} from '../../_actions/crudActions';

const TextAddForm = () => {
    const dispatch = useDispatch();
    const texts = useSelector(state => state.texts);
    const pages = useSelector(state => state.pages);
    const [pageNew, setpage] = useState(pages);
    const [clickNew, setClick] = useState(false);
    const [showNew, setShow] = useState(false);

    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
            border: '1px solid red',
            color: 'red',
            }
        }
    }
    const triggerClick =e=>{
    setClick(true);

          dispatch(fetchAllTexts());
          dispatch(fetchAllpages());

      }
      setTimeout(()=>{
         setShow(true);
      },1700);

     useEffect((e) => {
         triggerClick();
         setClick(false);



       },[clickNew]);

    return (
        <section id="textAddForm" className="app-about-section angle-sp" style={{marginTop:"20px", paddingTop: '0'}}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12" >
                        <div className="col-md-12 col-lg-12" style={{background: `#ffffff none repeat scroll 0 0`, boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',padding: "30px"}}>
                        <p><span className="doubleLine-title" style={{textAlign:"left", color:"#ff063c", fontWeight:"300", fontSize:"2em", paddingBottom: '30px'}}>Texts</span><span style={{clear:'both'}}></span></p>
                            <Formik
                                initialValues={{titre: '', contenu: '',page:''}}
                                validationSchema={Yup.object({
                                  titre: Yup.string()
                                        .trim()
                                        .matches(/^[A-Za-z- ]+$/, { message: <p className="errorMessage">Please only type in letters, white spaces and "-"</p> })
                                        // .max(15, 'Must be 15 characters or less')
                                        .required(<p className="errorMessage">This field is required</p>),
                                    contenu: Yup.string()
                                        .trim()
                                        // .max(20, 'Must be 20 characters or less')
                                        .matches(/^[A-Za-z- ]+$/, { message: <p className="errorMessage">Please only type in letters, white spaces and "-"</p> })
                                        .required(<p className="errorMessage">Required</p>),
                                    page: Yup.number()
                                    .min(1,<p className="errorMessage">error</p>)
                                    .required(<p className="errorMessage">This field is required</p>),





                                })}
                            onSubmit={(values, { setSubmitting }) => {

                                    dispatch(createTexts(values));
                            }}
                            >
                                {(props) =>
                                    <Form className="col-lg-12 justify-content-center">
                                        {/* <div className="col-lg-12"> */}
                                        <div className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                            <label htmlFor="titre">Titre</label>
                                            <Field name="titre" type="text" className="form-control" />
                                            <ErrorMessage name="titre" />
                                        </div>
                                        <div className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                            <label htmlFor="contenu">contenu</label>
                                            <Field name="contenu" type="text" className="form-control" />
                                            <ErrorMessage name="contenu" />
                                        </div>

                                        <div className="form-group col-lg-6" style={{ color:"#3d009e" }}>
                                        <label htmlFor="" className="label-row">page:</label>
                                        {/*faire un select puis renvoyé id du Page*/}

                                        <Field as="select" name="page" className="form-control">

                                                  {pages.map((pages,idx) => {
                                                      return (<option
                                                          selected
                                                          value={parseInt(pages.id)}
                                                          key={idx}
                                                      >
                                                          {pages.name}
                                                      </option>
                                                      );
                                                  })}
                                              </Field>
                                              <ErrorMessage name="page" />

                                        </div>

                                        <button className="btn btn-primary d-block"  style={{margin:"1em auto"}} type="submit">add text</button>

                                    </Form>
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>

          {  showNew==true && <div>

            <button style={{display:"none"}}className="btn btn-primary" onClick={()=>{
              dispatch(fetchAllTexts());

            }}>voir</button>


            {


           typeof(pages)=="undefined"?console.log("error"):
          texts.length>0 && texts.map((text,index )=> {
            return (

              <Text text={text} pages={pages}  key={index} dispatch={dispatch} />

            );
          })


        }


            </div>}
        </section>

   );
};

export default TextAddForm;
