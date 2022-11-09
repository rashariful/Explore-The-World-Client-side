import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditReview = () => {
    const router = useParams();
    const { id } = router;
    const [reviews, setReviews] = useState();
    const navigate = useNavigate();
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.data);
                console.log(data);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            review: e.target.review.value,
        };

        fetch(`http://localhost:5000/review/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert(data.message);
                    navigate("/myreview");
                } else {
                    alert(data.error);
                }
            })
            .catch((err) => alert(err.message));
    };


    return (
        <>
            <div className="py-32 px-10 min-h-screen w-full">
                <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit}>
                      

                       
                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Reviews
                            </label>

                            <textarea
                                name="review"
                                placeholder="description"
                                defaultValue={reviews?.review}
                                id="" cols="30"
                                rows=""
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            >

                            </textarea>
                        </div>

                     

                        <div className="text-right">
                            <button className="py-3 px-8 rounded-md bg-green-400 text-white font-bold">
                                Update Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditReview;
