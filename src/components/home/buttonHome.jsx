const ButtonHome = ({ text, onClick }) => {
  return (
    <>
      <button
        className="font-bold text-white hover:bg-black transition ease-in-out bg-[#FF6B35] rounded-full px-7 py-3 text-xl"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonHome;
