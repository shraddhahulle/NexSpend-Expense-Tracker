import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  ShoppingCart,
  Store,
  Utensils,
  Music,
  Gamepad,
  Wallet,
  LineChart,
  LogOut,
  User,
  Plane,
  Coffee,
  BookOpen,
  ShoppingBag
} from 'lucide-react';
import { ExpenseChart } from '../components/ExpenseChart';
import { TransactionList } from '../components/TransactionList';

function Dashboard() {
  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const [showSavingsDetails, setShowSavingsDetails] = useState(false);
  const [showExpenseDetails, setShowExpenseDetails] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAFA]">
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-yellow-300" />
            <span className="text-xl font-semibold">NexSpend</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/login" className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <LogOut className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div 
            className="bg-gradient-to-br from-cyan-400 to-sky-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-white relative overflow-hidden"
            onClick={() => setShowWalletDetails(!showWalletDetails)}
          >
            <div className="flex items-center space-x-4 mb-4 relative z-10">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Wallet className="h-6 w-6" />
              </div>
              <div>
                <p className="text-black/80">Wallet Balance</p>
                <p className="text-3xl font-bold">$5,240.00</p>
              </div>
            </div>
            {showWalletDetails && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm mb-2">Recent Activity:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Today's Spending</span>
                    <span>-$120.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Credit</span>
                    <span>$10,000.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div 
            className="bg-gradient-to-br from-amber-500 to-amber-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-white relative overflow-hidden"
            onClick={() => setShowSavingsDetails(!showSavingsDetails)}
          >
            <div className="flex items-center space-x-4 mb-4 relative z-10">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-black/90">Total Savings</p>
                <p className="text-3xl font-bold">$2,840.00</p>
              </div>
            </div>
            {showSavingsDetails && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm mb-2">Savings Goals:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Vacation Fund</span>
                    <span>$1,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Fund</span>
                    <span>$1,340.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div 
            className="bg-gradient-to-br from-red-400 to-rose-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-white relative overflow-hidden"
            onClick={() => setShowExpenseDetails(!showExpenseDetails)}
          >
            <div className="flex items-center space-x-4 mb-4 relative z-10">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-black/80">Monthly Expenses</p>
                <p className="text-3xl font-bold">$1,400.00</p>
              </div>
            </div>
            {showExpenseDetails && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm mb-2">Top Categories:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Food & Dining</span>
                    <span>$580.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shopping</span>
                    <span>$420.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Entertainment</span>
                    <span>$400.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <h3 className="text-lg font-semibold mb-6 text-indigo-900">Yearly Expense Analytics</h3>
              <ExpenseChart />
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <h3 className="text-lg font-semibold mb-6 text-indigo-900">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/service/amazon"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Store className="h-6 w-6 text-indigo-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Amazon</p>
                  <p className="text-xs text-indigo-600">Up to 60% off</p>
                </Link>
                
                <Link
                  to="/service/zomato"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Utensils className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Zomato</p>
                  <p className="text-xs text-orange-600">Order now</p>
                </Link>
                
                <Link
                  to="/service/gaming"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Gamepad className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Gaming</p>
                  <p className="text-xs text-purple-600">90% off</p>
                </Link>
                
                <Link
                  to="/service/netflix"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Music className="h-6 w-6 text-red-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Netflix</p>
                  <p className="text-xs text-red-600">Stream now</p>
                </Link>

                <Link
                  to="/service/travel"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Plane className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Travel</p>
                  <p className="text-xs text-blue-600">Flight deals</p>
                </Link>

                <Link
                  to="/service/coffee"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <Coffee className="h-6 w-6 text-yellow-800 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Coffee</p>
                  <p className="text-xs text-yellow-800">20% off</p>
                </Link>

                <Link
                  to="/service/education"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <BookOpen className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Courses</p>
                  <p className="text-xs text-green-600">Learn more</p>
                </Link>

                <Link
                  to="/service/fashion"
                  className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  <ShoppingBag className="h-6 w-6 text-pink-600 mb-2" />
                  <p className="text-sm font-medium text-indigo-900">Fashion</p>
                  <p className="text-xs text-pink-600">New arrivals</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-6 text-indigo-900">Recent Transactions</h3>
            <TransactionList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;