import axios from 'axios'
import React, { useEffect, useRef, useState, useContext} from 'react'
import userContext from '../../../context/userContext'
import "./product.css"
import { useNavigate,useParams} from 'react-router-dom'


export default function Product({ serchProductid }) {
  const [product, setProduct] = useState('')
  const [seller, setSeller] = useState('')
  const[loginUser]=useContext(userContext)
  const [messageArray, setmessageArray] = useState('')


  const navigate=useNavigate();
  const params = useParams();
  const chatRef = useRef(null)

  let flag=false;
  useEffect(() => {
    if(!serchProductid){
      navigate('/')
    }
    if(flag){
      fetchSingleProductData()
      // fetchUserData()
    }

    if(product){
      let fiterMessageArray=product.messages.filter(msg=>{
        return msg.senderId===loginUser['_id']
      })
      setmessageArray(fiterMessageArray);
    }

    console.log(seller)
    return ()=>{
      flag=true;
    }

    

  },[product])

  


  const fetchSingleProductData = async () => {
    const response = await axios.get(`http://localhost:9000/product/${serchProductid}`);
    setProduct(response.data)
    if(!response.data){
      navigate('/');
    }
    const sellerresponse=await axios.get(`http://localhost:9000/user/${response.data["user_id"]}`);
      setSeller(sellerresponse.data);
  }
  // const fetchUserData= async ()=>{
  //   if(product){
      
  //   }
  // }

  const sendMessage=async(e)=>{
    e.preventDefault()
        if(!chatRef.current.value){
            return;
        }
        const postData={
          sender:loginUser,
          msgFromSender:chatRef.current.value
        }
        const response= await axios.patch(`http://localhost:9000/product/chat?id=${params.id}`,postData)
  }



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
                  <ul>
                  {messageArray.length?messageArray[0].chat.map(msg=>{
                    return <li className={msg[loginUser.name]?'sender':'reciver'}>
                      <div className='text-msg'>{msg[loginUser.name]}</div>
                    </li>
                  }):null
                }
                  
                  </ul>
                </div>


                <div className='chat-form'>
                  <form >
                  <input type='text' ref={chatRef} className='serachinput'/>
                  <button type='submit' className='submit-btn' onClick={sendMessage}>send</button>
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
