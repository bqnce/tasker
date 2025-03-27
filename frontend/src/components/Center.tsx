import AnimatedHeading from "./AnimateHeading";
export const Center = () => {
  return (
    <>
      <div className="h-[92%] flex justify-center flex-col">
        <div className="h-[30%] flex justify-center text-center flex-col">
          <AnimatedHeading />
          <p className="text-lg mt-5 text-[#b5b5b5] font-light">
            Create. manage. and conquer you to-do lists with ease. Effortlessly
          </p>
        </div>
      </div>
    </>
  );
};
