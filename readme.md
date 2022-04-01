Sử dụng  form bằng bootstrap để kết hợp lại thành đăng kí/ đăng nhập


Nên validate thuần không xài boostrap để có thể bắt từng trường hợp
    -> có thể cùng nhau nghĩ cách validate sau

Sử dụng form validate để kiểm tra thông tin hợp lệ

Sử dụng thêm một vài một vài class ngay message lỗi để innerText đổi thành cái cần check như:
    + password đủ 6 chữ số
    + Password check theo regex này :   "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
    
    + Họ, tên không được có các kí tự đặc biệt
    +CCCD phải đủ 12 số 
    +Số điện thoại phải có length  = 10
    +Tất cả các giá trị không được rỗng
    +Tạm thời hoàn thành cơ bản đăng kí đăng nhập -> sau này cần nâng cấp hay optimize bằng các ngôn ngữ backend sau như mySQL , PHP, cũng như sử dụng docker để deploy code
    + Có thể chỉnh sửa lại màu để tăng UI/UX
Kiểm tra xem value của userName  phải khác admin vì đây là tài khoản mặc định, có thể sử dụng presskeyup để giải quyết

Regex kiểm tra chuỗi tiếng việt : [/^[a-zA-ZâăđêôơưấắếốớứầằềồờừẩẳểổởửẫẵễỗỡữậặệộợựáàảãạóòỏõọíìỉĩịúùủũụéèẻẽẹÂĂĐÊÔƠƯẤẮẾỐỚỨẦẰỀỒỜỪẨẲỂỔỞỬẪẴỄỖỠỮẬẶỆỘỢỰÁÀẢÃẠÓÒỎÕỌÍÌỈĨỊÚÙỦŨỤÉÈẺẼẸ]*$/]