import React, {useEffect, useState} from 'react';
import './App.css';

import {FooContainer} from './components/Foo/Foo.container';

function App() {
  const [value, setValue] = useState('asd');

  useEffect(() => {
    setTimeout(() => {
      setValue('qwe');
    }, 2000);
  }, []);

  return (
    <div className='app'>
      <FooContainer value={value}/>
    </div>
  );
}

export default App;
