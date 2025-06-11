"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}

export default function CartPage() {
  // Mock cart data - replace with actual API calls
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      quantity: 2,
      product: {
        id: "1",
        name: "Premium Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 199.99,
        image: "/placeholder-product.jpg",
      },
    },
    {
      id: "2",
      quantity: 1,
      product: {
        id: "2",
        name: "Smart Watch",
        description: "Advanced fitness tracking smartwatch",
        price: 299.99,
        image: "/placeholder-product.jpg",
      },
    },
  ]);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Start shopping to add items to your cart
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 ${
                  index !== cartItems.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.product.image || "/placeholder-product.jpg"}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.product.description}
                    </p>
                    <p className="text-lg font-bold text-blue-600 mt-2">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">
                  ${(calculateTotal() * 0.1).toFixed(2)}
                </span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-blue-600">
                  ${(calculateTotal() * 1.1).toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
              Proceed to Checkout
            </button>

            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
