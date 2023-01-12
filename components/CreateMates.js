import { useState } from 'react';
import useMates from '../hooks/useMates';

function CreateMates(props) {

    const { handleSendInfo } = useMates();

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const [file, setFile] = useState(null);

    const handleName = (event) => {
        setName(() => event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(() => event.target.value);
    }

    const handleCreateUser = () => {
        handleSendInfo({ name, description });
    }

    const handleFile = (event)=>{
        const file = event.target.files[0];
        if (file) setFile(file);
        ;
        console.log(file);
    }

    return (
        <div className='flex flex-col gap-10'>
            <input type='file' placeholder='Upload an image' onChange={(event)=>{handleFile(event)}}/>
            <input placeholder='name' onChange={(event) => handleName(event)} />
            <input placeholder='description' onChange={(event) => handleDescription(event)} />
            <button onClick={handleCreateUser}>Send</button>
        </div>
    );
}

export default CreateMates;