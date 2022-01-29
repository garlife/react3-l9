import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Redirect, Navigate, useParams } from 'react-router-dom';

const HomePage = (props) => {
    return (<div>HomePage</div>);
}

const AboutPage = (props) => {
    const { id } = useParams()
    return (<div>AboutPage {id}</div>);
}

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about/34">About 34</Link></li>
                        <li><Link to="/other">Other</Link></li>
                        <li><Link to="/asdasdas">aa</Link></li>                        
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/other" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<Navigate to="/about" replace />} />
                    <Route path="/about/:id" element={<AboutPage /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )

}

export default App;