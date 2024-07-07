import React, { useContext, useEffect, useState } from 'react'
import productContext from '../../../../context/productContext'
import userContext from '../../../../context/userContext';
import Card from '../../../home/card';
import "../../../home/home.css"
import "./myProduct.css"

export default function MyProduct() {
    const [product, setProduct] = useContext(productContext)
    const [user, setUser] = useContext(userContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        const myProducts = product.filter((item) => {

            return item["user_id"] == user['_id'];
        })
        setMyProducts([...myProducts])

    }, [product])

    { myProducts && console.log("product in myproduct component is", myProducts) }
    return (
        <div className='myProduct'>
            <div className='container'>
                {myProducts &&
                    myProducts.map((item) => {
                        return <Card data={item} isEdit={true} />
                    })
                }


            </div>
        </div>
    )
}
