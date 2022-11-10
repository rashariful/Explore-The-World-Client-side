import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Table } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import useTitle from '../../../hooks/useTitle';

const MyReview = () => {
    useTitle("my review")
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const {user} = useContext(AuthContext)
    console.log(reviews);
    

    const [myReviews, setMyReviews] = useState([])
    console.log(myReviews?.data?.length);
    console.log(user.email);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])
   

    // Get function for products
    // useEffect(() => {
    //     fetch("http://localhost:5000/review")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.success) {
    //                 setReviews(data.data);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [refresh]);

    // Delete function here
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: "delete",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert(data.message);
                    setRefresh(!refresh);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // handleEdit
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/myreview/edit/${id}`);
    };


    return (
        <>
           
            <div className="py-32 px-10 flex justify-center w-full">
                {
                    myReviews?.data?.length === 0 ? 
                   <div>
                            <div className="bg-white py-6 sm:py-8 lg:py-12">
                                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                                    <div className="">
                                        {/* <!-- overview - start --> */}
                                        <div>
                                            <div className="border rounded-lg p-4">
                                                <h2 className="text-gray-800 text-lg lg:text-xl font-bold mb-3">My Reviews Length 0</h2>
                                                <p>No review here</p>

                                                <div className="flex items-center gap-2 mb-0.5">
                                                    {/* <!-- stars - start --> */}
                                                    <div className="flex gap-0.5 -ml-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>

                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>

                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>

                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>

                                                      
                                                    </div>
                                                    {/* <!-- stars - end --> */}

                                                    <span className="text-sm font-semibold">5/5</span>
                                                </div>

                                                


                                                <Link to='/' className="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Write a review</Link>
                                            </div>
                                        </div>
                                    
                                        
                                    </div>
                                </div>
                            </div>
                   </div>
                    : 
                        <Table striped={true}>
                            <Table.Head className="bg-indigo-200">
                                <Table.HeadCell>My review</Table.HeadCell>
                                <Table.HeadCell>Actions</Table.HeadCell>
                            </Table.Head>

                            <Table.Body className="divide-y">
                                {myReviews?.data?.map((review) => {
                                    return (
                                        <>
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {review.review.slice(0, 20) + "..."}
                                                </Table.Cell>


                                                <Table.Cell>{review.price}</Table.Cell>
                                                <Table.Cell>
                                                    <Dropdown label="Edit">
                                                        <Dropdown.Item>
                                                            <button onClick={() => handleEdit(review._id)}>
                                                                Edit
                                                            </button>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <button onClick={() => handleDelete(review._id)}>
                                                                Delete
                                                            </button>
                                                        </Dropdown.Item>
                                                    </Dropdown>
                                                </Table.Cell>
                                            </Table.Row>
                                        </>
                                    );
                                })}
                            </Table.Body>
                        </Table>
                }

            </div>
        </>
    );
};

export default MyReview;