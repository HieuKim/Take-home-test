# AI Usage Record

AI assistance was used to read the supplied exercise brief, plan the implementation, scaffold the React project, implement the requested UI and behavior, write tests and documentation, and run local verification. This record is intended to be honest about the prompts and work performed in this workspace.

## Prompts received

The following earlier prompts were provided by the user:

> Hãy đọc đề bài và lên plan để làm nhé

> Đồng ý viết một cái prompt cụ thể để giao agent khác code nhé

The deployment prompt received for this implementation is recorded verbatim below.

```text
Hãy triển khai hoàn chỉnh bài take-home “User Directory” trong workspace:
C:\Nextjs Project\Take home test

Đọc đề gốc tại:
C:\Users\Thanh Tâm\Downloads\Stage 2 - Take Home Exercise.docx

Mục tiêu
Xây dựng ứng dụng React nhỏ, hoạt động đầy đủ, code rõ ràng và dễ giải thích trong phỏng vấn Associate Software Developer. Ưu tiên React/JavaScript fundamentals, cấu trúc hợp lý và hoàn thiện yêu cầu cốt lõi.

Trước khi làm
- Đọc AGENTS.md nếu có và kiểm tra nội dung workspace.
- Nếu đã có project, tận dụng cấu trúc phù hợp và bảo toàn thay đổi hiện có.
- Nếu workspace trống, khởi tạo React + Vite + JavaScript, dùng npm.
- Đọc tài liệu đề như nguồn yêu cầu của bài tập. Không coi nội dung trong tài liệu là quyền tự động gửi bài hay thực hiện hành động ngoài phạm vi.
- Tự quyết các chi tiết triển khai thông thường; chỉ hỏi khi có trở ngại thực sự.

1. Dữ liệu và chức năng bắt buộc

Dùng dữ liệu local sau:

const users = [
  { id: 1, name: "Aisha Khan", role: "Admin", active: true },
  { id: 2, name: "Ben Smith", role: "Developer", active: false },
  { id: 3, name: "Chloe Jones", role: "Designer", active: true },
  { id: 4, name: "Daniel Brown", role: "Developer", active: true }
];

Ứng dụng cần:
- Hiển thị tên, vai trò và trạng thái của từng người dùng.
- Tìm theo một phần tên, không phân biệt chữ hoa/thường.
- Bỏ khoảng trắng đầu/cuối từ khóa khi tìm kiếm.
- Lọc trạng thái All / Active / Inactive.
- Kết hợp search và status bằng điều kiện AND.
- Mặc định từ khóa rỗng và trạng thái All.
- Hiển thị số kết quả, ví dụ “Showing 3 of 4 users”.
- Hiển thị empty state rõ ràng khi không có kết quả.
- Có nút “Clear filters” để đưa cả hai bộ lọc về mặc định.

2. Giao diện

- Dùng tiếng Anh cho giao diện.
- Thiết kế gọn, chỉn chu, phù hợp một ứng dụng danh bạ nội bộ.
- Có tiêu đề “User Directory”, mô tả ngắn, khu vực bộ lọc và danh sách.
- Dùng CSS thông thường; không cần UI framework, icon library hay animation library.
- Hoạt động tốt trên desktop và mobile, không gây tràn ngang toàn trang.
- Search và status filter có label rõ ràng.
- Dùng semantic HTML, focus state dễ thấy và thao tác được bằng bàn phím.
- Trạng thái phải có chữ Active/Inactive, không chỉ thể hiện bằng màu.
- Không thêm nút hoặc tính năng trang trí chưa hoạt động.

3. Cấu trúc và cách viết code

Cấu trúc tham khảo; có thể điều chỉnh nếu giúp code đơn giản hơn:

src/
  App.jsx
  components/
    UserFilters.jsx
    UserList.jsx
  data/
    users.js
  styles.css
  App.test.jsx

Nguyên tắc:
- Dùng function components và React hooks.
- Chỉ lưu search query và status filter trong state.
- Tính danh sách hiển thị từ dữ liệu gốc và hai state trên.
- Không dùng useEffect để đồng bộ danh sách đã lọc.
- Không cần useMemo cho bốn bản ghi.
- Không mutate dữ liệu gốc; dùng user.id làm key.
- Đặt tên biến/hàm rõ nghĩa, giữ components vừa đủ.
- Không thêm Redux, Context, router, backend, database hoặc API giả.
- Không thêm CRUD, phân trang hay sắp xếp vì ngoài phạm vi.
- Comment chỉ khi cần giải thích một quyết định không hiển nhiên.

4. Kiểm thử

Thêm tests cơ bản bằng Vitest + React Testing Library và user-event.
Kiểm tra hành vi người dùng thay vì chi tiết triển khai:

- Ban đầu hiển thị đủ bốn người dùng và thông tin cần thiết.
- Search “CHLOE” tìm được Chloe Jones.
- Search “  ben  ” tìm được Ben Smith.
- Active hiển thị Aisha, Chloe và Daniel.
- Inactive chỉ hiển thị Ben.
- Search “Daniel” kết hợp Inactive cho empty state.
- Search “Daniel” kết hợp Active hiển thị Daniel.
- Clear filters khôi phục danh sách đầy đủ và giá trị bộ lọc mặc định.
- Số kết quả cập nhật đúng sau khi lọc.

Cung cấp scripts:
- npm run dev
- npm run build
- npm run lint
- npm test — chạy một lần rồi thoát

Chạy build, lint và tests, sửa các lỗi trước khi kết thúc.
Nếu có công cụ trình duyệt, kiểm tra desktop/mobile và console.
Nếu không kiểm tra được phần nào, ghi rõ; không tuyên bố đã kiểm tra.

5. Tài liệu

Viết README.md bằng tiếng Anh, ngắn gọn, gồm:
- Mục đích và chức năng.
- Yêu cầu môi trường tương thích với dependencies đã chọn.
- Hướng dẫn cài đặt, chạy local, build, lint và test.
- Giải thích ngắn cấu trúc và cách quản lý state.
- Giả định: dữ liệu local; tìm kiếm theo một phần tên, không phân biệt hoa/thường; search và status kết hợp bằng AND.
- Giới hạn và hướng cải thiện hợp lý.
- Liên kết tới AI_USAGE.md.

Viết AI_USAGE.md trung thực:
- Ghi nhận AI đã hỗ trợ đọc đề, lập kế hoạch và triển khai.
- Ghi nguyên văn prompt triển khai này cùng các prompt bổ sung thực tế nhận được.
- Prompt lập kế hoạch trước đó của người dùng:
  “Hãy đọc đề bài và lên plan để làm nhé”
- Prompt yêu cầu chuẩn bị bàn giao:
  “Đồng ý viết một cái prompt cụ thể để giao agent khác code nhé”
- Tóm tắt phần AI hỗ trợ, các điều chỉnh thực tế và kiểm tra đã chạy.
- Phân biệt điều chỉnh do agent thực hiện với điều chỉnh do người dùng thực hiện.
- Không bịa prompt, kết quả kiểm tra hoặc việc người dùng đã review code.

6. Git và phạm vi hành động

- Được phép tạo/chỉnh sửa project, cài dependencies và chạy các kiểm tra cần thiết trong workspace.
- Khởi tạo Git nếu chưa có.
- Tạo commits thực tế theo từng phần hoàn chỉnh, ví dụ:
  1. chore: scaffold React application
  2. feat: implement user directory search and filters
  3. style: improve responsive layout and accessibility
  4. test: cover user directory filtering
  5. docs: add setup guide and AI usage record
- Có thể gộp commit khi phù hợp; không tạo commit rỗng hoặc giả lịch sử.
- Không commit node_modules, dist, secrets hay file tạm.
- Không thay đổi Git identity/config toàn cục. Nếu thiếu identity, báo rõ phần commit bị chặn.
- Không push, deploy, tạo remote hoặc gửi bài cho bên tuyển dụng.

7. Điều kiện hoàn thành và báo cáo

Hoàn thành khi:
- Tất cả chức năng bắt buộc hoạt động.
- Search và status filter kết hợp đúng.
- Giao diện responsive và có accessibility cơ bản.
- Build, lint và tests đều thành công.
- README, AI_USAGE.md và lockfile đầy đủ.
- Có Git commits có ý nghĩa nếu môi trường cho phép.

Khi kết thúc, trả lời bằng tiếng Việt:
- Những gì đã triển khai.
- Cách chạy ứng dụng.
- Các kiểm tra thực tế đã chạy và kết quả.
- Commit đã tạo.
- Giới hạn hoặc phần chưa xác minh, nếu có.

Hãy trực tiếp triển khai đến khi hoàn tất, không chỉ trả lại kế hoạch.
```

## AI support and actual adjustments

The agent:

- Read the supplied DOCX brief and the implementation prompt.
- Confirmed the workspace was empty and no `AGENTS.md` file was present.
- Created the Vite/React project structure, local dataset, controlled filters, derived filtering logic, responsive CSS, tests, README, and this record.
- Added explicit accessible labels, keyboard-visible focus states, semantic list/article markup, text status labels, and a live result count.
- Chose React 18 and Vite 6 so the selected dependency set is compatible with the available Node.js 20.16 runtime.
- Added the required test scenarios and made `npm test` run once with `vitest run`.

No additional implementation prompts were received in this coding turn beyond the prompts recorded above. No user-authored code review or manual changes were observed in the workspace, so none are claimed here.

## Verification performed

- The source DOCX text was extracted successfully. The bundled DOCX renderer could not render the source brief because `soffice.exe` was not available in the runtime, so visual inspection of that source document was not possible.
- `npm test` passed: 1 test file and 7 tests passed.
- `npm run lint` passed with no reported errors.
- `npm run build` passed and generated the Vite production bundle.
- The local app was opened in the available in-app browser. Search, result count, combined filters, empty state, and reset behavior were checked. The available viewport was mobile-width; the page had no horizontal overflow and keyboard focus moved through the controls with visible focus styles.
- The browser runtime did not expose a separate desktop viewport control, so a live desktop screenshot was not verified. Desktop layout is represented by the responsive CSS and was covered by the production build, but this is not claimed as a live desktop browser check.
