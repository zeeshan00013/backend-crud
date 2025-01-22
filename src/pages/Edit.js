import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = ({ data, onSubfsdamit, ondffdssdasdasaaadcel }) => {
    // Provide default values for formData if data is undefined
 const[name,setName]=useState("");
 const[email, setEmail] = useState('');
    const[userData,setUserData]=useState({})
    const { id } = useParams();
 useEffect(()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": id
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/getdata", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // console.log();
    setEmail(result.email);
    setName(result.name);

  })
  .catch((error) => console.error(error));
 },[])
    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }));    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "id": id,
          "name": name,
          "email": email
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:8080/updateDAta", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4sdad">Edit Form:</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-4 shadow">
                <div className="mb-2">
                    <label className="font-bold" htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name}  onChange={e=>{
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <label className="font-bold" htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={e=>{
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className="mt-4 flex space-x-2">
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                    <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
