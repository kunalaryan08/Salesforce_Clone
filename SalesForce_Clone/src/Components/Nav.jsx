import { Search, Globe } from "lucide-react";

function Nav() {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg flex items-center justify-between">

            <img 
                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg?w=1024&h=576"
                alt="Salesforce Logo" 
                className="h-10"
            />
            
            <ul className="flex space-x-6 text-white font-semibold">
                <li className="hover:underline cursor-pointer">Products</li>
                <li className="hover:underline cursor-pointer">Industries</li>
                <li className="hover:underline cursor-pointer">Customers</li>
                <li className="hover:underline cursor-pointer">Learning</li>
                <li className="hover:underline cursor-pointer">Support</li>
                <li className="hover:underline cursor-pointer">Company</li>
                <li className="hover:underline cursor-pointer">Salesforce+</li>
            </ul>
            
            <div className="flex items-center space-x-6">
                <div className="text-white text-center cursor-pointer hover:underline">
                    <p>Contact Us</p>
                    <p className="text-sm font-light">1800-420-7332</p>
                </div>
                
                <Search className="text-white cursor-pointer" />
                <Globe className="text-white cursor-pointer" />
                
                <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    Try for Free
                </button>
            </div>
        </nav>
    );
}

export default Nav;
