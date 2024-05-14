import { getListAPI } from "../services/services.js"
import { flectData } from "./controller.js"

console.log("hello")
getListAPI().then((res)=>{
flectData(res.data)
}).catch((err)=>{})

