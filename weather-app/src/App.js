import React, { component } from 'react';
import Greeting from './components/Greeting';

class App extends component {
    render() {
   return (
      <div className="App">
          <Greeting name="Nick" />
     
    </div>
  );
}
}

export default App;
