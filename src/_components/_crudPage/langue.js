
import  { React,useState,useEffect,Suspense }  from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {updateLangues,deleteLangues,fetchAllLangues} from '../../_actions/crudActions';
import "./scss/form.scss";

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

export const Langue=({ langue: { langue_name,langue_iso,langue_id},pages, dispatch }) => {
  //console.log(exercice)




  //const pages = useSelector(state => state.pages.conso);

  const [nameNew, setName] = useState('');
  const [isoNew, setiso] = useState('');
  const [pageNew, setpage] = useState('');
  const [showNew, setShow] = useState(false);
  const [namesNew, setNames] = useState('');
  const [photoNew, setphoto] = useState('');
  const [updateNew, setupdate] = useState(false);
  const [deleteNew, setdelete] = useState(false);
  const [imgNew, setimg] = useState(pages);
  const [files, setFiles] = useState([]);

  function onFileUpload(event) {
    event.preventDefault();
    let file = event.target.files[0];
  //  console.log(files);
    if(pages.length<files.length){
      setFiles([...files, file].slice(files.length-pages.length+1,files.length+1));

    }else{
      setFiles([...files, file]);

    }

  }
  // handle submit button for form
  async function handleSubmit(e) {
    e.preventDefault();



    //formdatas files à faire
    let formdatas = new FormData();

      console.log(files);

      files.map((el,i)=>{
        formdatas.append('photo'+i, el);
      })



    formdatas.append('name',nameNew );
    let short_name ="";
    short_name=nameNew.replace(/[^A-Z0-9]/ig, "_");
    formdatas.append('short_name',short_name);
    formdatas.append('iso',isoNew );
    let longueur=pages.length;

    if(namesNew.length>longueur){
      formdatas.append('name_page',JSON.stringify(namesNew.slice(namesNew.length-longueur,namesNew.length)) );
      formdatas.append('id_page',JSON.stringify(pageNew.slice(pageNew.length-longueur,pageNew.length)) );
    }else{
      formdatas.append('name_page',JSON.stringify(namesNew) );
      formdatas.append('id_page',JSON.stringify(pageNew) );
    }

    formdatas.append('id',langue_id );


      const res= await fetch(`http://localhost:8000/api/langues`,{method:'POST',headers: {
               Accept: 'application/json',
             },body:formdatas}).then(response=>
        {
          response.json().then(json => {
            //console.log(json);
            if(typeof(json["exception"])!="undefined"){
            alert("erreur, vérifiez les champs entrés");
            }else{
              setimg(json[0].photo);
               dispatch({
                 type: crudConstants.UPDATE_LANGUE,
                 payload: json[0]

               })
            }

          });


        }
      ).catch(error=>{
        console.log("error")
      });


     setupdate(false);
     setdelete(false);
  }






  setTimeout(()=>{
     setShow(true);
  },1700)

  return (
    showNew && <div style={ styles } className="container">
{      /*<h2>{ name }</h2>
      <p>{ iso }</p>
  <p>page: { page }</p>
*/}

      <form onSubmit={handleSubmit}  encType="multipart/form-data" className="container col-lg-12 justify-content-center">
      <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="" className="label-row ">Nom de la langue:</label>
      <input type="text" name="name"  placeholder={langue_name}  onChange={event => setName(event.target.value)}/>
      </div>

      <div className="form-group col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="" className="label-row">ISO de la langue:</label>
      <input type="text" name="iso"  placeholder={langue_iso}    onChange={event => setiso(event.target.value)}/>

      </div>

      <div className="form-group col-lg-12 d-xs-block d-md-inline-block group-align" >
      <h4>pages  liés:</h4>
      {Array.from(pages).map((el,i)=>{
        return(
          <div key={"container"+i}>
          <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align"  style={{display:"inline-block"}}>
          <label htmlFor="name">Nom</label>
          <input name={el["name"]} placeholder={el["name"]} type="text"   onBlur={event=>{      event.preventDefault();

                 setNames([...namesNew,event.target.value]);
                 setpage([...pageNew,el["id"]]);
                 console.log('nameNew'+nameNew+"ids:"+pageNew);
}}/>

          <label htmlFor="photo" className="label-row" style={{display:"none"}}>photo:</label>

      <img src={`http://localhost:8000/images/${el['photo']}`} alt={el['photo']} style={{marginLeft:"1em",maxWidth:"5rem"}}/>

          </div>
      <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align" >

      <label htmlFor="photo" className="label-row" style={{display:"none"}}>photo:</label>

      <input
       type="file"

         id={el['id']}
         name="image"
         multiple={true}
         onChange={onFileUpload}
         style={{marginBottom:"2em",marginLeft:"2em"}}

       />


          </div>

          </div>
        )
      }) }



      </div>

      <button style={{marginRight:"1em",marginLeft:"1em"}} className="btn btn-danger" type="button" onClick={() =>{
        setupdate(false);
        setdelete(true);
         dispatch(deleteLangues(langue_id))

      }} >
        Remove
      </button>


      <button className="btn btn-success" type="submit" onClick={() =>
    {
      setupdate(true);
      setdelete(false);
      console.log(updateNew);

    }
        } >
        Update
      </button>
      </form>





    </div>
  );
};
