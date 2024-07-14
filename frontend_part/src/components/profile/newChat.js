import userContext from '../../context/userContext';
import React, { useEffect, useRef, useState, useContext} from 'react'
import axios from 'axios'
import { fetchdata, sendMessage } from '../../common';
import productContext from '../../context/productContext';


export default function NewChat({myProductArr,productId,chatIndex,senderName}) {

  // console.log("from messagenger",messageArray,productId,chatIndex)

    const [buyer, setBuyer] = useState('')
    const[loginUser]=useContext(userContext)
    
    const [newMsg,setNewMsg]=useState("")
    const [flag,setFlag]=useState(false)
    const [products,setProducts]=useContext(productContext);
    let [messageArray,setmessageArray]=useState('')
    

    // let productIdref=useRef()
    // let [messageArray,setmessageArray]=useState('')

    const messageListRef=useRef()

    console.log("chat myproduct",messageArray)
    useEffect(() => {

        setTimeout(() => {
          if (messageListRef.current && messageListRef.current.lastChild) {
            messageListRef.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }, 1);
        if(messageArray.length && flag && chatIndex){
          // console.log("hello sigle user")
          console.log("messageArray[chatIndex-1].buyer",messageArray[chatIndex-1].buyer)
          fetchSingleUser(messageArray[chatIndex-1].buyer["_id"])
        }
        // if(messageListRef.current && messageListRef.current.lastChild){
        //   console.log("scroll bottom")
        //   messageListRef.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
        // }

        if(myProductArr.length){

          let singleProduct=myProductArr.filter(pr=>{
              return pr["_id"]===productId
          })

          console.log("singleProduct in newcht",singleProduct)

          if(singleProduct.length){

              setmessageArray([...singleProduct[0].messages])
          }
      }

        

        return ()=>{
          setFlag(true)
        }
    
  
    },[flag,myProductArr,chatIndex])

    // console.log("products in chat",products)


    const fetchSingleUser = async (id) => {
      const buyerresponse=await axios.get(`http://localhost:9000/user/${id}`);
      console.log("buyerresponse.data",buyerresponse.data)
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
    {messageArray.length && chatIndex?<div className='chatroom-wrapper'>
                <h1 className='heading'>{senderName}</h1>
                <div className='chat-app'>
                  <div className='chat-messages'>
                  <ul className='message-list' ref={messageListRef}>
                  {messageArray.length && messageArray[chatIndex-1].chat.map((msg,index)=>{
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
                    e.preventDefault()
                    // const buyer1=({"_id":buyer["_id"],"name":buyer["name"]})
                    // console.log("buyer1",buyer1)
                    console.log("buyer",buyer)
                    sendMessage(e,newMsg,setNewMsg,{...messageArray[chatIndex-1].buyer},loginUser,productId,messageListRef,setFlag,"seller",setProducts)
                    // console.log("flag after", flag)
                  }}>send</button>
                  </form>
                </div>
    </div>:<div>No messages</div>
  }
  </div>
  )
}
