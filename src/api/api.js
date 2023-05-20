import axios from "axios"

export const auth= async (idInstLogin,ApiTokenLogin,setUser,setOnline)=>{

     try {
        await axios.get(`https://api.green-api.com/waInstance${idInstLogin}/GetSettings/${ApiTokenLogin}`).then(resp=>{
        getInfoUser(resp.data.wid.slice(0,11),idInstLogin,ApiTokenLogin).then(resp=>setUser(resp.data))
          
          setOnline(true)
        })
       
       } catch (error) {
        alert('Неверный id или token')
       }
   
  }

  

  export const getInfoUser= async (number,idInstLogin,ApiTokenLogin)=>{
   return await axios.post(`https://api.green-api.com/waInstance${idInstLogin}/getContactInfo/${ApiTokenLogin}`, 
    
    {
      chatId: `${number}@c.us`
  }
  )
   
  }
 

  export const postMessage= async (number,message,idInstLogin,ApiTokenLogin)=>{
    return await axios.post(`https://api.green-api.com/waInstance${idInstLogin}/sendMessage/${ApiTokenLogin}`, 
    {
      chatId: number,
      message: message
  }
  )
   
  }

  export const getMessages=async (idInstLogin,ApiTokenLogin)=>{
    
      return await axios.get(`https://api.green-api.com/waInstance${idInstLogin}/ReceiveNotification/${ApiTokenLogin}`)
       
      
    
  }