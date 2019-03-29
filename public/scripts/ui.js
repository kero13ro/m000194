"use strict";

var $window = $(window);
var wW = $(window).width();
var wH = $(window).height();
var esc = $.Event("keydown", { keyCode: 27 });

$(function () {

  if (document.querySelector(".index__landing") !== null) {

    //index card hover toggle 
    var cards = $(".index__catalog").find(".card");
    var toggle_hieght = wW >= 768 ? { height: "242px" } : { height: "180px" };
    var card_tl_array = [];
    var app_ad = $(".app_ad");

    cards.each(function (i) {

      var card = $(this);
      var toggle = $(this).find(".toggle");
      var toggle_btn = $(this).find(".btn");

      var tl_card = new TimelineLite({ paused: true, reversed: true, yoyo: true }).to([card, toggle], 0.2, { "backgroundColor": "#fdecda" }).to(toggle, 0.2, toggle_hieght, 0).to(toggle_btn, 0.3, { autoAlpha: 1 }, "-=0.1");

      card_tl_array.push(tl_card);
      if (wW > 768) {
        $(this).hover(function () {
          tl_card.play();
        }, function () {
          tl_card.reverse();
        });
      } else {
        $(this).click(function () {
          if (tl_card.reversed()) {
            card_tl_array.forEach(function (tl) {
              tl.reversed() ? "" : tl.reverse();
            });
            tl_card.play();
            app_ad.addClass("noClick");
          } else {
            tl_card.reverse();
            app_ad.removeClass("noClick");
          }
        });
        app_ad.parent(".container").click(function () {
          app_ad.removeClass("noClick");
        });
      }
    });

    //index card filtered location
    var filter_btn = $(".index__filter").find(".btn");

    filter_btn.each(function () {
      $(this).click(function () {
        filter_btn.removeClass("active");
        $(this).addClass("active");

        var parent_district = $(this).attr("data-location");
        $(".card-wrapper .card").each(function () {
          if (parent_district == $(this).attr("data-district")) {
            $(this).fadeIn();
          } else {
            $(this).hide();
          }
        });
      });
    });
  }

  if (document.querySelector(".index__landing") !== null && wW >= 1100) {
    var nav__logo = $(".nav__logo");
    var nav__btn = $(".nav__cover a");

    nav__logo.addClass("logo_gradiant");
    var tl_nav = new TimelineLite().from('#nullObject', 0.3, {}).call(function () {
      nav__logo.addClass("show");
    }).from('#nullObject', 0.6, {}).staggerFrom(nav__btn, 0.8, { autoAlpha: 0, ease: Power0.easeNone }, 0.15);
  }

  if (document.querySelector(".index__landing") !== null && wW >= 768) {

    //index landing svg animation
    var flow = $(".flow ");
    var tl_option = { paused: true, onComplete: function onComplete() {
        this.pause(0);
      } };
    var c1_bgc = flow.find(".c1_bgc");
    var c2_bgc = flow.find(".c2_bgc");
    var c3_bgc = flow.find(".c3_bgc");
    var c4_bgc = flow.find(".c4_bgc");
    var c5_bgc = flow.find(".c5_bgc");

    TweenMax.set([c1_bgc, c2_bgc, c3_bgc, c4_bgc, c5_bgc], { scale: 0.98, transformOrigin: "50% 50%" });

    var c1_logo = flow.find(".c1_logo");
    var c1_sun = flow.find(".c1_sun path");
    var tl_c1 = new TimelineLite(tl_option).to(c1_logo, 0.4, { scale: 1.06, scaleY: 1.1, repeat: 2, yoyo: true, transformOrigin: "50% 50%" }).to(c1_logo, 0.3, { scale: 1, transformOrigin: "50% 50%" }).set(c1_sun, { autoAlpha: 1 }, 0).fromTo(c1_sun, 0.25, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%" }, 0.3).to(c1_sun, 0.25, { drawSVG: "0% 0%" }, 0.6).to(c1_bgc, 0.4, { scale: 0.98, transformOrigin: "50% 50%" }).to(c1_bgc, 0.4, { scale: 1, yoyo: true, transformOrigin: "50% 50%" }, 0);

    var c2_heart = flow.find(".c2_heart");
    var c2_dock = flow.find(".c2_dock");
    var tl_c2 = new TimelineLite(tl_option).to(c2_dock, 0.3, { rotation: "-=10", transformOrigin: "50% 50%" }).to(c2_heart, 0.4, { scale: 1.06, scaleY: 1.1, repeat: 2, yoyo: true, transformOrigin: "50% 50%" }).to(c2_heart, 0.3, { scale: 1, scaleY: 1 }).to(c2_dock, 0.3, { rotation: "+=10", transformOrigin: "50% 50%" }).to(c2_bgc, 0.4, { scale: 0.98, transformOrigin: "50% 50%" }).to(c2_bgc, 0.4, { scale: 1, yoyo: true, transformOrigin: "50% 50%" }, 0);

    var c3_tool = flow.find(".c3_tool");
    var c3_head = flow.find(".c3_head");
    var tl_c3 = new TimelineLite(tl_option).to(c3_head, 0.2, { scale: 1.06, transformOrigin: "50% 50%" }).to(c3_head, 0.2, { scale: 1, transformOrigin: "50% 50%" }).to(c3_head, 0.2, { scale: 1.06, transformOrigin: "50% 50%" }).to(c3_tool, 0.2, { rotation: "-=10", transformOrigin: "50% 0%", ease: Power1.easeOut }, 0).to(c3_tool, 0.4, { rotation: "+=20", transformOrigin: "50% 0%", ease: Power1.easeInOut }, 0.2).to(c3_tool, 0.4, { rotation: "-=10", transformOrigin: "50% 0%", ease: Power1.easeInOut }).to(c3_tool, 0.2, { rotation: "+=0", transformOrigin: "50% 0%", ease: Power1.easeInOut }).to(c3_head, 0.4, { scale: 1, transformOrigin: "50% 50%" }).to(c3_bgc, 0.4, { scale: 0.98, transformOrigin: "50% 50%" }).to(c3_bgc, 0.4, { scale: 1, yoyo: true, transformOrigin: "50% 50%" }, 0);

    var c4_icon = flow.find(".c4_icon");
    var c4_pen = flow.find(".c4_pen");
    var c4_line = flow.find(".c4_line path");
    var tl_c4 = new TimelineLite(tl_option).to(c4_icon, 0.3, { rotation: "-=10", xPercent: "-30%", transformOrigin: "50% 0%" }, 0).to(c4_line, 0.2, { autoAlpha: 0 }, 0).set(c4_line, { scaleX: 0, autoAlpha: 1 }).staggerTo(c4_line, 0.4, { scaleX: 1, transformOrigin: "0% 50%" }, 0.1).to(c4_pen, 0.2, { autoAlpha: 1 }, 0).to(c4_pen, 0.3, { xPercent: "-5%", repeat: 3, yoyo: true, ease: Power0.easeNone }, 0.2).to(c4_pen, 0.3, { yPercent: "5%", repeat: 3, yoyo: true, ease: Power0.easeNone }, 0.5).to(c4_pen, 0.3, { autoAlpha: 0 }).to(c4_icon, 0.3, { rotation: "+=10", xPercent: "0%", transformOrigin: "50% 0%" }, "+=0.2").to(c4_bgc, 0.4, { scale: 0.98, transformOrigin: "50% 50%" }).to(c4_bgc, 0.4, { scale: 1, yoyo: true, transformOrigin: "50% 50%" }, 0);

    var c5_plus = flow.find(".c5_plus");
    var c5_check = flow.find(".c5_check > g");
    var c5_rec = flow.find(".c5_rec rect");
    var c5_star = flow.find(".star g");
    var starBlink = function starBlink() {
      c5_star.each(function (i, el) {
        var tl = new TimelineMax({ delay: i * 0.1 }).to(el, 0.4, { autoAlpha: 1, scale: 0.8, transformOrigin: "50% 50%" }).to(el, 0.3, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" });
      });
    };

    var tl_c5 = new TimelineLite(tl_option).to([c5_plus, c5_rec], 0.3, { autoAlpha: 0 }).staggerTo(c5_rec, 0.3, { autoAlpha: 1 }, 0.08).set(c5_check, { autoAlpha: 1 }).fromTo(c5_check[0], 0.3, { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 0.5 }).fromTo(c5_check[1], 0.3, { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 0.8 }).call(starBlink).from('#nullObject', 2, { autoAlpha: 0 }).to(c5_check, 0.2, { autoAlpha: 0 }).to(c5_plus, 0.2, { autoAlpha: 1 }).to(c5_bgc, 0.4, { scale: 0.98, transformOrigin: "50% 50%" }).to(c5_bgc, 0.4, { scale: 1, yoyo: true, transformOrigin: "50% 50%" }, 0);

    var tl_array = [tl_c1, tl_c2, tl_c3, tl_c4, tl_c5];

    flow.find("[class^=circle]").each(function (i) {
      $(this).hover(function () {
        tl_array[i].play();
        $(this).addClass("color");
      }, function () {
        $(this).removeClass("color");
      });
    });

    var cir_array = [$(".circle1"), $(".circle2"), $(".circle3"), $(".circle4"), $(".circle5")];
    var tl_auto_play = new TimelineLite();
    var title = new SplitText($("h2.title"), { type: "words,chars" }).chars;

    TweenLite.set(cir_array, { autoAlpha: 0.6 });
    tl_auto_play.from('#nullObject', 1, {}).staggerFrom(title, 0.6, { autoAlpha: 0, y: -3, ease: Power0.easeNone }, 0.2);

    cir_array.forEach(function (ele, i) {
      tl_auto_play.to(ele, 0.4, { autoAlpha: 1 }).call(function () {
        tl_array[i].play();
        cir_array[i].addClass("color");
      }).from('#nullObject', 1.2, {}).call(function () {
        cir_array[i].removeClass("color");
      });
    });
  }

  if (wW < 1100) {
    var menuTL = new TimelineMax({ paused: true, reversed: true, yoyo: true });
    var menu__cover = $(".nav__cover");
    var toggle = $(".nav__toggle");
    var burger1 = toggle.find(".one");
    var burger2 = toggle.find(".two");
    var burger3 = toggle.find(".three");

    var menu__anchor = menu__cover.find("a");

    menuTL.set(menu__cover, { visibility: "visible" }).to(menu__cover, 0.3, { autoAlpha: 1 }).to(menu__cover, 0.5, { "border-width": "8px" }, 0.1).staggerFrom(menu__anchor, 0.3, { autoAlpha: 0, x: "3%" }, 0.1, 0.2).to(burger2, 0.3, { autoAlpha: 0 }, 0).to(burger3, 0.6, { rotation: -135, y: -6 }, 0).to(burger1, 0.6, { rotation: 135, y: 6 }, 0);

    $(".nav__toggle").click(function () {
      menuTL.reversed() ? menuTL.play() : menuTL.reverse().timeScale(1.5);
    });
  }
});

if (document.getElementById("dashboard") !== null) {

  var nav_height = $("#nav").height();
  var dashboard = $("#dashboard");
  var dashboard_main = dashboard.find(".dashboard__main");
  var dashboard_btn = dashboard.find(".dashboard__btn");
  var top_distance = $("#dashboard").css("margin-top").slice(0, -2);

  //dashboard structure change two row
  // if (wW < 1366) { 
  //   dashboard_main.append(dashboard_btn); 
  // }
  if (wW < 768) {
    dashboard_main.append(dashboard_btn);
  }

  //scroll fixed dashboard  
  dashboard.height(dashboard_main[0].getBoundingClientRect().height);
  if (wW >= 768) {
    $window.on("scroll", function () {
      $window.scrollTop() > top_distance ? dashboard_main.css({ top: nav_height, position: "fixed" }) : dashboard_main.css({ top: "auto", position: "absolute" });
    });
  } else {

    var dashboard_height = dashboard_main.outerHeight();
    top_distance = dashboard_height + Number(top_distance);
    var exrea_height = nav_height - dashboard_height;

    $window.on("scroll", function () {
      $window.scrollTop() > top_distance ? dashboard_main.css({ top: exrea_height, position: "fixed" }).addClass("fixed") : dashboard_main.css({ top: "auto", position: "absolute" }).removeClass("fixed");
    });

    var toggle = dashboard_main.find(".icon-1");
    var toggle_boolean = true;
    toggle.click(function () {
      if (toggle_boolean) {
        dashboard_main.css({ top: nav_height });
        toggle_boolean = !toggle_boolean;
      } else {
        dashboard_main.css({ top: exrea_height });
        toggle_boolean = !toggle_boolean;
      }
    });
  }
}

// var main = $("main");

$.when($.ready).then(function () {
  $("main").addClass("show");
  // var mainTL = new TimelineLite()
  //   .to($("main"), 0.5, { autoAlpha: 1, ease: Power0.easeNone });
});

//因架構變化，resize trigger reload
var trigger_size = [1100, 767, 480]; //1366

$window.resize(function () {
  trigger_size.forEach(function (ele) {
    if (wW > ele) {
      $window.width() <= ele ? location.reload() : "";
    } else {
      $window.width() > ele ? location.reload() : "";
    }
  });
});

$(function () {
  $("[data-progress-tab]").click(function () {

    var $this = $(this);

    if (!$this.hasClass("active")) {
      $this.siblings("a").removeClass("active");
      $this.addClass("active");
    }

    var dataTab = $this.attr("data-progress-tab");
    console.log(dataTab);

    var target = $("#" + dataTab);

    target.siblings(".tab-pane").hide();
    target.fadeIn();
  });

  if (document.querySelector(".department") !== null) {

    //table time toggle
    var td_show = 2;
    var calendar_table = $(".department-table");

    calendar_table.find("td:nth-child(2) ~ td").addClass("small");
    calendar_table.find(".toggle").click(function () {

      var hide_td = "td:nth-child(" + td_show + ")";

      td_show++;
      if (td_show === 5) {
        td_show = 2;
      };
      var show_td = "td:nth-child(" + td_show + ")";

      calendar_table.find(hide_td).addClass("small");
      calendar_table.find(show_td).removeClass("small");
    });

    //fixed table thead
    if (wW <= 990) {
      var $thead = $("thead");
      var fixed_position_height = wW < 768 ? $("#nav").height() : $("#nav").height() + $("#dashboard").height();

      // var thead_offset_height = $thead.offset().top - fixed_position_height - 10;
      var thead_offset_height = $thead.offset().top - fixed_position_height;
      var thead_offset_left = $thead.offset().left;
      var fix_css = {
        "top": fixed_position_height + "px",
        // "top": fixed_position_height + 10 + "px",
        "left": thead_offset_left + "px",
        "position": "fixed"
      };
      var original_css = {
        "top": "0",
        "left": "0px",
        "position": "absolute"
      };

      calendar_table.css("paddingTop", $thead.height());
      var tmp = "calc(100vw - " + thead_offset_left * 2 + "px)";
      console.log(tmp);

      $thead.css({ "width": tmp });

      $window.on("scroll", function () {
        if ($window.scrollTop() > thead_offset_height) {
          $thead.css(fix_css);
        } else {
          $thead.css(original_css);
        }
      });
    }

    var table_pad = "<tr class= \"test\"><th></th><td></td><td></td><td></td></tr>";
    $("tbody tr:nth-child(6n)").after(table_pad);
  }

  if (document.querySelector(".staff") !== null) {
    $("#contact_true").change(function () {

      if ($(this)[0].checked == true) {
        $(this).parent(".radio_unit").next(".radio_text").fadeIn(300);
      }
    });
  }

  $("#link-modal-privacy").click(function () {
    var modalPrivacy = document.getElementById("modal-privacy");
    $(document).on("lity:open", function (event, instance) {
      new SimpleBar(modalPrivacy.querySelector(".scroll-wrapper"), { autoHide: false });
    });
    lity(modalPrivacy);
  });

  $(".modal-close").click(function () {
    $("body").trigger(esc);
  });

  if (document.querySelector(".title-division") !== null) {
    var title = $(".title-division");
    var text_length = title.find(".f24").text().length;
    if (text_length > 4) {
      title.addClass("two_row");
    }
  }

  if (document.querySelector(".reference") !== null && wW <= 500) {
    $("table tbody th").click(function () {
      $(this).next("td").fadeToggle(300);
    });
  }

  var options = {
    data: ["林士敏(放射腫瘤科)", "林倩(放射腫瘤科)", "林士傑(家醫科)", "林政道(婦癌科)", "林婉妮(耳鼻喉部)", "林淳榮(胃腸肝膽科)", "林蔚然(胃腸肝膽科)", "林成俊(肝臟科)", "林東儀(骨科部外傷科)"],
    list: {
      maxNumberOfElements: 10,
      match: { enabled: true }
    }
  };

  $(".autocomplete_input").easyAutocomplete(options);
}); // $(function ) end


if (document.querySelector(".register") !== null) {

  if (wW < 480) {
    $(".register__block").each(function () {
      var $block = $(this);
      if ($block.find("li").length > 7) {
        $block.addClass("cut").append("<li class=\"more\"><a>\u66F4\u591A...</a></li>").find(".more").click(function () {
          $block.removeClass("cut");
        });
      }
    });
  }
}
//# sourceMappingURL=ui.js.map
