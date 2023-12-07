import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
  } = formData;

  return (
    <main className="max-w-md p-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold ">Create Listing </h1>

      <form>
        <p className="text-lg mt-6 font-semibold ">Sell / Rent</p>
        {/* Sell or Rent Section */}
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            id="type"
            value="sell"
            className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            } `}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="sell"
            className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            } `}
          >
            Rent
          </button>
        </div>
        {/* Hotel Name Section */}
        <p className="text-lg mt-6 font-semibold ">Name</p>
        <input
          type="text "
          id="name"
          value={name}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          className="rounded px-4 py-2 text-xl text-gray-400 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 "
          required
        />

        {/* Beds & Bath Section */}

        <div className="flex flex-nowrap items-center justify-start gap-10">
          <div className="">
            <p className="text-lg font-semibold ">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              min="1"
              max="50"
              required
              className="px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 "
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold ">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              min="1"
              max="50"
              required
              className="px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 "
            />
          </div>
        </div>

        {/* Parking Section */}

        <div>
          <p className="text-lg mt-6 font-semibold ">Parking</p>
          <div className="flex items-center justify-between gap-6">
            <button
              type="button"
              id="parking"
              value={true}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                !parking ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              Yes
            </button>
            <button
              type="button"
              id="parking"
              value={false}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                parking ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              No
            </button>
          </div>
        </div>

        {/* Furnished Section */}

        <div>
          <p className="text-lg mt-6 font-semibold ">Furnished</p>
          <div className="flex items-center justify-between gap-6">
            <button
              type="button"
              id="furnished"
              value={true}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              Yes
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              No
            </button>
          </div>
        </div>

        {/* Address */}

        <p className="text-lg mt-6 font-semibold ">Address</p>
        <textarea
          type="text "
          id="address"
          value={address}
          placeholder="Address"
          rows="4"
          cols="50"
          className="w-full rounded px-4 py-2 text-xl text-gray-400 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 "
          required
        />

        {/* Description */}
        <p className="text-lg font-semibold ">Description</p>
        <textarea
          type="text "
          id="address"
          value={description}
          placeholder="Description"
          rows="4"
          cols="50"
          className="w-full rounded px-4 py-2 text-xl text-gray-400 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600  "
          required
        />

        {/* Offer */}

        <div>
          <p className="text-lg mt-6 font-semibold ">Offer</p>
          <div className="flex items-center justify-between gap-6 mb-6">
            <button
              type="button"
              id="offer"
              value={true}
              required={type}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                !offer ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              Yes
            </button>
            <button
              type="button"
              id="offer"
              value={false}
              className={` px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                offer ? "bg-white text-black" : "bg-slate-600 text-white"
              } `}
            >
              No
            </button>
          </div>
        </div>

        {/* Regular Prize */}

        <div className="mb-6 ">
          <p className="text-lg font-semibold ">Regular Price</p>
          <div className="flex  items-center justify-start w-full space-x-10 ">
            <input
              type="number"
              id="regularPrice"
              value={regularPrice}
              min="100"
              max="500000"
              required
              className="w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 "
            />

            {type === "rent" && (
              <>
                <p className="text-md  whitespace-nowrap">$/month</p>
              </>
            )}
          </div>
        </div>

        {/* Discounted Price */}
        <div className="mb-6 ">
          <p className="text-lg font-semibold ">Discount Price</p>
          <div className="flex  items-center justify-start w-full space-x-10 ">
            <input
              type="number"
              id="discountPrice"
              value={discountPrice}
              min="1"
              max="5000"
              required={offer}
              className="w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 "
            />

            {offer && (
              <>
                <p className="text-md  whitespace-nowrap">$/month</p>
              </>
            )}
          </div>
        </div>

        {/* Images */}

        <div className="mb-6 ">
          <p className="text-lg font-semibold ">Images</p>
          <p className=" text-gray-500">
            The first image will be the cover (max: 6)
          </p>
          <input
            type="file"
            id="images"
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 rounded text-gray-500 bg-white border border-gray-300 transition duration-150 ease-in-out focus:bg-white focus:border-slate-500"
          />
        </div>

        {/* Create Listing Button */}
        <button
          className="w-full mb-6 bg-blue-500 text-white hover:bg-blue-700 px-7 py-3 transition duration-200 ease-in-out rounded-lg text-sm font-medium uppercase shadow-md hover:shadow-lg active:bg-blue-800"
          type="submit"
        >
          Submit Listing
        </button>

        {/* / */}
      </form>
    </main>
  );
};

export default CreateListing;
