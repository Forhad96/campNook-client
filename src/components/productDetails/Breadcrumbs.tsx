const Breadcrumbs = () => (
  <nav className="flex">
    <ol role="list" className="flex items-center">
      {["Home", "Products", "Coffee"].map((item, index) => (
        <li key={index} className="text-left">
          <div className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-400">/</span>}
            <div className="-m-1">
              <a
                href="#"
                className={`rounded-md p-1 text-sm font-medium ${
                  index === 2 ? "text-gray-900" : "text-gray-600"
                } focus:text-gray-900 focus:shadow hover:text-gray-800`}
                aria-current={index === 2 ? "page" : undefined}
              >
                {item}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </nav>
);
export default Breadcrumbs