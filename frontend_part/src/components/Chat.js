import userContext from '../context/userContext';
import React, { useEffect, useRef, useState, useContext} from 'react'
import axios from 'axios'

export default function Chat({products}) {
    // const [product, setProduct] = useState('')
    // const [seller, setSeller] = useState('')
    const[loginUser]=useContext(userContext)
    // const [messageArray, setmessageArray] = useState('')

    const msgRef = useRef(null)

    // let flag=false;
    let productId;
    let [messageArray,setmessageArray]=useState('')
    useEffect(() => {
// console.log("loginUser.name",loginUser.name)
        const myProducts=products.filter((product)=>{
            return product['user_id']===loginUser['_id'];
        })
        console.log("product my", myProducts)

        if(myProducts.length){
            // let fiterMessageArray=myProducts[0].messages.filter(msg=>{
            //     console.log(msg.senderId)
            //     console.log(loginUser['_id'])
            //     return msg.senderId===loginUser['_id']
            //   })
            productId=myProducts[0]['_id']
              setmessageArray(myProducts[0].messages);
            //   console.log("chat",messageArray[0].chat)
        }

        console.log(msgRef.current.value)
    
  
    },[])

    const sendMessage=async(e)=>{
        e.preventDefault()
        // console.log("hello",msgRef.current.value)
        if(!msgRef.current.value){
            return;
        }
        const postData={
            sender:loginUser,
            msgFromSender:msgRef.current.value
        }
        console.log("hello")
        if(productId){
            console.log("productId",productId)
        }
            
            const response= await axios.patch(`http://localhost:9000/product/chat?id=${productId}`,postData)
      }
  
  return (
    <div className='chatroom-wrapper'>
        <h1>hello i am chat</h1>

                <div className='chat-app'>
                  <ul>
                  {messageArray.length && messageArray[0].chat.map((msg,index)=>{
                    return <li key={index} className={msg[loginUser.name]?'sender':'reciver'}>
                      {/* {msg[loginUser.name]?  
                      <div className='text-msg'>{msg[loginUser.name]}</div>:
                      <div className='text-msg'>{Object.values(msg)[0]}</div>} */}
                      <div className='text-msg'>{Object.values(msg)[0]}</div>

                    </li>
                  })}
                  
                  </ul>
                </div>


                <div className='chat-form'>
                  <form >
                  <input type='text' ref={msgRef} className='serachinput'/>
                  <button type='submit' className='submit-btn' onClick={sendMessage}>send</button>
                  </form>
                </div>
                </div>
  )
}
