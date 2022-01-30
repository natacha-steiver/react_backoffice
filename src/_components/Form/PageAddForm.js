import {React,useEffect,useState} from 'react';
//import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
//import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {Page} from "../_crudPage/page";
import { createpage,fetchAllpages,updatepage,deletepage} from '../../_actions/crudActions';
import { crudConstants } from '../../_constants/crudConstants';
import { useForm } from "react-hook-form";

const ConsoAddForm = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.pages);
    const [clickNew, setClick] = useState(false);
    const [showNew, setShow] = useState(false);
    const [photoNew, setphoto] = useState([]);
    const [nameNew, setname] = useState('');
    const triggerClick =e=>{
    setClick(true);
          dispatch(fetchAllpages());
      }

      setTimeout(()=>{
         setShow(true);
      },1700)

     useEffect((e) => {

         triggerClick();
         setClick(false);
       },[clickNew]);

       const { register, handleSubmit } = useForm();

        const onSubmit = async(data) => {
          //console.log(data)
          let formdata = new FormData()
          formdata.append('photo', data["image"][0]);
          formdata.append('name',nameNew );
           const res= await fetch("http://localhost:8000/api/pages",{method:'POST',headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))},body:formdata}).then(response=>
             {
               response.json().then(json => {
                 //console.log(json);
                  dispatch({
                    type: crudConstants.ADD_PAGE,
                    payload: {
                      id: json.id,
                      name:json.name,
                      photo:json.photo,
                    }

                  })
               });


             }
           )

        };


    return (
        <section id="pageAddForm" className="app-about-section angle-sp" style={{marginTop:"20em", paddingTop: '0'}}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12" style={{ marginTop:"-70px"}}>
                        <div className="col-md-12 col-lg-12" style={{background: `#ffffff none repeat scroll 0 0`, boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',padding: "30px"}}>
                        <p><span className="doubleLine-title" style={{textAlign:"left", color:"#ff063c", fontWeight:"300", fontSize:"2em", paddingBottom: '30px'}}>Pages</span><span style={{clear:'both'}}></span></p>




                                    <form onSubmit={handleSubmit(onSubmit)} id="form"  encType="multipart/form-data"  className="col-lg-12 justify-content-center">
                                        {/* <div className="col-lg-12"> */}
                                        <div  className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                            <label htmlFor="name">Nom</label>
                                            <input name="name" type="text"  onChange={event => setname(event.target.value)}/>
                                        </div>
                                        <div  className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                          {/*  <label htmlFor="photo">Photo</label>
                                            <Field name="photo" type="text" className="form-control" />
                                            <ErrorMessage name="photo" />
                                          */}
                                          <input
                                           type="file"

                                             id="image"

                                             ref={register}
                                             name="image"
                                             multiple={false}
                                             onChange={event => setphoto(event.target.files[0])}
                                           />
                                        </div>
                                        <button  type="submit" className="btn btn-primary d-block" style={{margin:"1em auto"}} >add page</button>

                                    </form>


                        </div>
                    </div>
                </div>
            </div>

          {  showNew==true &&    <div>

            <button style={{display:"none"}}  className="btn btn-primary" onClick={()=>{
              dispatch(fetchAllpages());
              console.log("page1:"+JSON.stringify(pages));

            }}>voir</button>
                {


                  pages.length>0  && pages.map((page,index )=> {
                    return (

                      <Page page={page } key={page.id} pages={pages} dispatch={dispatch} />

                    );
                  })



            }

            </div>}
        </section>

   );
};

export default ConsoAddForm;
