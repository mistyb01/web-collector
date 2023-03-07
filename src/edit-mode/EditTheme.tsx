import React, {FormEvent, useState}  from 'react';
import { Link } from 'react-router-dom';

interface Props {
  updateTheme: Function
}

export const EditTheme: React.FC<Props> = (props) => {

    const [selectedTheme, setSelectedTheme] = useState('light');

    function handleSaveTheme(e: FormEvent) {
      e.preventDefault();
      props.updateTheme(selectedTheme)
    }

    return (
        <div className="page-container vertical-space">
          <h3>change color theme</h3>
          <form className='vertical-space' onSubmit={handleSaveTheme}>
          <div className="palette-container horizontal-space">
            <input type='radio' name='palette' id='light' value='light' checked={selectedTheme === 'light'}
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='light'>light</label>
            {/* <ul className="palette-list">
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
            </ul> */}
          </div>

          <div className="palette-container horizontal-space">
            <input type='radio' name='palette' id='dark' value='dark' checked={selectedTheme === 'dark'} 
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='dark'>dark</label>
          </div>
          <button type='submit'>save</button>
          </form>

        </div>     
  );
}

export default EditTheme;
