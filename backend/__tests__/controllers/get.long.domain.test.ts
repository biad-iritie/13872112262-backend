import {getLongDomainController} from "../../src/url/url.controllers";
import {expect, jest, test} from '@jest/globals';
import * as urlService from "../../src/url/url.service";


const domainMock = {
    id:1,
    short_url:'dscdc',
    target_url:'test1',
};

const request={
    params:{
        url: "dscdc"
    }
}

const response = {
    status:jest.fn((x)=>x),
    send:jest.fn((x)=>x),
}

test("should send status of 200 when the short url exist", async()=>{
    jest.spyOn(urlService,"get_url").mockImplementation(()=>{return Promise.resolve(domainMock)}) 

    
    await getLongDomainController(request,response)
    expect(response.send).toHaveBeenCalledTimes(1)
    expect(response.status).toHaveBeenCalledWith(200)
    //console.log(mockUseGetUrl);
} )
test("should send status of 404 when the short url doesn't exist", async()=>{
    jest.spyOn(urlService,"get_url").mockImplementation(()=>{return Promise.resolve(undefined)}) 

    
    await getLongDomainController(request,response)
    expect(response.send).toHaveBeenCalledTimes(2)
    expect(response.status).toHaveBeenCalledWith(404)
    //console.log(mockUseGetUrl);
} )