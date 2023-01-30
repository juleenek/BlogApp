import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDu1l3TAkDbUozAy7V76bxhKCGTF8iTxKw',
  authDomain: 'blogapp-8aca2.firebaseapp.com',
  projectId: 'blogapp-8aca2',
  storageBucket: 'blogapp-8aca2.appspot.com',
  messagingSenderId: '263609479498',
  appId: '1:263609479498:web:6e97677f8b09fec59191b3',
  measurementId: 'G-EEB3ESGDMF',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);