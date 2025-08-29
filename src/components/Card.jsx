import React from 'react'
import {toast} from 'react-hot-toast';
import axios from 'axios';
import {initFlowbite} from 'flowbite';


const Card = ({items, handleEdit}) => {
  useEffect(() => {
    initFlowbite();
}, []);
const handleDelete = async () => {
  try {
    await axios.delete(`https://e-commerce-crud-backend.vercel.app/product/delete/${items._id}`);
    toast.success('Product deleted successfully');
    window.location.reload();
  } catch (error) {
    console.error('Error deleting product:', error);
    toast.error('Failed to delete product');
  }
}
  return (
<div className="card p-2 bg-white text-black lg:w-70 md:75 sm:w-80 rounded-[30px] shadow-lg">
  <figure>
    <img
      className='rounded-2xl bg-cover h-48 w-full'
      src={items.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body p-2 text-start">
    <h2 className="card-title font-bold">
      {items.title}
    </h2>
    <p>{items.description}</p>
    <div className="card-actions flex gap-2 pr-1 justify-end">
         <button onClick={handleEdit} className='bg-black text-white rounded px-2.5 py-0.5 text-sm cursor-pointer hover:bg-gray-700' data-modal-target="edit-modal" data-modal-toggle="edit-modal" >Edit</button>
         <button className='bg-red-500 text-white rounded px-1.5 py-0.5 text-sm cursor-pointer hover:bg-red-600' onClick={handleDelete}>Delete</button>
    </div>
  </div>
</div>
  )
}

export default Card
