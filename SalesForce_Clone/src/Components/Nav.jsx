import { Search, Globe, User } from "lucide-react";

function Nav() {
    return (
        <nav className="bg-white px-6 py-4 shadow-md flex items-center justify-between fixed top-0 w-full z-50 h-20">
            {/* Logo */}
            <img 
                src="https://wallpapers.com/images/high/salesforce-background-np7544rb5qjlcf7w.webp"
                alt="Salesforce Logo" 
                className="h-15"
            />

            {/* Navbar Links */}
            <ul className="flex space-x-6 text-[#032d60] font-semibold text-sm">
                <li className="hover:underline cursor-pointer">Products</li>
                <li className="hover:underline cursor-pointer">Industries</li>
                <li className="hover:underline cursor-pointer">Customers</li>
                <li className="hover:underline cursor-pointer">Learning</li>
                <li className="hover:underline cursor-pointer">Support</li>
                <li className="hover:underline cursor-pointer">Company</li>
                <li className="hover:underline cursor-pointer">Salesforce+</li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center space-x-6 text-[#032d60]">
                {/* Contact Info */}
                <div className="text-right cursor-pointer">
                    <p className="text-sm font-semibold hover:underline">Contact Us</p>
                    <p className="text-xs">1800-420-7332</p>
                </div>

                {/* Icons */}
                <Search className="w-5 h-5 cursor-pointer" />
                <Globe className="w-5 h-5 cursor-pointer" />
                <User className="w-5 h-5 cursor-pointer" />
                <p className="text-sm font-semibold cursor-pointer">Login</p>

                {/* Button */}
                <button className="bg-[#007e4f] text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition">
                    Try for free
                </button>
            </div>
        </nav>
    );
}

export default Nav;