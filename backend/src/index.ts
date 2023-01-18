/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import {urlRouter} from "./url/url.router";

 dotenv.config();
 
/**
 * App Variables
 */
 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();
/**
 *  App Configuration
 */
 app.use(express.json());
/**
 * Server Activation
 */

app.use("/api/url",urlRouter);
app.get("/",(req, res) =>{
    res.send("Welcome short domain name Service")
})
/* app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  }); */
export default app;
