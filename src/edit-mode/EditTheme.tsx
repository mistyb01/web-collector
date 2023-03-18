import React, {FormEvent, useState}  from 'react';

interface Props {
  updateTheme: Function,
  currentTheme: string
}

export const EditTheme: React.FC<Props> = (props) => {

    const [selectedTheme, setSelectedTheme] = useState(props.currentTheme);

    function handleSaveTheme(e: FormEvent) {
      e.preventDefault();
      props.updateTheme(selectedTheme)
    }

    return (
        <div className="page-container vertical-space">
          <h3>change color theme</h3>

          <form className='vertical-space' onSubmit={handleSaveTheme}>
           <h4>light themes</h4>
            <div className='horizontal-space'>
              <input type='radio' name='palette' id='light' value='light' checked={selectedTheme === 'light'}
                  onChange={(e) => setSelectedTheme(e.target.value)}/>
              <label htmlFor='light'>seafoam</label>
            </div>
            <div className='horizontal-space'>
              <input type='radio' name='palette' id='strawberry' value='strawberry' checked={selectedTheme === 'strawberry'} 
                  onChange={(e) => setSelectedTheme(e.target.value)}/>
              <label htmlFor='strawberry'>strawberry</label>
            </div>
            <div className='horizontal-space'>
              <input type='radio' name='palette' id='banana' value='banana' checked={selectedTheme === 'banana'} 
                  onChange={(e) => setSelectedTheme(e.target.value)}/>
              <label htmlFor='banana'>banana</label>
            </div>
            <hr/>
          <h4>dark themes</h4>
            <div className='horizontal-space'>
            <input type='radio' name='palette' id='dark' value='dark' checked={selectedTheme === 'dark'} 
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='dark'>deep sea abyss</label>
            </div>
            <div className='horizontal-space'>
            <input type='radio' name='palette' id='campfire' value='campfire' checked={selectedTheme === 'campfire'} 
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='campfire'>campfire</label>
            </div>
          <button type='submit'>save</button>
          </form>

        </div>     
  );
}

export default EditTheme;
