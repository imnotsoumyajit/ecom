import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Cool Shirt",
      slug: "cool-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 500,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 500,
      brand: "Fitt",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 500,
      brand: "Slimm",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 500,
      brand: "Golff",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Keep your balls happy",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 500,
      brand: "Fitt",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Keep your balls happy",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 500,
      brand: "Classsicc",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Keep your balls happy",
    },
  ],
};

export default data;
