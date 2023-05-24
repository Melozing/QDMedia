import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderContent() {
  return (
    <div
      id="home"
      className="header-hero bg_cover"
      style={{ backgroundImage: "url(/images/header/banner-bg.svg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="header-hero-content text-center">
              <h2
                className="header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                Mang Sự Hiệu Quả Đến Với Khách Hàng
              </h2>
              <Link
                href="tel:+84931372443"
                className="main-btn wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1.1s"
              >
                Tư Vấn Quảng Cáo
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="header-hero-image text-center wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="1.4s"
            >
              <Image
                width={650}
                height={370}
                src={"/images/header/header-hero.png"}
                alt="hero"
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="particles-1" className="particles"></div>
    </div>
  );
}

export default HeaderContent;
