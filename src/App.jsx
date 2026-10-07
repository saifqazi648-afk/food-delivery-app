const customerRestaurants = [
  { name: 'Urban Spice', type: 'Indian • 25 min', rating: 4.8, fee: '₹25', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80' },
  { name: 'Green Basket', type: 'Groceries • 18 min', rating: 4.7, fee: '₹15', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pizza Pearl', type: 'Pizza • 22 min', rating: 4.9, fee: '₹35', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80' }
];

const customerCategories = ['Biryani', 'Pizza', 'Healthy', 'Grocery', 'Desserts', 'Fast Food'];
const customerOrderSummary = [
  { name: 'Butter Chicken Combo', qty: 1, price: '₹329' },
  { name: 'Coke', qty: 2, price: '₹120' },
  { name: 'Veg Wrap', qty: 1, price: '₹179' }
];

const riderDeliveries = [
  { id: 'R-102', customer: 'Aarav', distance: '2.4 km', eta: '12 min', payout: '₹185' },
  { id: 'R-205', customer: 'Meera', distance: '3.9 km', eta: '18 min', payout: '₹240' },
  { id: 'R-348', customer: 'Nikhil', distance: '5.1 km', eta: '24 min', payout: '₹320' }
];

const riderStats = [
  { label: 'Today', value: '₹2,640' },
  { label: 'Trips', value: '18' },
  { label: 'Rating', value: '4.9' }
];

const restaurantQueue = [
  { order: '#7821', customer: 'Nisha', item: 'Butter Chicken Combo', status: 'Preparing' },
  { order: '#7822', customer: 'Aman', item: 'Paneer Bowl', status: 'Ready' },
  { order: '#7823', customer: 'Sameer', item: 'Veg Wrap', status: 'Packing' }
];

const restaurantMenu = [
  { name: 'Paneer Tikka Bowl', price: '₹289', prep: '12 min', tag: 'Best Seller' },
  { name: 'Chicken Biryani', price: '₹349', prep: '16 min', tag: 'Chef Pick' },
  { name: 'Veggie Wrap', price: '₹199', prep: '10 min', tag: 'Healthy' },
  { name: 'Gulab Jamun', price: '₹99', prep: '5 min', tag: 'Sweet' }
];

const adminMetrics = [
  { label: 'Revenue', value: '₹4.8L', delta: '+12.5%' },
  { label: 'Orders', value: '1,320', delta: '+8.1%' },
  { label: 'Riders', value: '94', delta: '+5.0%' },
  { label: 'Restaurants', value: '240', delta: '+18.2%' }
];

const activityList = [
  'Fresh order assigned to rider Ahamad',
  'Urban Spice menu updated successfully',
  'Promo code “FREEDOM20” became active',
  'Late order flagged by customer support'
];

function App() {
  const tabs = ['Customer App', 'Delivery App', 'Restaurant App', 'Admin Panel'];
  const [activeTab, setActiveTab] = React.useState('Customer App');

  return (
    <div className="ro45-app">
      <div className="ro45-shell">
        <header className="topbar">
          <div className="status-group">
            <span className="status-text">11:07</span>
            <div className="signal-group">
              <span className="signal-dot" />
              <span className="signal-dot" />
              <span className="signal-dot" />
            </div>
          </div>
          <div className="brand-wrap">
            <div className="brand-mark">R</div>
            <div className="brand-copy">
              <strong>RO45</strong>
              <small>BiteRaho</small>
            </div>
          </div>
          <div className="top-actions">
            <span className="pill-count">5</span>
          </div>
        </header>

        <nav className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <main className="content-area">
          {activeTab === 'Customer App' && <CustomerView />}
          {activeTab === 'Delivery App' && <DeliveryView />}
          {activeTab === 'Restaurant App' && <RestaurantView />}
          {activeTab === 'Admin Panel' && <AdminView />}
        </main>
      </div>
    </div>
  );
}

function CustomerView() {
  return (
    <div className="section-grid customer-grid">
      <section className="panel hero-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">Good evening</p>
            <h1>Saif, order now</h1>
          </div>
          <button className="accent-button">Track</button>
        </div>

        <div className="location-box">
          <span>📍</span>
          <div>
            <small>Deliver to</small>
            <strong>Banjara Hills, Hyderabad</strong>
          </div>
        </div>

        <div className="promo-box">
          <span>🎉</span>
          Free delivery on orders above ₹499
        </div>

        <div className="chip-row">
          {customerCategories.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </section>

      <aside className="panel cart-panel">
        <div className="mini-title-row">
          <h3>My Cart</h3>
          <span className="muted">3 items</span>
        </div>

        <div className="cart-list">
          {customerOrderSummary.map((item) => (
            <div key={item.name} className="cart-item">
              <div>
                <strong>{item.name}</strong>
                <small>Qty: {item.qty}</small>
              </div>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <div className="total-box">
          <div><span>Subtotal</span><strong>₹628</strong></div>
          <div><span>Delivery</span><strong>₹25</strong></div>
          <div className="grand-total"><span>Total</span><strong>₹653</strong></div>
        </div>

        <button className="primary-button full">Checkout</button>
      </aside>

      <section className="panel wide-panel">
        <div className="section-head">
          <h3>Popular restaurants</h3>
          <button className="link-button">View all</button>
        </div>

        <div className="restaurant-grid">
          {customerRestaurants.map((restaurant) => (
            <div key={restaurant.name} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-card-body">
                <div className="restaurant-header">
                  <h4>{restaurant.name}</h4>
                  <span>⭐ {restaurant.rating}</span>
                </div>
                <p>{restaurant.type}</p>
                <div className="restaurant-footer">
                  <span>{restaurant.fee}</span>
                  <button>Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DeliveryView() {
  return (
    <div className="section-grid rider-grid">
      <section className="panel rider-hero">
        <div className="section-head">
          <div>
            <p className="eyebrow">Delivery partner</p>
            <h1>Rider</h1>
          </div>
          <button className="accent-button">Go online</button>
        </div>

        <div className="metric-strip">
          {riderStats.map((item) => (
            <div className="metric-box" key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel wide-panel">
        <div className="section-head">
          <h3>Available deliveries</h3>
          <button className="link-button">Map view</button>
        </div>

        <div className="delivery-list">
          {riderDeliveries.map((job) => (
            <div key={job.id} className="delivery-card">
              <div className="delivery-top">
                <strong>{job.id}</strong>
                <span className="status-badge">Ready</span>
              </div>
              <div className="delivery-row">
                <span>{job.customer}</span>
                <span>{job.distance}</span>
              </div>
              <div className="delivery-row">
                <span>{job.eta}</span>
                <strong>{job.payout}</strong>
              </div>
              <button className="primary-button small">Accept</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RestaurantView() {
  return (
    <div className="section-grid restaurant-grid">
      <section className="panel restaurant-hero">
        <div className="section-head">
          <div>
            <p className="eyebrow">Restaurant dashboard</p>
            <h1>Urban Spice</h1>
          </div>
          <button className="accent-button">Open menu</button>
        </div>

        <div className="metric-strip three-up">
          <div className="metric-box">
            <small>Orders</small>
            <strong>182</strong>
          </div>
          <div className="metric-box">
            <small>Prep</small>
            <strong>14 min</strong>
          </div>
          <div className="metric-box">
            <small>Rating</small>
            <strong>4.8</strong>
          </div>
        </div>
      </section>

      <section className="panel wide-panel">
        <div className="section-head">
          <h3>Menu items</h3>
          <button className="link-button">Add item</button>
        </div>

        <div className="menu-grid">
          {restaurantMenu.map((item) => (
            <div key={item.name} className="menu-card">
              <div className="menu-head">
                <span className="tag-pill">{item.tag}</span>
                <span className="menu-price">{item.price}</span>
              </div>
              <h4>{item.name}</h4>
              <p>Prep time: {item.prep}</p>
              <button className="secondary-button">Edit</button>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <h3>Order queue</h3>
          <button className="link-button">Refresh</button>
        </div>

        <div className="queue-list">
          {restaurantQueue.map((entry) => (
            <div key={entry.order} className="queue-item">
              <div>
                <strong>{entry.order}</strong>
                <small>{entry.customer}</small>
              </div>
              <div className="queue-right">
                <span>{entry.item}</span>
                <em className="queue-status">{entry.status}</em>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AdminView() {
  return (
    <div className="section-grid admin-grid">
      <section className="panel admin-hero">
        <div className="section-head">
          <div>
            <p className="eyebrow">Operations overview</p>
            <h1>Admin dashboard</h1>
          </div>
          <button className="accent-button">Export</button>
        </div>

        <div className="metric-strip admin-metrics">
          {adminMetrics.map((metric) => (
            <div key={metric.label} className="metric-box">
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <span>{metric.delta}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <h3>Recent activity</h3>
        </div>
        <div className="activity-list">
          {activityList.map((item) => (
            <div key={item} className="activity-item">
              <span className="activity-dot" />
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
