let start = 0;

otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  console.log(sliders);
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  start++;

  setTimeout(otomatis, 3000);
}

const regex = /^[0-9]+$/;
const input = "12345";

function validation() {
  if (document.formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Masukan Nama Lengkap";
    return false;
  } else if (document.formfill.Username.value.length < 5) {
    document.getElementById("result").innerHTML = "Kurang Lengkap";
    return false;
  } else if (document.formfill.email.value == "") {
    document.getElementById("result").innerHTML = "Masukan Email";
    return false;
  } else if (document.formfill.number.value == "") {
    document.getElementById("result").innerHTML = "Masukan Nomor";
    return false;
  } else if (!regex.test(document.formfill.number.value)) {
    document.getElementById("result").innerHTML = "Nomor harus berupa Angka";
    return false;
  } else alert("Submit Sukses");
}
