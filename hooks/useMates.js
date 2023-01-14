import { useState, useEffect } from 'react';
import { db, storage } from '../firebaseConfig';
import {
    collection, getDocs, addDoc, updateDoc, doc, deleteDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid';

function useMates(props) {
    const matesCollection = collection(db, "mates");

    const [mates, setMates] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const createMate = async (newUser) => {
        await addDoc(matesCollection, newUser)
            .catch(err => setErrorMsg(err.message));

    }

    const updateMate = async (id, description) => {
        const userDoc = await doc(db, "mates", id);
        const newValue = { description: description }
        await updateDoc(userDoc, newValue);
    }

    const deleteMate = async (id, reference) => {
        console.log(reference);
        console.log(storage);
        const imageRef = ref(storage, reference);
        console.log(imageRef);
        // Delete the file
        deleteObject(imageRef)
            .then(async () => {
                const userDoc = await doc(db, "mates", id);
                await deleteDoc(userDoc).then(() => getMates());
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const uploadMatePicture = async (file) => {
        let urlGenerated = "";
        const imageRef = ref(storage, `/images/${file.name + v4()}`);
        const refUrl = imageRef.fullPath;
        const res = await uploadBytes(imageRef, file)
            .then((res) => {
                return res
            })
            .catch(err => console.log(err))
        urlGenerated = await getDownloadURL(res.ref)
            .then(url => {
                return url
            })
            .catch(err => console.log(err));
        return { urlGenerated, refUrl }
    }

    const getMates = async () => {
        await getDocs(matesCollection)
            .then(res => {
                setMates(res.docs.map((e) => {
                    return {
                        ...e.data(), id: e.id
                    }
                }
                ));
                console.log('mates refresh')
            })
            .catch(err => setErrorMsg(err.message))

    }

    useEffect(() => {
        const queryMessages = query(
            matesCollection
        );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            setMates(snapshot.docs.map((e) => {
                return {
                    ...e.data(), id: e.id
                }
            }
            ))
        });
        return () => unsuscribe();
    }, []);

    return { mates, createMate, updateMate, deleteMate, uploadMatePicture, errorMsg, getMates };
}

export default useMates;