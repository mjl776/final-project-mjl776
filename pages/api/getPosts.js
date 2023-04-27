import clientPromise from '../../lib/mongo.js'


export default async function getPosts(req, res) {

    try {
        const client = await clientPromise;
        const db = await client.db("content");
        const posts = await db.collection("posts").find({}).toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true
        });
    }
    
    catch (err) {
        return await res.json({
            message: err,
            success: false
        });
    }

}