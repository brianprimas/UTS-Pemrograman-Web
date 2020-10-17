var pertanyaan = [];
pertanyaan[0] = "3 metode identifikasi pada javascript";
pertanyaan[1] = "Penggunaan metode identifikasi by ID";
pertanyaan[2] = "Kelebihan & Kekurangan metode identifikasi by ID";
pertanyaan[3] = "Penggunaan metode identifikasi by tag name";
pertanyaan[4] = "Kelebihan & Kekurangan metode identifikasi by tag name";
pertanyaan[5] = "Penggunaan metode identifikasi by class name";
pertanyaan[6] = "Kelebihan & Kekurangan metode identifikasi by class name";
pertanyaan[7] = "Harga standar untuk 1 porsi soto ayam dan pecel";
pertanyaan[8] = "Lokasi penjualan soto ayam dan pecel";

var jawaban = [];
jawaban[0] = "1. getElementsByTagName<br/>2. getElementById<br/>3. getElementsByClassName<br/>";
jawaban[1] = "Identifikasi by ID digunakan ketika kita ingin menampilkan element yang memiliki atribut ID yang spesifik.";
jawaban[2] = "<b>Kelebihan :</b> Dapat menampilkan ID element yang ingin di tampilkan</br><b>Kekurangan :</b> Id hanya dapat bekerja pada satu penandaan saja";
jawaban[3] = "Identifikasi by tag name digunakan ketika kita ingin menampilkan sebuah tag, Contoh kita ingin menampilkan tag HEAD, P, UL, dll.";
jawaban[4] = "<b>Kelebihan :</b> Dapat menampilkan sebuah tag yang lebih spesifik sebagai salah satu kata kunci satu halaman yang spesifik</br><b>Kekurangan :</b> tag hanya dapat bekerja pada satu penandaan saja";
jawaban[5] = "Identifikasi by class name digunakan ketika kita ingin menampilkan element yang memiliki atribut class yang spesifik.";
jawaban[6] = "<b>Kelebihan :</b> Dapat menampilkan class element yang ingin di tampilkan</br><b>Kekurangan :</b> Class hanya dapat bekerja pada satu penandaan saja";
jawaban[7] = "15 ribu soto dengan isian lengkap dan 10 ribu untuk 1 porsi pecel";
jawaban[8] = "Biasanya dijual di warung tegal, khususnya didaerah jawa";

$('#pertanyaanModal').on('show.bs.modal', function (event) {
  var index = $(event.relatedTarget).data('modal-index');
  setModalValue(index);
});

$('#pertanyaanModal').on('hidden.bs.modal', function () {
  toggleButton($("#modalNavigation button.btn-dark"));
});

function setModalValue(index) {
  toggleButton(modalNavigationButton.eq(index));
  $('.modal-body h2').html(pertanyaan[index]);
  $('.modal-body p').html(jawaban[index]);
};

var modalNavigationButton = $("#modalNavigation button");

modalNavigationButton.click(function () {
  toggleButton($("#modalNavigation button.btn-dark"));
  var index = $(this).text();
  setModalValue(index - 1);
});

function toggleButton(button) {
  button.toggleClass("btn-light").toggleClass("btn-dark");
};

var colors = ["#c4d0d9", "#7f8084", "#d7d8da", "#afb2b7", "#d1d9dc", "#9d9c9a", "#72747a"];

$(".img-fluid").each(function (index) {
  if (index > 6) index -= 7;
  $(this).css("background-color", colors[index])
});
