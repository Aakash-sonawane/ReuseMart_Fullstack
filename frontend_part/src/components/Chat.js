import userContext from '../context/userContext';
import React, { useEffect, useRef, useState, useContext} from 'react'
import axios from 'axios'
import { fetchdata, sendMessage } from '../common';
import productContext from '../context/productContext';

export default function Chat() {

    const [buyer, setBuyer] = useState('')
    const[loginUser]=useContext(userContext)
    // const msgRef = useRef(null)
    const [newMsg,setNewMsg]=useState("")
    const [flag,setFlag]=useState(false)
    const [products,setProducts]=useContext(productContext);

    let productIdref=useRef()
    let [messageArray,setmessageArray]=useState('')
    const messageListRef=useRef()

    useEffect(() => {
        
        // console.log("product my", myProducts)
        if(!flag){
          // console.log("flag",flag)
          fetchdata(setProducts)
        }

        const myProducts=products.filter((product)=>{
          return product['user_id']===loginUser['_id'];
      })

        if(myProducts.length){
            productIdref.current=myProducts[0]['_id']
            
              setmessageArray(myProducts[0].messages);
        }
        if(messageArray.length){
          // console.log("hello sigle user")
          fetchSingleUser(messageArray[0].buyerId)
        }
        // if(messageListRef.current && messageListRef.current.lastChild){
        //   console.log("scroll bottom")
        //   messageListRef.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
        // }

        return ()=>{
          setFlag(true)
        }
    
  
    },[messageArray,flag])


    const fetchSingleUser = async (id) => {
      const buyerresponse=await axios.get(`http://localhost:9000/user/${id}`);
        setBuyer(buyerresponse.data);
    }

    // (e,newMsg,setNewMsg,buyer,loginUser,productIdref.current,messageListRef,setFlag)
    // const sendMessage=async(e)=>{
    //     e.preventDefault()
    //     // console.log("hello",msgRef.current.value)
    //     if(!newMsg){
    //         return;
    //     }
    //     console.log("buyer",messageArray[0])
    //     const postData={
    //       buyer:buyer && buyer,
    //         seller:loginUser,
    //         msgFrom:"seller",
    //         msgFromSender:newMsg
    //     }
    //     console.log("hello")
    //       console.log("productId",productIdref.current)
        
            
    //         const response= await axios.patch(`http://localhost:9000/product/chat?id=${productIdref.current}`,postData)
    //   }
  
  return (
    <div>
    {messageArray.length?<div className='chatroom-wrapper'>
                <div className='chat-app'>
                  <div className='chat-messages'>
                  <ul className='message-list' ref={messageListRef}>
                  {messageArray.length && messageArray[0].chat.map((msg,index)=>{
                    // console.log(msg,loginUser.name)
                    return <li key={index} className={msg[loginUser.name]?'sender':'reciver'}>
                      <div className='text-msg'>{Object.values(msg)[0]}</div>
                    </li>
                  })}
                  
                  </ul>
                  </div>
                </div>


                <div className='chat-form'>
                  <form >
                  <input type='text' value={newMsg} onChange={(e)=>{setNewMsg(e.target.value)}} className='serachinput'/>
                  <button type='submit' className='submit-btn' onClick={(e)=>{
                    sendMessage(e,newMsg,setNewMsg,buyer,loginUser,productIdref.current,messageListRef,setFlag,"seller")
                    console.log("flag after", flag)
                  }}>send</button>
                  </form>
                </div>
    </div>:<div>No messages</div>
  }
  </div>
  )
}
