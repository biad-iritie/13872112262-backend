import {addShortDomainController} from "../../src/url/url.controllers";
import {expect, jest, test} from '@jest/globals';
import * as urlService from "../../src/url/url.service";


const domainMock = {
    id:1,
    short_url:'dgtebx',
    target_url:'test2',
};

const request={
    body:"test2"
}

const response = {
    status:jest.fn((x)=>x),
    send:jest.fn((x)=>x),
}

test("should send status of 201 after add to the data base", async()=>{
    jest.spyOn(urlService,"create_short_url").mockImplementation(()=>{return Promise.resolve(domainMock)}) 

    await addShortDomainController(request,response)
    expect(response.send).toHaveBeenCalledTimes(1)
    expect(response.status).toHaveBeenCalledWith(201)
    //console.log(mockUseGetUrl);
} )