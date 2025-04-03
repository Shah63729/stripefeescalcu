import React, { useState } from 'react';
import { Moon, Sun, Coins, CreditCard, DollarSign } from 'lucide-react';
import Calculator from './components/Calculator';
import { ThemeProvider } from './components/ThemeContext';
import Navigation from './components/Navigation';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Payment Processor Fee Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
              Calculate transaction fees for popular payment processors
            </p>
            
            <div className="grid gap-8">
              <Calculator
                processor="Stripe"
                icon={<CreditCard className="w-6 h-6" />}
                baseFee={2.9}
                fixedFee={0.30}
                description="Stripe charges 2.9% + $0.30 per successful transaction"
              />
              
              <Calculator
                processor="PayPal"
                icon={<DollarSign className="w-6 h-6" />}
                baseFee={3.49}
                fixedFee={0.49}
                description="PayPal charges 3.49% + $0.49 per transaction for most online payments"
              />
              
              <Calculator
                processor="Payoneer"
                icon={<Coins className="w-6 h-6" />}
                baseFee={3}
                fixedFee={0}
                description="Payoneer charges 3% for receiving payments from other Payoneer customers"
              />
            </div>
          </div>
        </main>
        
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Fee Calculator. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;