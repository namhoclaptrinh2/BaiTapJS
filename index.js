// Bài 1 quản lý tuyển sinh
document.getElementById("btnKetQua").addEventListener("click", function() {
    event.preventDefault(); //ngăn reload lại trang
    //input
    let diemChuan = parseFloat(document.getElementById("diemChuan").value*1);
    let diemMonThu1 = parseFloat(document.getElementById("diemMonThu1").value*1);
    let diemMonThu2 = parseFloat(document.getElementById("diemMonThu2").value*1);
    let diemMonThu3 = parseFloat(document.getElementById("diemMonThu3").value*1);
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value;

    // Kiểm tra có môn nào = 0!
    if (diemMonThu1 === 0 || diemMonThu2 === 0 || diemMonThu3 === 0) {
        document.getElementById("ketQua").innerHTML = "Rớt Có môn thi điểm 0";
        return;
    }

    // Tính điểm ưu tiên theo khu vực
    let diemUuTienKhuVuc = 0;
    switch (khuVuc) {
        case 'A':
            diemUuTienKhuVuc = 2;
            break;
        case 'B':
            diemUuTienKhuVuc = 1;
            break;
        case 'C':
            diemUuTienKhuVuc = 0.5;
            break;
        default:
            diemUuTienKhuVuc = 0;
    }

    // Tính điểm ưu tiên theo đối tượng
    let diemUuTienDoiTuong = 0;
    switch (doiTuong) {
        case '1':
            diemUuTienDoiTuong = 2.5;
            break;
        case '2':
            diemUuTienDoiTuong = 1.5;
            break;
        case '3':
            diemUuTienDoiTuong = 1;
            break;
        default:
            diemUuTienDoiTuong = 0;
    }

    // Tính tổng điểm
    let tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    // Kiểm tra đậu hay rớt
    if (tongDiem >= diemChuan) {
        document.getElementById("ketQua").innerHTML = `Đậu (Tổng điểm: ${tongDiem})`;
    } else {
        document.getElementById("ketQua").innerHTML = `Rớt (Tổng điểm: ${tongDiem})`;
    }
});

// 
import { tinhTienDien } from './method.js';

document.getElementById('btnTinhTien').addEventListener('click', function() {
    let hoTen = document.getElementById('hoTen').value;
    let soKW = parseFloat(document.getElementById('soKW').value);
    let tongTienDien = tinhTienDien(soKW);
    document.getElementById('ket-qua-bai-2').innerHTML = `
        ${hoTen} đã sử dụng ${soKW} KW cần trả ${tongTienDien.toLocaleString()} VND
    `;
});

document.getElementById('btnTinhThue').addEventListener('click', function() {
    //input
    let hoTen = document.getElementById('hoTen').value;
    let tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    let soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

    //process
    let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
    let thue;
    if (thuNhapChiuThue <= 60) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
    } else {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
    }

    //output
    let ketQua = `Thuế thu nhập cá nhân của ${hoTen} là: ${thue} triệu VND`;
    document.getElementById('ketQua3').innerHTML = ketQua;
});

document.getElementById('btnTinhTienCap').addEventListener('click', function() {
    // Lấy giá trị từ các trường input
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const maKhachHang = document.getElementById('maKhachHang').value;
    const soKenhCaoCap = parseInt(document.getElementById('soKenhCaoCap').value) || 0;

    // Khai báo biến để lưu tổng tiền cáp
    let tongTienCap = 0;

    // Kiểm tra loại khách hàng và tính tiền cáp tương ứng
    if (loaiKhachHang === 'nhaDan') {
        // Tính tiền cáp cho nhà dân
        tongTienCap = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
    } else if (loaiKhachHang === 'doanhNghiep') {
        // Tính tiền cáp cho doanh nghiệp
        tongTienCap = 15 + 75 + (50 * soKenhCaoCap);
    }

    // Hiển thị kết quả
    document.getElementById('ketQua4').innerText = `Hóa đơn của khách hàng ${maKhachHang}: ${tongTienCap} $`;
});




