import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="text-xl bold p-4 flex flex-row items-center">
        <img src={logo} height={45} width={45} className="mr-2" />
        Tasker
      </div>
    </>
  );
};
