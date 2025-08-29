import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';     //to send api request to backend
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import CustomModal from '../components/Modal';
import EditModal from '../components/EditModal';

const Home = () => {
  const [Product,setProduct]=useState([])
  const navigate = useNavigate();
  const [productID,setproductID]=useState('')
  console.log("ProductID",productID)
  const {Auth} = useSelector((state) => state.Auth)// Access the nested Auth property
  useEffect(() => {
    if (!Auth) {
      navigate('/login');
    }
  }, [Auth]);
  useEffect(() => {
    GetProduct();
  }, []);
  const handleEdititem = (item) => {
    setproductID(item);
  }

    const GetProduct = async () => {
    try {
      const response = await axios.get(`https://e-commerce-crud-backend.vercel.app/product/getproducts/${Auth._id}`)
      const userId = Auth._id
      // console.log('Authenticated user ID:', userId)
      const data = response.data
      setProduct(data.Products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
  return (
    <>
      <Navbar />
    <CustomModal />
    <EditModal item={productID} />
    <div className="min-h-screen w-full bg-gray-200 p-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to our card collections
        </h1>
        <p className='text-gray-800'>Explore the latest additions to our collection</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {Product.length === 0 ?  <h1 className='text-left text-gray-800 text-xl font-stretch-semi-condensed font-bold'>No products found</h1>: ""}

          {Product.map((item) => (//The item in {Product.map((item) => ...) is a single object from the Product array for each iteration of the loop
            <Card key={item._id} items={item} handleEdit={() => handleEdititem(item)} />// .map method is used to iterate the values of an array its syntax is "array.map(callback(currentValue, index, array))"
          ))}
        </div>
      </div>
          <CustomModal />
    <EditModal item={productID} />
    </div>
    </>
  )
}

export default Home
