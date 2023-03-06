import {auth, provider} from "../firebase"
import {signInWithPopup} from "firebase/auth"
import React from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies();

const Auth = (props)=>{
    const {setIsAuth} = props;

    const signInWithGoogle = async ()=>{
        try{
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true)
        }catch(err){
            console.log(err)
        }
    }
    return (
    <div>
        <button onClick={signInWithGoogle} className="signWithButton">
            Sign in with Google
        </button>
    </div>
    )
}

export default Auth