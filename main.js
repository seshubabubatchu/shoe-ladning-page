console.log("script linked");
//carousel
const slidewidth = document.querySelector(".slide img").clientWidth + 10;
let counter = 0;
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");
const slide = document.querySelector(".slide");
const imagecount = document.querySelectorAll(".slide img").length;
nextbtn.addEventListener("click", () => {
  if (counter >= imagecount - 1) return;
  counter++;
  slide.style.transform = "translateX(" + -slidewidth * counter + "px)";
});
prevbtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slide.style.transform = "translateX(" + -slidewidth * counter + "px)";
});
//add to cart
window.onload = function () {
  let value = 0;
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  plus.addEventListener("click", () => {
    if (value > 10) return;
    value++;
    document.querySelector(".value").value = `${value}`;
  });
  minus.addEventListener("click", () => {
    if (value <= 0) return;
    value--;
    document.querySelector(".value").value = `${value}`;
  });
};
//onclick preview image change
const imagesarray = document.querySelectorAll(".imagepreview img");
const mainimgarray = document.querySelectorAll(".imageslist img");
imagesarray.forEach((imgele) => {
  imgele.addEventListener("click", () => {
    mainimgarray.forEach((imgele) => {
      imgele.style.zIndex = "0";
    });
    imagesarray.forEach((imagele) => {
      imagele.style.border = "none";
      imagele.style.opacity = "1";
    });
    document.querySelector(`.imageslist #${imgele.id}`).style.zIndex = "1";
    document.querySelector(`.imagepreview #${imgele.id}`).style.border =
      "2px solid hsl(26, 100%, 55%)";
    document.querySelector(`.imagepreview #${imgele.id}`).style.opacity = "0.6";
  });
});
//slidenavbar
const hamburger = document.querySelector(".hamburger");
const slidenav = document.querySelector(".navcollapse");
const closebtn = document.querySelector(".closebtn");
hamburger.addEventListener("click", () => {
  slidenav.style.transform = "translateX(0%)";
});
closebtn.addEventListener("click", () => {
  slidenav.style.transform = "translateX(-100%)";
});
