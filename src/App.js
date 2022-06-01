import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleHandler = ()=>{
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user)

      setUser(user);
    })
    .catch((error)=>{
      setUser(error);
    })
  }

  const signOutHandler= ()=>{
    signOut(auth)
    .then(()=>{
      setUser({});
    }).catch(()=>{
      setUser({});
    })
  }

  const gihubHandlerLogin = ()=> {
    signInWithPopup(auth, githubProvider)
    .then((result)=>{
      const user = result.user;
      setUser(user);
    }).catch((error)=>{
      const errorMessage = error.message;
      setUser(errorMessage);
    })
  }
  return (
    <div className="App">
      {
        user.uid ? <>
          <button onClick={signOutHandler}>Sign Out</button>
        </> : <>
          <button onClick={googleHandler}>Google Popup sign In</button>
          <button onClick={gihubHandlerLogin}>Github login</button>
        </>
      }
      

     
      
      

      <h1>Name: {user.displayName}</h1>
      <p>Email: {user.email}</p>

      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
