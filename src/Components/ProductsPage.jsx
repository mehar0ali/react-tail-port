

export default function ProductsPage() {
  const slides = [
    {
      url: "https://source.unsplash.com/4hbJ-eymZ1o",
      desc: "Javascript",
    },
    {
      url: "https://source.unsplash.com/qAjJk-un3BI",
      desc: "HTML",
    },
    {
      url: "https://source.unsplash.com/_Fx34KeqIEw",
      desc: "CSS",
    },
    {
      url: "https://source.unsplash.com/d3Ysz1ziusM",
      desc: "React",
    },
    {
      url: "https://source.unsplash.com/1bNQVGzuy0U",
      desc: "Python",
    },
    {
      url: "https://source.unsplash.com/Y5yxdx2a4PI",
      desc: "Flutter",
    },
    {
      url: "https://source.unsplash.com/f77Bh3inUpE",
      desc: "React Native",
    },
    {
      url: "https://source.unsplash.com/LJ9KY8pIH3E",
      desc: "Golang",
    },
    {
      url: "https://source.unsplash.com/Fi-GJaLRGKc",
      desc: "Node Js",
    },
    {
      url: "https://source.unsplash.com/IKUYGCFmfw4",
      desc: "MongoDb",
    },
  ];

  return (
    <>
      <div className="w-[100%] bg-gray-800 flex justify-center">
        <div className="text-white py-7 w-[80%] h-full ml-16">
          <div className="w-full h-full flex flex-col items-center pt-5 text-3xl font-semibold ">
            <h1>List of Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl gap-6 place-items-center items-center py-10">
              {slides.map((elem, ind) => {
                return (
                  <div
                    className="w-28 h-28 sm:w-36 sm:h-36  md:w-48 md:h-48 border-2 border-white rounded-lg"
                    key={ind}
                  >
                    <div
                      className="w-full h-20 sm:h-28 md:h-40  rounded-lg border-2 border-white overflow-hidden"
                      // style={{backgroundImage: `url(${images[0].image}`}}
                    >
                      <img
                        src={elem.url}
                        alt="image"
                        key={ind}
                        className="w-full h-full rounded-b-lg rounded-r-lg cursor-pointer hover:scale-110 duration-300"
                      />
                    </div>
                    <h3 className="text-sm pt-1 md:pt-0 sm:text-sm md:text-md lg:text-lg flex justify-center bg-black rounded-b-lg">
                      {elem.desc}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
