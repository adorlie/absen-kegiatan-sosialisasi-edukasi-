const PASSWORD = "adorlie";

function login() {
    const nama = document.getElementById("namaSiswa").value;
    const password = document.getElementById("password").value;
    const foto = document.getElementById("fotoSiswa").files[0];

    if (nama === "" || password === "" || !foto) {
        alert("Semua data wajib diisi!");
        return;
    }

    if (password !== PASSWORD) {
        alert("Password salah!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("tampilNama").innerText = "Nama: " + nama;
        document.getElementById("tampilFoto").src = reader.result;

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    };
    reader.readAsDataURL(foto);
}

function logout() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("logoutPage").style.display = "flex";
}

function kembaliLogin() {
    document.getElementById("logoutPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
}
