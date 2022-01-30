
import  { React,useState,useEffect,Suspense,useRef }  from 'react';

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
    // Get the file Id
    let id = event.target.id;

    let file = event.target.files[0];

      setFiles([...files, file]);


  }
  // handle submit button for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(files);
  }

  return (

<form onSubmit={handleSubmit} className="upload--container">
     <h1> Multiple File Inputs with Signle Submit Button </h1>
     <div className="upload--button">
       <input
         onChange={onFileUpload}
         id={1}
         type="file"
       />
     </div>
     <div className="upload--button">
       <input
         onChange={onFileUpload}
         id={2}

         type="file"
       />
     </div>
     <div className="upload--button">
       <input
         onChange={onFileUpload}
         id={3}

         type="file"
       />
     </div>

       <button type="submit">Submit</button>

   </form>

  );
};
