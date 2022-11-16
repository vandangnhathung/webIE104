function isShow (){
    var show = document.getElementById('password');
    confirm("Bạn muốn hiện mật khẩu")?show.type='text':show.type='password';
}