export const getListAPI = () =>{
    return axios({
        url: "https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts",
        method:"GET",
    })
}
export const getSPAPI = (id) =>{
    return axios({
        url: `https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts/${id}`,
        method:"GET",
    })
}
export const postAPI = (value) =>{
    return axios({
        url: `https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts`,
        method:"POST",
        data: value
       
    })
}
export const putAPI = (value,id) =>{
    return axios({
        url: `https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts/${id}`,
        method:"PUT",
        data: value,
    })
}
export const deleteAPI = (id) =>{
    return axios({
        url: `https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts/${id}`,
        method:"DELETE",
    }) 
}