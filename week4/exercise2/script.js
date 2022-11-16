function send() {
  const arr = document.getElementsByTagName("input");
  const select = document.getElementsByTagName("select");
  const textarea = document.getElementsByTagName("textarea");
  let name = arr[0].value;
  let cardNum = arr[1].value;
  let phone = arr[2].value;
  let email = arr[3].value;
  let numBill = arr[4].value;
  const type = select[0].value;
  const content = textarea[0].value;
  alert(
    "Họ và tên: " +
      name +
      "\n" +
      "Mã thẻ: " +
      cardNum +
      "\n" +
      "Số điện thoại: " +
      phone +
      "Email: " +
      email +
      "\n" +
      "Loại khách hàng: " +
      type +
      "\n" +
      "Mã hóa đơn: " +
      numBill +
      "\n" +
      "Nội dung: " +
      content
  );
}
