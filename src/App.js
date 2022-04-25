import React from "react";
import BlogList from "./Components/Blog/BlogList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.js";
import "./Style/App.css";
import Tictactoe from "./Components/TicTacToe/Tictactoe.js";
import History from "./Components/TicTacToe/History.js";

function App() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                <div>
                    <Routes>
                        <Route exact path='/' element={<History />} />
                        <Route exact path='/blog' element={<BlogList />} />
                        <Route
                            exact
                            path='/tictactoe'
                            element={<Tictactoe />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
