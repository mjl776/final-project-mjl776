import { useRouter } from "next/router"
import styles from '../styles/homepage.module.css'
import authHandler from "../hooks/authHandler"
import style from "../styles/showPosts.module.css"

export default function HomePage() {
    const router = useRouter()
    let auth = authHandler();
    let user = null;

    if (auth.user && auth.loading == false) {
        user = auth.user;
    }

    async function signIn() {
        router.push('/signIn')
    }

    async function createPost() {
        router.push('/createPost')
    }

    async function showPosts() {
        router.push("/showPosts");
    }

    return (
        <div>
            { !user ?
                <div className={ styles['welcome-text'] }>
                    Hello welcome to the Paradise travel site! Please sign in or sign up! 
                    <div>
                        <button onClick= {signIn}>
                            Sign In
                        </button>
                        <button onClick= { showPosts }>
                            See Travel Posts
                        </button>
                    </div>  
                </div> 
                : (
                    <div className={ styles.posts }>
                        <button onClick= { createPost }>
                            Add post
                        </button>
                        <div>
                            Here are the Travel Blog Posts for today!  
                        </div>
                        <button onClick= { showPosts }>
                            See Posts
                        </button>
                    </div>
            )}
        </div>
    );
}