
import Image from "next/image";
import Navlinks from "./Navlinks";
import Userinfo from "./Userinfo";

const data = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="relative sticky top-0 z-50 mx-auto max-w-7xl border-t border-orange-200 px-4 py-4">
      <div className="flex items-center justify-center gap-2">
        <Image
          className="h-10 w-10 object-contain"
          src="/logo.webp"
          alt="Logo"
          width={50}
          height={50}
        />

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold leading-tight text-red-600">
            Bangla News 24
          </h1>
          <p className="text-xs text-gray-500">{data}</p>
        </div>
      </div>

      <div>
        <Userinfo/>
      </div>

      <div className="mt-4">
        <Navlinks />
      </div>
    </header>
  );
};

export default Header;

