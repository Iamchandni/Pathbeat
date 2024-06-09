import React from "react"; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Description from './page/Description';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path="/Description/:id" element={<Description />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;