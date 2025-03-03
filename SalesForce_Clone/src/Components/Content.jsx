
function Content() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-10 min-h-screen">
            <div className="max-w-lg text-left">
                <h1 className="text-5xl font-bold text-blue-900 leading-tight">
                    Try Salesforce Starter Suite <span className="text-blue-900">for free.</span>
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                    Unite marketing, sales, and service in a single app. 
                    Try Salesforce Starter Suite today. There's nothing to install. 
                    No credit card required.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Start free trial
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                        Watch demo
                    </button>
                </div>
            </div>

            <div className="relative w-full max-w-2xl mt-10 md:mt-0">
                <img
                    src="https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Salesforce Demo"
                    className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-5 right-5 bg-white p-3 rounded-lg shadow-lg">
                    <h3 className="text-sm font-semibold text-gray-800">Get Started Fast</h3>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            ✅ Sales
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            ❤️ Service
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            📊 Marketing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Content;
