import clientPromise from '../../lib/mongo.js'

export default async function getUser (req, res) {

    try{ 
        const client = await clientPromise;
        const db = await client.db("auth");
        const user = await db.collection("users").find({  })
        
        return res.json({
            message: JSON.parse(JSON.stringify(user)),
            success: true,
        });
    }

    catch(err) {

        return res.json({
            message: new Error(err).message,
            success: false,
        });
    }
}