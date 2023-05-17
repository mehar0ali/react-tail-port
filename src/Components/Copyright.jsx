import { MdOutlineCopyright } from "react-icons/md";

export default function Copyright() {
  const CopyRight = [
    { icon: MdOutlineCopyright, desc: "Copyright License by Mehar Ali" },
  ];

  return (
    <>
      <div>
        {CopyRight.map((elem, ind) => {
          return (
            <div
              key={ind}
              className="flex justify-center items-center gap-1 text-white bg-gray-700 py-1 pl-16 text-[12px] md:text-[13px] lg:text-[15px]"
            >
              <div>
                <MdOutlineCopyright />
              </div>
              <p>{elem.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
