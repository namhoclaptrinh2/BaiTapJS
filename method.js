export function tinhTienDien(soKW) {
    let tongTien = 0;
    if (soKW <= 50) {
        tongTien = soKW * 500;
    } else if (soKW > 50 && soKW <= 100) {
        tongTien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW > 100 && soKW <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW > 200 && soKW <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    return tongTien;
}
