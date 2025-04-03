import React, { useState } from 'react';

interface CalculatorProps {
  processor: string;
  icon: React.ReactNode;
  baseFee: number;
  fixedFee: number;
  description: string;
}

export default function Calculator({ processor, icon, baseFee, fixedFee, description }: CalculatorProps) {
  const [amount, setAmount] = useState<string>('');

  const calculateFee = (value: number) => {
    const percentageFee = (value * baseFee) / 100;
    const totalFee = percentageFee + fixedFee;
    const finalAmount = value - totalFee;
    return {
      fee: totalFee.toFixed(2),
      final: finalAmount.toFixed(2)
    };
  };

  const result = amount ? calculateFee(parseFloat(amount)) : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{processor}</h2>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor={`amount-${processor}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Enter Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              id={`amount-${processor}`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {result && (
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Processing Fee:</span>
              <span className="text-gray-900 dark:text-white font-medium">${result.fee}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">You'll Receive:</span>
              <span className="text-gray-900 dark:text-white font-medium">${result.final}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}