export default function RightSidebar() {
  return (
    <aside className="stellar-right">
      {/* Search */}
      <div className="stellar-right-search">
        <span className="stellar-right-search-icon">🔍</span>
        <input placeholder="Search Stellar" />
      </div>

      {/* What's happening */}
      <div>
        <div className="stellar-right-section-title">What’s happening</div>
        <div className="stellar-right-card">
          <div className="stellar-trend-item">
            <div className="stellar-trend-meta">Trending in Galaxy</div>
            <div className="stellar-trend-topic">#StellarLaunch</div>
            <div className="stellar-trend-meta">1,204 posts</div>
          </div>
          <div className="stellar-trend-item">
            <div className="stellar-trend-meta">Trending near you</div>
            <div className="stellar-trend-topic">#NightCoding</div>
            <div className="stellar-trend-meta">892 posts</div>
          </div>
          <div className="stellar-trend-item">
            <div className="stellar-trend-meta">Tech · Live</div>
            <div className="stellar-trend-topic">React & Firebase</div>
            <div className="stellar-trend-meta">3,431 posts</div>
          </div>
        </div>
      </div>

      {/* Who to follow */}
      <div style={{ marginTop: 18 }}>
        <div className="stellar-right-section-title">Who to follow</div>
        <div className="stellar-right-card">
          <div className="stellar-follow-item">
            <div className="stellar-follow-avatar" />
            <div>
              <div className="stellar-follow-name">Stellar DevUpdates</div>
              <div className="stellar-follow-handle">@stellar_dev</div>
            </div>
            <button className="stellar-follow-button">Follow</button>
          </div>

          <div className="stellar-follow-item">
            <div className="stellar-follow-avatar" />
            <div>
              <div className="stellar-follow-name">Space Design</div>
              <div className="stellar-follow-handle">@cosmic_ui</div>
            </div>
            <button className="stellar-follow-button">Follow</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
