# How to run
---

## Cách chạy
```
git clone https://github.com/Vinhdtgcs200644/CloudWeb.git
cd CloudProject
npm install
npm start
```

## Cách commit
```
git clone https://github.com/Vinhdtgcs200644/CloudWeb.git
cd CloudProject
<chỉnh sửa v.v>
git add .
git commit <message>
git push
```
# Roles of each file
---

Chức năng của từng file trong webapp của tao như sau, mỗi đứa coi rồi tự phân ra xem thằng nào sẽ quản lý khúc nào và vân vân.
| Files |Purpose|
| ------ || ------ |
|apps/admin.js|File này chứa các chức năng cho /manage hay nói chung là chức năng liên quan tới nhân viên ( thêm, bớt, xoá ) nhân viên, v.v|
|apps/cart.js|FIle này chứa các chức năng cho /cart hay nói chung là chức năng add product vào trong cart mua hàng|
|apps/database.js|File này chứa chức năng kết nối tới cơ sở dữ liệu ( database ) của mongodb atlas|
|apps/product.js|File này chứa chức năng cho /product hay /productedit hay nói chung là list sản phẩm, update sản phẩm hay xoá sản phẩm|
|apps/report.js|File này chứa chức năng để lấy những cái bill đã được thanh toán và in ra màn hình hay nói chung là lịch sử thanh toán|
|models/bills.js|File này là giúp tạo một collection cho bill trong cơ sở dữ liệu|
|models/employee.js|File này là giúp tạo một collection cho employee trong cơ sở dữ liệu|
|models/products.js|File này là giúp tạo một collection cho product trong cơ sở dữ liệu|
|public/css/admin.css|Làm đẹp cho trang /manage|
|public/css/cart.css|Làm đẹp cho trang /cart|
|public/css/home.css|làm đẹp chho trang chủ|
|public/css/main.css|File làm đẹp chung chung cho các trang|
|public/css/product_edit_page.css|Làm đẹp cho trang /productedit|
|public/css/product.css|làm đẹp cho trang /product|
|public/css/search.css|làm đẹp cho trang /search|
|public/img/|File chứa hình ảnh, mấy hình có sẵn trong đây đừng đụng tới làm gì|
|trash/|Kệ mẹ cái này :}|
|views/section/_footer.ejs|làm đẹp footer cho website|
|views/section/_header.ejs|làm đẹp phần header cho website|
|views/admin.ejs|file này là nguồn HTML của /manage|
|views/bill.ejs|file này là nguồn HTML của /bill|
|views/cart.ejs|file này là nguồn HTML của /cart|
|views/employee.ejs|file này là nguồn HTML của /employee|
|views/index.ejs|file này là nguồn HTML của / hay /home|
|views/product.ejs|file này là nguồn HTML của /product|
|views/productedit.ejs|file này là nguồn HTML của /productedit|
|views/search.ejs|file này là nguồn HTML của /search|
|start.js|File chính hay nói chung là file đầu vào, khi chạy file này bằng nodejs thì sẽ có trang web|
|routes.js|File này là file quản lý các route, route là những cái như /home, /manage, /product, v.v. Nói chung cứ một cái "/<tên>" thì được tính là một route, file này là quản lý, xoá route, thêm route, v.v|
|package.json|FIle này chứa các cấu hình cần thiết như là chương trình này cần thư viện gì, chương trình này tên gì, version bao nhiêu v.v|
