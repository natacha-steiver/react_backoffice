import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { useHistory } from "react-router-dom";



const WidgetsDropdown = () => {
  const history = useHistory();

    const routeChange = () =>{
      let path = `/backoffice/pages`;
      history.push(path);
    }
    const routeChangeTexts= () =>{
      let path = `/backoffice/texts`;
      history.push(path);
    }

    const routeChangeLangues= () =>{
      let path = `/backoffice/langues`;
      history.push(path);
    }
  // render
  return (
    <CRow>
      <CCol sm="4" lg="4" onClick={routeChange}>
        <CWidgetDropdown
          style={{height:"10em"}}
          color="gradient-primary"
          header="Pages"
          text="ajouter-supprimer-modifier"

        >
          <CDropdown>


          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="4" lg="4" onClick={routeChangeTexts}>
        <CWidgetDropdown
          style={{height:"10em"}}
          color="gradient-info"
          header="Texts"
          text="ajouter-supprimer-modifier"

        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="4" lg="4" onClick={routeChangeLangues}>
        <CWidgetDropdown
          style={{height:"10em"}}
          color="gradient-info"
          header="Langues"
          text="ajouter-supprimer-modifier"

        >

        </CWidgetDropdown>
      </CCol>




    </CRow>
  )
}

export default WidgetsDropdown
