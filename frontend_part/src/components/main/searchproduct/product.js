import axios from 'axios'
import React, { useEffect, useRef, useState, useContext} from 'react'
import userContext from '../../../context/userContext'
import "./product.css"
import { useNavigate,useParams} from 'react-router-dom'
import { fetchdata } from '../../../common'
import { sendMessage } from '../../../common'
import productContext from '../../../context/productContext'


export default function Product({ serchProductid}) {
  const [product, setProduct] = useState('');
  const [seller, setSeller] = useState('');
  const[loginUser]=useContext(userContext);
  const [messageArray, setmessageArray] = useState('');
  const [newMsg,setNewMsg]=useState("")
  const [flag,setFlag]=useState(false)

  const [products,setProducts]=useContext(productContext)

  let singleProductFlagRef= useRef(null)
  const messageListRef=useRef()

  

  const navigate=useNavigate();
  const params = useParams();
  // const chatRef = useRef(null)
  singleProductFlagRef.current=false;
  useEffect(() => {
    
    if(!serchProductid){
      navigate('/')
    }
    if(!singleProductFlagRef.current || !flag){
      fetchSingleProductData()
      // fetchUserData()
    }
    if(!flag){
      fetchdata(setProducts)
    }

    if(product && product.messages){
      let fiterMessageArray=product.messages.filter(msg=>{
        return msg.buyerId===loginUser['_id']
      })
      setmessageArray(fiterMessageArray);
    }

    if(messageListRef.current && messageListRef.current.lastChild){
      console.log("scroll bottom")
      messageListRef.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // console.log("messageListRef",messageListRef.current.lastChild)
    return ()=>{
      singleProductFlagRef.current=true;
      setFlag(true)
    }
    

    

  },[product,flag])




  const fetchSingleProductData = async () => {
    const response = await axios.get(`http://localhost:9000/product/${serchProductid}`);
    setProduct(response.data)
    if(!response.data){
      navigate('/');
    }
    const sellerresponse=await axios.get(`http://localhost:9000/user/${response.data["user_id"]}`);
      setSeller(sellerresponse.data);
  }


  // (newMsg,buyer,seller,id,messageListRef,setFlag)
  // (newMsg,loginUser,seller,params.id,messageListRef,setFlag)

  // const sendMessage=async(e)=>{
  //   e.preventDefault()
  //       if(!newMsg){
  //           return;
  //       }
  //       const postData={
  //         buyer:loginUser,
  //         seller:seller,
  //         msgFrom:"buyer",
  //         msgFromSender:newMsg
  //       }
  //       const response= await axios.patch(`http://localhost:9000/product/chat?id=${params.id}`,postData)

  //       if(messageListRef.current.lastChild){
  //         messageListRef.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
  //       }

  //       setNewMsg("")
  //       setFlag(false)
  // }

  // messageListRef.current.lastChild).scrollIntoView({ behavior: 'smooth', block: 'end' });

  return (
    <div>
      
      {(product && seller) &&

        <div className="container">
          <div className='product'>
            <div className='product_container'>
              <img src={product.image} alt='product imgae'></img>
              <div className='product_info'>
              <div><p>product name is:- {product.productName}</p></div>
              <div><p>price:- {product.price}</p></div>
              

              </div>
            </div>
            <div className='product_container'>
              <h1>Seller Contact</h1>
              <div className='seller_info'>
              <div><p><b>Name:-</b>{seller.name}</p></div>
              {/* <div><p><b>Email:-</b>{user.email}</p></div>
              <div><p><b>contact number:-</b>{product.contact}</p></div> */}
              <div><p><b>Address:-</b>{`${product.address['area']}, city-${product.address['city']}, state;-${product.address['state']}`}</p></div>
              <div><p><b>Pin-Code:-</b>{product.address['zipCode']}</p></div>
              
              <div className="chat-btn">Chat with Seller</div>
              <div className='chatroom-wrapper'>

                <div className='chat-app'>
                  <div className='chat-messages'>
                  <ul className='message-list' ref={messageListRef}>
                  {messageArray.length?messageArray[0].chat.map(msg=>{
                    return <li className={msg[loginUser.name]?'sender':'reciver'}>
                      <div className='text-msg'>{Object.values(msg)[0]}</div>
                    </li>
                  }):null
                }
                  
                  </ul>
                  </div>
                </div>


                <div className='chat-form'>
                  <form >
                  <input type='text' value={newMsg} onChange={(e)=>{setNewMsg(e.target.value)}} className='serachinput'/>
                  <button type='submit' className='submit-btn' onClick={(e)=>{
                    sendMessage(e,newMsg,setNewMsg,loginUser,seller,params.id,messageListRef,setFlag,"buyer")
                  }}>send</button>
                  </form>
                </div>

              </div>
              </div>

            </div>

          </div>
        </div>

      }

    </div>
  )
}
