const deliveries = [
  { id: 'R-102', customer: 'Aarav', distance: '2.4 km', eta: '12 min', payout: '₹185' },
  { id: 'R-205', customer: 'Meera', distance: '3.9 km', eta: '18 min', payout: '₹240' },
  { id: 'R-348', customer: 'Nikhil', distance: '5.1 km', eta: '24 min', payout: '₹320' }
];

const stats = [
  { label: 'Today', value: '₹2,640' },
  { label: 'Trips', value: '18' },
  { label: 'Rating', value: '4.9' }
];

const features = [
  '24/7 Support',
  'Live Tracking',
  'Fast Payouts',
  'Top Rated Riders'
];

function App() {
  return (
    <div className="ro45-app">
      <div className="shell">
        <header className="topbar">
          <div className="status-icons">
            <span className="dot" />
            <span className="dot small" />
            <span className="dot tiny" />
          </div>
          <div className="brand-lockup">
            <div className="mini-logo">R</div>
            <div>
              <div className="brand-line">RO45</div>
              <small>BiteRaho</small>
            </div>
          </div>
          <div className="badge-wrap">
            <span className="signal">5</span>
          </div>
        </header>

        <main className="main-panel">
          <section className="hero-card">
            <div className="hero-copy">
              <div className="tag">Delivery partner</div>
              <h1>
                <span className="logo-word">RO45</span>
              </h1>
              <p>Operated by BiteRaho</p>
            </div>

            <div className="rider-visual" aria-label="RO45 rider illustration">
              <div className="helmet" />
              <div className="torso">
                <div className="chest-print">RO45</div>
                <div className="sleeve left" />
                <div className="sleeve right" />
              </div>
              <div className="bag">
                <span>FOOD DELIVERY</span>
              </div>
              <div className="bike">
                <div className="wheel left" />
                <div className="wheel right" />
                <div className="frame" />
              </div>
            </div>
          </section>

          <section className="stats-row">
            {stats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <small>{stat.label}</small>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </section>

          <section className="section-header">
            <h2>Available Orders</h2>
            <button>View all</button>
          </section>

          <div className="list-wrap">
            {deliveries.map((job) => (
              <article className="job-card" key={job.id}>
                <div className="job-head">
                  <div>
                    <span className="pill">{job.id}</span>
                    <h3>{job.customer}</h3>
                  </div>
                  <span className="money">{job.payout}</span>
                </div>

                <div className="job-meta">
                  <span>{job.distance}</span>
                  <span>{job.eta}</span>
                </div>

                <div className="action-row">
                  <button className="ghost-btn">Details</button>
                  <button className="solid-btn">Accept</button>
                </div>
              </article>
            ))}
          </div>

          <section className="feature-strip">
            {features.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
