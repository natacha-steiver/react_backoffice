import { crudConstants } from '../_constants/crudConstants';
import axios from "axios";
//import {store} from '../index';
import { history } from '../_helpers/history';
//------------------------------------------texts-------------------------------
//-------------------ADD-------------------
export{
  createTexts,
  createTextsSuccess ,
  updateTexts,
  updateTextsSuccess,
  deleteTextsSuccess,
  deleteTexts,
  fetchTexts,
  fetchAllTexts,
  createpage,
  createpageSuccess,
  updatepage,
  updatepageSuccess,
  deletepageSuccess,
  deletepage,
  fetchpages,
  fetchAllpages,
  set,
  createLangues,
  createLanguesSuccess ,
  updateLangues,
  updateLanguesSuccess,
  deleteLanguesSuccess,
  deleteLangues,
  fetchLangues,
  fetchAllLangues,
}
const set=(val)=>{
  return{
    type: 'set',
    sidebarShow: val
  }
}

 const createTexts = ({titre,contenu,page }) => {
  return (dispatch) => {
    return axios.post(`http://localhost:8000/api/texts`, {titre,contenu,page},{
      headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
    })
      .then(response => {

         dispatch(createTextsSuccess(response.data))

      })
      .catch(error => {

        throw(error);
      });
  };
};

const createTextsSuccess =  (data) => {

  return {
    type: crudConstants.ADD_TEXT,
    payload: {
      id: data.id,
      page:data.page,
      titre:data.titre,
      contenu:data.contenu

    }
  }
};

//-------------------UPDATE-------------------
    const updateTexts = (id,page,titre,contenu)=>{
      //console.log("page id:"+page);
    return (dispatch) => {
      return axios.put(`http://localhost:8000/api/texts/${id}`,{id:id,titre:titre,contenu:contenu,page:page},{
        headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
      })
      .then(response => {
          dispatch(updateTextsSuccess(response.data))
        })
        .catch(error => {

          alert("erreur, vérifiez les champs entrés");

          throw(error);
        });
    };
}

 const updateTextsSuccess =  (data) => {
  return {
    type: crudConstants.UPDATE_TEXT,
    payload: {
      id: data.id["id"],
      page:data.page,
      titre:data.titre,
      contenu:data.contenu,

    }
  }
};
//--------------DELETE---------------------------
  const deleteTextsSuccess = id => {
  return {
    type: crudConstants.DELETE_TEXT,
    payload: {
      id:id
    }
  }
}

  const deleteTexts = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `http://localhost:8000/api/texts/${id}`,
        data:{id:id},
        headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
}).then(response => {
        dispatch(deleteTextsSuccess(id));

      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
  const fetchTexts = (texts) => {
  return {
    type: crudConstants.FETCH_TEXT,
    payload:texts[0]
  }
};

  const fetchAllTexts = () => {
  return (dispatch) => {
    return axios.get('http://localhost:8000/api/texts',{
      headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
        })

      .then(res => {
        dispatch(fetchTexts(res.data))
      })
      .catch((error,res)=> {

        throw(error);
      });
  };
};


//---------------------------------page-----------
//------------------------------------------PAGES DES EXERCICES-------------------------------
//-------------------ADD-------------------
 const createpage = ({name,photo }) => {
  return (dispatch) => {

    return axios.post(`http://localhost:8000/api/pages`, {name,photo},{
      headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))
       }
    })
      .then(response => {

         dispatch(createpageSuccess(response.data))

      })
      .catch(error => {
        console.log(error)
        throw(error);
      });
  };
};

  const createpageSuccess =  (data) => {

  return {
    type: crudConstants.ADD_PAGE,
    payload: {
      id: data.id,
      photo:data.photo,
      name:data.name,
    }

  }
};

//-------------------UPDATE-------------------
  const updatepage = (id,photo,name)=>{



    return (dispatch) => {
      return axios.put(`http://localhost:8000/api/pages/${id}`,{id:id,photo:photo,name: name},{
        headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))
       }
      })
      .then(response => {
          dispatch(updatepageSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

  const updatepageSuccess =  (data) => {
  return {
    type: crudConstants.UPDATE_PAGE,
    payload: {
      id: data.id["id"],
      name: data.name,
      photo:data.photo,
    }
  }
};
//--------------DELETE---------------------------
  const deletepageSuccess = id => {

  return {
    type: crudConstants.DELETE_PAGE,
    payload: {
      id:id
    }
  }
}

  const deletepage = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `http://localhost:8000/api/pages/${id}`,
        data:{id:id},
        headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))
        }
}).then(response => {
        dispatch(deletepageSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
const fetchpages = (pages) => {
  return {
    type: crudConstants.FETCH_PAGE,
    payload: pages
  }
};

const fetchAllpages = () => {
  return (dispatch) => {
    return axios.get('http://localhost:8000/api/pages',{
      headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie)) }})
      .then(res => {

        dispatch(fetchpages(res.data))
      })
      .catch((error,res)=> {
        throw(error);
      });
  };
};

//---------------------------------fin page-------
//-----------------------Langues------------------------
const createLangues = ({name,iso,page }) => {
 return (dispatch) => {
   return axios.post(`http://localhost:8000/api/langues`, {name,iso,page:{names:["testa","hh","uu"],photo:["photo1","photo2","photo3"]}},{
     headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
       
   })
     .then(response => {

        dispatch(createLanguesSuccess(response.data))

     })
     .catch(error => {
       console.log(error)
       throw(error);
     });
 };
};

const createLanguesSuccess =  (data) => {

 return {
   type: crudConstants.ADD_LANGUE,
   payload: {
     id: data[0].id,
     page:data.page,
     name:data[0].name,
     iso:data[0].iso

   }
 }
};

//-------------------UPDATE-------------------
   const updateLangues = (id,pageID,pageName,photo,name,iso)=>{
   return (dispatch) => {
     return axios.put(`http://localhost:8000/api/langues/${id}`,{id:id,name:name,iso:iso,page:{id:pageID,name:pageName,photo:photo}},{
       headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie)) }
     })
     .then(response => {
         dispatch(updateLanguesSuccess(response.data))
       })
       .catch(error => {
         throw(error);
       });
   };
}

const updateLanguesSuccess =  (data) => {
 return {
   type: crudConstants.UPDATE_LANGUE,
   payload: {
     id: data.id["id"],
     page:data.page,
     name:data.name,
     iso:data.iso,

   }
 }
};
//--------------DELETE---------------------------
 const deleteLanguesSuccess = id => {
 return {
   type: crudConstants.DELETE_LANGUE,
   payload: {
     id:id
   }
 }
}

 const deleteLangues = id => {
 return (dispatch) => {
   return axios({
       method: 'delete',
       url: `http://localhost:8000/api/langues/${id}`,
       data:{id:id},
       headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie))}
}).then(response => {
       dispatch(deleteLanguesSuccess(id));

     })
     .catch(error => {
       throw(error);
     });
 };
};
//--------------GET ALL---------------------------
 const fetchLangues = (langues) => {
 return {
   type: crudConstants.FETCH_LANGUE,
   payload:langues
 }
};

 const fetchAllLangues = () => {
 return (dispatch) => {
   return axios.get('http://localhost:8000/api/langues',{
     headers:{'Authorization': "Bearer ".concat(JSON.parse(document.cookie)) }
       })

     .then(res => {
       dispatch(fetchLangues(res.data))
     })
     .catch((error,res)=> {


       throw(error);
     });
 };
};

//----------------------fin langues---------------------
