import React from "react";

const WatchlistModal = ({ closeModal, onStockSelect }) => {
  const watchlistData = [
    { stock: "Apple Inc (AAPL)", price: "$212.87", action: "hold" },
    { stock: "Google (GOOG)", price: "$164.42", action: "buy" },
    { stock: "Amazon.com Inc (AMZN)", price: "$145.68", action: "hold" },
    { stock: "Microsoft Corp (MSFT)", price: "$338.11", action: "buy" },
    { stock: "Tesla Inc (TSLA)", price: "$242.54", action: "hold" },
    { stock: "NVIDIA Corp (NVDA)", price: "$457.82", action: "hold" },
  ];

  return (
    <div className="fixed bottom-16 right-4 bg-[#252525] rounded-lg p-4 w-[350px] shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Watchlist</h2>
        <button onClick={closeModal} className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="max-h-[250px] overflow-y-auto">
        <table className="w-full">
          <thead className="text-xs text-gray-400">
            <tr>
              <th className="text-left font-normal">Stock</th>
              <th className="text-right font-normal">Price</th>
              <th className="text-right font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 cursor-pointer hover:bg-gray-700"
                onClick={() => onStockSelect(item)}
              >
                <td className="py-2 text-sm">{item.stock}</td>
                <td className="text-right text-sm">{item.price}</td>
                <td className="text-right">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      item.action === "buy" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {item.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-gray-400">
        <p>Updated August 4 at 11:49 PM</p>
        <p className="mt-1">
          Disclaimer: This analysis is for informational purposes only and
          should not be considered financial advice. Always consider your
          financial situation and consult with a financial advisor before making
          investment decisions.
        </p>
      </div>
    </div>
  );
};

export default WatchlistModal;
