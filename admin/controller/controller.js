export const flectData = (data) =>{
    let contentHTML = "";
   data.forEach((value,id)=>{
     contentHTML += `
     <tr>
     <td>${id+1}</td>
     <td>${value.name}</td>
     <td>${value.price}</td>
     <td>${value.screen}</td>
     <td>${value.backCamera}</td>
     <td>${value.frontCamera}</td>
     <td><img height="80px" src="${value.img}" alt="" /></td>
     <td>${value.desc}</td>
     <td>${value.type}</td>
     <td><button class="btn btn-danger" onclick="xoaSP(${value.id})">xóa</button><button class="btn btn-success"  data-bs-toggle="modal"
     data-bs-target="#exampleModal" onclick="suaSP(${value.id})">sửa</button></td>
     </tr>`
   })
   document.getElementById("tBody").innerHTML = contentHTML
}
export const getDataFromForm = () =>{
    let {id,name,price,screen,backCamera,frontCamera,img,desc,type} = {}
    id = document.getElementById("spID").value;
    name = document.getElementById("name").value;
    price = document.getElementById("price").value;
    screen = document.getElementById("screen").value;
    backCamera = document.getElementById("backCamera").value;
    frontCamera = document.getElementById("frontCamera").value;
    img = document.getElementById("img").value;
    desc = document.getElementById("desc").value;
    type = document.getElementById("loaiSP").value == "2" ? "Samsung" : "iphone"
    console.log({id,name,price,screen,backCamera,frontCamera,img,desc,type})
    return {id,name,price,screen,backCamera,frontCamera,img,desc,type}
}
export const resetForm = ()=>{
  document.getElementById("spID").value = ""
  document.getElementById("name").value = ""
  document.getElementById("price").value = ""
  document.getElementById("screen").value = ""
  document.getElementById("backCamera").value = ""
  document.getElementById("frontCamera").value = ""
  document.getElementById("img").value = ""
  document.getElementById("loaiSP").value = "0"
  document.getElementById("desc").value = ""
}
export const upDataToForm = (data) =>{
  document.getElementById("spID").value = data.id
  document.getElementById("name").value = data.name
  document.getElementById("price").value = data.price
  document.getElementById("screen").value = data.screen
  document.getElementById("backCamera").value = data.backCamera
  document.getElementById("frontCamera").value = data.frontCamera
  document.getElementById("img").value = data.img
  document.getElementById("loaiSP").value = data.type == "Samsung" ? "2":"1"
  document.getElementById("desc").value = data.desc
}
