import React, { useState } from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Skincare",
    "Makeup",
    "Clothing",
    "Beauty Tips",
    "Hair Care",
    "Nail Art",
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_240px]">

        {/* LEFT */}
        <div>
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
          />

          {/* React Quill */}
          <ReactQuill theme="snow" value={content} onChange={setContent} className="h-[250px]"
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-4">

          {/* Publish */}
          <div className="border border-gray-300 p-3">

            <h2 className="text-xl font-title font-bold text-gray-600">
              Publish
            </h2>

            <div className="text-xs text-gray-600">
              <p>
                <span className="font-semibold font-title">Status:</span> Draft
              </p>

              <p>
                <span className="font-semibold font-title">Visibility:</span> Public
              </p>

              <button className="text-xs text-gray-500 underline">
                Upload Image
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between">

              <button
                className="border border-gray-400 px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Save as a draft
              </button>

              <button
                className="bg-pink-500 px-3 py-2 text-xs text-white hover:bg-pink-700 rounded-md transition-colors"
              >
                Update
              </button>

            </div>
          </div>

          {/* Category */}
          <div className="border border-gray-300 p-3">

            <h2 className="text-xl font-bold font-title text-gray-600">
              Category
            </h2>

            <div className="mt-1 space-y-1">
              {categories.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-1 text-xs text-gray-600 font-title hover:text-gray-800 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={category === item}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-3 w-3"
                  />

                  {item}
                </label>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Write;