import  request from 'supertest';
import app from "../src/index";

describe("Test index.ts", ()=>{
    test('Catch-all route', async() => { 
        const res = await request(app).get("/");
        expect(res.text).toEqual("Welcome short domain name Service");
     })
})