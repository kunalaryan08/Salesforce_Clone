function Card1() {
    return (
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden text-center mx-auto">
            <div className="relative">
                <img
                    src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433"
                    alt="Background"
                    className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover"
                />
            </div>
            <div className="mt-12 sm:mt-14 md:mt-16 px-4 sm:px-6 pb-6">
                <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Small Business</h5>
                <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
                    Sales, service, and email outreach tools in a single app.
                </p>
                <a href="#" className="text-blue-600 font-medium mt-4 inline-block text-sm sm:text-base md:text-lg">
                    Learn more
                </a>
            </div>
        </div>
    );
}

export default Card1;
