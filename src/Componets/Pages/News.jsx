import { useState, useEffect } from "react";
import { ArrowRight, BarChart2, Lightbulb, Target, Quote } from "lucide-react";
import "../../Styles/News.css";

export default function News() {
  return (
    <div className="news">
      {/* Header */}
      {/* <header className="bg-primary text-white py-3">
          <div className="container">
            <nav className="d-flex justify-content-between align-items-center">
              <a href="/" className="text-white h2 mb-0 text-decoration-none">NewsHub</a>
              <div>
                <a href="#" className="text-white me-3 text-decoration-none">Home</a>
                <a href="#" className="text-white me-3 text-decoration-none">Politics</a>
                <a href="#" className="text-white me-3 text-decoration-none">Technology</a>
                <a href="#" className="text-white text-decoration-none">Sports</a>
              </div>
            </nav>
          </div>
        </header> */}

      {/* Main Content */}
      <main className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Featured Article */}
            <div className="card mb-4">
              <img
                src="../assets/news.jpg"
                className="card-img-top"
                alt="Featured Article"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#" className="text-decoration-none">
                    Breaking: Major Technological Breakthrough in Renewable
                    Energy
                  </a>
                </h5>
                <p className="card-text">
                  Scientists have made a groundbreaking discovery that could
                  revolutionize the renewable energy sector.
                </p>
                <div className="text-muted small">
                  <span>May 15, 2023</span> | <span>Technology</span>
                </div>
              </div>
            </div>

            {/* Recent Articles */}
            <h4 className="mb-3">Recent News</h4>
            <div className="row">
              {[1, 2, 3, 4].map((item) => (
                <div className="col-md-6 mb-4" key={item}>
                  <div className="card">
                    <img
                      src={`../assets/news_2.jpg`}
                      className="card-img-top"
                      alt={`Article ${item}`}
                    />
                    <div className="card-body">
                      <h6 className="card-title">
                        <a href="#" className="text-decoration-none">
                          News Article Headline {item}
                        </a>
                      </h6>
                      <p className="card-text small">
                        A brief summary of the news article goes here.
                      </p>
                      <div className="text-muted small">
                        May {14 + item}, 2023
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {/* Search Bar */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search news..."
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title">Categories</h6>
                <ul className="list-unstyled">
                  {[
                    "Politics",
                    "Technology",
                    "Sports",
                    "Entertainment",
                    "Health",
                  ].map((category) => (
                    <li key={category} className="mb-2">
                      <a href="#" className="text-decoration-none">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Popular Posts</h6>
                <ul className="list-unstyled">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="d-flex align-items-start mb-3">
                      <img
                        src={`../assets/news_3.jpg`}
                        alt={`Popular post ${item}`}
                        className="rounded me-3"
                        style={{ width: "64px", height: "64px" }}
                      />
                      <div>
                        <a href="#" className="text-decoration-none">
                          Popular Article Title {item}
                        </a>
                        <div className="text-muted small mt-1">
                          May {10 + item}, 2023
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p>&copy; 2023 NewsHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
