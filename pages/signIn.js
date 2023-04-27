import { useState } from "react"
import { useRouter } from 'next/router'
import auth from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import styles from "../styles/auth.module.css"

export default function SignIn() {

    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const router = useRouter();

    async function authenticate(event) {
        event.preventDefault();
        const user = await signInWithEmailAndPassword(
            auth,
            getEmail,
            getPassword
        ).then(() => {
            router.push('/');
        });
    }
    
    return (
        <div className = { styles["form-container"] }>
            <form onSubmit={ authenticate }>
                <div className={ styles["sign-up-form"] }>Sign In Form</div>
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