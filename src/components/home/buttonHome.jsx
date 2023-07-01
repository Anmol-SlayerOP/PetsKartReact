const ButtonHome = ({ text, onClick }) => {
  return (
    <>
      <button
        className="font-bold text-white bg-gradient-to-r from-[#ba1010]/90 to-[#FF6B35] rounded-full px-7 py-3 text-xl"
        onClick={onClick}
        // hover:bg-black transition ease-in-out
      >
        {text}
      </button>
    </>
  );
};
export default ButtonHome;
