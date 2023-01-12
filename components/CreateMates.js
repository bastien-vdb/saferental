import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import useMates from '../hooks/useMates';

function CreateMates(props) {

    const { handleSendInfo } = useMates();

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const handleName = (event) => {
        setName(() => event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(() => event.target.value);
    }

    const handleCreateUser = () => {
        handleSendInfo({ name, description });
    }

    return (
        <div className='flex gap-10'>
            <input placeholder='name' onChange={(event) => handleName(event)} />
            <input placeholder='description' onChange={(event) => handleDescription(event)} />
            <button onClick={handleCreateUser}>Send</button>
        </div>
    );
}

export default CreateMates;