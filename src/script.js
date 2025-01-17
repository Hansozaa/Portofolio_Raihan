// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["RAIHAN SAPUTRA", "D 1 A 2 4 0 0 6 8", "MANUSIA BIASA"];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = [
    "Project-Project Ini Merupakan Dokumentasi Tugas Saya Dari Pertemuan Pertama Sampai Sekarang.",
  ];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText1");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Berisi Foto-Foto Saya Sendiri"];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText2");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = [
    "PERSIB BANDUNG",
    "EVOS ESPORTS",
    "TIMNAS INDONESIA",
    "BORUSIA DORTMUND",
  ];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText3");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = [
    "Blog Terkini Yang Dapat Membantu Pemula Seperti Saya Untuk Belajar Desain Web Mengenai Tailwind dan Bootstrap",
  ];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText4");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = [
    "Mohon Maaf Jika Ada Kesalahan Ataupun Kekurangan Dari Saya, Saya Siap Menerima Kritik Dan Saran Dari Teman-Teman.",
  ];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText5");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
//Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//Pindahkan posisi toggle sesuai mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Web Develover", "Web Designer", "Web Author"];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText8");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Berisi Mengenai Profil Saya"];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText10");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = [
    " Nama saya Raihan Saputra, Saya adalah mahasiswa Semester 1 Sistem Informasi, Fakultas Ilmu Komputer, Kelas 1C. Alamat saya ada di Cibaraola, Soklat, Subang.",
  ];
  let index = 0;
  let textIndex = 0;
  const rotateText = document.getElementById("rotateText9");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotateText.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotateText.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
