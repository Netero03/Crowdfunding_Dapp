import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

import  AdminLayout  from '../components/AdminLayout';

const AdminApproval=function ApprovalTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to fetch product data from the server
        async function fetchProductData() {
            try {
                // Make an HTTP request to your API endpoint
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                // Parse the JSON response
                const productData = await response.json();
                setProducts(productData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }

        // Call the fetchProductData function when the component mounts
        fetchProductData();
        return () => {
            // Any clean-up code if needed
        };
    }, []); 
  return (
    <>
      <AdminLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                {/* Your existing header code here */}
                
                <tbody>
                    {/* Table rows will be dynamically populated here */}
                    {products.map(product => (
                        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </td>
                            <td className="px-6 py-4">
                                {product.color}
                            </td>
                            <td className="px-6 py-4">
                                {product.category}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </AdminLayout>
    </>

  )
}

export default AdminApproval