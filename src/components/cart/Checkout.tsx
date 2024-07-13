import CartItem from "./Cart";

const Checkout = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      imgSrc: "https://i.ibb.co/SX762kX/Rectangle-36-1.png",
      imgAlt: "Black Leather Bag",
      code: "RF293",
      name: "North wolf bag",
      height: "10 inches",
      color: "Black",
      composition: "100% calf leather",
      price: "$1,000",
    },
    {
      imgSrc: "https://i.ibb.co/c6KyDXN/Rectangle-5-1.png",
      imgAlt: "Gray Sneakers",
      code: "RF293",
      name: "LW sneakers",
      height: "10 inches",
      color: "Black",
      composition: "100% calf leather",
      price: "$1,000",
    },
    {
      imgSrc: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      imgAlt: "Black Leather Purse",
      code: "RF293",
      name: "Luxe card holder",
      height: "10 inches",
      color: "Black",
      composition: "100% calf leather",
      price: "$1,000",
    },
  ];

  return (
    <div
      className={`w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden  ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`w-full absolute z-10 right-0 h-full overflow-x-hidden transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-700`}
      >
        <div className="flex items-end lg:flex-row flex-col justify-end">
          <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto">
            <div
              className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                Back
              </p>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
              Bag
            </p>
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    $3,000
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    $0
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Tax
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    $0
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                    $3,240
                  </p>
                </div>
                <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout