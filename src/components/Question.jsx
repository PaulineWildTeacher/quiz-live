import { useState } from "react";
import './Question.css'

/* eslint-disable react/prop-types */
function Question({question, responses, onAnswerClick}) {
    const [selectedResponse, setSelectedResponse] = useState(null);

    function handleClick(index) {
        setSelectedResponse(index)
    }

    function checkAnswer() {
        onAnswerClick(selectedResponse)
        setSelectedResponse(null)
    }

    return (
    <div className="questions-container">
        <h3>{question}</h3>
        <ul>
            {responses.map((response, indexResponse) => (
                <li key={indexResponse} onClick={() => handleClick(indexResponse)} className={selectedResponse === indexResponse ? 'selected' : ''}>
                    {response}
                </li>
            ))}
        </ul>
        <button onClick={checkAnswer}>Vérifier</button>
    </div>)
}

export default Question