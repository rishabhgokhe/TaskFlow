import CustomLinkButton from "@/components/elements/CustomLinkButton";
import Home04Icon from "@/public/svg/icons/Home04Icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center">
        <h2 className="text-9xl font-extrabold text-gray-800 mb-4">404</h2>
        <h3 className="text-4xl font-semibold text-gray-700 mb-2">Page Not Found</h3>
        <p className="text-gray-600 mb-8">Sorry, we could not find the page you are looking for.</p>
        <CustomLinkButton href="/" name="Return Home" rightIcon={<Home04Icon />} />
      </div>
    </div>
  );
}