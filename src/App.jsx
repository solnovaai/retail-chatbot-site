
import React from "react";
import { ShoppingCart, Shirt, Info } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ children, className }) => <div className={`border p-4 rounded-xl ${className}`}>{children}</div>;
const CardContent = ({ children, className }) => <div className={className}>{children}</div>;
const Button = ({ children, className, ...props }) => <button className={`bg-black text-white py-2 px-4 rounded ${className}`} {...props}>{children}</button>;

export default function RetailStore() {
  const productImages = [
    "https://images.unsplash.com/photo-1583001101371-ec2b9b5f33c4?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1602810316636-df7b1c1b1b1b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1618354691227-920b4f0c25e5?auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Clothify</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#cart" className="hover:underline">Cart</a>
        </nav>
      </header>

      <section id="home" className="p-10 text-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Discover Your Style
        </motion.div>
        <p className="text-lg mb-6">Trendy, comfy, and delivered to your door.</p>
        <Button>Shop Now</Button>
      </section>

      <section id="about" className="p-10">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><Info className="mr-2" />About Us</h3>
        <p className="max-w-2xl mx-auto">
          Clothify is a fashion-forward online retail store offering a wide range of affordable clothing for men and women.
          We believe everyone deserves to feel confident in what they wear. Our smart chatbot helps you find your size,
          track orders, and get personalized recommendations instantly.
        </p>
      </section>

      <section id="products" className="p-10 bg-gray-50">
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Shirt className="mr-2" />Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productImages.map((img, i) => (
            <Card key={i} className="shadow hover:shadow-lg transition">
              <CardContent>
                <img
                  src={img}
                  alt="Product"
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h4 className="font-semibold text-lg">Product {i + 1}</h4>
                <p className="text-sm text-gray-600">Stylish and comfy for daily wear.</p>
                <Button className="mt-4 w-full"><ShoppingCart className="mr-2" size={16} /> Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="cart" className="p-10">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><ShoppingCart className="mr-2" />Your Cart</h3>
        <p>Your cart is currently empty. Start shopping to fill it up!</p>
      </section>

      <div className="fixed bottom-4 right-4">
        <iframe
          src="https://solnovaai.app.n8n.cloud/webhook/afe2c5ca-83e8-4149-8e38-f3bd57a2776d/chat"
          title="Chatbot"
          className="w-72 h-96 rounded-xl shadow-lg border"
        ></iframe>
      </div>
    </div>
  );
}
