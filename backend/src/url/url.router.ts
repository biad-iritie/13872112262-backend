/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
import * as urlService from "./url.service";
import { BaseItem } from "./url.interface";
import getErrorMessage from "../utility/error";
import {addShortDomainController, getLongDomainController} from "./url.controllers";

/**
 * Router Definition
 */

 export const urlRouter = express.Router();

/**
 * Controller Definitions
 */
 urlRouter.get("/:url",getLongDomainController);

 urlRouter.post("/", addShortDomainController);