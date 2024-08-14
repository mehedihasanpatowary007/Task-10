import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";


import hammer from "../../assets/hammer.png";
import book from "../../assets/book.png";
import tv from "../../assets/tv.webp";
import disk from "../../assets/disk.png";
import telephone from "../../assets/telephone.webp";
import cart from "../../assets/cart.png";

const cards = [
  {
    image: hammer,
    name: "Hammer",
    price: 2.00,
  },
  {
    image: book,
    name: "Book",
    price: 6.00,
  },

  {
    image: tv,
    name: "TV",
    price: 800.00,
  },
  {
    image: disk,
    name: "Disk",
    price: 3.00,
  },
  {
    image: telephone,
    name: "Telephone",
    price: "200.00",
  },
  {
    image: cart,
    name: "Cart",
    price: 50.00,
  },
];

const Products = () => {

  return (
    <div className="containers my-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Popular</h1>
        <button className="flex gap-2 items-center text-xl font-bold">
          <span>See all</span>
          <FaArrowRight />
        </button>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 justify-center">
        {cards.map((card) => {
          return <Card card={card} key={card.name} />;
        })}
      </div>
    </div>
  );
};

export default Products;
