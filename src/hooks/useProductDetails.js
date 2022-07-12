import { useEffect, useState } from "react";

const useProductDetails = productId =>{
    
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://fakestoreapi.com/products/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[productId, data])
    return [data, setData] ;
}

export default useProductDetails;