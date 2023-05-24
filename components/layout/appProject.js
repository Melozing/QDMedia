import React from "react";
import Image from "next/image";

function AppProject() {
  return (
    <section id="team" className="team-area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title">
                <span>Một số dự án đã triển khai</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single-team text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="team-image">
                <Image
                  width={350}
                  height={293}
                  src="/images/projects/page3.png"
                  alt="Team"
                />
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/sachivemaybay">
                        <i className="lni lni-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name">
                  <a href="https://www.facebook.com/sachivemaybay">
                    SETUP và chạy quảng cáo <br /> cho fanpage FB
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single-team text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="team-image">
                <Image
                  width={350}
                  height={293}
                  src="/images/projects/youtube1.png"
                  alt="Team"
                />
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.youtube.com/@MelozingOfficial">
                        <i className="lni lni-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name">
                  <a href="https://www.youtube.com/@MelozingOfficial">
                    Xây Dựng Và Định Hướng <br /> Cho Kênh Youtube
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single-team text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <div className="team-image">
                <Image
                  width={350}
                  height={293}
                  src="/images/projects/page2.png"
                  alt="Team"
                />
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.tiktok.com/@sachi1607">
                        <i className="lni lni-tiktok"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name">
                  <a href="https://www.tiktok.com/@sachi1607">
                    Hỗ Trợ Tư Vấn <br />
                    Xây dựng kênh tiktok
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppProject;
