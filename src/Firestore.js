import app from './Firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export const db = getFirestore(app);

