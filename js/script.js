import skills from "./data/skills.js";

$(document).ready(function () {
  $("#to-top-text").fadeOut();
  $("#to-top").fadeOut();

  let nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      $("#to-top").fadeOut();
      nav.style.boxShadow = "";
    } else {
      $("#to-top").fadeIn();
      nav.style.boxShadow = "0 10px 6px -6px #777";
    }
  });

  const cta = $("#cta-learn-more");
  cta.on("mouseover", () => {
    cta.addClass("cta-hover");
  });
  cta.on("mouseout", () => {
    cta.removeClass("cta-hover");
  });
  setInterval(() => {
    if (!cta.hasClass("cta-hover")) {
      setTimeout(() => {
        cta.addClass("cta-active");
      }, 0);
      setTimeout(() => {
        cta.removeClass("cta-active");
      }, 200);
      setTimeout(() => {
        cta.addClass("cta-active");
      }, 400);
      setTimeout(() => {
        cta.removeClass("cta-active");
      }, 600);
    }
  }, 7000);

  const progressBarArea = $(".progress-bar-area");
  skills.forEach((skill) => {
    progressBarArea.append(`<p class="skill">${skill.name}</p>`);
    progressBarArea.append(`<div class="progress skill-progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0"
    aria-valuemax="100">
    <div title="${skill.progress}%" class="progress-bar progress-bar-striped progress-bar-animated ${skill.colorClass}" style="width: ${skill.progress}%">
    </div>
</div>`);
  });

  const progressBars = Array.from($(".skill-progress"));
  const progress = Array.from($(".progress-bar-striped"));
  progress.forEach((progressItem) => {
    $(progressItem).on("mouseover", () => {
      $(progressItem).addClass("progress-hover");
    });
    $(progressItem).on("mouseout", () => {
      $(progressItem).removeClass("progress-hover");
    });
  });

  progressBars.forEach((progressBar, index) => {
    const progress = $(progressBar).children()[0];
    $(progressBar).on("mouseover", () => {
      $(progress).css("width", "100%");
    });
    $(progressBar).on("mouseout", () => {
      $(progress).css("width", `${skills[index].progress}%`);
    });
  });

  $("#to-top").on("mouseover", () => {
    $("#to-top-text").show();
  });

  $("#to-top").on("mouseout", () => {
    $("#to-top-text").hide();
    
  });
});
