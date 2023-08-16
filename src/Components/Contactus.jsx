export default function Contactus() {
  return (
    <>
      <div className="w-[100%] bg-gray-900 flex justify-center">
        <div className="w-[290px] md:w-[650px] lg:w-[750px] text-white flex flex-col justify-center ml-12 my-10 rounded-md">
          <h1 className=" w-full text-[45px] flex justify-center pb-5 font-semibold">Contact Us</h1>
          <form
            action="#"
            className="flex flex-col gap-3 px-10"
          >
          <div className="md:flex lg:flex">
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 mr-10 rounded-sm w-[210px] sm:w-[340px] mb-4 md:w-[340px] lg:w-72 xl:w-[400px] 2xl:w-[500px]  bg-gray-800 py-2 border-2 border-white border-spacing-2 outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="px-3 mr-10 rounded-sm w-[210px]  sm:w-[340px] mb-4 md:w-[340px] lg:w-72 xl:w-[400px] 2xl:w-[500px]  bg-gray-800 py-2 border-2 border-white border-spacing-2 outline-none"
            />
          </div>
          <textarea
            name="Text"
            placeholder="Give us your Feedback"
            className="mt-5 px-3 py-2 w-[210px] sm:w-[340px] md:w-[510px] lg:w-[610px] xl:w-[670px] rounded-sm bg-gray-800 border-2 border-white border-spacing-2 outline-none"
            cols="52"
            rows="10"
          ></textarea>
          <button className="flex justify-start pl-3 pt-[1px] border-2 border-white my-3 bg-gray-800 hover:bg-black w-20 h-8 rounded-md  ">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
