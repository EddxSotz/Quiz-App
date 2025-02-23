import React from 'react';
import quizLogo from '../assets/quiz-logo.png';

function Header() {
    return (
        <header>
            <img src={quizLogo} alt="Quiz App logo" />
            <h1>My React JS Quiz App</h1>
        </header>
    );
}

export default Header;