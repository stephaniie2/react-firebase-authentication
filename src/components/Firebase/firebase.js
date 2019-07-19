import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeDdCHm4wFnvUrSiQMvFPCiPgjt0WGOH8",
  authDomain: "react-slack-clone-d5116.firebaseapp.com",
  databaseURL: "https://react-slack-clone-d5116.firebaseio.com",
  projectId: "react-slack-clone-d5116",
  storageBucket: "react-slack-clone-d5116.appspot.com",
  messagingSenderId: "430925178412",
  appId: "1:430925178412:web:675e692ca1974710"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
