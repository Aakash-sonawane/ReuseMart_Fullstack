import axios from 'axios'

const fetchdata=async(setData)=>{
  const response= await axios.get('http://localhost:9000/products')
  setData(response.data);
  console.log("run in chat")
}

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



  const sendMessage=async(e,newMsg,setNewMsg,buyer,seller,id,messageListRef,setFlag,msgFrom)=>{
    e.preventDefault()
    console.log(messageListRef.current)
        if(!newMsg){
            return;
        }
        const postData={
          buyer:buyer,
          seller:seller,
          msgFrom:msgFrom,
          msgFromSender:newMsg
        }
        const response= await axios.patch(`http://localhost:9000/product/chat?id=${id}`,postData)

        if(messageListRef.current.lastChild){
          messageListRef.current.lastChild.scrollIntoView({ behavior: 'instant', block: 'end' });
        }

        setNewMsg("")
        setFlag(false)
  }


export{fetchdata,fetchSingleProductData,fetchUserData,sendMessage}