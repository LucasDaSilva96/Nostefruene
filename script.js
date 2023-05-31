"use strict";

// ************************** Nav-bar ************************************
const hero_Section = document.querySelector(".hero-section");
const nav_ul = document.querySelector(".nav-ul");
const nav_list_btn = document.querySelector(".menu-open");
const nav_list_close_btn = document.querySelector(".meny-btn-x");
const nav_ul_li = document.querySelectorAll(".nav-a");

const company_logo = document
  .querySelector(".logo")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (nav_ul.classList.contains("display-class-list")) {
      nav_ul.classList.remove("display-class-list");
      nav_list_btn.classList.toggle("display-class");
      nav_list_close_btn.classList.toggle("display-class");
    }
    hero_Section.scrollIntoView();
  });

nav_list_btn.addEventListener("click", function (e) {
  e.preventDefault();
  nav_ul.style.display = "visible";
  nav_ul.classList.toggle("display-class-list");
  nav_list_close_btn.classList.toggle("display-class");
  nav_list_btn.classList.toggle("display-class");
});

nav_list_close_btn.addEventListener("click", function (e) {
  e.preventDefault();

  nav_ul.classList.toggle("display-class-list");
  nav_list_close_btn.classList.toggle("display-class");
  nav_list_btn.classList.toggle("display-class");
});

nav_ul_li.forEach((el) => {
  el.addEventListener("click", function () {
    if (nav_ul.classList.contains("display-class-list")) {
      nav_ul.classList.remove("display-class-list");
      nav_list_btn.classList.toggle("display-class");
      nav_list_close_btn.classList.toggle("display-class");
    }
  });
});

//---------------------------- Hero-Section ------------------------------------------
const hero_shop_btn = document.querySelector(".shop-btn");
const hero_inspirasjon_btn = document.querySelector(".inspirert-btn");
const shop_section = document.getElementById("shop-section");
const inspirasjon_section = document.getElementById("inspirasjon-sec");

const hero_img = document.querySelector(".hero-img");

// Lazy-load Hero img
document.addEventListener("DOMContentLoaded", function () {
  let lazyLoadImg;
  if (IntersectionObserver in window) {
    lazyLoadImg = hero_img;
    let imgObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let image = entry.target;
          image.src = lazyLoadImg.src;
          imgObserver.unobserve(image);
        }
      });
    });
  }
});
// *************************************************
hero_img.addEventListener("mouseover", function () {
  hero_img.src = "Nostefruene/img/Butikinsida.jpg";
});

hero_img.addEventListener("mouseout", function () {
  hero_img.src = "Nostefruene/img/heroimg.png";
});

hero_shop_btn.addEventListener("click", function () {
  shop_section.scrollIntoView();
});

hero_inspirasjon_btn.addEventListener("click", function () {
  inspirasjon_section.scrollIntoView();
});

//----------------------------- Slider - inpirasjon Section -------------------------------

const inspo_box = [
  {
    image: "Nostefruene/img/varor1.jpg",
    text: `Nydelig topp, som er strikket ovenfra og ned. Den strikkes i en
tråd Arwetta, og en tråd Tilia, begge fra Filcolana, dobbel
Tilia øverst på mønster.`,
    href: `https://www.garnstudio.com/pattern.php?id=9727&cid=3`,
  },
  {
    image: "Nostefruene/img/varor6.jpg",
    text: `Strikket i Tynn Silk Mohair og Sunday fra Sandnes Garn. Vi har oppskrift og garn. Kombinasjonen av Sunday og Tynn Silk Mohair er veldig god og gir nydelige plagg.`,
    href: `https://www.garnstudio.com/pattern.php?id=7645&cid=3`,
  },
  {
    image: "Nostefruene/img/varor9.jpg",
    text: ` Lett og god. Strikket i Alpakka Lin fra Rauma Garn.
  En herlig kjappstrikket genser
  Vi har garn og oppskrift I butikken.`,
    href: `https://www.garnstudio.com/pattern.php?id=11024&cid=3`,
  },
  {
    image: "Nostefruene/img/varor2.jpg",
    text: `Til denne vesken har vi brukt 3 nøster Tynn Line fra Sandnes
Garn. Strikkes fra bunnen og opp.`,
    href: `https://www.garnstudio.com/pattern.php?id=11229&cid=3`,
  },
  {
    image: "Nostefruene/img/varor4.jpg",
    text: `Design Petite Knit, Strikket i Smart fra Sandnes Garn. Kjempemorsomt mønster å strikke. Ingrn montering annet enn noen tråder å feste.`,
    href: `https://www.garnstudio.com/pattern.php?id=10828&cid=3`,
  },
  {
    image: "Nostefruene/img/varor7.jpg",
    text: `Lacetopp strikket i Tynn Line fra Sandnes Garn. Kjempefin synes vi
  Ballongcardigan, oppskrift fra PetiteKnit. Strikket i Tilia og Arwetta fra Filcolana.`,
    href: `https://www.garnstudio.com/pattern.php?id=10253&cid=3`,
  },
  {
    image: "Nostefruene/img/varor3.jpg",
    text: `Badger and Bloom strikkes ovenfra og ned, denne er strikket i
pløtulopi. Deilig høstgenser og morsom å strikke.`,
    href: `https://www.garnstudio.com/pattern.php?id=11210&cid=3`,
  },
  {
    image: "Nostefruene/img/varor5.jpg",
    text: `Genseren heter Oder. Kom innom så hjelper vi deg med garn og oppskrift.`,
    href: `https://www.garnstudio.com/pattern.php?id=10418&cid=3`,
  },
  {
    image: "Nostefruene/img/varor8.jpg",
    text: `Denne er enkel å strikke, og oppskrift på denne får du til både barn og voksen. Strikket i Line fra Sandnes Garn.
  Vi har oppskrifta til denne og mange flere modeller i Line.`,
    href: `https://www.garnstudio.com/pattern.php?id=10313&cid=3`,
  },
];

// Left and right slide-btn (Inspirasjon-Section)
const left_btn = document.querySelector(".scroll-left");
const right_btn = document.querySelector(".scroll-right");

const inspo_box_divs = document.querySelector(".inspo-boxes-div");

// counter to get the img and text from the inspo-box arrays
let counter_box = 3;

// Right-btn Click
right_btn.addEventListener("click", function (e) {
  e.preventDefault();
  counter_box++;
  if (counter_box >= inspo_box.length) counter_box = 0;
  inspo_box_divs.firstElementChild.remove();
  // console.log(counter_box);
  let html = document.createElement("div");

  html.innerHTML = ` <div class="inspirasjon-box inspo-box-1">
  <!-- IMG -->
  <div class="inspirasjon-img-box">
    <img
      class="inspo-box-img img_1"
      src=${inspo_box[counter_box].image}
      alt="picture of a handmade white top, made with yarn"
      width="234"
      height="269"
    />
  </div>
  <!-- TEXT -->
  <div class="inspirasjon-text-box">
    <p class="inspo-text-box-1">
      ${inspo_box[counter_box].text}
    </p>
  </div>
  <!-- BTN -->
  <div class="inspirasjon-btn-box">
    <a
      target="_blank"
      class="strikkeoppskrift-btn inspo-href-box-1"
      href=${inspo_box[counter_box].href}
      >Strikkeoppskrift</a
    >
  </div>
</div>`;

  inspo_box_divs.insertAdjacentElement("beforeend", html);
});

// Left-btn Click
left_btn.addEventListener("click", function (e) {
  e.preventDefault();
  counter_box--;
  if (counter_box < 0) counter_box = inspo_box.length - 1;
  // console.log(counter_box);
  inspo_box_divs.lastElementChild.remove();

  let html = document.createElement("div");

  html.innerHTML = ` <div class="inspirasjon-box inspo-box-1">
  <!-- IMG -->
  <div class="inspirasjon-img-box">
    <img
      class="inspo-box-img img_1"
      src=${inspo_box[counter_box].image}
      alt="picture of a handmade white top, made with yarn"
      width="234"
      height="269"
    />
  </div>
  <!-- TEXT -->
  <div class="inspirasjon-text-box">
    <p class="inspo-text-box-1">
      ${inspo_box[counter_box].text}
    </p>
  </div>
  <!-- BTN -->
  <div class="inspirasjon-btn-box">
    <a
      target="_blank"
      class="strikkeoppskrift-btn inspo-href-box-1"
      href=${inspo_box[counter_box].href}
      >Strikkeoppskrift</a
    >
  </div>
</div>`;

  inspo_box_divs.insertAdjacentElement("afterbegin", html);
});

// ----------------------------- Shop - Section ----------------------------------------

const buy_btn = document.querySelectorAll(".add-to-cart-btn");
const plus_symbol = document.querySelectorAll(".plus-symbol");
const minus_symbol = document.querySelectorAll(".minus-symbol");
let amount_of_article_nr = document.querySelectorAll(".shop-article-amount");

// Array to keep track of tha wanted amount of articles, and the start-value is always 1.
let amount_of_article_nr_counter = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const scroll_left_shop = document.querySelector(".scroll-left-shop");
const scroll_right_shop = document.querySelector(".right-arrow-link-shop");

const shop_divs = [...document.querySelectorAll(".shop-box-container")];

// Loop between shop-box-divs and toggle the classList close
scroll_right_shop.addEventListener("click", function (e) {
  e.preventDefault();
  shop_divs.forEach((el, i) => {
    el.classList.toggle("close");
  });
});

scroll_left_shop.addEventListener("click", function (e) {
  e.preventDefault();
  shop_divs.forEach((el, i) => {
    el.classList.toggle("close");
  });
});

// Loop through every plus/minus-btn and the amount of article input, And updated the nr of
// articles depending on which btn is pressed (BUT the nr of articles cannot be less then 1)

plus_symbol.forEach((el, i) => {
  el.addEventListener("click", function () {
    amount_of_article_nr_counter[i]++;
    el.previousElementSibling.value = amount_of_article_nr_counter[i];
  });
});

minus_symbol.forEach((el, i) => {
  el.addEventListener("click", function () {
    if (amount_of_article_nr_counter[i] > 1) {
      amount_of_article_nr_counter[i]--;
      el.nextElementSibling.value = amount_of_article_nr_counter[i];
    } else {
      amount_of_article_nr_counter[i] = 1;
      el.nextElementSibling.value = amount_of_article_nr_counter[i];
    }
  });
});

// ------------------------------- Strikkebloggen-Section ---------------------------

const blog_boxex_1 = [
  {
    img_src: "Nostefruene/img/exempel1.jpg",
    text: `🌞FYRVOKTERGENSER 🌞Knut kom innom butikken før påske og
  plukket ut garn og mønster til sin genser🙂Ingen
  statsforvaltergenser denne gang,men en fyrvoktergenser⭐️Gry
  Bodil tok på seg enda ett oppdrag og strikket denne nydelige
  genseren i Rauma finull.😍Et herlig garn til gensere og
  kofter👍🧶Knut ble kjempefin i sin genser og veldig fornøyd!🤩`,
  },
  {
    img_src: "Nostefruene/img/welcomepic.jpg",
    text: `Martensstemning hos Nøstefruene i dag også 😊 masse gode
  tilbud 😊`,
  },
  {
    img_src: "Nostefruene/img/strikkekvel2.jpg",
    text: `Kjempekoselig kveld hos Nøstefruene ✨️Tusen takk for besøket
    til Ladies Circle Elverum 🌸`,
  },
  {
    img_src: "Nostefruene/img/Butikname.jpg",
    text: `Se så fine gavekort vi har fått i butikken! Den perfekte gave
    til den kreative 🥰`,
  },
];

const blog_boxex_2 = [
  {
    img_src: "Nostefruene/img/exempel3.jpg",
    text: `På flyttefot 🌺Da har vi startet flytteprosessen, vi regner med at vi åpner i Storgata 15, rett før neste helg 👌🧶`,
  },
  {
    img_src: "Nostefruene/img/exempel5png.jpg",
    text: `Tusen takk til alle som gjorde strikkekvelden hos Nøstefruene helt fantastisk koselig 🧡 🌷
    Neste strikkekveld er første tirsdag i mars. 🌺`,
  },
  {
    img_src: "Nostefruene/img/exempel4.jpg",
    text: `Første torsdag i måneden lar vi strikkepinnene klirre og skravla. Koselig om du stikker innom oss for strikkeskravling mellom 18-21 i morgen. Det blir som vanlig lotteri 😊`,
  },
  {
    img_src: "Nostefruene/img/exempel6.jpg",
    text: `Takk til alle som møtte opp på strikkekveld hos oss i kveld 🥰Vi har hatt en superfin kveld med god stemning, strikkeprat og påskekos. Vi har flotte kunder altså!`,
  },
];

const left_blog_btn = document.querySelector(".left-btn-link");
const right_blog_btn = document.querySelector(".right-btn-link");

const blog_divs = document.querySelectorAll(".blogg-box");

right_blog_btn.addEventListener("click", function (e) {
  e.preventDefault();
  blog_divs.forEach((el, i) => {
    el.children[0].children[0].attributes[1].value = blog_boxex_2[i].img_src;
    el.children[1].children[0].textContent = blog_boxex_2[i].text;
  });
});

left_blog_btn.addEventListener("click", function (e) {
  e.preventDefault();
  blog_divs.forEach((el, i) => {
    el.children[0].children[0].attributes[1].value = blog_boxex_1[i].img_src;
    el.children[1].children[0].textContent = blog_boxex_1[i].text;
  });
});

// ----------------------------------- Footer-Section -------------------------------------

// Update the year automatic with js
const all_rights_reserved_year = document.getElementsByClassName("year");

const date = new Date();

let year = date.getFullYear();

all_rights_reserved_year[0].textContent = year;
