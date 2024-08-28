import React from "react";

const StockAnalysisView = ({ stock, onClose }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Buy Analysis for {stock.stock}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold mb-2">
            1. Current Price and Performance:
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Current Price: $164.42</li>
            <li>1-Year Change: +30.91%</li>
            <li>YTD Change: +20.66%</li>
            <li>1-Month Change: -9.76%</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">2. Valuation Metrics:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Market Cap: $2.06T</li>
            <li>Trailing P/E: 24.16</li>
            <li>Forward P/E: 19.38</li>
            <li>PEG Ratio: 19.38</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">
            3. Financial Performance:
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Latest Revenue: $84.74B (Q 22024)</li>
            <li>Latest Net Income: $23.62B (Q 22024)</li>
            <li>Free Cash Flow: $13.45B (Q 22024)</li>
            <li>Quarterly Revenue Growth: +13.6%</li>
            <li>Quarterly Earnings Growth YoY: +28.6%</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">
            4. Technical Indicators:
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>RSI: 34.86 (Approaching Oversold)</li>
            <li>MACD: -3.24 (Bearish)</li>
            <li>52-Week Range: 35.4% above low, 14.9% below high</li>
            <li>
              Insider Transactions: Recent insider selling, but not
              significantly high.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StockAnalysisView;
