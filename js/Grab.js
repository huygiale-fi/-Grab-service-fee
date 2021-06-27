function tinhtien() {
    var tenkh = document.getElementById('tenkh').value;
    var km = document.getElementById('km').value;
    var tgcho = document.getElementById('tgcho').value;
    var loaixe = document.getElementById('grab').value;
    if (document.getElementById('grabcar').checked) {
        loaixe = document.getElementById('grabcar').value;
    } else if (document.getElementById('grabsuv').checked) {
        loaixe = document.getElementById('grabsuv').value;
    } else if (document.getElementById('grabblack').checked) {
        loaixe = document.getElementById('grabblack').value;
    }
    // validateform

    // ----------------------------------

    var tinhkm = function(km, tgcho, loaixe) {
        var thanhtien = 0;
        var tiencho = 0;
        if (loaixe === 'Grab Car') {
            if (tgcho == 3) {
                tiencho = 2000;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 666.66 + 2000);
            }
            if (km <= 1) {
                return thanhtien = parseFloat(km) * 8000 + tiencho;
            }
            if (km > 1 && km <= 19) {
                return thanhtien = (parseFloat(km - 1) * 7500) + 8000 + tiencho;
            }
            if (km > 19) {
                return thanhtien = (parseFloat(km - 19) * 7000) + (18 * 7500) + 8000 + tiencho;
            }
        } else if (loaixe === 'Grab Suv') {
            if (tgcho == 3) {
                tiencho = 3000;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 1000 + 3000);
            }
            if (km <= 1) {
                return thanhtien = parseFloat(km) * 9000 + tiencho;
            }
            if (km > 1 && km <= 19) {
                return thanhtien = (parseFloat(km - 1) * 8500) + 9000 + tiencho;
            }
            if (km > 19) {
                return thanhtien = (parseFloat(km - 19) * 8000) + (18 * 8500) + 9000 + tiencho;
            }
        } else if (loaixe === 'Grab Black') {
            if (tgcho == 3) {
                tiencho = 3500;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 1166.66 + 3500);
            }
            if (km <= 1) {
                return thanhtien = parseFloat(km) * 10000 + tiencho;
            }
            if (km > 1 && km <= 19) {
                return thanhtien = (parseFloat(km - 1) * 9500) + 10000 + tiencho;
            }
            if (km > 19) {
                return thanhtien = (parseFloat(km - 19) * 9000) + (18 * 9500) + 10000 + tiencho;
            }
        }
    }
    var tien = tinhkm(km, tgcho, loaixe);
    console.log(tien);
    document.getElementById('xuatTien').innerHTML = tien;
    document.getElementById('divThanhTien').style.display = 'block';
    document.getElementById('spantenkh').innerHTML = 'Tên Khách Hàng : ' + tenkh;
    document.getElementById('spanloaixe').innerHTML = 'Loại Xe : ' + loaixe;


    var inhoadon = function(loaixe, tgcho, km) {
        if (loaixe === 'Grab Car') {
            if (tgcho == 3) {
                tiencho = 2000;
                document.getElementById('tttgcho').innerHTML = tiencho;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 666.66 + 2000);
                document.getElementById('tttgcho').innerHTML = tiencho;
            }
            if (km <= 1) {
                document.getElementById('spankmdau').innerHTML = km;
                document.getElementById('ttkmdau').innerHTML = parseFloat(km) * 8000;
            }
            if (km > 1 && km <= 19) {
                document.getElementById('spankmsau').innerHTML = (km - 1);
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 8000;
                document.getElementById('ttkmsau').innerHTML = parseFloat(km - 1) * 7500;
            }
            if (km > 19) {
                document.getElementById('spankmcuoi').innerHTML = (km - 19);
                document.getElementById('spankmsau').innerHTML = 18;
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 8000;
                document.getElementById('ttkmsau').innerHTML = 135000;
                document.getElementById('ttkmcuoi').innerHTML = parseFloat(km - 19) * 7000;
            }
            document.getElementById('spantgcho').innerHTML = tgcho;
            document.getElementById('phitgcho').innerHTML = '2000 (3 phút)';
            document.getElementById('kmdau').innerHTML = 8000;
            document.getElementById('kmsau').innerHTML = 7500;
            document.getElementById('kmcuoi').innerHTML = 7000;
            document.getElementById('spanttien').innerHTML = 'Tổng Tiền : ' + tien + ' ' + 'vnd';
        } else if (loaixe === 'Grab Suv') {
            if (tgcho == 3) {
                tiencho = 3000;
                document.getElementById('tttgcho').innerHTML = tiencho;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 1000 + 3000);
                document.getElementById('tttgcho').innerHTML = tiencho;
            }
            if (km <= 1) {
                document.getElementById('spankmdau').innerHTML = km;
                document.getElementById('ttkmdau').innerHTML = parseFloat(km) * 9000;
            }
            if (km > 1 && km <= 19) {
                document.getElementById('spankmsau').innerHTML = (km - 1);
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 9000;
                document.getElementById('ttkmsau').innerHTML = parseFloat(km - 1) * 8500;
            }
            if (km > 19) {
                document.getElementById('spankmcuoi').innerHTML = (km - 19);
                document.getElementById('spankmsau').innerHTML = 18;
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 9000;
                document.getElementById('ttkmsau').innerHTML = 18 * 8500;
                document.getElementById('ttkmcuoi').innerHTML = parseFloat(km - 19) * 8000;
            }
            document.getElementById('spantgcho').innerHTML = tgcho;
            document.getElementById('phitgcho').innerHTML = '3000 (3 phút)';
            document.getElementById('kmdau').innerHTML = 9000;
            document.getElementById('kmsau').innerHTML = 8500;
            document.getElementById('kmcuoi').innerHTML = 8000;
            document.getElementById('spanttien').innerHTML = 'Tổng Tiền : ' + tien + ' ' + 'vnd';

        } else if (loaixe === 'Grab Black') {
            if (tgcho == 3) {
                tiencho = 3500;
                document.getElementById('tttgcho').innerHTML = tiencho;
            } else if (tgcho > 3) {
                tiencho = Math.round((tgcho - 3) * 1166.66 + 3500);
                document.getElementById('tttgcho').innerHTML = tiencho;
            }
            if (km <= 1) {
                document.getElementById('spankmdau').innerHTML = km;
                document.getElementById('ttkmdau').innerHTML = parseFloat(km) * 10000;
            }
            if (km > 1 && km <= 19) {
                document.getElementById('spankmsau').innerHTML = (km - 1);
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 10000;
                document.getElementById('ttkmsau').innerHTML = parseFloat(km - 1) * 9500;
            }
            if (km > 19) {
                document.getElementById('spankmcuoi').innerHTML = (km - 19);
                document.getElementById('spankmsau').innerHTML = 18;
                document.getElementById('spankmdau').innerHTML = 1;
                document.getElementById('ttkmdau').innerHTML = 10000;
                document.getElementById('ttkmsau').innerHTML = 18 * 9500;
                document.getElementById('ttkmcuoi').innerHTML = parseFloat(km - 19) * 9000;
            }
            document.getElementById('spantgcho').innerHTML = tgcho;
            document.getElementById('phitgcho').innerHTML = '3500 (3 phút)';
            document.getElementById('kmdau').innerHTML = 10000;
            document.getElementById('kmsau').innerHTML = 9500;
            document.getElementById('kmcuoi').innerHTML = 9000;
            document.getElementById('spanttien').innerHTML = 'Tổng Tiền : ' + tien + ' ' + 'vnd';
        }
    }
    inhoadon(loaixe, tgcho, km);


}
document.getElementById('formhoadon').style.display = 'none';
document.getElementById('hoadon').addEventListener('click', function() {
    document.getElementById('formhoadon').style.display = 'block';
})