import { getFirestore, doc, collection, updateDoc, setDoc, deleteDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import exceptionDTO from '../dto/exception.dto';
import { useAuth } from '../hooks/SMSProvider';
import firebase from './FBConfig';

const firebaseStore = getFirestore(firebase);
const { user } = useAuth();

const FBStoreService = {
    GetAllStoreData: async (store: string): Promise<any> => {
        try {
            let data: any[] = [];
            const q = query(collection(firebaseStore, store), where("userId", "==", user?.uid));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((q) => {
                data.push({ ...q.data(), id: q.id })
            })

            return data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    GetOneStoreData: async (store: string, storeId: string): Promise<any> => {
        try {
            const querySnapshot = await getDoc(doc(firebaseStore, store, storeId));
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
    CreateStoreData: async <T extends {}>(store: string, body: T): Promise<any> => {
        try {
            const newDocRef = await doc(collection(firebaseStore, store));
            const docRef = await setDoc(newDocRef, { ...body, userId: user?.uid });

            return newDocRef.id;
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    UpdateStoreData: async <T extends {}>(store: string, storeId: string, body: T): Promise<any> => {
        try {
            const newDocRef = doc(firebaseStore, store, storeId);
            if (newDocRef.id != user?.uid) throw new Error("유저접근 권한이 없습니다.");

            const docUpdate = await updateDoc(newDocRef, body);
            return storeId
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    RemoveStoreData: async (store: string, storeId: string) => {
        try {
            const newDocRef = doc(firebaseStore, store, storeId);
            if (newDocRef.id != user?.uid) throw new Error("유저접근 권한이 없습니다.");

            const docRef = await deleteDoc(doc(firebaseStore, store, storeId));
            return storeId
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
};

export default FBStoreService;