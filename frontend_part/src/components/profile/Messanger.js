import React, { useEffect,useContext,useState,useRef} from 'react'
import productContext from '../../context/productContext';
import userContext from '../../context/userContext';
import NewChat from './newChat';


export default function Messanger() {
    const [products,setProducts]=useContext(productContext);
    
    let [myProductArr,setMyProductArr]=useState('')
    let [selectedProduct,setSelectedProduct]=useState('')
    const[loginUser]=useContext(userContext)
    let [ShowChatId,setShowChatId]=useState('')
    let [chatIndex,setChatIndex]=useState('')
    let [senderName,setSenderName]=useState('')

    // console.log("messanger product",products)
    console.log("messanger myproduct",myProductArr)
    // let productIdref=useRef() // working product name list onclick on users chat 2 product another users onclick user particular chat

    // console.log("for chat",ShowChatId,chatIndex);
    useEffect(()=>{

        console.log("messanger inside myproduct",myProductArr)
        const myProducts=products.filter((product)=>{
            return product['user_id']===loginUser['_id'];
        })
        setMyProductArr([...myProducts])

        // if(myProducts.length){
        //     // productIdref.current=myProducts[0]['_id']

        //     let messages=[];

        //     myProducts.forEach(element => {
        //         messages=[...messages,...element.messages]
        //     })
        //     console.log("messages all",messages)
            
        //       setmessageArray([...myProducts[0].messages]);
        // }

    

    },[products])


  return (
    <div>
        <div className='messanger'>
            <div className='msg-sidebar'>
                {
                   myProductArr.length && myProductArr.map((product,i)=>{
                        return(
                            <ul key={i}>
                                <li>
                                    <div className='product-chat-list'>
                                        <div className='pro-btn' onClick={()=>{
                                            
                                            // setmessageArray([...product.messages]);
                                            setShowChatId(product["_id"])
                                            setChatIndex("")
                                            }}>{product.productName}</div>
                                        <div>
                                            {
                                                ShowChatId===product["_id"] &&
                                                <ul>
                                                {
                                                    product.messages.map((msg,index)=>{
                                                        return(
                                                            msg.buyer && <li key={index} className='user-btn' onClick={()=>{
                                                                setSenderName(msg.buyer.name)
                                                                setChatIndex(index+1)
                                                            }}>{msg.buyer.name}</li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                                
                                            }
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        )
                    })
                }

            </div>

            <div className='chat-area'>
                
{
     myProductArr && ShowChatId &&

            <NewChat myProductArr={myProductArr} 
            productId={ShowChatId} 
            chatIndex={chatIndex} 
            setMyProductArr={setMyProductArr} 
            senderName={senderName}/>
            // <h1>heeelo</h1>
}
            </div>


        </div>
      
    </div>
  )
}
