import { getFirestore, doc, collection, updateDoc, setDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore';
import exceptionDTO from '../dto/exception.dto';
import firebase from './FBConfig';

const firebaseStore = getFirestore(firebase);

const FBStoreService = {
    GetAllStoreData: async (store: string): Promise<any[] | exceptionDTO> => {
        try {
            let data: any[] = [];
            const querySnapshot = await getDocs(collection(firebaseStore, store));
            querySnapshot.forEach((q) => {
                data.push({ ...q.data(), id: q.id })
            })

            return data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                return {
                    code: 500,
                    message: err.message
                };
            } else {
                return {
                    code: 500,
                    message: "알 수 없는 에러가 발생했습니다"
                }
            }
        }
    },
    GetOneStoreData: async (store: string, id: string): Promise<any> => {
        try {
            const querySnapshot = await getDoc(doc(firebaseStore, store, id));
            const req = { ...querySnapshot.data(), id: querySnapshot.id }
            return req;
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    CreateStoreData: async (store: string, body: any): Promise<string> => {
        try {
            const newDocRef = await doc(collection(firebaseStore, store));
            const docRef = await setDoc(newDocRef, { ...body });

            return newDocRef.id;
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    RemoveStoreData: async (id: string, store: string): Promise<string | exceptionDTO> => {
        try {
            const docRef = await deleteDoc(doc(firebaseStore, store, id));
            return id
        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    code: 500,
                    message: err.message,
                };
            } else {
                return {
                    code: 500,
                    message: "알 수 없는 오류입니다.",
                }
            }
        }
    },
    UpdateStoreData: async (body: any, store: string): Promise<string | exceptionDTO> => {
        try {
            const newDocRef = doc(firebaseStore, store, body.id);
            const docUpdate = await updateDoc(newDocRef, body);
            return body.id
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                return {
                    code: 500,
                    message: err.message,
                };
            } else {
                return {
                    code: 500,
                    message: "알 수 없는 오류입니다.",
                }
            }
        }
    },

};

export default FBStoreService;