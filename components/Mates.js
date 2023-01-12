import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from '../components/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


function Mates(props) {

    const matesCollection = collection(db, "mates");

    const [mates, setMates] = useState(null);

    const getMates = async () => {
        const getMates = await getDocs(matesCollection);
        setMates(getMates.docs.map((e) => {
            return {
                ...e.data(), id: e.id
            }
        }
        ));
    }

    useEffect(() => {
        getMates();
    }, [])

    return (
        <>
            <div className='mates flex justify-around w-full flex-wrap'>
                {mates?.map((e, key) => (
                    <div className='flex flex-col min-w-[300px]'>
                        {/* <Image height={100} width={100} src={e.photo} alt="mates n°1" /> */}
                        <div className='name'>{e.name}</div>
                        <div className='note'>{e.description}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Mates;