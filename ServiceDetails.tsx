import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Tag, Star } from 'lucide-react';

const services = {
  amazon: {
    name: 'Amazon',
    deals: [
      {
        title: 'Electronics Sale',
        discount: '60% off',
        description: 'Get amazing deals on latest electronics',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Smart Watch Pro',
            price: 199.99,
            originalPrice: 499.99,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.amazon.com/s?k=smart+watch'
          },
          {
            name: 'Wireless Earbuds',
            price: 79.99,
            originalPrice: 199.99,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.amazon.com/s?k=wireless+earbuds'
          },
          {
            name: 'Gaming Laptop',
            price: 899.99,
            originalPrice: 1299.99,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.amazon.com/s?k=gaming+laptop'
          }
        ]
      }
    ]
  },
  netflix: {
    name: 'Netflix',
    deals: [
      {
        title: 'Premium Plan',
        discount: 'First month free',
        description: 'Watch on 4 screens at once in HD',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Premium Subscription',
            price: 19.99,
            features: ['4K Ultra HD', '4 screens at once', 'Ad-free viewing'],
            image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.netflix.com/signup',
            rating: 4.0,
            originalPrice: 19.99
          }
        ]
      }
    ]
  },
  gaming: {
    name: 'Gaming',
    deals: [
      {
        title: 'Steam Summer Sale',
        discount: 'Up to 90% off',
        description: 'Massive discounts on popular titles',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Cyberpunk 2077',
            price: 29.99,
            originalPrice: 59.99,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400',
            buyUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/'
          },
          {
            name: 'Red Dead Redemption 2',
            price: 39.99,
            originalPrice: 59.99,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=400',
            buyUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
          },
          {
            name: 'EA Sports FC 24',
            price: 49.99,
            originalPrice: 69.99,
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=400',
            buyUrl: 'https://store.steampowered.com/app/1811260/EA_SPORTS_FC_24/'
          }
        ]
      }
    ]
  },
  zomato: {
    name: 'Zomato Food Delivery',
    deals: [
      {
        title: 'Restaurant Specials',
        discount: '₹150 off first order',
        description: 'Explore local restaurants with special offers',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Butter Chicken Feast',
            price: 24.99,
            originalPrice: 34.99,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery?dishv2_id=52751&category=1'
          },
          {
            name: 'Sushi ',
            price: 45.99,
            originalPrice: 55.99,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery/dish-sushi'
          },
          {
            name: 'Gourmet Pizza',
            price: 15.99,
            originalPrice: 20.99,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery?dishv2_id=64381&category=1'
          },
          {
            name: 'Biryani Special',
            price: 18.99,
            originalPrice: 25.99,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery/dish-biryani'
          },
          {
            name: 'Chinese',
            price: 28.99,
            originalPrice: 35.99,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery?dishv2_id=142194&category=1'
          },
          {
            name: 'Dessert Paradise',
            price: 12.99,
            originalPrice: 18.99,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zomato.com/pune/delivery/dish-desserts'
          }
        ]
      }
    ]
  },

  travel: {
    name: 'Travel Deals',
    deals: [
      {
        title: 'Flight Specials',
        discount: 'Up to 30% off',
        description: 'Exclusive flight deals to popular destinations',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'International Flights',
            price: 599.99,
            originalPrice: 899.99,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.expedia.com/Flights'
          },
          {
            name: 'Domestic Flights',
            price: 199.99,
            originalPrice: 299.99,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.kayak.com'
          }
        ]
      }
    ]
  },

  coffee: {
    name: 'Coffee & Beverages',
    deals: [
      {
        title: 'Coffee Shop Deals',
        discount: '20% off first order',
        description: 'Premium coffee and beverages',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Starbucks Gift Card',
            price: 40,
            originalPrice: 50,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.starbucks.com/gift'
          },
          {
            name: 'Coffee Subscription',
            price: 29.99,
            originalPrice: 39.99,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.bluebottlecoffee.com/subscription'
          }
        ]
      }
    ]
  },

  education: {
    name: 'Online Courses',
    deals: [
      {
        title: 'Learning Specials',
        discount: 'Up to 85% off',
        description: 'Top-rated online courses',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'Udemy Courses',
            price: 11.99,
            originalPrice: 84.99,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.udemy.com'
          },
          {
            name: 'Coursera Plus',
            price: 399,
            originalPrice: 499,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.coursera.org/courseraplus'
          }
        ]
      }
    ]
  },
  fashion: {
    name: 'Fashion & Apparel',
    deals: [
      {
        title: 'Style Essentials',
        discount: 'Up to 70% off',
        description: 'Latest fashion trends and deals',
        validUntil: '2024-03-31',
        products: [
          {
            name: 'ASOS Collection',
            price: 29.99,
            originalPrice: 89.99,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.asos.com/us/sale/ctas/fashion-online-1/cat/?cid=8799'
          },
          {
            name: 'Zara New Arrivals',
            price: 39.99,
            originalPrice: 79.99,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=400',
            buyUrl: 'https://www.zara.com/us/'
          }
        ]
      }
    ]
  },
  // ... other existing services
};

function ServiceDetails() {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FFFAFA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFAFA]">
      <div className="container mx-auto px-6 py-8">
        <Link to="/dashboard" className="flex items-center text-gray-600 mb-8 hover:text-blue-600 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-indigo-100">
          <h2 className="text-2xl font-bold mb-6 text-indigo-900">{service.name}</h2>

          <div className="space-y-8">
            {service.deals.map((deal, index) => (
              <div key={index} className="border border-indigo-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">{deal.title}</h3>
                    <div className="flex items-center text-green-600 mb-2">
                      <Tag className="h-4 w-4 mr-2" />
                      <span className="font-medium">{deal.discount}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{deal.description}</p>
                    <p className="text-sm text-gray-500">
                      Valid until {new Date(deal.validUntil).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deal.products?.map((product, productIndex) => (
                    <div key={productIndex} className="border border-indigo-100 rounded-lg p-4 hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold mb-2 text-indigo-900">{product.name}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-2xl font-bold text-indigo-600">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.rating && (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                          </div>
                        )}
                      </div>
                      <a
                        href={product.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Buy Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;