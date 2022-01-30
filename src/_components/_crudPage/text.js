
import  { React,useState,useEffect }  from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {updateTexts,deleteTexts,fetchAllTexts,fetchAllpages} from '../../_actions/crudActions';
import "./scss/form.scss";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  //maxWidth: '90%',
  borderRadius: '7px'
};

export const Text=({ text: { titre,contenu, page,id },pages, dispatch }) => {

  const [titreNew, setTitre] = useState('');
  const [contenuNew, setContenu] = useState('');
  const [pageNew, setpage] = useState(page);
  const [showNew, setShow] = useState(false);

  setTimeout(()=>{
     setShow(true);
  },1700)

  return (
    showNew && <div style={ styles } className="container">
{      /*<h2>{ name }</h2>
      <p>{ contenu }</p>
  <p>page: { page }</p>
*/}

      <form className="container col-lg-12 justify-content-center">
      <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="titre" className="label-row ">Titre:</label>
      <input type="text" name="titre"  placeholder={titre}  onChange={event => setTitre(event.target.value)}/>
      </div>

      <div className="form-group col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="contenu" className="label-row">contenu:</label>
      <input type="text" name="contenu"  placeholder={contenu}    onChange={event => setContenu(event.target.value)}/>

      </div>

      <div className="form-group  col-lg-4 d-xs-block d-md-inline-block group-align" >
      <label htmlFor="" className="label-row">page:</label>
      {/*faire un select puis renvoyé id du page*/}

      <select id="page_select" name="page"  onChange={event => setpage(parseInt(event.target.value))} page={pageNew}  value={pageNew}>
      {


        pages!=null && pages.map((page,index )=> {
          return (
            <option value={page.id} key={page.id}>{page.name}</option>

          );
        })

  }


      </select>

      </div>


      </form>


      <button style={{marginRight:"1em"}} className="btn btn-danger" type="button" onClick={() =>{ dispatch(deleteTexts(id))

      }} >
        Remove
      </button>


      <button className="btn btn-success" type="button" onClick={() =>
    {    
     // alert(JSON.stringify(id))
      dispatch(updateTexts(id,pageNew,titreNew,contenuNew))
      //issue update stop fetch data so add this below

    }
        } >
        Update
      </button>


    </div>
  );
};
