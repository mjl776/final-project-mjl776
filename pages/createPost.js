import styles from "../styles/createPost.module.css"
import { useState, useEffect } from "react"
import authHandler from "../hooks/authHandler"
import { useRouter } from "next/router"

export default function createPost() {

    let email = null;
    const [getBlogPostName, setBlogPostName] = useState("");
    const [getBlogText, setBlogText] = useState("");
    const router = useRouter();
    const authHandlerObj = authHandler();
    let data; 

    if (authHandlerObj.user && authHandlerObj.loading == false) {
        email = authHandlerObj.user.email;
    }

    async function postCreation(event) {
        event.preventDefault();
        try {
            data = await fetch("https://final-project-mjl776.vercel.app//api/postCreation", {
                method: "POST",
                body: JSON.stringify({
                    getBlogPostName,
                    getBlogText,
                    email 
                }),
                headers: {
                Accept: "application/json, text/plain, */*", 
                "Content-Type": "application/json",
                },
            })
            data = await data.json();
            router.push("/showPosts");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className = { styles["post-form-container"] }>
            <form onSubmit={ postCreation }>
                <div>
                    <input type="text" placeholder = "Blog Post Name..."
                        onChange={(evt)=>{
                            setBlogPostName(evt.target.value); 
                        }}></input>
                </div>
                <div>
                    <textarea type="text" placeholder = "Blog text..."
                        onChange={(evt)=>{
                            setBlogText(evt.target.value); 
                    }}></textarea> 
                </div>
                <br/>
                <input type="submit" value="Submit Post"/>
            </form>
        </div>
    );
}