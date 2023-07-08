import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";

SwiperCore.use([Pagination]);

const AppCustumer = () => {
  const swiperOptions = {
    // Tùy chọn cấu hình Swiper
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      clickable: true, // Cho phép nhấp vào pagination để chuyển slide
    },
    breakpoints: {
      // Tùy chỉnh số lượng slide trên màn hình di động
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section id="testimonial" className="testimonial-area pt-120 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center pb-40">
              <div className="line m-auto"></div>
              <h3 className="title">
                Khách Hàng Nói Gì <br />
                <span> về dịch vụ của QDMEDIA </span>
              </h3>
            </div>
          </div>
        </div>
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  Nếu biết đến dịch vụ này sớm hơn thì mình đã tiết kiệm được
                  rất nhiều chi phí quảng cáo. Đội ngũ tư vấn tốt, chiến lược
                  marketing rõ ràng và hiệu quả. Hi vọng QDMEDIA sẽ luôn là đơn
                  vị marketing đồng hành cùng CX Men.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    width={119}
                    height={119}
                    className="shape"
                    alt="shape"
                    src="/images/team/mem-shape.svg"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="author author-cut-images"
                    alt="author"
                    src="/images/team/mem-2.jpg"
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Anh : Hoàng Ngọc Sơn</h6>
                  <p className="text">Giám Đốc Công Ty Chống Thấm CX Men</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  Với mảng XKLĐ thì đơn vị của QDMEDIA đã hỗ trợ chúng tôi rất
                  nhiều trong các chiến dịch marketing và đạt hiệu quả cao, đã
                  cùng nhau đồng hành trong 2 năm qua, tôi mong rằng dịch vụ của
                  QDMEDIA sẽ luôn luôn tốt để giúp đỡ doanh nghiệp nhỏ như chúng
                  tôi.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    width={119}
                    height={119}
                    className="shape"
                    alt="shape"
                    src="/images/team/mem-shape.svg"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="author author-cut-images"
                    alt="author"
                    src="/images/team/mem-1.jpg"
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Anh : Phúc JP</h6>
                  <p className="text">Đơn Vị Tuyển Dụng XKLĐ</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                    <li>
                      <i className="lni lni-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  Trước đây, tập tành kinh doanh online cũng chỉ ước một ngày
                  được 6-7 đơn hàng, chứ đâu ai ngờ sau khi sử dụng dịch vụ
                  tiktok của QDMEDIA thì đơn hàng 1 ngày đi 300 đơn. rất vui và
                  may mắn khi tìm được một đơn vị quảng cáo tốt và có tâm.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    width={119}
                    height={119}
                    className="shape"
                    alt="shape"
                    src="/images/team/mem-shape.svg"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="author author-cut-images"
                    alt="author"
                    src="/images/team/mem-3.jpg"
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Chị : Hoàng Thị Thùy Linh</h6>
                  <p className="text">Kinh Doanh Online</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AppCustumer;
