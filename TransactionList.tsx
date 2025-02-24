import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  merchant: string;
  details?: {
    items?: Array<{
      name: string;
      price: number;
      quantity: number;
    }>;
    description?: string;
  };
}

export function TransactionList() {
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);

  const transactions: Transaction[] = [
    {
      id: '1',
      title: 'Grocery Shopping',
      amount: -120,
      date: 'Today',
      category: 'Zepto',
      merchant: 'Zepto',
      details: {
        items: [
          { name: 'Milk', price: 4, quantity: 2 },
          { name: 'Bread', price: 3, quantity: 1 },
          { name: 'Eggs', price: 5, quantity: 1 },
          { name: 'Fruits', price: 15, quantity: 1 }
        ]
      }
    },
    {
      id: '2',
      title: 'Salary Deposit',
      amount: 3000,
      date: 'Yesterday',
      category: 'Bank',
      merchant: 'Company Inc'
    },
    {
      id: '3',
      title: 'Netflix Subscription',
      amount: -15,
      date: '2 days ago',
      category: 'Entertainment',
      merchant: 'Netflix',
      details: {
        description: 'Monthly Premium Subscription'
      }
    },
    // Add more transactions as needed
  ];

  const toggleTransaction = (id: string) => {
    setExpandedTransaction(expandedTransaction === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="bg-white rounded-lg shadow-sm">
          <div
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => toggleTransaction(transaction.id)}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className={`text-lg ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : '-'}
                </div>
              </div>
              <div>
                <h3 className="font-medium">{transaction.title}</h3>
                <p className="text-sm text-gray-500">
                  {transaction.date} · {transaction.category}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                ${Math.abs(transaction.amount)}
              </span>
              {transaction.details && (
                expandedTransaction === transaction.id ? 
                <ChevronUp className="h-5 w-5 text-gray-400" /> :
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
          
          {expandedTransaction === transaction.id && transaction.details && (
            <div className="px-4 pb-4 border-t">
              {transaction.details.items ? (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Items</h4>
                  <div className="space-y-2">
                    {transaction.details.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-gray-600">
                  {transaction.details.description}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}