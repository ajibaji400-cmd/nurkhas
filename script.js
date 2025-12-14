const form = document.getElementById("formAbsen");
const nama = document.getElementById("nama");
const status = document.getElementById("status");
const dataAbsen = document.getElementById("dataAbsen");
const hapus = document.getElementById("hapus");

let absensi = JSON.parse(localStorage.getItem("absensi")) || [];

function tampilkanData() {
  dataAbsen.innerHTML = "";
  absensi.forEach((item, index) => {
    dataAbsen.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.status}</td>
        <td>${item.tanggal}</td>
      </tr>
    `;
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  absensi.push({
    nama: nama.value,
    status: status.value,
    tanggal: new Date().toLocaleDateString()
  });

  localStorage.setItem("absensi", JSON.stringify(absensi));
  nama.value = "";
  tampilkanData();
});

hapus.addEventListener("click", () => {
  if (confirm("Hapus semua data absensi?")) {
    localStorage.clear();
    absensi = [];
    tampilkanData();
  }
});

tampilkanData();
