document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");

  const bubble = document.createElement("div");
  bubble.innerHTML = `<div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>`;
  mainElement.prepend(bubble);
 
  const documentHeight = document.documentElement.scrollHeight / 2;
  console.log(documentHeight);

  const sheet = Array.from(document.styleSheets).filter((styleSheet) =>
    styleSheet.href.endsWith("bubble.css")
  );
  const rule = `
    @keyframes animateBubble {
        0% {
        margin-top: ${documentHeight}px;
        }
        100% {
            margin-top: -100%;
        }
    }`;
  sheet[0].insertRule(rule);
});
