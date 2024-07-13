const ProductTabs = () => (
  <div className="lg:col-span-3">
    <div className="border-b border-gray-300">
      <nav className="flex gap-4">
        <a
          href="#"
          title=""
          className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
        >
          {" "}
          Description{" "}
        </a>
        <a
          href="#"
          title=""
          className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
        >
          Reviews
          <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 py-0.5 text-xs font-bold text-gray-700">
            1,209
          </span>
        </a>
      </nav>
    </div>
    <div className="mt-8 flow-root sm:mt-12">
      <h1 className="text-3xl font-bold text-gray-900">Full Range Coffee</h1>
      <p className="mt-4">{/* Description content */}</p>
    </div>
  </div>
);
export default ProductTabs;
