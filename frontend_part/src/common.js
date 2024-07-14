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



  const sendMessage=async(e,newMsg,setNewMsg,buyer,seller,id,messageListRef,setFlag,msgFrom,setProducts)=>{

    console.log("id is here",id)

    
    e.preventDefault()
    
    // console.log(messageListRef.current)
    console.log("buyer on submit",buyer)
        if(!newMsg){
            return;
        }
        console.log(buyer)
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
        

        if(setProducts){
          fetchdata(setProducts);
        }
        setFlag(false)
        // if(messageListRef.current.lastChild){
        //   messageListRef.current.lastChild.scrollIntoView({ behavior: 'instant', block: 'end' });
        // }
  }


export{fetchdata,fetchSingleProductData,fetchUserData,sendMessage}