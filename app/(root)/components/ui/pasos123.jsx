import Image from "next/image";

const Pasos123 = ({ imagen, paso, desc }) => {
  return (
    <div className="  w-[250px] flex flex-col items-center justify-center pt-20 pb-4 px-4 border-idaclass border-4 relative rounded-xl shadow-xl my-20">
      <div className=" absolute -top-20 h-[160px] w-[160px]">
        <Image
          src={`/assets/${imagen}`}
          fill={true}
          alt="primer paso"
          sizes="(max-width: 200px) 100vw, (max-width: 200px) 50vw, 33vw"
          className="bg-white rounded-full object-contain "
        />
      </div>
      <div className="relative top-0 text-center">
        <h3 className="text-2xl text-center font-extrabold text-indigo-950 ">
          {paso}
        </h3>
        <p className="mX-4">{desc}</p>
      </div>
    </div>
  );
};

export default Pasos123;
