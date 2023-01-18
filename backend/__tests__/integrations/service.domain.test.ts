import  request from 'supertest';
import { Url } from "../../src/url/url.interface";
import app from '../../src/index';

let test_data={"target_url":"https/www.test.com","short_url":""}


describe("Short domain name storage interface",()=>{
   
   test("Domain doesn't exist ", async() => { 
       const res = await request(app).post("/api/url/").send({
           "target_url":test_data.target_url
       })
       //expect(create_short_url).toHaveBeenCalledTimes(1);
       expect(res.status).toBe(201)
       expect(res.body.data)
       test_data.short_url = res.text;
    });

    test("Domain exist", async() => { 
      const res = await request(app).post("/api/url/").send({
          "target_url":test_data.target_url
      })
      expect(500)
   })
})

describe("Short domain read interface",()=>{
    test('Call api  without domain name', async() => { 
        //console.log(test_data);
        const res = await request(app).get(`/api/url/`);
        //console.log(res.text);
        expect(500)
     });

     test('Domain exist', async() => { 
        //console.log(test_data);
        const res = await request(app).get(`/api/url/${test_data.short_url}`);
        //console.log(res.text);
        expect(test_data.target_url).toEqual(res.text)
        expect(200)
     });
     test("Domain doesn't", async() => { 
        //console.log(test_data);
        const res = await request(app).get(`/api/url/${test_data.short_url}sds`);
        //console.log(res.text);
        
        expect(404)
     })
})