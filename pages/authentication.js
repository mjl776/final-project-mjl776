import auth from "../firebase/firebase"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import styles from "../styles/auth.module.css"

export default function Auth() {

    const [getUsername, setUsername] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getEmail, setEmail] = useState("");
    const [user, setUser] = useState({});

    // response variable for post request for users insert into db
    let response = null; 
    const router = useRouter();

    async function signUp(event) {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                getEmail,
                getPassword
            ).then(async () => {
                response = await fetch("https://final-project-mjl776.vercel.app/api/signUpUser", {
                    method: "POST",
                    body: JSON.stringify({
                        getEmail,
                        getUsername,
                    }),
                    headers: {
                    Accept: "application/json, text/plain, */*", 
                    "Content-Type": "application/json",
                    },
                })
                response = await response.json();
            }).then(() => {
                router.push('/');
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className = { styles["form-container"] }>
            { 
            <form onSubmit={signUp}>
                <div className={ styles['sign-up-form'] }>Sign Up form</div>
                <input type="text" placeholder = "Username..."
                onChange={(evt)=>{
                    setUsername(evt.target.value); 
                }}></input>
                <input type="text" placeholder = "Password..."
                onChange={(evt)=>{
                    setPassword(evt.target.value); 
                }}></input>
                <br/>
                <input type="text" placeholder = "Email..."
                onChange={(evt)=>{
                    setEmail(evt.target.value); 
                }}></input>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
            }   
        </div>
    )
}
