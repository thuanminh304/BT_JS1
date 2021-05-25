console.log("Van Minh Thuan");

// Bài tập 4:Tính và xuất ra diện tích và chu vi của hình chữ nhật

// Bước1: nhập input gồm các biến: chiều dài, chiều rộng, diện tích HCN, chu vi HCN
var chieuDai = document.getElementById("idChieuDai");
var chieuRong = document.getElementById("idChieuRong");
var xuatDienTich = document.getElementById("idDienTich");
var xuatChuVi = document.getElementById("idChuVi");
var ketQua = document.getElementById("btn__ketQua");

xuatDienTich.style.opacity = "0";
xuatChuVi.style.opacity = "0";
//Bước 2: Cách thực hiện:
// diện tích HCN = chiều dài * chiều rộng
//chu vi HCN = (chiều dài + chiều rộng ) * 2

//Bước 3: Xuất ra output kết quả diện tích và chu vi HCN

// Xuất ra giao diện web

ketQua.onclick = function () {
  var chieuDai = document.getElementById("idChieuDai").value;
  var chieuRong = document.getElementById("idChieuRong").value;

  //cách tính
  var dienTichHcn = chieuDai * chieuRong;

  var chuViHcn = chieuDai * 2 + chieuRong * 2;
  //xuất
  xuatDienTich.style.opacity = "1";
  xuatChuVi.style.opacity = "1";

  xuatDienTich.innerHTML = dienTichHcn + "cm2";

  xuatChuVi.innerHTML = chuViHcn + "cm";
};

//Bài tập 5:viết chương trình nhập vào 1 số có 2 chữ số.Tính tổng 2 ký số vừa nhập

//Bước 1: khai báo input.
var soDaNhap = document.getElementById("idNhapSo");
var btn = document.getElementById("idBtn");
var xuatKetQua = document.getElementById("idXuatKetQua");

//Bước 2: cách thức hiện
//lấy số hàng đơn vị bằng cách dùng: int so_hang_dv = soDaNhap % 10;
// lấy số hàng chục bằng cách dùng : int so_hang_chuc= soDaNhap/10;

//Bước 3: xuất kết quả

btn.onclick = function () {
  var soDaNhap = document.getElementById("idNhapSo").value;

  var soHangDv = Math.floor(soDaNhap%10);

  var soHangChuc = Math.floor(soDaNhap%100/10);

  var tongHaiKySo = soHangDv + soHangChuc;

  xuatKetQua.innerHTML = tongHaiKySo;
};
