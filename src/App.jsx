import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('customer');
  const [screen, setScreen] = useState('home');

  return (
    <div className="ro45-app">
      <div className="ro45-shell">
        {/* HEADER */}
        <header className="topbar">
          <div className="status-group">
            <span className="status-time">11:07</span>
            <div className="signal-icons">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="brand-center">
            <div className="logo-badge">R</div>
            <div>
              <strong>RO45</strong>
              <small>BiteRaho</small>
            </div>
          </div>
          <div className="battery-badge">5</div>
        </header>

        {/* NAVIGATION TABS */}
        <nav className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === 'customer' ? 'active' : ''}`}
            onClick={() => { setActiveTab('customer'); setScreen('home'); }}
          >
            🛍️ Customer
          </button>
          <button
            className={`nav-tab ${activeTab === 'rider' ? 'active' : ''}`}
            onClick={() => { setActiveTab('rider'); setScreen('home'); }}
          >
            🏍️ Rider
          </button>
          <button
            className={`nav-tab ${activeTab === 'restaurant' ? 'active' : ''}`}
            onClick={() => { setActiveTab('restaurant'); setScreen('home'); }}
          >
            🍽️ Restaurant
          </button>
          <button
            className={`nav-tab ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => { setActiveTab('admin'); setScreen('home'); }}
          >
            ⚙️ Admin
          </button>
        </nav>

        {/* CONTENT AREA */}
        <main className="main-content">
          {activeTab === 'customer' && <CustomerApp screen={screen} setScreen={setScreen} />}
          {activeTab === 'rider' && <RiderApp screen={screen} setScreen={setScreen} />}
          {activeTab === 'restaurant' && <RestaurantApp screen={screen} setScreen={setScreen} />}
          {activeTab === 'admin' && <AdminApp screen={screen} setScreen={setScreen} />}
        </main>
      </div>
    </div>
  );
}

// ============ CUSTOMER APP ============
function CustomerApp({ screen, setScreen }) {
  if (screen === 'home') {
    return (
      <div className="screen">
        <div className="hero-header">
          <h2>Good evening, Saif 👋</h2>
          <p>📍 Banjara Hills, Hyderabad</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search restaurants, food..." />
        </div>

        <div className="promo-banner">
          🎉 Free delivery on orders above ₹499
        </div>

        <div className="section-title">Categories</div>
        <div className="category-scroll">
          {['Biryani', 'Pizza', 'Healthy', 'Grocery', 'Desserts', 'Sweets'].map(cat => (
            <div key={cat} className="category-chip">{cat}</div>
          ))}
        </div>

        <div className="section-title">Popular Restaurants</div>
        <div className="card-list">
          {[
            { name: 'Urban Spice', type: 'Indian • 25 min', rating: 4.8, fee: '₹25' },
            { name: 'Green Basket', type: 'Groceries • 18 min', rating: 4.7, fee: '₹15' },
            { name: 'Pizza Pearl', type: 'Pizza • 22 min', rating: 4.9, fee: '₹35' }
          ].map(rest => (
            <div key={rest.name} className="restaurant-item" onClick={() => setScreen('restaurant-detail')}>
              <div className="rest-img" style={{background: 'linear-gradient(135deg, #ff9d5b, #ff6a2a)'}}></div>
              <div className="rest-info">
                <h4>{rest.name}</h4>
                <p>{rest.type}</p>
                <div className="rest-meta">
                  <span>⭐ {rest.rating}</span>
                  <span>{rest.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title">Active Orders</div>
        <div className="order-card">
          <div className="order-head">
            <span className="order-id">#1234</span>
            <span className="order-status">On the way</span>
          </div>
          <p>Chicken Biryani + Coke</p>
          <button className="btn-small" onClick={() => setScreen('tracking')}>Track Order</button>
        </div>
      </div>
    );
  }

  if (screen === 'restaurant-detail') {
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setScreen('home')}>← Back</button>
        <h2>Urban Spice Kitchen</h2>
        <p>⭐ 4.8 • 25 min • ₹25 delivery</p>

        <div className="section-title">Menu</div>
        {[
          { name: 'Paneer Tikka Bowl', price: '₹289' },
          { name: 'Butter Chicken Combo', price: '₹349' },
          { name: 'Veg Wrap', price: '₹199' },
          { name: 'Gulab Jamun', price: '₹99' }
        ].map(item => (
          <div key={item.name} className="menu-item">
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
            <button className="btn-add">+</button>
          </div>
        ))}
      </div>
    );
  }

  if (screen === 'tracking') {
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setScreen('home')}>← Back</button>
        <h2>Order Tracking</h2>
        <div className="tracking-card">
          <div className="map-placeholder">🗺️ Live Map</div>
          <div className="status-step">
            <span className="dot done">✓</span>
            <p>Order Confirmed</p>
          </div>
          <div className="status-step">
            <span className="dot done">✓</span>
            <p>Restaurant Preparing</p>
          </div>
          <div className="status-step">
            <span className="dot active">→</span>
            <p>Rider on the way (12 min)</p>
          </div>
          <div className="status-step">
            <span className="dot">◯</span>
            <p>Delivery</p>
          </div>
        </div>
      </div>
    );
  }
}

// ============ RIDER APP ============
function RiderApp({ screen, setScreen }) {
  if (screen === 'home') {
    return (
      <div className="screen">
        <div className="rider-header">
          <h2>🏍️ Rider Dashboard</h2>
          <button className="status-toggle active">🟢 Online</button>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Today Earnings</span>
            <span className="stat-value">₹2,640</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Trips</span>
            <span className="stat-value">18</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Rating</span>
            <span className="stat-value">4.9 ⭐</span>
          </div>
        </div>

        <div className="section-title">Available Deliveries</div>
        {[
          { id: 'R-102', customer: 'Aarav', dist: '2.4 km', eta: '12 min', pay: '₹185' },
          { id: 'R-205', customer: 'Meera', dist: '3.9 km', eta: '18 min', pay: '₹240' },
          { id: 'R-348', customer: 'Nikhil', dist: '5.1 km', eta: '24 min', pay: '₹320' }
        ].map(trip => (
          <div key={trip.id} className="trip-card">
            <div className="trip-header">
              <h4>{trip.id}</h4>
              <span className="trip-pay">{trip.pay}</span>
            </div>
            <p><strong>{trip.customer}</strong> • {trip.dist} • {trip.eta}</p>
            <button className="btn-primary" onClick={() => setScreen('ride-active')}>Accept Trip</button>
          </div>
        ))}
      </div>
    );
  }

  if (screen === 'ride-active') {
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setScreen('home')}>← Back</button>
        <h2>Active Delivery</h2>
        <div className="map-placeholder">🗺️ Live Navigation</div>
        <div className="ride-status">
          <h3>Delivering to Aarav</h3>
          <p>📍 2.4 km away • 12 mins</p>
          <p>₹185 • Paneer Bowl + Coke</p>
        </div>
        <button className="btn-primary full">Start Navigation</button>
        <button className="btn-secondary full">Call Customer</button>
      </div>
    );
  }
}

// ============ RESTAURANT APP ============
function RestaurantApp({ screen, setScreen }) {
  if (screen === 'home') {
    return (
      <div className="screen">
        <div className="restaurant-header">
          <h2>Urban Spice Kitchen</h2>
          <button className="status-toggle active">🟢 Open</button>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Orders Today</span>
            <span className="stat-value">182</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Avg Prep</span>
            <span className="stat-value">14 min</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Rating</span>
            <span className="stat-value">4.8 ⭐</span>
          </div>
        </div>

        <div className="section-title">Order Queue</div>
        {[
          { order: '#7821', customer: 'Nisha', item: 'Butter Chicken', status: '🔄 Preparing' },
          { order: '#7822', customer: 'Aman', item: 'Paneer Bowl', status: '✅ Ready' },
          { order: '#7823', customer: 'Sameer', item: 'Veg Wrap', status: '📦 Packing' }
        ].map(ord => (
          <div key={ord.order} className="queue-item" onClick={() => setScreen('order-detail')}>
            <div>
              <h4>{ord.order}</h4>
              <p>{ord.customer} • {ord.item}</p>
            </div>
            <span className="queue-status">{ord.status}</span>
          </div>
        ))}

        <div className="section-title">Menu Items</div>
        <div className="menu-items-list">
          {[
            { name: 'Paneer Tikka Bowl', price: '₹289' },
            { name: 'Chicken Biryani', price: '₹349' }
          ].map(item => (
            <div key={item.name} className="menu-item">
              <div><h4>{item.name}</h4><p>{item.price}</p></div>
              <button className="btn-small">✎ Edit</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screen === 'order-detail') {
    return (
      <div className="screen">
        <button className="back-btn" onClick={() => setScreen('home')}>← Back</button>
        <h2>Order #7821</h2>
        <p>Customer: Nisha • Prep: 14 min</p>
        <div className="order-items">
          <div className="item">Butter Chicken Combo × 1</div>
          <div className="item">Coke × 2</div>
          <div className="item">Rice × 1</div>
        </div>
        <div className="status-buttons">
          <button className="btn-secondary">👁️ View</button>
          <button className="btn-primary">✅ Mark Ready</button>
        </div>
      </div>
    );
  }
}

// ============ ADMIN PANEL ============
function AdminApp({ screen, setScreen }) {
  return (
    <div className="screen">
      <h2>Admin Dashboard</h2>

      <div className="stats-grid">
        {[
          { label: 'Revenue', value: '₹4.8L', delta: '+12.5%' },
          { label: 'Orders', value: '1,320', delta: '+8.1%' },
          { label: 'Riders', value: '94', delta: '+5.0%' },
          { label: 'Restaurants', value: '240', delta: '+18.2%' }
        ].map(stat => (
          <div key={stat.label} className="stat-box">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-delta">{stat.delta}</span>
          </div>
        ))}
      </div>

      <div className="section-title">Recent Activity</div>
      {[
        'Fresh order assigned to rider Ahamad',
        'Urban Spice menu updated',
        'Promo code "FREEDOM20" activated',
        'Customer support flagged late order'
      ].map((activity, idx) => (
        <div key={idx} className="activity-item">
          <span>🔵</span>
          <p>{activity}</p>
        </div>
      ))}

      <div className="section-title">Top Categories</div>
      <div className="progress-list">
        {[
          { name: 'Biryani', pct: 34 },
          { name: 'Pizza', pct: 28 },
          { name: 'Grocery', pct: 22 },
          { name: 'Desserts', pct: 16 }
        ].map(cat => (
          <div key={cat.name} className="progress-item">
            <span>{cat.name}</span>
            <div className="progress-bar">
              <div style={{ width: `${cat.pct}%` }}></div>
            </div>
            <span>{cat.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
