import clientPromise from '../../lib/mongo.js'

export default async function postCreation(req, res) {
    const client = await clientPromise;

    const dbFind = await client.db("auth");
    const db = await client.db("content");

    const { getBlogPostName, getBlogText, email } = req.body;
    const user = await dbFind.collection("users").findOne({ email: email })

    const post = await db.collection("posts").insertOne({
        uid: user._id,
        username: user.username,
        postTitle: getBlogPostName,
        postText: getBlogText
    });
    res.json(post);

}