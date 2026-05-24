// Chạy khi trang đã tải xong
$(document).ready(function () {
  /* DỮ LIỆU (DATA) */

  // Dữ liệu menu điều hướng
  const navData = [
    { label: "Trang chủ", href: "#hero", icon: "fas fa-home" },
    {
      label: "Giới thiệu",
      href: "#gioi-thieu",
      icon: "fas fa-info-circle",
      dropdown: [
        {
          label: "Nhạc cụ thiêng liêng",
          href: "#intro-card-0",
          icon: "fas fa-drum",
        },
        {
          label: "Gắn liền cộng đồng",
          href: "#intro-card-1",
          icon: "fas fa-users",
        },
        {
          label: "Nghi lễ & lễ hội",
          href: "#intro-card-2",
          icon: "fas fa-fire",
        },
        {
          label: "Di sản thế giới",
          href: "#intro-card-3",
          icon: "fas fa-globe-asia",
        },
      ],
    },
    {
      label: "Trải nghiệm",
      href: "#multimedia",
      icon: "fas fa-play-circle",
      dropdown: [
        { label: "Video tư liệu", href: "#main-video", icon: "fas fa-video" },
        { label: "Âm thanh", href: "#audio-list", icon: "fas fa-headphones" },
      ],
    },
    { label: "Thư viện ảnh", href: "#gallery", icon: "fas fa-images" },
    { label: "Dòng thời gian", href: "#timeline", icon: "fas fa-clock" },
    { label: "Liên hệ", href: "#lien-he", icon: "fas fa-envelope" },
    {
      label: "Dân tộc",
      href: "#dan-toc",
      icon: "fas fa-user-friends",
      dropdown: [
        {
          label: "Người Ê Đê",
          href: "#ethnic-card-0",
          icon: "fas fa-map-marker-alt",
        },
        {
          label: "Người Gia Rai",
          href: "#ethnic-card-1",
          icon: "fas fa-map-marker-alt",
        },
        {
          label: "Người Ba Na",
          href: "#ethnic-card-2",
          icon: "fas fa-map-marker-alt",
        },
        {
          label: "Người M'Nông",
          href: "#ethnic-card-3",
          icon: "fas fa-map-marker-alt",
        },
        {
          label: "Người Xơ Đăng",
          href: "#ethnic-card-4",
          icon: "fas fa-map-marker-alt",
        },
        {
          label: "Người Cơ Ho",
          href: "#ethnic-card-5",
          icon: "fas fa-map-marker-alt",
        },
      ],
    },
  ];

  // Dữ liệu phần giới thiệu
  const introData = [
    {
      icon: "fas fa-drum",
      title: "Nhạc cụ thiêng liêng",
      desc: "Cồng chiêng là loại nhạc khí bằng hợp kim đồng, có khi pha vàng, bạc hoặc đồng đen. Cồng là loại có núm, chiêng là loại không có núm.",
    },
    {
      icon: "fas fa-users",
      title: "Gắn liền cộng đồng",
      desc: "Gắn bó mật thiết với đời sống tinh thần của cộng đồng các dân tộc Tây Nguyên, là phương tiện giao tiếp với siêu nhiên. Tiếng chiêng như tiếng nói của thần linh.",
    },
    {
      icon: "fas fa-fire",
      title: "Nghi lễ & lễ hội",
      desc: "Xuất hiện trong mọi nghi lễ quan trọng: lễ thổi tai cho trẻ sơ sinh, lễ cưới, lễ mừng lúa mới, lễ đâm trâu, và trong sinh hoạt cộng đồng hàng ngày.",
    },
    {
      icon: "fas fa-globe-asia",
      title: "Di sản thế giới",
      desc: "Ngày 25/11/2005, UNESCO chính thức công nhận Không gian Văn hóa Cồng chiêng Tây Nguyên là Kiệt tác truyền khẩu và Di sản Văn hóa phi vật thể.",
    },
  ];

  // Dữ liệu thư viện ảnh — load từ data.json bằng Fetch API
  var galleryData = [];

  // Dữ liệu âm thanh
  const audioData = [
    {
      id: 1,
      title: "Tiếng Cồng Chiêng Trầm Hùng",
      desc: "Bài diễn tấu truyền thống",
      src: "audio/gong1.mp3",
    },
    {
      id: 2,
      title: "Nhịp Chiêng Lễ Mừng Lúa Mới",
      desc: "Nghi lễ nông nghiệp",
      src: "audio/gong2.mp3",
    },
    {
      id: 3,
      title: "Hòa Tấu Cồng Chiêng Đêm Hội",
      desc: "Lễ hội cộng đồng",
      src: "audio/gong3.mp3",
    },
  ];

  // Dữ liệu dòng thời gian
  const timelineData = [
    {
      year: "Khoảng 2.000 năm trước ",
      title: "Khởi Nguồn Cồng Chiêng",
      desc: "Cồng chiêng xuất hiện từ rất sớm tại khu vực Tây Nguyên và Đông Nam Á, gắn liền với đời sống văn hóa, tín ngưỡng của nhiều dân tộc bản địa.",
    },
    {
      year: "Từ thế kỷ XV – XIX",
      title: "Giao Thương & Lan Tỏa",
      desc: "Cồng chiêng trở thành nhạc cụ và vật phẩm quý giá trong đời sống cộng đồng, đồng thời được trao đổi rộng rãi giữa vùng cao nguyên và đồng bằng.",
    },
    {
      year: "2005",
      title: "UNESCO Công Nhận",
      desc: "Ngày 25/11/2005, Không gian văn hóa Cồng Chiêng Tây Nguyên được UNESCO công nhận là “Kiệt tác Di sản truyền khẩu và phi vật thể của nhân loại”.",
    },
    {
      year: "Năm 2008",
      title: "Ghi danh Di sản Nhân loại",
      desc: "UNESCO tiếp tục đưa Không gian văn hóa Cồng Chiêng Tây Nguyên vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại.",
    },
    {
      year: "Hiện Tại",
      title: "Bảo Tồn & Phát Huy",
      desc: "Không gian văn hóa Cồng Chiêng hiện được bảo tồn và phát huy tại 5 tỉnh Tây Nguyên gồm: Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng.",
    },
  ];

  // Dữ liệu các dân tộc
  const ethnicData = [
    {
      name: "Người Ê Đê",
      loc: "Đắk Lắk, Phú Yên",
      desc: "Dân tộc có truyền thống cồng chiêng phong phú nhất, với bộ chiêng Knah nổi tiếng.",
      img: "images/people.png",
    },
    {
      name: "Người Gia Rai",
      loc: "Gia Lai, Kon Tum",
      desc: "Sở hữu bộ cồng chiêng lớn nhất với đến 18 chiếc, nổi bật trong các nghi lễ đâm trâu.",
      img: "images/ceremony.png",
    },
    {
      name: "Người Ba Na",
      loc: "Gia Lai, Kon Tum",
      desc: "Nổi tiếng với nghệ thuật đánh cồng chiêng tinh xảo, gắn liền với Nhà Rông.",
      img: "images/hero.png",
    },
    {
      name: "Người M'Nông",
      loc: "Đắk Nông, Đắk Lắk",
      desc: "Sử dụng cồng chiêng trong các sử thi truyền miệng (Ot Ndrong) hào hùng.",
      img: "images/nguoi-M'Nông.png",
    },
    {
      name: "Người Xơ Đăng",
      loc: "Kon Tum, Quảng Ngãi",
      desc: "Bộ chiêng thường có 11 đến 20 chiếc, nổi tiếng với giai điệu thánh thiện.",
      img: "images/nguoi-XoDang.png",
    },
    {
      name: "Người Cơ Ho",
      loc: "Lâm Đồng",
      desc: "Truyền thống cồng chiêng kết hợp với múa và hát, đặc sắc vùng Nam Tây Nguyên.",
      img: "images/nguoi-CoHo.png",
    },
  ];

  /*HIỂN THỊ NỘI DUNG LÊN TRANG*/
  function renderNavItem(item) {
    var chevron = item.dropdown
      ? '<i class="fas fa-chevron-down" style="font-size:10px"></i>'
      : "";
    var dropdownHtml = "";

    if (item.dropdown) {
      var dropLinks = item.dropdown
        .map(function (drop) {
          return (
            '<a href="' +
            drop.href +
            '" class="dropdown-link"><i class="' +
            drop.icon +
            '"></i> ' +
            drop.label +
            "</a>"
          );
        })
        .join("");
      dropdownHtml = '<div class="nav-dropdown">' + dropLinks + "</div>";
    }

    return (
      '<div class="nav-item">' +
      '<a href="' +
      item.href +
      '" class="nav-link">' +
      '<i class="' +
      item.icon +
      '"></i> ' +
      item.label +
      " " +
      chevron +
      "</a>" +
      dropdownHtml +
      "</div>"
    );
  }

  // Hiển thị menu điều hướng
  function renderNav() {
    var html = navData.map(renderNavItem).join("");
    $("#main-nav").html(html);
  }

  // Hiển thị các thẻ giới thiệu
  function renderIntro() {
    var html = introData
      .map(function (item, index) {
        return (
          '<div id="intro-card-' +
          index +
          '" class="intro-card fade-up">' +
          '<div class="intro-icon"><i class="' +
          item.icon +
          '"></i></div>' +
          "<h3>" +
          item.title +
          "</h3>" +
          "<p>" +
          item.desc +
          "</p>" +
          "</div>"
        );
      })
      .join("");
    $("#intro-grid").html(html);
  }

  // Hiển thị thư viện ảnh
  function renderGallery(filter) {
    var items = galleryData;

    if (filter !== "all") {
      items = galleryData.filter(function (item) {
        return item.category === filter;
      });
    }

    var html = items
      .map(function (item, index) {
        return (
          '<div class="gallery-item fade-up" data-idx="' +
          index +
          '" data-src="' +
          item.src +
          '" data-caption="' +
          item.caption +
          '">' +
          '<img src="' +
          item.src +
          '" alt="' +
          item.caption +
          '">' +
          '<div class="gallery-overlay"><span>' +
          item.caption +
          "</span></div>" +
          "</div>"
        );
      })
      .join("");
    $("#gallery-grid").html(html);
  }

  // Hiển thị danh sách âm thanh
  function renderAudio() {
    var html = audioData
      .map(function (item) {
        return (
          '<div class="audio-item fade-up">' +
          '<button class="audio-btn" data-src="' +
          item.src +
          '">' +
          '<i class="fas fa-play"></i>' +
          "</button>" +
          '<div class="audio-info">' +
          "<h3>" +
          item.title +
          "</h3>" +
          "<p>" +
          item.desc +
          "</p>" +
          "</div>" +
          '<div class="audio-progress-container" data-src="' +
          item.src +
          '">' +
          '<div class="audio-progress-bar"></div>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    $("#audio-list").html(html);
  }

  // Hiển thị dòng thời gian
  function renderTimeline() {
    var html = timelineData
      .map(function (item) {
        return (
          '<div class="timeline-item fade-up">' +
          '<div class="timeline-year">' +
          item.year +
          "</div>" +
          "<h3>" +
          item.title +
          "</h3>" +
          '<p class="timeline-desc">' +
          item.desc +
          "</p>" +
          "</div>"
        );
      })
      .join("");
    $("#timeline-container").html(html);
  }

  // Hiển thị các dân tộc
  function renderEthnic() {
    var html = ethnicData
      .map(function (item, index) {
        return (
          '<div id="ethnic-card-' +
          index +
          '" class="ethnic-card fade-up">' +
          '<div class="ethnic-img"><img src="' +
          item.img +
          '" alt="' +
          item.name +
          '"></div>' +
          '<div class="ethnic-body">' +
          "<h3>" +
          item.name +
          "</h3>" +
          '<div class="ethnic-loc"><i class="fas fa-map-marker-alt"></i> ' +
          item.loc +
          "</div>" +
          "<p>" +
          item.desc +
          "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    $("#ethnic-grid").html(html);
  }

  // Gọi tất cả hàm render khi trang tải
  renderNav();
  renderIntro();
  renderAudio();
  renderTimeline();
  renderEthnic();

  // Fetch gallery data từ data.json
  fetch("data.json")
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP error: " + response.status);
      return response.json();
    })
    .then(function (data) {
      galleryData = data.gallery;
      renderGallery("all");
      observeFadeUp();
    })
    .catch(function (err) {
      console.error("Không tải được gallery:", err);
      $("#gallery-grid").html(
        '<p style="text-align:center;padding:40px;color:#9a958d">Không thể tải thư viện ảnh.</p>',
      );
    });

  /*CÁC SỰ KIỆN TƯƠNG TÁC (EVENTS) */

  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var target = $(href);

    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top - 70 },
        200,
        function () {
          var isCard = href.includes("-card-");
          var isMedia = href === "#main-video" || href === "#audio-list";
          if (isCard || isMedia) {
            target.addClass("highlight-glow");
            setTimeout(function () {
              target.removeClass("highlight-glow");
            }, 2000);
          }
        },
      );

      // Đóng menu mobile sau khi bấm link
      $(".nav").removeClass("active");
      $("#mobile-overlay").removeClass("active");
      $("#mobile-menu-btn i").removeClass("fa-times").addClass("fa-bars");
      $(".nav-dropdown").css({ opacity: "", visibility: "" });
    }
  });

  // Nút mở/đóng menu mobile
  $("#mobile-menu-btn").on("click", function () {
    var $nav = $(".nav");
    var $overlay = $("#mobile-overlay");
    var $icon = $(this).find("i");

    $nav.toggleClass("active");
    $overlay.toggleClass("active");

    // Đổi icon thanh ngang ↔ dấu X
    if ($nav.hasClass("active")) {
      $icon.removeClass("fa-bars").addClass("fa-times");
    } else {
      $icon.removeClass("fa-times").addClass("fa-bars");
    }
  });

  // Đóng menu khi bấm vào lớp overlay phía sau
  $("#mobile-overlay").on("click", function () {
    $(".nav").removeClass("active");
    $(this).removeClass("active");
    $("#mobile-menu-btn i").removeClass("fa-times").addClass("fa-bars");
  });

  // Thêm class "scrolled" cho header khi cuộn xuống
  $(window).on("scroll", function () {
    var scrollY = $(this).scrollTop();
    $("#site-header").toggleClass("scrolled", scrollY > 50);
    $("#back-to-top").toggleClass("visible", scrollY > 400);
  });

  // Nút cuộn về đầu trang
  $("#back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Nút lọc thư viện ảnh
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    renderGallery($(this).data("filter"));
    observeFadeUp(); // Kích hoạt animation cho ảnh mới
  });

  /*LIGHTBOX (XEM ẢNH TO) */

  var currentLbIndex = 0;

  // Mở lightbox khi bấm vào ảnh
  $(document).on("click", ".gallery-item", function () {
    currentLbIndex = parseInt($(this).data("idx"));
    updateLightbox();
    $("#lightbox").addClass("active");
  });

  // Cập nhật ảnh và chú thích trong lightbox
  function updateLightbox() {
    var $item = $(".gallery-item").eq(currentLbIndex);
    $("#lightbox-img").attr("src", $item.data("src"));
    $("#lightbox-caption").text($item.data("caption"));
  }

  // Đóng lightbox
  $("#lightbox-close").on("click", function () {
    $("#lightbox").removeClass("active");
  });

  // Ảnh trước
  $("#lightbox-prev").on("click", function () {
    var total = $(".gallery-item").length;
    currentLbIndex = (currentLbIndex - 1 + total) % total;
    updateLightbox();
  });

  // Ảnh tiếp theo
  $("#lightbox-next").on("click", function () {
    currentLbIndex = (currentLbIndex + 1) % $(".gallery-item").length;
    updateLightbox();
  });

  /*  HIỆU ỨNG CUỘN (SCROLL ANIMATION)*/

  function observeFadeUp() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-up").forEach(function (el) {
      observer.observe(el);
    });
  }
  observeFadeUp();

  /*  ĐẾM SỐ THỐNG KÊ (COUNTER ANIMATION)*/

  // Quan sát khu vực thống kê, bắt đầu đếm khi hiển thị
  var statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  var heroStats = document.querySelector(".hero-stats");
  if (heroStats) statsObserver.observe(heroStats);

  // Chạy animation đếm số cho tất cả .stat-number
  function startCounters() {
    document.querySelectorAll(".stat-number").forEach(function (counter) {
      var target = parseInt(counter.getAttribute("data-target"));
      var step = Math.ceil(target / 100) || 1;
      var interval = Math.abs(Math.floor(2000 / target));
      var current = 0;

      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          counter.innerText = target;
          clearInterval(timer);
        } else {
          counter.innerText = current;
        }
      }, interval);
    });
  }

  /* TRÌNH PHÁT NHẠC (AUDIO PLAYER) */

  var currentAudio = null; // Audio đang phát hiện tại

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".audio-btn");
    if (!btn) return;

    var src = btn.getAttribute("data-src");
    var icon = btn.querySelector("i");
    var progress = btn.parentElement.querySelector(".audio-progress-bar");

    // Bấm cùng bài đang phát → toggle play / pause
    if (currentAudio && currentAudio._src === src) {
      if (currentAudio.paused) {
        currentAudio.play();
        icon.className = "fas fa-pause";
      } else {
        currentAudio.pause();
        icon.className = "fas fa-play";
      }
      return;
    }
    // Bấm bài khác → dừng bài cũ, reset icon và thanh tiến trình
    if (currentAudio) {
      currentAudio.pause();
      document.querySelectorAll(".audio-btn i").forEach(function (i) {
        i.className = "fas fa-play";
      });
      document.querySelectorAll(".audio-progress-bar").forEach(function (bar) {
        bar.style.width = "0%";
      });
    }
    // Tạo và phát bài mới
    currentAudio = new Audio(src);
    currentAudio._src = src;
    currentAudio.play();
    icon.className = "fas fa-pause";

    // Cập nhật thanh tiến trình theo thời gian phát
    currentAudio.ontimeupdate = function () {
      var percent = (currentAudio.currentTime / currentAudio.duration) * 100;
      if (progress) progress.style.width = percent + "%";
    };

    // Reset khi bài kết thúc
    currentAudio.onended = function () {
      icon.className = "fas fa-play";
      if (progress) progress.style.width = "0%";
    };
  });

  /* FORM LIÊN HỆ + VALIDATION */

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    var name = $("#contact-name").val().trim();
    var email = $("#contact-email").val().trim();
    var msg = $("#contact-msg").val().trim();
    var valid = true;

    // Reset lỗi cũ
    $(".form-error").text("");
    $(".form-group input, .form-group textarea").removeClass("input-error");

    // Validate họ tên
    if (name === "") {
      $("#err-name").text("Vui lòng nhập họ và tên.");
      $("#contact-name").addClass("input-error");
      valid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      $("#err-email").text("Vui lòng nhập email.");
      $("#contact-email").addClass("input-error");
      valid = false;
    } else if (!emailRegex.test(email)) {
      $("#err-email").text("Email không đúng định dạng.");
      $("#contact-email").addClass("input-error");
      valid = false;
    }

    // Validate tin nhắn
    if (msg === "") {
      $("#err-msg").text("Vui lòng nhập nội dung tin nhắn.");
      $("#contact-msg").addClass("input-error");
      valid = false;
    }

    // Nếu hợp lệ → hiện thông báo thành công
    if (valid) {
      $("#contact-form input, #contact-form textarea").val("");
      $("#form-success").fadeIn(300);
      setTimeout(function () {
        $("#form-success").fadeOut(300);
      }, 4000);
    }
  });

  // Xóa lỗi khi người dùng bắt đầu nhập lại
  $("#contact-form input, #contact-form textarea").on("input", function () {
    $(this).removeClass("input-error");
    $(this).siblings(".form-error").text("");
  });
});
