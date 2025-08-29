import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';     //to send api request to backend
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

const EditModal = ({item}) => {
    console.log("Product data", item)
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const {Auth} = useSelector((state) => state.Auth)// Access the nested Auth property
    const handleOnSubmit=async (e) => {
            e.preventDefault();
            try {
                const response= await axios.put(`https://e-commerce-crud-backend.vercel.app/product/update/${item._id}`, {
                    title,
                    description,
                    imageUrl
                })
                 const data = response.data
                 if(response.status===200) {
                     toast.success(data.message);
                 } else {
                     toast.error(data.message);
                 }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
  return (
    <>

 {/* Main modal } */}
 <div>
<div id="edit-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
         {/* Modal content } */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
             {/* Modal header } */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                    Edit Product
                </h3>
            </div>
             {/* Modal body } */}
            <form className="p-4 md:p-5" onSubmit={handleOnSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type producttitle" required=""></input>
                        <label for="imageUrl" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Image-Url:</label>
                        <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} id="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product image URL" required=""></input>
                    </div>
                    <div className="col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description:</label>
                        <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-toggle="crud-modal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Update</button>
                    <button data-modal-toggle="crud-modal" type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                </div>
            </form>
        </div>
    </div>
</div> 
</div>
    </>
      )  
    }


export default EditModal
