const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="uppercase text-white text-[14px] md:text-md hover:text-violet-500 cursor-pointer transition-colors duration-200 "
    >
      Back to top
    </button>
  );
};

export default BackToTop;
