const $ = document.getElementById.bind(document);
function handleSubmit() {
    var ten = $('ho-ten').value;
    var tieude = $('tieu-de').value;
    var email = $('email').value;
    var noidung = $('noi-dung').value;
    alert(
        "Họ và tên: " + ten + "\n" +
        "Email: " + email + "\n" +
        "Tiêu đề: " + tieude + "\n" +
        "Nội dung: " + noidung + "\n" 
    )
}