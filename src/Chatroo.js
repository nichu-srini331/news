import React, { useState,useRef } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import './Chat.css'

import {useAuthState} from 'react-firebase-hooks/auth'
import{useCollectionData} from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom';

firebase.initializeApp({
    apiKey: "AIzaSyCJd_QT20FJ83htv-ShxCi98PjDdAZCm_g",
    authDomain: "chatroom-73173.firebaseapp.com",
    projectId: "chatroom-73173",
    storageBucket: "chatroom-73173.appspot.com",
    messagingSenderId: "497328661754",
    appId: "1:497328661754:web:f590e07f8d3d2035415543",
    measurementId: "G-YJZTWPTT7P"
})

const auth = firebase.auth();
const firestore = firebase.firestore();




function Chatroo(props) {
    const [user] = useAuthState(auth);
  return (
    <div className='chatapp'>
      
        <section>
            
        <h1 className='h1g'>Discuss your view here..</h1>
            {user ? <Chat/> :<SignIn/>}
            
        </section>

    </div>
  )
}

function SignIn(){
    const signInwithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <div>
        <button className='btnchat' onClick={signInwithGoogle}>Sign In</button>
        
        </div>
    )

}

function SignOut(){
    return auth.currentUser && (
        <button  className='btnchat' onClick={()=>auth.signOut()}>SignOut</button>
    )
}

function Chat(){
    const messageRef = firestore.collection('chatroom');
    const query = messageRef.orderBy('createdAt').limit(25);

    const [message] = useCollectionData(query,{idField:'id'});
    const[formvalue,setformvalue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault()

        const {uid} = auth.currentUser;

        await messageRef.add({
            text:formvalue,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            
        })
        setformvalue('')
    }


    return(
        <>
        <div>
            {message && message.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
        </div>
        <form className='formc' onSubmit={sendMessage}>
            <input className='inputc' value={formvalue} onChange={(e)=>setformvalue(e.target.value)} placeholder="Send your Thoughts.."/>

            <button className='btnchat' type='submit'>SEND</button>
           <Link to='/' > <button className='btn'>Home</button></Link> 

        </form>
        </>
    )

}

function ChatMessage(props){
    const {text,uid,photoUrl} = props.message;

    const messageClass = uid === auth.currentUser.uid ?'sent':'received';
    return (
        <div className={`message ${messageClass}`}>
            
            <img src={photoUrl ||'https://picsum.photos/200'}/>
            <p>{text}</p>
            
        </div>

    )
}
export default Chatroo