import React, { useState } from 'react'
import { TxtDB, storage } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Bounce, Flip, Roll, Slide, } from 'react-awesome-reveal';

export const Cart = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const  handleSubmit =()=>{
        console.log({title, description,image});
         const imgref= ref(storage,`Imgs/${image.name}`);
         uploadBytes(imgref,image).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then(async url=>{
            try{
              const colref =collection(TxtDB,'users')
              await addDoc(colref,{title,description,imgURL:url})
              alert("Successfully added to cart")
            } catch (error) {
              console.error("Error adding document:", error);
              alert("An error occurred while adding the document");
            }
          })
         })
  }

  return (
    <Slide direction={'down'}  >
    <div className="container mx-auto mt-8 flex justify-center flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

            <div  className='w-[300px]' >
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 border-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="mt-1 p-2 block w-full rounded-md border-2 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
                    <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" className="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>

                <button type="submit" className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded float-left"
                onClick={()=>{
                  handleSubmit();
                  console.log(handleSubmit);
                }}>Add Product</button>
            </div>
        </div>
        </Slide>
  )
}
