import React from 'react'
import Label from './Label'
import { render } from '@testing-library/react'

const ListItems = () => {
  return (
    <div className="app-list">
        <div className="list-item">
        <hr />
        <div className="list-little">
            <h4>My Title One</h4>
        </div>
        <div className="list-descr">
            <h2>This is a very big description</h2>
        </div>
        <div className="list-label">
            <Label />
            <Label />
            <Label />
    
        </div>
        <hr />
        </div>
  </div>
  )
}


export default ListItems