import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { dispatch } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} rating</span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                ${product.price}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="h-5 w-5 mr-2" />
                  <span>2-year warranty included</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
                <Link
                  to="/checkout"
                  className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-200 text-center"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};