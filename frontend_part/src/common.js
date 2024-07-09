import axios from 'axios'

const fetchSingleProductData = async (id,setData,navigate) => {
    const response = await axios.get(`http://localhost:9000/product/${id}`);
    setData(response.data)
    if(!response.data){
      navigate('/');
    }
  }
  const fetchUserData= async (id,setData)=>{
    const sellerresponse=await axios.get(`http://localhost:9000/user/${id}`);
    setData(sellerresponse.data);
  }

//   id=params.id
  const sendMessage=async(e,chatRef,loginUser,id,)=>{
    e.preventDefault()
        if(!chatRef.current.value){
            return;
        }
        const postData={
          sender:loginUser,
          msgFromSender:chatRef.current.value
        }
        const response= await axios.patch(`http://localhost:9000/product/chat?id=${id}`,postData)
        chatRef.current.value=" ";
  }


export{fetchSingleProductData,fetchUserData,sendMessage}