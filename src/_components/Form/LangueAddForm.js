import {React,useEffect,useState} from 'react';
//import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
//import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {Page} from "../_crudPage/page";
import {Langue} from "../_crudPage/langue";
import { createLangues,fetchAllLangues,updateLangues,deleteLangues} from '../../_actions/crudActions';
import { crudConstants } from '../../_constants/crudConstants';
import { useForm } from "react-hook-form";

const LangueAddForm = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.pages);
    const langues = useSelector(state => state.langues);
    const [clickNew, setClick] = useState(false);
    const [showNew, setShow] = useState(false);
    const [addNew, setAdd] = useState(false);
    const [photoNew, setphoto] = useState([]);
    const [nameNew, setname] = useState('');
    const [nameAppNew, setnameApp] = useState('');
    const [isoNew, setiso] = useState('');
    const triggerClick =e=>{
    setClick(true);
          dispatch(fetchAllLangues());
      }

      setTimeout(()=>{
         setShow(true);
      },1700)

     useEffect((e) => {

         triggerClick();
         setClick(false);
       },[clickNew]);

       const keyPress=(event)=>{
         if(event.key === 'Enter'){
           event.preventDefault();

            setname([...nameNew,event.target.value]);
            //console.log('nameNew'+nameNew);

           }
       }

       const { register, handleSubmit } = useForm();

        const onSubmit = async(data) => {
          console.log(data)





          let formdata = new FormData();
          Array.from(data["image"]).map((el,i)=>{
            formdata.append('photo'+i, el);
          })

          formdata.append('name',nameAppNew);
          let short_name ="";
          short_name=nameAppNew.replace(/[^A-Z0-9]/ig, "_");
          formdata.append('short_name',short_name);
          formdata.append('iso',isoNew);
          formdata.append('page',JSON.stringify({names:nameNew}));
          console.log(formdata.getAll("photos"));

          const res= await fetch("http://localhost:8000/api/langues",{method:'POST',headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie)),
                  'Content-Type': 'application/x-www-form-urlencoded'},body:formdata}).then(response=>
            {
              response.json().then(json => {
              //  console.log(json[json.length-1]);
                 dispatch({
                   type: crudConstants.ADD_LANGUE,
                   payload: json[json.length-1]


                 });

              });


            }
          )


        };


    return (
        <section id="langueAddForm" className="app-about-section angle-sp" style={{marginTop:"20em", paddingTop: '0'}}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12" style={{ marginTop:"-70px"}}>
                        <div className="col-md-12 col-lg-12" style={{background: `#ffffff none repeat scroll 0 0`, boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',padding: "30px"}}>
                        <p><span className="doubleLine-title" style={{textAlign:"left", color:"#ff063c", fontWeight:"300", fontSize:"2em", paddingBottom: '30px'}}>langues</span><span> (ajouter 2 pages minimum avec leur photo respective (!à l'ordre d'ajout des photos inversé))</span><span style={{clear:'both'}}></span></p>




                                    <form onSubmit={handleSubmit(onSubmit)} id="form"  encType="multipart/form-data"  className="col-lg-12 justify-content-center">
                                        {/* <div className="col-lg-12"> */}
                                        <div  className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                        <label htmlFor="nameApp">Nom de la langue</label>
                                        <input name="nameApp" type="text"   onBlur={event=>setnameApp(event.target.value)}/>

                                        </div>

                                        <div  className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>
                                        <label htmlFor="iso">ISO de la langue </label>
                                        <input name="iso" type="text"   onBlur={event=>setiso(event.target.value)}/>

                                        </div>
                                        <div  className="form-group col-lg-6 d-md-inline-block" style={{ color:"#3d009e" }}>

                                            <h4>Pages:</h4>
                                            <label htmlFor="name">Nom</label>
                                            <input name="name" type="text"   onKeyPress={event=>keyPress(event)}/>


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
                                             multiple={true}
                                             onBlur={event =>  setphoto([...photoNew,event.target.files[0]])}

                                           />

                                        </div>
                                        <div>
                                        <p>Vos pages:</p>
                                        {Array.from(nameNew).map((el,i)=>{
                                          return (
                                            <div key={i+"conso"}>
                                            <li key={i}>{el}</li>
                                            </div>
                                          );
                                        })

                                        }
                                        </div>
                                        <button  type="submit" className="btn btn-primary d-block" style={{margin:"1em auto"}} >Créer</button>

                                    </form>


                        </div>
                    </div>
                </div>
            </div>

          {  showNew==true &&    <div>

            <button style={{display:"none"}}  className="btn btn-primary" onClick={()=>{
              dispatch(fetchAllLangues());
              console.log("conso1:"+JSON.stringify(pages));

            }}>voir</button>

            {



          langues.length>0 && langues.map((langue,index )=> {
            return (

              <Langue langue={langue}  pages={langue[0]} key={index} dispatch={dispatch} />

            );
          })


          }




            </div>}
        </section>

   );
};

export default LangueAddForm;
