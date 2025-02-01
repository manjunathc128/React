import React from "react";

const Cart = ({ cart, dispatch }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 shadow-md bg-white flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mb-3"
              />
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-700">₹{item.price}</p>
              <button
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
