import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation";
import ExpandingCard from "./s01/ExpandingCard";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path='/' element={<Navigation />}>*/}
            <Route path='/s01' element={<ExpandingCard />}/>
        {/*</Route>*/}
      </Routes>
    </div>
  );
}

export default App;
