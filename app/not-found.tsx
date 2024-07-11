import Home04Icon from "@/public/svg/icons/Home04Icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center">
        <h2 className="text-9xl font-extrabold text-gray-800 mb-4">404</h2>
        <h3 className="text-4xl font-semibold text-gray-700 mb-2">Page Not Found</h3>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <a
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium leading-6 text-white bg-[#4CA053] rounded-lg shadow-md hover:bg-black hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CA053]"
        >
          Return Home <Home04Icon className="ml-2" />
        </a>
      </div>
    </div>
  );
}