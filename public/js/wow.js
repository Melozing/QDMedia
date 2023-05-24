import WOW from "wowjs";

const initWOW = () => {
  const wow = new WOW.WOW({
    boxClass: "wow", // Tên lớp CSS của phần tử chứa hiệu ứng WOW
    animateClass: "animate__animated", // Tên lớp CSS sử dụng cho hiệu ứng animate.css
    offset: 0, // Khoảng cách từ phần tử đến cạnh trên cửa sổ trình duyệt khi hiệu ứng bắt đầu
    mobile: true, // Kích hoạt hiệu ứng trên thiết bị di động
    live: true, // Kích hoạt hiệu ứng khi có sự thay đổi trong DOM
  });
  wow.init();
};

export default initWOW;
