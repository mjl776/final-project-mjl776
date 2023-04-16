
import clientPromise from '../../lib/mongo.js'

export default async function signUpFunction (req, res) {
  try {
      const client = await clientPromise;
      const db = await client.db();
      const { getEmail, getUsername } = req.body;
      const user = await db.collection("users").insertOne({
          email: getEmail, 
          username: getUsername
      });
      await res.json(user);
  }
  catch(err) {
      console.error(err);
  }
}; 