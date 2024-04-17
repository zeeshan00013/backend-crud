import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate directly

const Data = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // Renaming the variable to 'navigate'

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/fetchData');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
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
            
            fetch("http://localhost:8080/deleltedata", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.error(error));
            fetchData(); // Refresh data after deletion
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleEdit = (id) => {
        // Navigate to the edit screen with the ID of the item being edited
        navigate(`/edit/${id}`); // Using 'navigate' instead of 'Navigate'
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Data from Server:</h1>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.map(item => (
                    <li key={item._id} className="bg-gray-100 rounded-lg p-4 shadow">
                        <div className="mb-2">
                            <span className="font-bold">Name:</span> {item.name}
                        </div>
                        <div>
                            <span className="font-bold">Email:</span> {item.email}
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <button
                                onClick={() => handleEdit(item._id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Data;
