import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function useMates(props) {
    const matesCollection = collection(db, "mates");

    const [mates, setMates] = useState(null);

    const createMate = async (newUser) => {
        await addDoc(matesCollection, newUser);
    }

    const updateMate = async(id, description) => {
        const userDoc = await doc(db, "mates", id);
        const newValue = {description: description} 
        await updateDoc(userDoc, newValue);
    }

    const deleteMate = async(id) => {
        const userDoc = await doc(db, "mates", id);
        await deleteDoc(userDoc);
    }

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

    return { mates, createMate, updateMate, deleteMate};
}

export default useMates;