"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

function handlePageScroll() {
  const sections = document.querySelectorAll(".page-scroll");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const refElementId = currLink.getAttribute("data-target"); // Sử dụng thuộc tính data-target làm định danh

    const refElement = document.getElementById(refElementId);
    const scrollTopMinus = scrollPos + 73;

    if (
      refElement && // Kiểm tra xem phần tử có tồn tại không
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      document.querySelector(".page-scroll").classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  }
}

function HeaderNav() {
  //Scroll change logo color
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll event listener
    window.addEventListener("scroll", handlePageScroll);
    // Thêm sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("to");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      offsetTop: 1 - 60,
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Khi scrollTop > 0, thêm class "scrolled"
    // Khi scrollTop = 0, xóa class "scrolled"
    setIsScrolled(scrollTop > 0);
  };
  return (
    <div className="navbar-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 702 358"
                  version="1.1"
                  style={{ width: "100px", height: "100px" }}
                >
                  <path
                    d="M 156.250 28.208 L 135 49.403 135 50.451 L 134.999 51.500 189.198 51.209 L 243.396 50.917 260.198 67.698 L 277 84.478 277 100.618 L 277 116.759 304.100 143.879 L 331.199 171 332.600 171 L 334 171 334 121.744 L 334 72.489 301.244 39.744 L 268.489 7 222.994 7.006 L 177.500 7.013 156.250 28.208 M 288 7.313 L 288 7.626 296.180 16.063 L 304.360 24.500 317.295 37.750 L 330.231 51 331.366 51.014 L 332.500 51.029 396.480 51 L 460.460 50.971 492.684 83.184 L 524.908 115.397 492.704 147.166 L 460.500 178.935 438.500 179.217 L 416.500 179.500 416.500 202 L 416.500 224.500 450 224.759 L 483.500 225.019 538.250 170.369 L 593 115.719 593 115.106 L 593 114.493 539.247 60.747 L 485.493 7 386.747 7 L 288 7 288 7.313 M 81.500 102.969 L 48.500 135.932 48.177 137.466 L 47.853 139 48.770 139 L 49.686 139 92.546 182 L 135.406 225 206.703 225 L 278 225 278 223.701 L 278 222.402 256.482 200.701 L 234.964 179 197 179 L 159.035 179 137.750 157.693 L 116.465 136.386 148.732 104.214 L 181 72.042 181 71.021 L 181 70 147.750 70.003 L 114.500 70.006 81.500 102.969 M 341 134.244 L 341 198.488 309.244 166.744 L 277.488 135 244.244 135 L 211 135 211 136.274 L 211 137.548 254.750 181.283 L 298.500 225.018 321 224.759 L 343.500 224.500 344 215 L 344.500 205.500 354.135 215.250 L 363.771 225 380.885 225 L 398 225 398 187 L 398 149 409.338 149 L 420.676 149 431.144 137.750 L 441.612 126.500 445.806 121.888 L 450 117.276 450 116.354 L 450 115.432 444.719 110.216 L 439.437 105 418.719 105 L 398 105 398 87.500 L 398 70 369.500 70 L 341 70 341 134.244 M 8 266.277 L 8 267.554 14.775 274.277 L 21.550 281 38.059 281 L 54.568 281 59.854 286.352 L 65.139 291.703 65.037 315.352 L 64.935 339 75.467 339 L 86 339 86 312.769 L 86 286.537 74.750 275.796 L 63.500 265.056 35.750 265.028 L 8 265 8 266.277 M 69 266.500 L 69 268 69.750 268 L 70.501 268 77.163 274.500 L 83.824 281 89.193 281 L 94.563 281 100.281 286.779 L 106 292.558 106 315.779 L 106 339 116.500 339 L 127 339 127 313.234 L 127 287.467 115.734 276.234 L 104.469 265 86.734 265 L 69 265 69 266.500 M 162 265.925 L 162 266.850 168.637 273.925 L 175.275 281 213.387 280.970 L 251.500 280.939 259.155 273.541 L 266.810 266.144 266.238 265.572 L 265.667 265 213.833 265 L 162 265 162 265.925 M 284 265.841 L 284 266.682 291.117 273.841 L 298.234 281 320.350 281 L 342.467 281 353.042 291.542 L 363.616 302.083 353.003 312.542 L 342.390 323 335.195 323 L 328 323 328 331 L 328 339 340.250 338.987 L 352.500 338.974 369.500 321.990 L 386.500 305.007 387.820 305.003 L 389.139 305 388.817 303.250 L 388.494 301.500 369.963 283.250 L 351.431 265 317.716 265 L 284 265 284 265.841 M 425 266.500 L 425 268 425.917 268 L 426.834 268 433.075 274.500 L 439.317 281 489.923 281 L 540.529 281 547.765 274.155 L 555 267.311 555 266.155 L 555 265 490 265 L 425 265 425 266.500 M 572 265.885 L 572 266.769 579.250 273.868 L 586.500 280.966 597.506 280.983 L 608.513 281 637.500 310 L 666.487 339 678.744 339 L 691 339 691 338.147 L 691 337.295 679.916 326.397 L 668.833 315.500 643.223 290.250 L 617.613 265 594.806 265 L 572 265 572 265.885 M 25 311.965 L 25 339 35.516 339 L 46.033 339 45.766 312.250 L 45.500 285.500 35.250 285.215 L 25 284.930 25 311.965 M 301.699 285.634 L 301 286.333 301 312.667 L 301 339 312.016 339 L 323.033 339 322.766 312.250 L 322.500 285.500 312.449 285.217 L 302.399 284.934 301.699 285.634 M 590 311.965 L 590 339 600.500 339 L 611 339 611 330.500 L 611 322 627.500 322 L 644 322 644 320.825 L 644 319.651 635.754 311.825 L 627.507 304 619.291 304 L 611.075 304 610.788 294.750 L 610.500 285.500 600.250 285.215 L 590 284.930 590 311.965 M 179 313 L 179 339 213.500 339 L 248 339 248 337.500 L 248 336 246.750 335.963 L 245.500 335.926 239.044 329.463 L 232.587 323 216.294 323 L 200 323 199.998 315.250 L 199.996 307.500 209.972 307.816 L 219.947 308.132 228.817 299.816 L 237.687 291.500 237.285 290.750 L 236.882 290 218.441 290 L 200 290 200 288.500 L 200 287 189.500 287 L 179 287 179 313 M 479 313 L 479 339 508 339 L 537 339 537 337.500 L 537 336 536.046 336 L 535.092 336 528.463 329.500 L 521.833 323 511.167 323.001 L 500.500 323.002 500.794 305.001 L 501.087 287 490.044 287 L 479 287 479 313 M 452 329.500 L 445.558 336 444.279 336 L 443 336 443 337.500 L 443 339 459 339 L 475 339 475 331 L 475 323 466.721 323 L 458.442 323 452 329.500"
                    stroke="none"
                    className={`${isScrolled ? "logo-scroll" : "logo-default"}`}
                    fillRule="evenodd"
                  />
                  <path d="" stroke="none" fill="#fcfcfc" fillRule="evenodd" />
                </svg>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      className="active"
                      href="/"
                      data-target="home-section"
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/dich-vu-fb" data-target="dich-vu-fb-section">
                      Dịch Vụ FB
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/quang-cao-da-nen-tang"
                      data-target="quang-cao-da-nen-tang-section"
                    >
                      Quảng Cáo Đa Nền Tảng
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/xay-kenh" data-target="xay-kenh-section">
                      Xây Kênh
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/thong-tin" data-target="thong-tin-section">
                      Thông tin
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <Link
                  className="main-btn"
                  data-scroll-nav="0"
                  href="tel:+84931372443"
                >
                  Tư Vấn Quảng Cáo
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
