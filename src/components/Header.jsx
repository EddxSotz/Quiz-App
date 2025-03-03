import React from 'react';
import quizLogo from '../assets/quiz-logo.png';
import Quiz from './Quiz';

function Header() {
    return (
        <>
        <header>
            <img src={quizLogo} alt="Quiz App logo" />
            <h1>My React JS Quiz App</h1>
        </header>
        <Quiz />
        </>
    );
}

export default Header;