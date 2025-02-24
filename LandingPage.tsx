import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="h-10 w-10 text-black" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">NexSpend</span>
        </div>
        <Link
          to="/login"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-md"
        >
          Get Started
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-6">
            Smart Money Management
          </h1>
          <p className="text-xl text-black mb-8">
            Transform your financial future with intelligent insights
          </p>
          <Link
            to="/login"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 inline-flex items-center group shadow-md"
          >
            Start Your Journey
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all border border-indigo-100 group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800"
                alt="Financial tracking"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-black to-black text-transparent bg-clip-text">Smart Money Tracking</h3>
            <p className="text-indigo-600">
              Keep track of your spending and income with intelligent categorization
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all border border-indigo-100 group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
                alt="Analytics"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-black to-black text-transparent bg-clip-text">Visual Analytics</h3>
            <p className="text-indigo-600">
              See where your money goes with beautiful and intuitive charts
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all border border-indigo-100 group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800"
                alt="AI recommendations"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-black to-black text-transparent bg-clip-text">Smart Savings</h3>
            <p className="text-indigo-600">
              Get personalized recommendations to help you save more
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;