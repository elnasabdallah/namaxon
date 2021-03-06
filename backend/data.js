import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Nasir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Basir",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Slim Shirts",
      image: "/images/p1.jpg",
      costPrice: 100,
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 1.5,
      numReviews: 10,
      description: "High quality prodcuts",
    },
    {
      name: "Adidas Slim Shirt",
      category: "Slim Shirts",
      image: "/images/p2.jpg",
      costPrice: 100,
      price: 110,
      countInStock: 12,
      brand: "Adida",
      rating: 2.0,
      numReviews: 10,
      description: "High quality prodcuts",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Free Shirts",
      image: "/images/p3.jpg",
      costPrice: 100,
      price: 130,
      countInStock: 1,
      brand: "Lacoste",
      rating: 4.5,
      numReviews: 10,
      description: "High quality prodcuts",
    },
    {
      name: "Nike T-Shirt",
      category: "T-Shirts",
      image: "/images/p4.jpg",
      costPrice: 120,
      price: 150,
      countInStock: 33,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "High quality prodcuts",
    },
    {
      name: "Puma Shirt",
      category: "Shirts",
      image: "/images/p5.jpg",
      costPrice: 90,
      price: 112,
      countInStock: 1,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "High quality prodcuts",
    },
    {
      name: "Adidas Fit Pant",
      category: "Fit Pants",
      image: "/images/p6.jpg",
      costPrice: 110,
      price: 120,
      countInStock: 0,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      description: "High quality prodcuts",
    },
  ],
};
export default data;
