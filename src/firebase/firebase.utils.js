import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAtPJ5CbLqDAzdm0yEnbQi-V4Z5UyjVPNw',
	authDomain: 'aesthetic-clothing-17265.firebaseapp.com',
	databaseURL: 'https://aesthetic-clothing-17265.firebaseio.com',
	projectId: 'aesthetic-clothing-17265',
	storageBucket: 'aesthetic-clothing-17265.appspot.com',
	messagingSenderId: '355944019491',
	appId: '1:355944019491:web:3a9fbd55ebdc1f67496396',
	measurementId: 'G-X1DK1E8ZLK'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
