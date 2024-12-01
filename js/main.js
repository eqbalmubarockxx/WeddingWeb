// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end

// waktu start
const countDownDate = new Date("december 8, 2024 09:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end


// modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
// Fungsi untuk mendapatkan nama dari parameter URL
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

// Mendapatkan nama singkat dari parameter "to"
var to = GetURLParameter("to");

// Peta nama singkat ke nama lengkap
var nameMapping = {
  "kuden": "Kuden",
  "herlan": "Herlan",
  "squad": "Squad Penurun Bintang",
  "mts": "Alumni Mts. Alrohmah",
  "Ilyas": "Ilyas",
  "Ahmad": "Ahmad Rifa'i",
  "Tryana": "Tryana",
  "RinRin": "Rin Rin Nursyamsiyah",
  "Ihsan": "Ihsan",
  "Rafli": "Rafli",
  "Rifki": "Rifki",
  "Dendi": "Dendi",
  "Hasan": "Hasan",
  "Neng-Tya": "Neng Tya",
    "Cecep": "Cecep",
    "Endang": "Endang",
    "Ilham": "Ilham",
    "Okta": "Okta",
    "Rosid": "Rosid",
    "Irvani": "Irvani",
    "Gilang": "Gilang",
    "Meri": "Meri Hermawan",
    "Indra": "Indra",
    "Erik": "Erik",
    "Rio": "Rio",
    "Alif": "Alif",
    "Nanan": "Nanan",
    "Ramdan": "Ramdan",
    "Candra": "Candra Saputra",
    "Anggi": "Anggi Kusmawan",
    "Sandi": "Sandi Muhammad",
    "Fuji": "Fuji Fauziah",
    "Bibin": "Bibin",
    "Anwar": "Anwar",
    "Rizma": "Rizma",
    "Agung": "Agung Rinaldi",
    "Ikba": "Ikba",
    "Dika": "Dika",
    "Nurul": "Nurul",
    "Yani": "Yani",
    "Acum": "Acum",
    "Epeng": "Epeng",
    "Asikin": "Asikin",
    "Ikbal": "Ikbal",
    "Robi": "Robi",
  "Bayu": "Bayu",
  "Hilmi": "Hilmi",
  "rizal": "Rizal Kurniawan"
};


// Menampilkan nama lengkap berdasarkan parameter
document.getElementById("nama").innerHTML = nameMapping[to] || "-";


// Ambil nama dari path URL dan tampilkan
var name = GetNameFromPath();
document.getElementById("nama").innerHTML = capitalizeFirstLetter(name);

// Fungsi untuk membuat huruf pertama menjadi huruf kapital
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// hover blur effect
$('.blur').mouseenter(function () {
  $('.blur').css('filter', 'blur(5px)'); // Blurs each .blur div
  $(this).css('filter', 'blur(0px)');    // Removes blur from the currently hovered .blur div
})
$('.blur').mouseleave(function () {
  $('.blur').css('filter', 'blur(0px)'); // Removes blur from all when none are hovered
})

// undngan end

function submitRSVP(event) {
  event.preventDefault(); // Prevent page from refreshing

  // Get values from form
  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  // Create a new message item
  const messageItem = document.createElement("div");
  messageItem.classList.add("message-item");
  messageItem.innerHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Konfirmasi:</strong> ${attendance}</p>
    <p><strong>Jumlah Orang:</strong> ${guests}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  // Add the new message to the messages list
  document.getElementById("messagesList").appendChild(messageItem);

  // Clear form fields
  document.getElementById("rsvpForm").reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      backdrop: 'static',
      keyboard: false,
  });
  modal.show();
});

function playAudio() {
  const audio = document.getElementById('lagu');
  if (audio) {
      audio.play();
  }
}


const form = document.getElementById('formUcapan');
const ucapanContainer = document.getElementById('ucapanContainer');

// URL Web App untuk mengirim data
const scriptURL = 'https://script.google.com/macros/s/AKfycbyG4l09rKVbbJAGIn1SP_vtjjDnBGuPFuH_6fYW_ua2Axbd3BFohrjwZgLx06Li9aXb/exec';

// URL untuk membaca data dari Google Sheets
const sheetURL = 'https://docs.google.com/spreadsheets/d/1gxaYRRsayiJ-wCvtYR5kwRPMtw8RjryXKOmD8DdItD4/gviz/tq?tqx=out:json';

// Fungsi untuk mengambil data dari Google Sheets dan menampilkannya
async function fetchUcapan() {
  try {
    const response = await fetch(sheetURL);
    const text = await response.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    // Kosongkan container sebelum menampilkan data baru
    ucapanContainer.innerHTML = '';

    // Tampilkan ucapan yang sudah ada
    rows.forEach(row => {
      const [nama, ucapan, konfirmasi] = row.c;
      ucapanContainer.innerHTML += `
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">${nama?.v || 'Tidak Diketahui'}</h5>
            <p class="card-text">${ucapan?.v || '-'}</p>
            <small class="text-muted">${konfirmasi?.v || '-'}</small>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    ucapanContainer.innerHTML = '<p class="text-danger">Gagal memuat ucapan. Silakan coba lagi nanti.</p>';
  }
}

// Fungsi untuk mengirim data ke Google Sheets
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log('Mengirim data:', data); // Cek data yang akan dikirim

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Response:', response); // Cek response dari server

    if (response.ok) {
      form.reset(); // Reset form setelah berhasil
      fetchUcapan(); // Perbarui daftar ucapan
      alert('Ucapan berhasil dikirim!');
    } else {
      alert('Gagal mengirim ucapan. Coba lagi.');
    }
  } catch (error) {
    console.error('Error sending data:', error);
    alert('Terjadi kesalahan. Coba lagi.');
  }
});

// Muat daftar ucapan saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchUcapan);
