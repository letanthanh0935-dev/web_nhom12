# Cồng Chiêng Tây Nguyên (Trang giới thiệu văn hóa di sản)

Một trang web giới thiệu Không gian Văn hóa Cồng Chiêng Tây Nguyên — Di sản văn hóa phi vật thể đại diện của nhân loại, được UNESCO công nhận năm 2005. Bao gồm:

- Giới thiệu 4 khía cạnh văn hóa: nhạc cụ thiêng liêng, cộng đồng, nghi lễ, di sản thế giới
- Trải nghiệm đa phương tiện: xem video tư liệu và nghe 3 bản nhạc cồng chiêng
- Thư viện ảnh với bộ lọc theo danh mục (nghi lễ, nhạc cụ, phong cảnh, con người) và lightbox phóng to
- Dòng thời gian lịch sử từ 2.000 năm trước đến hiện tại
- Giới thiệu 6 dân tộc tiêu biểu: Ê Đê, Gia Rai, Ba Na, M'Nông, Xơ Đăng, Cơ Ho
- Navbar responsive với dropdown menu, hỗ trợ mobile
- Dữ liệu thư viện ảnh được fetch từ API ngoài (`npoint.io`)
- Form liên hệ có validation phía client

---

## Yêu cầu

- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Không cần cài đặt thêm bất kỳ phần mềm nào

Dependencies được dùng trong dự án: `jQuery 4.0.0`, `Font Awesome 6.5.1`, `Google Fonts (Inter)`.

---

## Hướng dẫn chạy

1. Clone repository về máy:

```
git clone https://github.com/letanthanh0935-dev/web_nhom12.git
```

2. Mở thư mục dự án:

```
cd web_nhom12/congchieng
```

3. Mở file `index.html` bằng trình duyệt (nhấp đúp hoặc kéo vào trình duyệt).

Mở trình duyệt và xem trang web ngay lập tức — không cần server.

---

## Cấu trúc thư mục

```
web_nhom12/
└── congchieng/
    ├── index.html              # Trang HTML chính
    ├── style.css               # Giao diện và responsive
    ├── script.js               # Logic, dữ liệu và tương tác (jQuery)
    ├── jquery-4.0.0.min.js     # Thư viện jQuery (local)
    ├── images/                 # Ảnh sử dụng trong trang
    └── video/                  # Video tư liệu cồng chiêng
```

---

## Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| HTML5 | Cấu trúc trang |
| CSS3 | Giao diện, animation, responsive |
| JavaScript / jQuery 4.0 | Render nội dung động, xử lý sự kiện |
| Font Awesome 6.5 | Bộ icon |
| Google Fonts (Inter) | Typography |
| npoint.io API | Lưu trữ và fetch dữ liệu thư viện ảnh |

---

## Thành viên nhóm 12

| Thành viên | GitHub |
|---|---|
| Lê Tấn Thành | [@letanthanh0935-dev](https://github.com/letanthanh0935-dev) |
| Nguyễn Xuân Huy | [@N-X-Huy](https://github.com/N-X-Huy) |
| Pham Xuân Nghĩa | [PhamXuanNhia](https://github.com/PhamXuanNghia) |
---

## Website Demo:

```
keen-fenglisu-f80b13.netlify.app
```

## Công cụ tạo API:

```
[https://www.npoint.io](https://www.npoint.io/docs/5ef3e517e55fd8eb89f5?fbclid=IwY2xjawSGe1tleHRuA2FlbQIxMABicmlkETFzbVZ3cDg3T01yTGNTRVo2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqPn9Q8TeiC1xZsisYYj0Z2t4NuPqxCcpJihBrQbDdZGA-rvJSjPJlOOmCc8_aem_eFgWhhdAydMQo7_h3fDiuA)
```
