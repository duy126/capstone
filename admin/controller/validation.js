export const kiemTraRong =(data,id)=>{
    if(data == ""){
        document.getElementById(id).innerText = "Hãy điền thông tin"
        return false
    }
    document.getElementById(id).innerText = ""
    return true
}
export const kiemTraSelector = (data,id)=>{
    if(data == "0"){
        document.getElementById(id).innerText = "hãy chọn thông tin"
        return false
    }
    document.getElementById(id).innerText = ""
    return true
}
export const kiemTraSo = (data,id)=>{
if(!data.match(/^\d+/)){
    document.getElementById(id).innerText ="hãy nhập chữ số"
}
}