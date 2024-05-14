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
     <td><button class="btn btn-danger">xóa</button><button class="btn btn-success">sửa</button></td>
     </tr>`
   })
   document.getElementById("tBody").innerHTML = contentHTML
}