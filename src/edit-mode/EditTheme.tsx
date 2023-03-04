import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

export const EditTheme: React.FC<Props> = (props) => {

    return (
        <div className="page-container vertical-space">
          <h3>change color theme</h3>
          <div className="palette-container">
            <p>light theme</p>
            <ul className="palette-list">
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
            </ul>
          </div>
        </div>     
  );
}

export default EditTheme;
