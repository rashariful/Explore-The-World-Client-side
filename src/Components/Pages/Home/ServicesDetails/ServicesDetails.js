import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import swal from 'sweetalert';
import "react-photo-view/dist/react-photo-view.css";

const ServicesDetails = () => {
  const [reviews, setReviews] = useState([])
  const service = useLoaderData();
  const { _id, image, name, price, description } = service.data;
  console.log(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      review: e.target.review.value,
      id: _id
    };

  

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          swal({
            title: data.message,
            icon: "success",
            button: "ok",
          });
        } else {
          swal({
            title: data.error,
            icon: "warning",
            button: "ok",
          });
        }
      })
      .catch((err) => {
        swal({
          title: err.message,
          icon: "warning",
          button: "ok",
        });
      });
    e.target.reset();
  };
  
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setReviews(data.data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <section>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-md px-4 md:px-8 mx-auto">
            <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
              <PhotoProvider>
                <PhotoView src="/1.jpg">
                  <img
                    src={image}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="w-full h-full object-cover object-center"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
              {name}
            </h1>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
              Description:
            </h2>
            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text. The important factor when using filler text is that
              the text looks realistic otherwise it will not look very good.
              <br />
              <br />
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is{" "}
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100"
              >
                random
              </a>{" "}
              or otherwise generated. It may be used to display a sample of
              fonts or generate text for testing. Filler text is dummy text
              which has no meaning however looks very similar to real text.
            </p>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
              About us
            </h2>

            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">{description}</p>

            <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
              <li>This is a section of some simple filler text</li>
              <li>Also known as placeholder text</li>
              <li>It shares some characteristics of a real written text</li>
            </ul>

            <blockquote className="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">
              “This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.”
            </blockquote>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
              Features
            </h2>

            <p className="text-gray-500 sm:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>
          </div>
        </div>
      </section>
      
      {/* Review section start */}
      <section>
        <div className="w-[50%] mx-auto">
          {
            reviews.map(review => <li>{review.review}</li> )
          }
          <p>{description}</p>
          </div>
       <div className="w-[60%] mx-auto">
          <form onSubmit={handleSubmit}>

            <div className="flex items-center mb-10">
              <textarea
                name="review"
                placeholder="Type your review"
                id="" cols="30"
                rows=""
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              >

              </textarea>
            </div>


            <div className="text-right">
              <button className="py-3 px-8 rounded-md bg-green-400 text-white font-bold">
                Add review
              </button>
            </div>
          </form>
       </div>
      </section>
    </>
  );
};

export default ServicesDetails;
