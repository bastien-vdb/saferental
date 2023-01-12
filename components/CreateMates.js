import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../components/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function CreateMates(props) {

    const matesCollection = collection(db, "mates");

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const handleName = (event) => {
        setName(() => event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(() => event.target.value);
    }

    const handleSendInfo = async () => {
        await addDoc(matesCollection, { name: name, description: description });
        console.log(name, description);
    }

    return (
        <div className='flex gap-10'>
            <input placeholder='name' onChange={(event) => handleName(event)} />
            <input placeholder='description' onChange={(event) => handleDescription(event)} />
            <button onClick={handleSendInfo}>Send</button>
        </div>
    );
}

export default CreateMates;