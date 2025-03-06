import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const handleSubmit = () => {
       navigate(`/room/${input}`)
    }


    return (
        <div>
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder='Enter your name.'
            />
            <button
                onClick={handleSubmit}
            >Join</button>
        </div>
    )
}

export default HomePage