import React, { useEffect, useState } from 'react';
import { Dropdown, Table } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    console.log(reviews);

    // Get function for products
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews(data.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refresh]);

    // Delete function here
    const handleDelete = (id) => {
        console.log(id);
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
        navigate(`/dashboard/product/edit/${id}`);
    };


    return (
        <>
            <div className="py-32 px-10 flex justify-center w-full">
                <Table striped={true}>
                    <Table.Head className="bg-indigo-200">
                        <Table.HeadCell>My review</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {reviews.map((review) => {
                            return (
                                <>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {review.review.slice(0, 20)+"..."}
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
            </div>
        </>
    );
};

export default MyReview;