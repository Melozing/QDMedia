import React from "react";
import Link from "next/link";
import Image from "next/image";

function FooterComponents() {
  return (
    <footer id="footer" className="footer-area pt-120 bg-white">
      <div className="container">
        <div
          className="subscribe-area wow fadeIn opacity-0"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe-content mt-45">
                <h2 className="subscribe-title">
                  Subscribe Our Newsletter <span>get reguler updates</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form mt-50">
                <form action="#">
                  <input type="text" placeholder="Enter eamil" />
                  <button className="main-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget pb-100">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="footer-about mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <Link className="logo" href="/">
                  <Image
                    width={100}
                    height={100}
                    src="/images/logo/logo-white.png"
                    alt="logo"
                  />
                </Link>
                <ul className="social">
                  <li>
                    <Link href="https://www.facebook.com/qdmediamkt">
                      <i className="lni lni-facebook"> </i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.tiktok.com/@quyducmkt">
                      <i className="lni lni-tiktok"> </i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="lni lni-instagram"> </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <div className="footer-link d-flex mt-50 justify-content-sm-between">
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="footer-title">
                    <h4 className="title">Resources</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>
                    <li>
                      <Link href="/dich-vu-fb">Dịch vụ FB</Link>
                    </li>
                    <li>
                      <Link href="/quang-cao-da-nen-tang">
                        Quảng Cáo Đa Nền Tảng
                      </Link>
                    </li>
                    <li>
                      <Link href="/xay-kenh">Xây Kênh</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
              <div
                className="footer-contact mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="footer-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul className="contact link">
                  <li>
                    <Link href={"tel:+84931372443"}>{"(+84) "}0931372443</Link>
                  </li>
                  <li>quyduc090797@gmail.com</li>
                  <li>
                    64 Nguyễn Du, <br />
                    TP Hà Tĩnh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-content">
                  <p className="text">
                    Copyright © 2012 - 2023{" "}
                    <Link href="https://qdmedia.pro" rel="nofollow">
                      QDMEDIA.
                    </Link>{" "}
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-2"></div>
    </footer>
  );
}

export default FooterComponents;
