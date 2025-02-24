import { useState } from 'react';
import { User, CreditCard, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [cards, setCards] = useState([{ id: 1, number: '•••• •••• •••• 4242', expiry: '12/24' }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCardDetails, setNewCardDetails] = useState({ number: '', cvv: '', expiry: '' });

  const addCard = () => {
    if (newCardDetails.number && newCardDetails.cvv && newCardDetails.expiry) {
      setCards([...cards, { id: cards.length + 1, ...newCardDetails }]);
      setNewCardDetails({ number: '', cvv: '', expiry: '' });
      setIsModalOpen(false);
    }
  };

  const removeCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const saveProfileChanges = () => {
    console.log('Profile changes saved');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <Link to="/dashboard" className="flex items-center text-gray-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'profile'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Details
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'payment'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('payment')}
            >
              Payment Methods
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'security'
                  ? 'border-b-2 border-yellow-600 text-black'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50">
                    Change Photo
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                      defaultValue="Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue="sarah@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue="+1 234 567 8900"
                    />
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={saveProfileChanges}>
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-6">
                {cards.map(card => (
                  <div key={card.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <CreditCard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{card.number}</p>
                          <p className="text-sm text-gray-500">Expires {card.expiry}</p>
                        </div>
                      </div>
                      <button className="text-red-600 text-sm font-medium" onClick={() => removeCard(card.id)}>Remove</button>
                    </div>
                  </div>
                ))}
                <button className="w-full border-2 border-dashed rounded-lg p-4 text-gray-500 hover:bg-gray-50" onClick={() => setIsModalOpen(true)}>
                  + Add New Card
                </button>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Update Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>Add New Card</h2>
        <input
          type="text"
          placeholder="Card Number"
          value={newCardDetails.number}
          onChange={(e) => setNewCardDetails({ ...newCardDetails, number: e.target.value })}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="text"
          placeholder="CVV"
          value={newCardDetails.cvv}
          onChange={(e) => setNewCardDetails({ ...newCardDetails, cvv: e.target.value })}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={newCardDetails.expiry}
          onChange={(e) => setNewCardDetails({ ...newCardDetails, expiry: e.target.value })}
          className="border rounded-lg p-2 mb-2"
        />
        <button onClick={addCard} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Card</button>
        <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-black px-4 py-2 rounded-lg">Cancel</button>
      </Modal>
    </div>
  );
}

export default Profile