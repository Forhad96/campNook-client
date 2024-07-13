const CartItem = ({
  imgSrc,
  imgAlt,
  code,
  name,
  height,
  color,
  composition,
  price,
}) => (
  <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
    <div className="md:w-4/12 2xl:w-1/4 w-full">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-full object-center object-cover md:block hidden"
      />
      <img
        src={imgSrc}
        alt={imgAlt}
        className="md:hidden w-full h-full object-center object-cover"
      />
    </div>
    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
        {code}
      </p>
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
          {name}
        </p>
        <select
          aria-label="Select quantity"
          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          <option>01</option>
          <option>02</option>
          <option>03</option>
        </select>
      </div>
      <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
        Height: {height}
      </p>
      <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
        Color: {color}
      </p>
      <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
        Composition: {composition}
      </p>
      <div className="flex items-center justify-between pt-5">
        <div className="flex items-center">
          <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
            Add to favorites
          </p>
          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
            Remove
          </p>
        </div>
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
          {price}
        </p>
      </div>
    </div>
  </div>
);
export default CartItem;
