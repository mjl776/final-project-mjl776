import { useState } from "react"
import { useRouter } from 'next/router'
import { authentication } from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
export default function SignIn() {

    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const router = userRouter();

    async function authenticate () {
        const user = await signInWithEmailAndPassword(
            authentication,
            getEmail,
            getPassword
        ).then(() => {
            router.push('/');
        });
    }
    
    return (
        <div className = "form-container">
            <form onSubmit={authenticate}>
                <div className="sign-up-form">Sign In Form</div>
                <input type="text" placeholder = "Email..."
                onChange={(evt)=>{
                    setEmail(evt.target.value); 
                }}></input>
                <br/>
                <input type="text" placeholder = "Password..."
                onChange={(evt)=>{
                    setPassword(evt.target.value); 
                }}></input>
                <br/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    );
}