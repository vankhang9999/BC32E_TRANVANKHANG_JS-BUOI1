// BT1//
// Viết chơng trình tính lương nhân viên.
/*
- Đầu vào: n=100.000


- Xử lý:
    + Nhập số ngày tùy ý: d=?
    + Lương=d*n


- Đầu ra: Lương=?
*/
var n=100000;
var d=0;
var luong=0;
d=10;
tienLuong=d*n;
console.log("lương = "+tienLuong);
/////////////////////////////////////////
//BT2 Tính trung bình cộng
/*
  - Đầu vào: Cho 5 số thực ngẩu nhiên
  - Xử lý: Cộng 5 số lại rồi chia cho 5
  - Đầu ra: giá trị sau khi chia.

*/
var a;
var b;
var c;
var d;
var e;
a=1;
b=2;
c=-4;
d=1.5
e=10;
var tong;
var trungBinh;
tong=a+b+c+d+e;
trungBinh=tong/5;
console.log("Giá trị trung bình là: "+trungBinh);
///////////////////////////////////////////////
//BT3: Quy đổi tiền
/*
- Đầu vào: 1 USD = 23.500 vnđ
    
-Xử lý: Nhập vào số n USD cần đổi.
        Số tiền quy đổi: n* 23.500
- Xuất: Số tiền quy đổi.
*/
var usd="23500";
var n;
n=12;
var tienDoi;
tienDoi=n*usd;
console.log("Số tiền quy đổi là: "+ tienDoi);
//////////////////////////////////////////////////
//BT4 Tính diện tích chu vi hình chữ nhật
/**
 * Đầu vào:
 * 
 * 
 * Xử lý: Chiều dài=a;
 *        Chiều rộng=b;
 *        Chu vi=(a+b)*2;
 *        diện tích=a*b;
 * Xuất: Chu vi, diện tích.
 * 
 */
var a=50;
var b=8;
var c=0;
var s=0;
c=(a+b)*2;
console.log("Chu vi la: "+c);
s=a*b;
console.log("Dien tich la: "+s);
///////////////////////////////////////
//BT5 Tổng hai ký số:
/**
 * -đầu vào: Nhập số có 2 chữ số;
 * -Xử lý: 
 *  +tách hàng chục
 *  +tách hàng đơn vị
 *  + cộng hàng giá trị hàng chục với hàng đơn vị lại
 * -đầu ra: giá trị sau khi cộng.
 */

var n;
n=17;
var soHangdv;
var soHangc;
soHangdv=n%10;
soHangc=Math.floor(n/10);
var tong2kyso;
tong2kyso=soHangc+soHangdv;
console.log("Tổng 2 ký số là: "+tong2kyso);