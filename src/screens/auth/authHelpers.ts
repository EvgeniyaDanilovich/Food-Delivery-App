// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   SignInResponse,
// } from '@react-native-google-signin/google-signin';
// import Config from 'react-native-config';

// export const getCurrentUser = (): FirebaseAuthTypes.User | null => {
//   const user = auth().currentUser;
//   return user;
// };

// export const signInAnonymously = async (): Promise<void> => {
//   await auth().signInAnonymously();
// };

// export const configureGoogle = (): void => {
//   console.log('id ', Config.WEB_CLIENT_ID);

//   GoogleSignin.configure({
//     webClientId: Config.WEB_CLIENT_ID,
//     offlineAccess: true,
//   });
// };

// export const authByGoogle = async (): Promise<SignInResponse> => {
//   return await GoogleSignin.signIn();
// };

// export const authToFirebaseByGoogle = async (
//   idToken: string,
// ): Promise<void> => {
//   const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
//   await auth().signInWithCredential(googleCredential);
// };

// export const signOutGoogle = async (): Promise<void> => {
//   await GoogleSignin.signOut();
// };

// export const signOutFirebase = async (): Promise<void> => {
//   await auth().signOut();
// };
