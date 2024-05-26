import { deleteAPI, getListAPI, getSPAPI, postAPI, putAPI } from "../services/services.js"
import { flectData, getDataFromForm, resetForm, upDataToForm } from "./controller.js"
import { kiemTraRong, kiemTraSelector, kiemTraSo } from "./validation.js"





const renderSP = ()=>{
    getListAPI().then((res)=>{
      flectData(res.data)
      }).catch((err)=>{})
  }
renderSP()
const themSPVaoList=()=>{
resetForm()
}
const themSP = () =>{
    let isCorret = kiemTraRong(document.getElementById("spID").value,"notice-id") && kiemTraSo(document.getElementById("spID").value,"notice-id")
        isCorret &= kiemTraRong(document.getElementById("name").value,"notice-name")
        isCorret &= kiemTraSelector(document.getElementById("loaiSP").value,"notice-loai")
        isCorret &= kiemTraRong(document.getElementById("screen").value,"notice-screen")
        isCorret &= kiemTraRong(document.getElementById("backCamera").value,"notice-backCamera")
        isCorret &= kiemTraRong(document.getElementById("frontCamera").value,"notice-frontCamera")
        isCorret &= kiemTraRong(document.getElementById("price").value,"notice-price") && kiemTraSo(document.getElementById("price").value,"notice-price")
        isCorret &= kiemTraRong(document.getElementById("img").value,"notice-img")
        isCorret &= kiemTraRong(document.getElementById("desc").value,"notice-desc")
        
        
    console.log("🐧🐧🐧 ~ themSP ~ isCorret:", isCorret)
    if(isCorret){
        let newSP = getDataFromForm()
postAPI(newSP).then((_res)=>{
    resetForm()
    renderSP()
}).catch((err)=>{})
    }

}

const xoaSP = (id)=>{
    deleteAPI(id).then((res)=>{
        renderSP(res)
    }).catch((_err)=>{
    }) 
}
const suaSP = (id)=>{
    document.getElementById("btn-themSP").style.display  = "none"
    document.getElementById("btn-suaSP").style.display  = "block"
    getSPAPI(id).then((res)=>{
        console.log(res)
        upDataToForm(res.data)
    }).catch((err)=>{})
}
const suaSPBangForm = () =>{
    let dataClone = getDataFromForm();
    console.log("🐧🐧🐧 ~ suaSPBangForm ~ dataClone:", dataClone)
    putAPI(dataClone,dataClone.id).then((res)=>{}).catch((err)=>{})
    }
const anThemSP  = ()=>{
    document.getElementById("btn-themSP").style.display  = "block"
    document.getElementById("btn-suaSP").style.display  = "none"
}
const searchSP = ()=>{
let dataName = document.getElementById("search-data").value;
console.log("🐧🐧🐧 ~ searchSP ~ dataName:", dataName)
let product =[]
getListAPI().then((res)=>{
    let list = res.data;
  list.forEach((item)=>{
    console.log("hello")
    if(item.name == dataName){
        product.push(item)
    } 
  }) 
  flectData(product) 
}).catch((err)=>{})
}
const sortUp = ()=>{
getListAPI().then((res)=>{
    let list = res.data;
    list.sort((a,b)=> a.price - b.price)
    flectData(list)
}).catch((err)=>{})
}
const sortDown = ()=>{
    getListAPI().then((res)=>{
        let list = res.data;
        list.sort((a,b)=> b.price - a.price)
        flectData(list)
    }).catch((err)=>{})
}
window.sortUp = sortUp
window.sortDown = sortDown
window.searchSP = searchSP
window.anThemSP= anThemSP
window.themSP = themSP
window.xoaSP = xoaSP
window.suaSP = suaSP
window.suaSPBangForm = suaSPBangForm
window.themSPVaoList = themSPVaoList


