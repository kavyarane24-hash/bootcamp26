import hydratingcleanser from "./assets/hydratingcleanser.jpg";
import roseglowserum from "./assets/roseglowserum.jpg";
import vitaminccream from "./assets/vitaminccream.jpg";
import nightrepaircream from "./assets/nightrepaircream.jpg";
import facewash from "./assets/facewash.jpg";
import moisturizer from "./assets/moisturizer.jpg";

export default function HairCare({ cartCount, setCartCount }) {
  const products = [
    {
      id: 1,
      name: "Nourishing Shampoo",
      price: 799,
      image: hydratingcleanser,
    },
    {
      id: 2,
      name: "Silk Repair Conditioner",
      price: 899,
      image: roseglowserum,
    },
    {
      id: 3,
      name: "Argan Hair Serum",
      price: 1099,
      image: vitaminccream,
    },
    {
      id: 4,
      name: "Botanical Hair Mask",
      price: 1299,
      image: nightrepaircream,
    },
    {
      id: 5,
      name: "Scalp Renewal Oil",
      price: 999,
      image: facewash,
    },
    {
      id: 6,
      name: "Heat Protect Mist",
      price: 699,
      image: moisturizer,
    },
  ];

  return (
    <div className="px-30 pt-30 pb-20 bg-[#eefff2]">
      <div className="grid grid-cols-3 gap-20 justify-center items-center ">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-10 border border-[#EADFE3] rounded-lg flex flex-col justify-center items-center bg-[#FFFDFC] w-100 h-130"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-70 h-70 mb-5"
            />

            <div className="flex flex-col justify-center items-center gap-3 mb-5">
              <h2 className="text-[#4F4245] text-2xl font-semibold">
                {product.name}
              </h2>

              <p className="text-[#4F4245] text-2xl font-normal">
                ₹{product.price}
              </p>
            </div>

            <div className="flex gap-1">
              <button
                className="bg-transparent text-black px-2 text-3xl font-semibold rounded-md hover:text-4xl"
                onClick={() =>
                  cartCount > 0 && setCartCount((prev) => prev - 1)
                }
              >
                -
              </button>
              <button className="bg-[#8BAA93] text-white px-5 py-3 text-xl font-semibold rounded-md">
                Add to Cart
              </button>
              <button
                className="bg-transparent text-black px-2 text-3xl font-semibold rounded-md hover:text-4xl"
                onClick={() => setCartCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
