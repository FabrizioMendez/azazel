import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createPanqueque = async(obj) => {
    const colRef = collection(db, 'panqueques');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updatePanqueque = async (id, obj) => {
    const colRef = collection(db, 'panqueques');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getPanqueque= async ()  => {
    const colRef = collection(db, 'panqueques');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getPanquequeByCondition = async (value) => {
    const colRef = collection(db, 'panqueques');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getPanquequeById = async (id) => {
    const colRef = collection(db, 'panqueques');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deletePanqueque = async (id) => {
    const colRef = collection(db, 'panqueques');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}