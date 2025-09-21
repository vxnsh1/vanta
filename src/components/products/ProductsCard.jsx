const ProductsCard = () => {
  const imageSrc = [
    "/product-1.jpg",
    "/product-2.jpg",
    "/product-3.jpg",
    "/product-4.jpg",
    "/product-5.jpg",
    "/product-6.jpg",
  ];

  return (
    <>
      {imageSrc.map((item, idx) => (
        <div
          key={idx}
          className={`md:w-[calc(50%-0.25rem)] aspect-square md:h-full relative flex items-center justify-center cursor-pointer group bg-black hover:rounded-[2.5rem] overflow-hidden transition-all duration-200 mb-2`}
        >
          <img
            src={item}
            alt=""
            className="w-full h-full object-cover transition-all duration-200 hover:opacity-80 hover:scale-105"
          />
          <div className="buttonText h-9 md:h-12 pointer-events-none uppercase absolute text-white font-[Secondary] border-3 border-white rounded-full px-4 text-3xl md:text-5xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
            View Product
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsCard;
