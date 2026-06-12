# 🛒 Framework Kiểm Thử Tự Động SauceDemo (QA Automation)

Kho lưu trữ này chứa framework kiểm thử tự động toàn trình (End-to-End) cho nền tảng thương mại điện tử [SauceDemo](https://www.saucedemo.com/). Dự án được thiết kế với kiến trúc dễ mở rộng, mô phỏng lại các hành vi thực tế của khách hàng từ lúc xác thực tài khoản đến khi thanh toán thành công.

## 🚀 Công Nghệ Sử Dụng
* **Công cụ Tự động hóa:** Playwright
* **Ngôn ngữ Lập trình:** TypeScript
* **Mô hình Thiết kế:** Page Object Model (POM)
* **Quản lý Mã nguồn:** Git & GitHub

## 📂 Kiến Trúc Dự Án
Framework tuân thủ nghiêm ngặt mô hình **Page Object Model (POM)** để phân tách rõ ràng giữa giao diện và logic kiểm thử, giúp mã nguồn dễ bảo trì khi dự án mở rộng.

* `pages/`: Chứa các lớp (Class) quản lý định vị phần tử (locators) và các thao tác của người dùng trên từng trang cụ thể (VD: `LoginPage.ts`, `InventoryPage.ts`).
* `tests/`: Chứa các kịch bản kiểm thử (specs) và các bước xác nhận kết quả (assertions).
* `playwright.config.ts`: Tệp cấu hình tổng thể (Trình duyệt, thời gian chờ, xuất báo cáo).

## ⚙️ Hướng Dẫn Cài Đặt Và Chạy Cục Bộ

**1. Tải dự án về máy (Clone repository):**
```bash
git clone [https://github.com/DangKhoa1822041379/Luma-Automation-Project.git](https://github.com/DangKhoa1822041379/Luma-Automation-Project.git)
