import styles from '../styles/showPosts.module.css'
import { Row, Col } from 'react-bootstrap'; 

export default function ShowPosts({ posts }) {
    return (
        
        <div>  
        <div className = { styles["title"] }> Blog Posts Page</div>
        {
        posts.map((post, index) => 
        <div className = { styles["post-container"] } onClick=""> 
            <Row className = {styles.row} >
                <Col>
                    <div>
                        { post.postTitle }
                    </div>
                    <div>
                        { post.postText }
                    </div>
                    <div>
                        by { post.username }
                    </div>
                </Col>
           </Row>
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



