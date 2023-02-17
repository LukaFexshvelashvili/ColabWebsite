// Made By Luka Fexshvelashvili :)

// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================

function Modern_Scroll(div, elem, classremove, delaytime) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.5) {
      setTimeout(() => {
        elem.removeClass(classremove);
      }, delaytime);
    }
  });
}
function Modern_ScrollList(div, elem, delaytime, ...classremove) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.5) {
      setTimeout(() => {
        classremove.forEach((classnames) => {
          elem.removeClass(classnames);
        });
      }, delaytime);
    }
  });
}

function Modern_ScrollDelay(div, elem, delaytime, delaylist, classremove) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.5) {
      setTimeout(() => {
        time = delaylist;
        $(elem).each(function () {
          setTimeout(() => {
            $(this).removeClass(classremove);
          }, time);
          time += delaylist;
        });
      }, delaytime);
    }
  });
}

// SMALL SCROLL ONLY =====================================================================================================================================
// SMALL SCROLL ONLY =====================================================================================================================================
// SMALL SCROLL ONLY =====================================================================================================================================
// SMALL SCROLL ONLY =====================================================================================================================================
// SMALL SCROLL ONLY =====================================================================================================================================

function ModernSm_Scroll(div, elem, classremove, delaytime) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.2) {
      setTimeout(() => {
        elem.removeClass(classremove);
      }, delaytime);
    }
  });
}
function ModernSm_ScrollList(div, elem, delaytime, ...classremove) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.2) {
      setTimeout(() => {
        classremove.forEach((classnames) => {
          elem.removeClass(classnames);
        });
      }, delaytime);
    }
  });
}

function ModernSm_ScrollDelay(div, elem, delaytime, delaylist, classremove) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= div.position().top - window.innerHeight / 1.2) {
      setTimeout(() => {
        time = delaylist;
        $(elem).each(function () {
          setTimeout(() => {
            $(this).removeClass(classremove);
          }, time);
          time += delaylist;
        });
      }, delaytime);
    }
  });
}

// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================

function Modern_ScrollLoad(elem, classremove, delaytime) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      elem.removeClass(classremove);
    }, delaytime);
  });
}

function Modern_ScrollListLoad(elem, delaytime, ...classremove) {
  setTimeout(() => {
    classremove.forEach((classnames) => {
      elem.removeClass(classnames);
    });
  }, delaytime);
}

// Made By Luka Fexshvelashvili :)
