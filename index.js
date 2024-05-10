// Buttons Light-dark
const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const btnPortifolio = document.getElementById("btn-portifolio");
const btnSkills = document.getElementById("btn-skills");
const body = document.getElementById("body");
const containerButtons = document.getElementById("buttons-project");
const progressBars = document.querySelectorAll(".progress-bar");
const buttonHref = document.getElementById("button-download");

// Carregamento da Pagina

window.addEventListener("load", () => {
  document.getElementById("image-skills").classList.add("hidden");

  function adicionarEventosMouse(imagemId, botaoId, textId, backgroundId) {
    const imagem = document.getElementById(imagemId);
    const botao = document.getElementById(botaoId);
    const textImg = document.getElementById(textId);
    const background = document.getElementById(backgroundId);

    if (window.innerWidth >= 765) {
      imagem.addEventListener("mouseenter", () => {
        botao.classList.add("flex");
        botao.style.animation = "toUp 0.3s forwards";
        textImg.style.animation = "opacityIn 0.3s forwards";
        background.style.animation = "opacityIn 0.3s forwards";
      });

      imagem.addEventListener("mouseleave", () => {
        botao.style.animation = "toUpReverse 0.3s forwards";
        textImg.style.animation = "opacityOut 0.8s forwards";
        background.style.animation = "opacityOut 0.8s forwards";

        setTimeout(() => {
          botao.classList.remove("flex");
        }, 100);
      });
    } else {
      botao.classList.add("flex");
      textImg.style.opacity = "1";
      background.style.opacity = "0.8";
    }
  }

  adicionarEventosMouse("img-1", "button-1", "title-img-1", "background-gradient-1");

  adicionarEventosMouse("img-2", "button-2", "title-img-2", "background-gradient-2");

  adicionarEventosMouse("img-3", "button-3", "title-img-3", "background-gradient-3");

  adicionarEventosMouse("img-4", "button-4", "title-img-4", "background-gradient-4");

  adicionarEventosMouse("img-5", "button-5", "title-img-5", "background-gradient-5");

  adicionarEventosMouse("img-6", "button-6", "title-img-6", "background-gradient-6");
});

// Botão Dark

// Botão Dark
btnDark.addEventListener("click", () => {
  btnLight.classList.remove("hidden");
  btnDark.classList.add("hidden");
  body.classList.add("toWhite");
  body.classList.remove("toBlack");

  document.getElementById("title-header").style.color = "#3d3d3d";
  document.getElementById("profession").style.color = "#3d3d3d";
  document.getElementById("pessoal-description-1").style.color = "#3d3d3d";
  document.getElementById("pessoal-description-2").style.color = "#3d3d3d";
  document.getElementById("pessoal-description-3").style.color = "#3d3d3d";

  document.getElementById("number-description-1").style.color = "#3d3d3d";
  document.getElementById("number-description-2").style.color = "#3d3d3d";
  document.getElementById("number-description-3").style.color = "#3d3d3d";

  document.getElementById("footer").style.color = "#3d3d3dgir ";
});

// Botão Light

btnLight.addEventListener("click", () => {
  btnLight.classList.add("hidden");
  btnDark.classList.remove("hidden");
  body.classList.add("toBlack");
  body.classList.remove("toWhite");

  document.getElementById("title-header").style.color = "#e5e5e5";
  document.getElementById("profession").style.color = "#e5e5e5";
  document.getElementById("pessoal-description-1").style.color = "#e5e5e5";
  document.getElementById("pessoal-description-2").style.color = "#e5e5e5";
  document.getElementById("pessoal-description-3").style.color = "#e5e5e5";

  document.getElementById("number-description-1").style.color = "#e5e5e5";
  document.getElementById("number-description-2").style.color = "#e5e5e5";
  document.getElementById("number-description-3").style.color = "#e5e5e5";

  document.getElementById("footer").style.color = "#e5e5e5";
});

// Botão de Portifolio
btnPortifolio.addEventListener("click", () => {
  btnPortifolio.classList.add("active-btn");
  btnSkills.classList.remove("active-btn");
  document.getElementById("image-project").classList.remove("hidden");
  document.getElementById("image-skills").classList.add("hidden");
});

// Botão de Skill

btnSkills.addEventListener("click", () => {
  btnSkills.classList.add("active-btn");
  btnPortifolio.classList.remove("active-btn");
  document.getElementById("image-project").classList.add("hidden");
  document.getElementById("image-skills").classList.remove("hidden");
});

// Barra de Carregamento

progressBars.forEach((bar) => {
  const width = bar.getAttribute("data-width");
  bar.style.width = width;
});

// links

document.getElementById("git-link").addEventListener("click", () => {
  window.open("https://github.com/DevGabriel0402", "_blank");
});

document.getElementById("x-link").addEventListener("click", () => {
  window.open("https://twitter.com/gabriell_Lav", "_blank");
});

document.getElementById("linkedin-link").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/gabriel-lucas-vieira-2384212a4/", "_blank");
});

document.getElementById("youtube-link").addEventListener("click", () => {
  document.getElementById("soap-youtube").classList.remove("hidden");
  document.getElementById("soap-youtube").style.animation = "toDown 0.5s forwards";

  setTimeout(() => {
    document.getElementById("soap-youtube").style.animation = "toUpIn 0.5s forwards";
  }, 3000);
});

document.getElementById("button-download").addEventListener("click", () => {
  document.getElementById("btn-download-icon").classList.add("hidden");
  document.getElementById("button-download").style.border = "1px solid #f7d039";
  document.getElementById("icon-download").style.animation = "toLeft 0.7s forwards";
  document.getElementById("bar-download").style.animation = "download 4s forwards";
  document.querySelector(".bar-download").classList.remove("hidden");
  document.getElementById("button-download").style.backgroundColor = "#fff";
  console.log("tudo certo");

  setTimeout(() => {
    document.querySelector(".bar-download").classList.add("hidden");
    document.getElementById("bar-download").style.animation = "";
    document.getElementById("button-download").style.backgroundColor = "#f7d039";
    document.getElementById("btn-download-icon").classList.add("hidden");
    document.getElementById("btn-download-icon").classList.remove("hidden");

    if (window.innerWidth > 765) {
      window.open("./assets/Curriculo - Gabriel Lucas.pdf", "_blank");
    } else {
      const link = document.createElement("a");
      link.href = "./assets/Curriculo - Gabriel Lucas.pdf";
      link.download = link.href;
      link.click();
    }
  }, 4000);
});
