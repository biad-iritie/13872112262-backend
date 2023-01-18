import { BaseItem } from "./url.interface";
import getErrorMessage from "../utility/error";
import { Request, Response } from "express";
import * as urlService from "./url.service";

export async function getLongDomainController(req:any, res: any) {
    try {
        const url = req.params.url
        const result = await urlService.get_url(url);
        
        if (result !== undefined) {
          res.status(200);
          res.send(result.target_url);
        } else {
          res.status(404);
          res.send("Not Found!");
        }
        
    } catch (e) {
      res.status(500);
      res.send(getErrorMessage(e));
    }
  }

export async function addShortDomainController (req: any, res: any) {
  try {
      const url: BaseItem = req.body;
      const result= await urlService.create_short_url(url.target_url);
      res.status(201);
      res.send(result.short_url);  
  } catch (e) {
    //console.error(e);
    res.status(500)
    res.send(getErrorMessage(e));
  }
}