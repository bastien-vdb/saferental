import { useState } from 'react';
import useMates from '../hooks/useMates';

function CreateMates(props) {

    const { createMate, uploadMatePicture, errorMsg } = useMates();

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const [file, setFile] = useState(null);

    const handleName = (event) => {
        setName(() => event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(() => event.target.value);
    }

    const handleCreateUser = async () => {
        if (file) {
            uploadMatePicture(file)
                .then(res => {
                    if (res.urlGenerated) {
                        const url = res.urlGenerated;
                        const ref = res.refUrl;
                        console.log(ref);
                        createMate({ name, description, ref, url })
                    }
                })
                .catch(err => console.log(err))
        }
    }

    const handleFile = (event) => {
        setFile(event.target.files[0]);
    }




    return (
        <div className='flex flex-col gap-10'>
            <input type='file' placeholder='Upload an image' onChange={(event) => { handleFile(event) }} />
            <input placeholder='name' onChange={(event) => handleName(event)} />
            <input placeholder='description' onChange={(event) => handleDescription(event)} />
            <button onClick={handleCreateUser}>Send</button>
        </div>
    );
}

export default CreateMates;