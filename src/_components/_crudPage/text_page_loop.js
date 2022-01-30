
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

export const PageLoop=({page: { name,photo,id },dispatch }) => {
  //pagele.log(exercice)
  const [pageNew, setpage] = useState(name);




  return (
    <div style={ styles } className="container">
      <h2>{ name }</h2>
      <p>{ photo }</p>
      <p>page   id: { id }</p>


      <select id="page_select" name="page"  onChange={event => setpage(parseInt(event.target.value))} page={pageNew}>

            <option value={id} >{name}</option>



      </select>
    </div>
  );
};
