import styles from '../styles/showPosts.module.css'
import { Row, Col } from 'react-bootstrap'; 
import { useRouter } from "next/router"
import Link from 'next/link'

export default function ShowPosts({ posts }) {
    console.log(posts[0]._id);

    const router = useRouter()

    async function getToPost(id) {
        router.push("/showPosts/" + id);
    }

    return (
        
        <div>  
        {
        posts.map((post, index) => 
            <div className = { styles["post-container"] }> 
                <Link href = >

                <Row className = {styles.row} >
                    <Col>
                        <div>
                            { post.postTitle }
                        </div>
                        <div>
                            by { post.username }
                        </div>
                    </Col>
            </Row>
            </Link>
            </div> 
        )
        }   
        </div>
    
    );
} 

export async function getServerSideProps() {
    let posts = await fetch("https://final-project-mjl776.vercel.app/api/getPosts");
    let data = await posts.json();
    return {
        props: {
            posts: data['message']
        }
    }
}



