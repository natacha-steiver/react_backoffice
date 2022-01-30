
import React, { useState,Suspense }  from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {updatepage,deletepage,fetchAllpages} from '../../_actions/crudActions';
import "./scss/form.scss";
import { useForm } from "react-hook-form";
import { crudConstants } from '../../_constants/crudConstants';
import {useImage} from 'react-image';
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  //maxWidth: '90%',
  borderRadius: '7px'
};
function MyImageComponent(props) {
  const {src} = useImage({
    srcList: `http://localhost:8000/images/${props.imgNew}`,
  })

  return <img src={src} style={{maxWidth:"5rem"}}/>
}
export const Page=({ page: { name,photo, id },pages, dispatch }) => {

  const [namesNew, setNames] = useState('');
  const [photosNew, setphotos] = useState('');
  const [pageNew, setpage] = useState('');
  const [updateNew, setupdate] = useState(false);
  const [deleteNew, setdelete] = useState(false);
  const [imgNew, setimg] = useState(photo);
  const { register, handleSubmit } = useForm();

  
 

  const onSubmit = async(data) => {
    let formdatas = new FormData()
    formdatas.append('photo', data["image"][0]);
    formdatas.append('name',namesNew );
    formdatas.append('id',id );
    if(updateNew==true){
      const res= await fetch(`http://localhost:8000/api/pages`,{method:'POST',headers: {
               Accept: 'application/json',  'Authorization': "Bearer ".concat(JSON.parse(document.cookie))
             },body:formdatas}).then(response=>
        {
          response.json().then(json => {
          if(typeof(json["exception"])!="undefined" || typeof(json["errors"])!="undefined"){
                      alert("erreur, vérifiez les champs entrés");
          }else{
            setimg(json.photo);
             dispatch({
               type: crudConstants.UPDATE_PAGE,
               payload: {
                 id: json.id,
                 name:json.name,
                 photo:json.photo,
               }

             })
          }

          });


        }
      )

    }
          setupdate(false);
     setdelete(false);
  };


  return (
    <div style={ styles } className="container">
{      /*<h2>{ name }</h2>
      <p>{ puissance }</p>
  <p>page: { page }</p>
*/}

      <form onSubmit={handleSubmit(onSubmit)}  encType="multipart/form-data" className="container col-lg-12 justify-content-center">
      <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="name" className="label-row ">Name:</label>
      <input type="text" name="name"  placeholder={name}  onChange={event => setNames(event.target.value)}/>

      </div>

      <div className="form-group col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="photo" className="label-row" style={{display:"none"}}>photo:</label>

      <Suspense fallback={<div>Loading... </div>}>
          <MyImageComponent imgNew={imgNew} />
        </Suspense>
      <input
       type="file"

         id="image"

         ref={register}
         name="image"
         multiple={false}
         onChange={event => setphotos(event.target.files[0])}
       />
      </div>

      <button style={{marginRight:"1em"}} className="btn btn-danger" type="submit" onClick={() =>{
        setupdate(false);
        setdelete(true);

        dispatch(deletepage(id));

      }} >
        Remove
      </button>


      <button className="btn btn-success" type="submit" onClick={() =>
    {

      setupdate(true);
      setdelete(false);
    }

        } >
        Update
      </button>


      </form>





    </div>
  );
};
