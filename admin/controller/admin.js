import { getListAPI } from "../services/services.js"

console.log("hello")
getListAPI().then((res)=>{
    console.log(res)
}).catch((err)=>{})

