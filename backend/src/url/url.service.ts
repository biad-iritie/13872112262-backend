
/**
 * Data Model Interfaces
 */
 import { BaseItem, Url } from "./url.interface";
import pool from "../utility/db"
/**
 * Service Methods
 */

export const create_short_url =  async (target_url:string) =>  {
    let result: Url = {"id":0,
    "short_url":Math.random().toString(36).slice(5),
    "target_url":target_url}
    
    await pool.query(`INSERT INTO public.link (target_url, short_url) 
    VALUES ($1::character varying,$2::character varying) RETURNING *`,
    [result.target_url,result.short_url])
         .then((res) =>{
            //console.log(res.rows[0]);
            result= res.rows[0];
         })
         .catch(e => {
            let message;
            if(e.code === "23505"){
                message = "This domain exist already"
            }else{
                message = "Something went wrong"
            }
            throw new Error(message);
         });
    return result
}
export const get_url = async (url:string): Promise<Url | any>  => {
    let result = {"id":0,"short_url":"","target_url":""}
    await pool.query(`SELECT * FROM public.link WHERE short_url=$1;`,[url])
    .then(res =>{
        return result =  res.rows[0]
    })
    .catch(e =>{
        //console.log(e.stack);
        throw new Error(e);
    })
    
    
    return result;
}