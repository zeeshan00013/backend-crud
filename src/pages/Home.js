import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase';

export const Home = () => {
  const [product,setproduct]=useState([])
 
  const db=getFirestore(app)

   useEffect(()=>{
    getdata()
   },[db])

   const getdata =async()=>{
    try{
      const querySnapshot=await getDocs(collection(db,'users'));
      const fetchData =querySnapshot.docs.map((doc)=>({
        id: doc.id,...doc.data()  }));
        console.log(fetchData);
        setproduct(fetchData)
    }catch(error){
      console.error('Error fetching data: ', error);

    }
   }
  return (
    <div>
      <h1 className='text-4xl underline text-center '>my products</h1>
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-3 space-x-6 space-y-10 ">
      
   {
    product.map((post)=>{
      const {title,description,imgURL} =post;
      return (
       <div className='border-solid shadow-sm shadow-zinc-900 relative"'>
<div className='flex justify-center mt-7'> <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-md shadow-lg " src={imgURL} alt="Woman's Face" />
 </div>
<div className="sm:flex sm:items-center px-6 py-8">
  
    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p className="text-xl leading-tight font-semibold text-gray-900">{title}</p>
        <p className="text-sm leading-tight text-gray-600">{description}</p>
        
    </div>
</div> 
</div>
        
      )
    })
   }
     
</div>

</div>
  )
};
 