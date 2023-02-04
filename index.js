const formRegistrasi = document.getElementById("form-registrasi");
const dataPendaftar = [];

formRegistrasi.addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangSangu = parseInt(document.getElementById("uang-sangu").value);

  if (nama.length < 10) {
    alert("Nama minimal 10 karakter");
    return;
  }

  if (umur < 25) {
    alert("Umur minimal 25 tahun");
    return;
  }

  if (uangSangu < 100000 || uangSangu > 1000000) {
    alert("Uang sangu harus antara 100 ribu hingga 1 juta");
return;
}

const pendaftarBaru = { nama, umur, uangSangu };
dataPendaftar.push(pendaftarBaru);

const tabelPendaftar = document.getElementById("tabel-pendaftar");
const dataPendaftarEl = document.getElementById("data-pendaftar");

let content = "";
for (let i = 0; i < dataPendaftar.length; i++) {
content += `<tr>
  <td>${i + 1}</td>
  <td>${dataPendaftar[i].nama}</td>
  <td>${dataPendaftar[i].umur}</td>
  <td>${dataPendaftar[i].uangSangu}</td>
</tr>`;
}
dataPendaftarEl.innerHTML = content;

        
        let totalUmur = 0;
        let totalUangSangu = 0;
        for (let i = 0; i < dataPendaftar.length; i++) {
          totalUmur += dataPendaftar[i].umur;
          totalUangSangu += dataPendaftar[i].uangSangu;
        }
        const rataRataUmur = totalUmur / dataPendaftar.length;
        const rataRataUangSangu = totalUangSangu / dataPendaftar.length;

      
        const tabelRataRata = document.getElementById("tabel-rata-rata");
        const dataRataRata = document.getElementById("data-rata-rata");

        dataRataRata.innerHTML = `
<tr>
  <td>${rataRataUmur}</td>
  <td>${rataRataUangSangu}</td>
</tr>
`;
      });