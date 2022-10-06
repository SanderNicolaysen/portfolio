function Hamburger({ isOpen, onToggle }) {
  return (
    <button
      className="relative"
      onClick={onToggle}
      aria-label="Hamburger button"
      type="button"
    >
      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <div
          className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
            isOpen ? 'translate-x-10' : ''
          }`}
        />
        <div
          className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
            isOpen ? 'translate-x-10' : ''
          } delay-75`}
        />
        <div
          className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
            isOpen ? 'translate-x-10' : ''
          } delay-150`}
        />

        <div
          className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
            isOpen ? 'translate-x-0' : ''
          } flex w-0 ${isOpen ? 'w-12' : ''}`}
        >
          <div
            className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          />
          <div
            className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
              isOpen ? '-rotate-45' : ''
            }`}
          />
        </div>
      </div>
    </button>
  );
}

export default Hamburger;
