import styles from "../styles/createPost.module.css"
import { useState, useEffect } from "react"
import auth from "../firebase/firebase";

export async function getServerSideProps() {
    const data = await fetch("http://localhost:3000/api/getUser");
    return { props: { user: JSON.parse(JSON.stringify(data)) } };
}

export default function createPost({ user }) {
    const [getUser, setUser] = useState("");
    const [getUserName, setUserName] = useState("");
    const [getBlogPostName, setBlogPostName] = useState("");
    console.log(user);
    return (
        <div className = { styles["post-form-container"] }>
            <input type="text" placeholder = "Blog Post Name..."
                onChange={(evt)=>{
                    setBlogPostName(evt.target.value); 
                }}></input>
            <div> 
                
            </div>
        </div>
    )
}