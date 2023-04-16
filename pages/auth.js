import authentication from "../firebase/firebase"
import { useState } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import * as path from "path";

export default function Auth() {

    const [getUsername, setUsername] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getEmail, setEmail] = useState("");
    const fullPath = path.join(`${process.env.PUBLIC_URL}`, "/", "api/signUpUser");
    // response variable for post request for users insert into db
    let response = null; 
    const router = useRouter()

    async function signUp(event) {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                authentication,
                getEmail,
                getPassword
            ).then(async ()=> {
                response = await fetch(fullPath, {
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
            }).then(() =>{
                router.push('/');
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className = "container">
            <div className = "form-container">
                <form onSubmit={signUp}>
                    <div className="sign-up-form">Sign Up form</div>
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
            </div>
        </div>
    )
}
