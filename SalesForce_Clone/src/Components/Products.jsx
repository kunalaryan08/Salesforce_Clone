import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function Products() {
    return (
        <div className="p-8 bg-white min-h-screen">
            <h2 className="text-6xl sm:text-3xl font-bold text-center mb-14 text-gray-800">
                Learn what Salesforce products can do for <br/> you.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
            <div class="flex justify-center mt-16">
                <button class="border-2 border-blue-500 text-blue-500 font-bold px-6 py-2 rounded-md hover:bg-blue-100 transition cursor-pointer">
                    View all our products
                </button>
            </div>


        </div>
    );
}

export default Products;
