import React from "react";
import swal from "sweetalert";
import useTitle from "../../../hooks/useTitle";

const AddService = () => {
  useTitle("add service");

  // handle submit for create service
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    console.log(product);

    fetch("http://localhost:5000/service", {
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

  return (
    <>
      <div className="py-32 px-10 min-h-screen w-full">
        <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-10">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Description
              </label>

              <textarea
                name="description"
                placeholder="description"
                id=""
                cols="30"
                rows=""
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center mb-10">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Image
              </label>
              <input
                type="text"
                name="image"
                placeholder="url"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="text-right">
              <button className="py-3 px-8 rounded-md bg-green-400 text-white font-bold">
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
