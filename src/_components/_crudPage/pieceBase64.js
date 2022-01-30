
import  { React,useState,useEffect,Suspense,useRef }  from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {updatePieces,deletePieces,fetchAllPieces} from '../../_actions/crudActions';
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

export const Piece=({ piece: { piece_name,piece_nombre,piece_id},consommateurs, dispatch }) => {
  //console.log(exercice)




  //const consommateurs = useSelector(state => state.consommateurs.conso);

  const [nameNew, setName] = useState('');
  const [nombreNew, setNombre] = useState('');
  const [consommateurNew, setconsommateur] = useState('');
  const [showNew, setShow] = useState(false);
  const [namesNew, setNames] = useState('');
  const [photoNew, setphoto] = useState('');
  const [updateNew, setupdate] = useState(false);
  const [deleteNew, setdelete] = useState(false);
  const [imgNew, setimg] = useState(consommateurs);
  const [files, setFiles] = useState([]);
  function onFileUpload(event) {
    event.preventDefault();
    // Get the file Id
    let id = event.target.id;
    // Create an instance of FileReader API
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = event.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
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
