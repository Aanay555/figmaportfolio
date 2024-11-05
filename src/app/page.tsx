import Image from "next/image";
import Card from "./componenets/recent-post-card";

export default function Home() {
  return (
    <>
      <div className="hero-sect">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/image.png"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>
            
            <div className="card-parent">
                      <div className="card">
                      <Image
                        src="/img1.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                                <h2>Designing Dashboards</h2>
                                <div className="badge-parent">
                                    <div className="badge">
                                        <p>2020</p>
                                    </div>
                                    <p>Dashboard</p>
                                </div>
                                <p>
                                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                  amet sint. Velit officia consequat duis enim velit mollit.
                                  Exercitation veniam consequat sunt nostrud amet.
                                </p>
                              </div>
                      </div>

                    <div className="card">
                      <Image
                        src="/img2.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <Image
                        src="/img3.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}