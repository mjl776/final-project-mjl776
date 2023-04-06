// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import express from express;
var router = express.Router();

router.get("/", (res, req) => {
  res.send("API works");
})

export default router;