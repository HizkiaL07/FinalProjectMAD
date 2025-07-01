// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoA_E5CD2nlwVgh3vUBuzTEn19b-mTpM0',
  authDomain: 'finalprojectmadsummer.firebaseapp.com',
  databaseURL: 'https://finalprojectmadsummer-default-rtdb.firebaseio.com',
  projectId: 'finalprojectmadsummer',
  storageBucket: 'finalprojectmadsummer.firebasestorage.app',
  messagingSenderId: '840878318582',
  appId: '1:840878318582:web:6e73929e9b4b061d98ddd7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
