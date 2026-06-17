// CHẠY KHI ĐANG Ở TRANG: index.html

const userEmailInput = document.querySelector(".user-email");
const btnSubmitEmail = document.querySelector(".btn-submit");
const infoDetailBox = document.querySelector(".info-detail");
const infoAuthenBox = document.querySelector(".info-authen");

if (btnSubmitEmail && userEmailInput) {
  // nếu có 2 DOM này
  btnSubmitEmail.addEventListener("click", function () {
    const emailValue = userEmailInput.value.trim();
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === "") {
      alert("Vui lòng nhập email để xác thực!");
      return; // dừng hàm lun
    }

    if (!emailPattern.test(emailValue)) {
      alert("Định dạng email không hợp lệ (Ví dụ đúng: thuycd@gmail.com)!");
      return; // dừng hàm lun
    }

    // Nếu email hợp lệ, ẩn form nhập và hiện thông tin cá nhân
    if (infoAuthenBox) infoAuthenBox.classList.add("hide");
    if (infoDetailBox) infoDetailBox.classList.remove("hide");
  });
}

// Tính năng ẩn/hiện "View more" cho các khối Lý lịch
const dsBtnViewMore = document.querySelectorAll(".btn-view");
dsBtnViewMore.forEach((btn) => {
  btn.addEventListener("click", function () {
    const parentBox = this.parentElement; //.char-item
    if (parentBox) {
      const contentDiv = parentBox.querySelector(".char-content");
      if (contentDiv) {
        if (contentDiv.classList.contains("d-none")) {
          contentDiv.classList.remove("d-none");
          this.textContent = "▴ View less";
        } else {
          contentDiv.classList.add("d-none");
          this.textContent = "▾ View more";
        }
      }
    }
  });
});

// CHẠY KHI ĐANG Ở TRANG: charter.html
// Tạo giả lập dữ liệu cho 3 pro ject
const projectData = {
  1: {
    name: "CV CÁ NHÂN",
    goals: [
      "Thiết kế giao diện CV trực tuyến chuyên nghiệp.",
      "hiển thị tốt trên mọi thiết bị di động, tablet và laptop.",
      "Tối ưu hóa hiệu suất tải trang giúp nhà tuyển dụng có trải nghiệm mượt mà nhất khi xem thông tin.",
    ],
    team: ["Nguyễn Văn Nam", "Nguyễn VŨ Tuân"],
    scopesIn: [
      "Lập trình giao diện responsive bằng HTML5, CSS3 và Bootstrap 5.",
      "Viết JavaScript xử lý hiệu ứng ẩn hiện thông tin chi tiết và điều hướng dữ liệu.",
    ],
    scopesOut: [
      "Kết nối cơ sở dữ liệu Backend.",
      "Triển khai thu thập thông tin từ internet.",
    ],
    primary: [
      "Đảm bảo giao diện đồng bộ.",
      "Không bị vỡ khung hình trên các màn hình Mobile.",
      "Hoàn thành đúng tiến độ báo cáo và tối ưu cấu trúc thư mục dự án gọn gàng.",
    ],
    timeline: [
      {
        time: "Project start",
        task: "Nghiên cứu yêu cầu dự án, thiết kế bố cục wireframe cho Dashboard.",
      },
      {
        time: "Day 01",
        task: "Xây dựng khung HTML và chuẩn hóa hệ thống lưới Grid bằng Bootstrap 5.",
      },
      {
        time: "Day 02",
        task: "Viết CSS tùy chỉnh (font chữ, màu sắc, khoảng cách) trong các file charter.css.",
      },
      {
        time: "Day 03",
        task: "Hoàn thiện logic JavaScript, kiểm thử khả năng responsive và bàn giao.",
      },
    ],
  },

  2: {
    name: "TRANG WEB BÁN HÀNG ONLINE",
    goals: [
      "Xây dựng nền tảng thương mại điện tử nhỏ, cho phép hiển thị danh mục sản phẩm trực quan.",
      "Tích hợp công cụ tìm kiếm và bộ lọc nhanh theo danh mục mặt hàng.",
    ],
    team: ["Châu Đình Thụy", "Lê Thành Tâm", "Lê Long Hải"],
    scopesIn: [
      "Thiết kế trang chủ hiển thị sản phẩm nổi bật và trang chi tiết sản phẩm.",
      "Xây dựng giỏ hàng ảo phía Client lưu trữ sản phẩm tạm thời.",
    ],
    scopesOut: [
      "Tích hợp cổng thanh toán ngân hàng quốc tế VNPAY/Momo (chuyển sang giai đoạn sau).",
      "Quản lý kho hàng vật lý thực tế.",
    ],
    primary: [
      "Tốc độ phản hồi của bộ lọc sản phẩm phải nhanh dưới 1 giây.",
      "Hình ảnh sản phẩm sắc nét, không bị bóp méo tỷ lệ.",
    ],
    timeline: [
      {
        time: "Week 01",
        task: "Khởi tạo cấu trúc thư mục, thiết kế giao diện danh sách sản phẩm.",
      },
      {
        time: "Week 02",
        task: "Viết mã PHP xử lý hiển thị tin tức và bóc tách luồng dữ liệu sản phẩm.",
      },
      {
        time: "Week 03",
        task: "Xây dựng tính năng giỏ hàng bằng JavaScript thuần.",
      },
      {
        time: "Week 04",
        task: "Tối ưu code, xử lý các lỗi giao diện và đưa lên môi trường chạy thử.",
      },
    ],
  },

  3: {
    name: "TRANG WEB XEM TIN TỨC CHỨNG KHOÁN",
    goals: [
      "Thiết kế trang tin tức tổng hợp chỉ số thị trường theo thời gian thực.",
      "Tích hợp hệ thống biểu đồ đường trực quan giúp người dùng dễ dàng theo dõi biến động.",
    ],
    team: ["Châu Đình Thụy", "Lê Thành Tâm", "Trần Thịnh", "Nhật Trường"],
    scopesIn: [
      "Kết nối API chứng khoán để lấy dữ liệu thô.",
      "Tạo bộ lọc tin tức thông minh theo mã cổ phiếu.",
    ],
    scopesOut: [
      "Cung cấp tính năng đặt lệnh mua bán chứng khoán trực tiếp trên web.",
      "Chịu trách nhiệm pháp lý về tư vấn đầu tư tài chính.",
    ],
    primary: [
      "Đảm bảo kết nối API liên tục ổn định",
      "Không bị nghẽn mạng lúc cao điểm.",
      "Hệ thống bảo mật thông tin tài khoản người dùng đăng ký.",
    ],
    timeline: [
      {
        time: "Project start: 01/06/2025",
        task: "Xây dựng cấu trúc dự án bằng mô hình component (ReactJS/NodeJS).",
      },
      {
        time: "07/2025",
        task: "Kết nối hệ thống REST API hoặc RSS Feed từ các nguồn tin tức uy tín.",
      },
      {
        time: "08/2025",
        task: "Xử lý tối ưu hóa cơ sở dữ liệu để lọc thông tin theo thời gian thực.",
      },
      {
        time: "09/2025",
        task: "Kiểm thử bảo mật, chạy thử nghiệm tải cao và phát hành chính thức.",
      },
      {
        time: "10/2025",
        task: "Kiểm thử bảo mật, chạy thử nghiệm tải cao và phát hành chính thức.",
      },
    ],
  },
};
// -------------------  xử lý thông tin  -------------------------------
if (window.location.href.includes("charter.html")) {
  // Trích xuất ID từ tham số trên thanh địa chỉ URL
  const urlParams = new URLSearchParams(window.location.search); // tra về thông tin sau dấu ?
  const projectId = urlParams.get("id"); // lấy giá trị của id do thẻ a truyền sang

  // Lấy dữ liệu tương ứng trong phần dữ liệu giả lập
  const currentProject = projectData[projectId];

  if (currentProject) {
    doDuLieuVaoCharter(currentProject); // thiết lập dữ liệu cho trang charter
  } else {
    console.error("Không tìm thấy dữ liệu phù hợp với ID dự án này!");
  }
}

//  Hàm tạo thẻ động và đẩy dữ liệu vào cấu trúc của charter.html
function doDuLieuVaoCharter(data) {
  // Đổi tiêu đề tab trình duyệt cho khớp với tên dự án thực tế
  const charterTitle = document.querySelector("title");
  if (charterTitle) charterTitle.textContent = `Project Charter - ${data.name}`;

  // 1. ---- ĐỔ DỮ LIỆU KHỐI GOALS ----
  const goalsBox = document.querySelector(".goals");
  if (goalsBox) {
    // Xóa sạch các khối .goals-bar cũ mẫu tĩnh trong HTML
    goalsBox.querySelectorAll(".goals-bar").forEach((el) => el.remove());

    data.goals.forEach((goalText, index) => {
      //duyệt mảng goals trong đối tượng data (current project)
      const newBar = document.createElement("div");
      newBar.className = "goals-bar";
      newBar.innerHTML = `
        <div class="icon">
          <i class="fa-solid fa-flag-checkered me-2"></i>
        </div>
        <div class="goals-item">
          <h5>Goal ${index + 1}</h5>
          <p>${goalText}</p>
        </div>
      `;
      goalsBox.appendChild(newBar);
    });
  }

  // 2. ---- ĐỔ DỮ LIỆU KHỐI TEAM ----
  const teamBox = document.querySelector(".team");
  if (teamBox) {
    // Xóa sạch các khối .team-bar mẫu tĩnh trong HTML
    teamBox.querySelectorAll(".team-bar").forEach((el) => el.remove());

    data.team.forEach((memberName, index) => {
      const newBar = document.createElement("div");
      newBar.className = "team-bar";
      newBar.innerHTML = `
        <div class="icon"><i class="fa-solid fa-user"></i></div>
        <div class="Team-item">
          <h5>Member 0${index + 1}</h5>
          <p>Name: ${memberName}</p>
        </div>
      `;
      teamBox.appendChild(newBar);
    });
  }

  // 3. ---- ĐỔ DỮ LIỆU KHỐI SCOPES (IN / OUT) ----
  const inBox = document.querySelector(".scopes .in");
  if (inBox) {
    // Xóa các thẻ <p> mẫu nhưng giữ nguyên thẻ <h5>IN</h5> của Bootstrap Grid
    inBox.querySelectorAll("p").forEach((el) => el.remove());

    data.scopesIn.forEach((inText) => {
      const newP = document.createElement("p");
      newP.textContent = inText;
      inBox.appendChild(newP);
    });
  }

  const outBox = document.querySelector(".scopes .out");
  if (outBox) {
    // Xóa các thẻ <p> mẫu nhưng giữ nguyên thẻ <h5>OUT</h5> của Bootstrap Grid
    outBox.querySelectorAll("p").forEach((el) => el.remove());

    data.scopesOut.forEach((outText) => {
      const newP = document.createElement("p");
      newP.textContent = outText;
      outBox.appendChild(newP);
    });
  }

  // 4. ---- ĐỔ DỮ LIỆU KHỐI PRIMARY ----
  const primaryBox = document.querySelector(".primary");
  if (primaryBox) {
    // Xóa sạch các khối .primary-bar cũ mẫu tĩnh trong HTML
    primaryBox.querySelectorAll(".primary-bar").forEach((el) => el.remove());

    data.primary.forEach((priText) => {
      const newBar = document.createElement("div");
      newBar.className = "primary-bar";
      newBar.innerHTML = `
        <div class="icon">
          <i class="fa-solid fa-circle-question"></i>
        </div>
        <p>${priText}</p>
      `;
      primaryBox.appendChild(newBar);
    });
  }

  // 5. ---- ĐỔ DỮ LIỆU KHỐI TIMELINE ----
  const timelineBox = document.querySelector(".timeline");
  if (timelineBox) {
    // Xóa toàn bộ các mốc trục thời gian tĩnh có sẵn trong HTML
    timelineBox.querySelectorAll(".timeline-bar").forEach((el) => el.remove());

    data.timeline.forEach((item, index) => {
      const newBar = document.createElement("div");
      newBar.className = "timeline-bar";
      newBar.innerHTML = `
        <div class="index">
          <span class="text-white d-inline-flex align-items-center justify-content-center rounded-circle" style="width: 30px; height: 30px">
            ${index + 1}
          </span>
        </div>
        <div class="timeline-item">
          <h5>${item.time}</h5>
          <p>${item.task}</p>
        </div>
      `;
      timelineBox.appendChild(newBar);
    });
  }
}
