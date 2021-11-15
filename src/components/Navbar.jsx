/* This example requires Tailwind CSS v2.0+ */
import LogoImage from "../assets/logo.png"

export default function NavBar() {
  return (
    <nav className="bg-red-200">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src={LogoImage}
                    alt="Workflow"
                  />
                </div>
              </div>
            </div>
          </div>
    </nav>
  );
}
