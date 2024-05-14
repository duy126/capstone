export const getListAPI = () =>{
    return axios({
        url: "https://662b9f7dde35f91de158ecb1.mockapi.io/prroducts",
        method:"GET",
    })
}