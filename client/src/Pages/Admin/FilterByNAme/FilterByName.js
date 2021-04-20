import React from 'react'
import { Form } from 'react-bootstrap'

import './FilterByNAme.css'

const FilterByName = ({setInputSearch}) => {

    return (
        <div className="inputFilter">
        <Form.Control type="text" placeholder="Enter user name ..."
          // className="inputFilter"
            onChange={(e)=>setInputSearch(e.target.value)}
        />
  
      </div>
    )
}

export default FilterByName
