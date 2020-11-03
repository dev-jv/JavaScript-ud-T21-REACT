// ----------------------------------------- <> 1

// import React from 'react';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Header/>
//       <Header/>
//       <Header/>
//       <Header/>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------- <> 2

import React, {Fragment} from 'react';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header/>
      <Header/>
      <Header/>
      <Header/>
      <Header/>
    </Fragment>
  );
}

export default App;