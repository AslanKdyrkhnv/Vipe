import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-700 to-pink-500 ">
      <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto justify-items-center py-20 gap-8 px-4 space-x-2">
        <div className="card bg-slate-100  xl:w-96  lg:w-72 w-64">
          <figure>
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/9/6/3620f7ab-e4dc-4583-b54f-8b3e92e7f7d3.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title">Life hacking with relax RPS</h2>
            <p className="card-normal">With 6000 breath can take</p>
            <div className="card-actions md:justify-end  justify-center">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-slate-100  xl:w-96  lg:w-72 w-64">
          <figure>
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/9/6/3620f7ab-e4dc-4583-b54f-8b3e92e7f7d3.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title">Life hacking with relax RPS</h2>
            <p className="card-normal">With 6000 breath can take</p>
            <div className="card-actions md:justify-end  justify-center">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-slate-100  xl:w-96  lg:w-72 w-64">
          <figure>
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/9/6/3620f7ab-e4dc-4583-b54f-8b3e92e7f7d3.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title">Life hacking with relax RPS</h2>
            <p className="card-normal">With 6000 breath can take</p>
            <div className="card-actions md:justify-end  justify-center">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
