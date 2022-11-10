import React, { useEffect, useState , useContext} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../../Context/UserContext";
import swal from 'sweetalert';
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../../../hooks/useTitle";

const ServicesDetails = () => {
  useTitle("service")
  const { user} = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  const [refresh, setRefresh] = useState(false)
  const service = useLoaderData();
  const { _id, image, name, price, description } = service.data;

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      review: e.target.review.value,
      serviceid: _id,
      user: user
    };
    console.log(review);
 

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.success) {
          setReviews([...reviews, review])
          setRefresh(!refresh)
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
  


  // useEffect(() => {
  //   fetch('http://localhost:5000/review')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.success) {
         
  //         setReviews(data.data)  
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [refresh])


  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [_id])

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
            reviews.map(review =>  {
              return (
                <>
                  <div className="w-[70%] mx-auto">
                    <div className="flex gap-5 items-center">
                      <div>
                        <img src={user?.photoURL} className='w-12 h-12 rounded-full' alt="" />
                      </div>
                      <div>
                        <h1> {user?.displayName}</h1>
                        <p className="text-gray-500"><small>06/10/2022</small></p>
                      </div>
                    </div>

                    <div className="w-1/2 py-5 px-4 border rounded-lg my-5">
                      <p className="text-gray-500">{review.review}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
         
          
          </div>
       <div className="w-[60%] mx-auto">
          <form onSubmit={handleSubmit}>

            <div className="flex justify-center mx-auto gap-3">
              {
                user || user?.email || user?.uid || user?.displayName

                  ?
                  <div>
                    <textarea
                      name="review"
                      placeholder="Type your review"
                      id="" cols="30"
                      rows=""
                      className="flex-1 py-5 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none rounded-lg"
                    >
                    </textarea>

                    <div className='flex mb-10 items-center gap-4'>
                      <div>  <button className='bg-indigo-500 px-10 py-2 rounded-md text-white font-medium hover:bg-indigo-600 transition-all'>
                        Add review
                      </button></div>
                    </div>

                  </div>
                    :
                    <div className='gap-4'>
                      <button className='bg-indigo-500 px-10 py-2 rounded-md text-white font-medium hover:bg-indigo-600 transition-all'>
                      <h3>Please login to add a review</h3>
                        <Link to='/login' >Login</Link>
                      </button>
                    </div>
                }

            </div>
           
          </form>
       </div>
      </section>
    </>
  );
};

export default ServicesDetails;
