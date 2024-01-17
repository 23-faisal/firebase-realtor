import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    address: "",
    description: "",
    parking: false,
    furnished: false,
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    address,
    description,
    parking,
    furnished,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  const OnChange = () => {};
  return (
    <section className="max-w-6xl mx-auto px-3 mb-12">
      <h1 className="text-3xl text-center mt-6 font-bold ">Create Listing</h1>
      <form className="max-w-xl mx-auto">
        {/* Sell or Rent Starts Here */}
        <p className="text-lg font-semibold  mt-6 mb-3 ">Sell / Rent</p>
        <div className=" flex items-center justify-between gap-5">
          <button
            className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-700 text-white"
            }`}
            type="button"
            id="type"
            value="sell"
            onClick={OnChange}
          >
            Sell
          </button>

          <button
            className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-700 text-white"
            }`}
            type="button"
            id="type"
            value="sell"
            onClick={OnChange}
          >
            Rent
          </button>
        </div>
        {/* Sell or Rent Ends Here */}

        {/* Name Starts Here */}

        <div className="mt-6">
          <p className="text-lg font-semibold ">Name</p>
          <input
            onChange={OnChange}
            className="w-full rounded bg-white px-2 py-3 mt-3 border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-600 mb-6"
            id="name"
            value={name}
            type="text"
            placeholder="Name"
            maxLength="32"
            minLength="8"
            required
          />
        </div>

        {/* Name Ends Here  */}

        {/* Beds & Bathrooms Starts Here  */}

        <div className="flex space-x-10 items-center  ">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              onChange={OnChange}
              type="number"
              className="w-full  mt-3 px-2 py-3 rounded text-xl text-gray-700 border border-slate-300 bg-white transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center  "
              id="bedrooms"
              value={bedrooms}
              min="1"
              max="50"
              required
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              onChange={OnChange}
              type="number"
              className="w-full  mt-3 px-2 py-3 rounded text-xl text-gray-700 border border-slate-300 bg-white transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center  "
              id="bathrooms"
              value={bathrooms}
              min="1"
              max="50"
              required
            />
          </div>
        </div>

        {/* Beds & Bathrooms Ends Here  */}

        {/* Parking Spot Starts Here  */}
        <div>
          <p className="text-lg font-semibold  mt-6 mb-3 ">Parking Spot</p>
          <div className=" flex items-center justify-between gap-5">
            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !parking ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="parking "
              value={true}
              onClick={OnChange}
            >
              Yes
            </button>

            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                parking ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="parking "
              value={false}
              onClick={OnChange}
            >
              No
            </button>
          </div>
        </div>

        {/* Parking Spot Ends Here  */}

        {/* Furnished Starts Here */}

        <div>
          <p className="text-lg font-semibold  mt-6 mb-3 ">Furnished</p>
          <div className=" flex items-center justify-between gap-5">
            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !furnished ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="furnished"
              value={true}
              onClick={OnChange}
            >
              Yes
            </button>

            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                furnished ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="furnished"
              value={false}
              onClick={OnChange}
            >
              No
            </button>
          </div>
        </div>

        {/* Furnished Ends Here */}

        {/* Address Starts Here */}

        <div className="mt-6">
          <p className="text-lg font-semibold ">Address</p>
          <textarea
            onChange={OnChange}
            className="w-full rounded bg-white px-2 py-3 mt-3 border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-600 "
            id="address"
            value={address}
            type="text"
            placeholder="Address"
            rows="3"
            cols="10"
            required
          />
        </div>

        {/* Address Ends Here */}

        {/* Description Starts Here  */}
        <div className="mt-6">
          <p className="text-lg font-semibold ">Description</p>
          <textarea
            onChange={OnChange}
            className="w-full rounded bg-white px-2 py-3 mt-3 border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-600  "
            id="description"
            value={description}
            type="text"
            placeholder="Description"
            rows="3"
            cols="10"
            required
          />
        </div>

        {/* Description Ends Here */}

        {/* Offer Starts Here */}

        <div>
          <p className="text-lg font-semibold  mt-6 mb-3 ">Offers</p>
          <div className=" flex items-center justify-between gap-5">
            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !offer ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="offer"
              value={true}
              onClick={OnChange}
            >
              Yes
            </button>

            <button
              className={`px-7 py-3 font-medium text-sm rounded uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                offer ? "bg-white text-black" : "bg-slate-700 text-white"
              }`}
              type="button"
              id="offer"
              value={false}
              onClick={OnChange}
            >
              No
            </button>
          </div>
        </div>

        {/* Offer Ends Here */}

        {/* Regular Prices Starts Here */}

        <div>
          <p className="text-lg font-semibold  mt-6 mb-3 ">Regular Prices</p>
          <div className="flex items-center justify-start space-x-6 whitespace-nowrap">
            <input
              className="w-[50%] px-4 py-2 text-lg border rounded bg-white border-gray-300  transition duration-150 ease-in-out text-center  focus:border-gray-500 "
              type="number"
              id="regularPrice"
              value={regularPrice}
              onChange={OnChange}
              min={50}
              max={40000000}
              required
            />
            {type === "rent" && (
              <div>
                <p className="text-lg text-gray-700 whitespace-nowrap ">
                  $ /Month
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Regular Prices Ends Here */}

        {/* Discounted Price Stats Here */}

        {offer && (
          <div>
            <p className="text-lg font-semibold  mt-6 mb-3 ">
              Discounted Price
            </p>
            <div className="flex items-center justify-start space-x-6 whitespace-nowrap">
              <input
                className="w-[50%] px-4 py-2 text-lg border rounded bg-white border-gray-300  transition duration-150 ease-in-out text-center  focus:border-gray-500 "
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={OnChange}
                min={50}
                max={40000000}
                required={offer}
              />
              {offer && type === "rent" && (
                <div>
                  <p className="text-lg text-gray-700 whitespace-nowrap ">
                    $ /Month
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Discount Price Ends Here */}

        {/* Images Section Starts Here */}

        <div className="mt-6 ">
          <p className="text-lg font-semibold  ">Images</p>
          <p className="text-gray-600 text-sm ">
            The first image will be cover (max 6)
          </p>
          <input
            className="w-full mt-3 px-3 py-2 text-gray-700 border border-gray-300 rounded bg-white transition duration-150 ease-in-out focus:bg-white focus:border-gray-600 "
            type="file"
            name="images"
            id="images"
            onChange={OnChange}
            accept=".jpg,.jpeg,.png"
            multiple
            required
          />
        </div>

        {/* Images Section Ends Here */}

        {/* Submit Button */}

        <button
          className="mb-6 mt-8 w-full px-6 py-3 bg-blue-600 text-md uppercase font-semibold text-white rounded hover:bg-blue-700 hover:shadow-md focus:bg-blue-800 focus:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out "
          type="submit"
        >
          {" "}
          Create Listing
        </button>
      </form>
    </section>
  );
};

export default CreateListing;
