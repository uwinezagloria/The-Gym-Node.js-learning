import express from "express"
import { getAllData } from "../controller/getAllData.js"
import { getDataByParams } from "../controller/getDataByParams.js"
const router=express.Router()
router.get("/",getAllData)
//path parameter
 router.get("/:field/:term",getDataByParams)
export default router