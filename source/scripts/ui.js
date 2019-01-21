

var $window = $(window);
var wW = $(window).width();
var wH = $(window).height();
// // var esc = $.Event("keydown", { keyCode: 27 });

// var $cover = $("#fixed-cover");


$(function () {

  //index card hover toggle 



  if (document.querySelector(".index__landing") !== null) {
    
  
    var cards = $(".index__catalog").find(".card");
    var toggle_hieght = wW >= 768 ? { height: "242px" } : { height: "180px" };
    var card_tl_array = [];

    cards.each(function (i) {

      var card = $(this);
      var toggle = $(this).find(".toggle");
      var toggle_btn = $(this).find(".btn");

      var tl_card = new TimelineLite({ paused: true,  reversed: true,yoyo: true })
      .to([card, toggle], 0.2, { "backgroundColor": "#fdecda"})
      .to(toggle, 0.2, toggle_hieght,0)
      .to(toggle_btn, 0.3, { autoAlpha: 1 }, "-=0.1");
      
      card_tl_array.push(tl_card);

      if (wW > 768) {
        $(this).hover(function () {
          tl_card.play()
        }, function () {
          tl_card.reverse();
        });
      } else {
        $(this).click(function () {
          if (tl_card.reversed()) {
            card_tl_array.forEach(tl=> { tl.reversed() ? "" : tl.reverse(); })
            tl_card.play();
          } else {
            tl_card.reverse();
          }
        });
      }
    });
    
  
    //index landing svg animation
    var flow = $(".flow ");
    var tl_option = { paused: true, onComplete: function () { this.pause(0); }};
    
    //five circles
    var c1_logo = flow.find(".c1_logo");
    var c1_sun = flow.find(".c1_sun path");
    var tl_c1 = new TimelineLite(tl_option)
      .to(c1_logo, 0.4, { scale: 1.06, scaleY: 1.1, repeat: 2,   yoyo: true, transformOrigin: "50% 50%"})
      .to(c1_logo, 0.3, { scale: 1, transformOrigin: "50% 50%"})
      .set(c1_sun, { autoAlpha: 1}, 0)
      .fromTo(c1_sun, 0.25, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%" }, 0.3)
      .to(c1_sun, 0.25, { drawSVG: "0% 0%" },0.6);
      
      
    var c2_heart = flow.find(".c2_heart");
    var c2_dock = flow.find(".c2_dock");
    // var c2_scan = flow.find(".c2_scan");
    var tl_c2 = new TimelineLite(tl_option)
      .to(c2_dock, 0.3, { rotation: "-=10",transformOrigin: "50% 50%" })
      
      
      .to(c2_heart, 0.4, { scale: 1.06, scaleY: 1.1, repeat: 2,   yoyo: true, transformOrigin: "50% 50%"})
      .to(c2_heart, 0.3, { scale: 1, scaleY: 1})
      .to(c2_dock, 0.3, { rotation: "+=10",transformOrigin: "50% 50%" })
      // .to(c1_logo, 0.3, { scale: 1, transformOrigin: "50% 50%"})
      



      
    var c3_tool = flow.find(".c3_tool");
    // var c3_head = flow.find(".c3_head");
    var tl_c3 = new TimelineLite(tl_option)
      
    

      // .to(c3_tool, 0.2, { rotation: "+=20", transformOrigin: "50% 0%"})
      // .to(c3_tool, 0.8, { rotation: "-=40", transformOrigin: "50% 0%", ease: Elastic.easeOut.config(1, 0.3),})

      .to(c3_tool, 0.2, { rotation: "-=10", transformOrigin: "50% 0%", ease: Power2.easeInOut,})
      .to(c3_tool, 0.4, { rotation: "+=20", transformOrigin: "50% 0%", ease: Power2.easeInOut,})
      .to(c3_tool, 0.4, { rotation: "-=10", transformOrigin: "50% 0%", ease: Power2.easeInOut,})
      .to(c3_tool, 0.2, { rotation: "+=0", transformOrigin: "50% 0%", ease: Power2.easeInOut,})
      
      // .fromTo(c3_tool, 0.6, 
      //   { rotation: "-=20", repeat: 2, yoyo: true, transformOrigin: "50% 0%" }, 
      //   { rotation: "+=20", repeat: 2, yoyo: true, transformOrigin: "50% 0%", ease: Power2.easeInOut, })

    

    
    var c4_icon = flow.find(".c4_icon");
    var c4_pen = flow.find(".c4_pen");
    var c4_line = flow.find(".c4_line path");
    
    var tl_c4 = new TimelineLite(tl_option)
      .to(c4_icon, 0.3, { rotation: "-=10", xPercent: "-30%", transformOrigin: "50% 0%" }, 0)
      .to(c4_line, 0.2, { autoAlpha: 0 }, 0)
      .set(c4_line, { scaleX: 0, autoAlpha: 1 })
      .staggerTo(c4_line, 0.4, { scaleX: 1, transformOrigin: "0% 50%" }, 0.1)
      .to(c4_pen, 0.2, { autoAlpha: 1 }, 0)
      .to(c4_pen, 0.3, { xPercent: "-5%", repeat: 3, yoyo: true, ease: Power0.easeNone }, 0.2)
      .to(c4_pen, 0.3, { yPercent: "5%", repeat: 3, yoyo: true, ease: Power0.easeNone }, 0.5)
      .to(c4_pen, 0.3, { autoAlpha: 0 })
      .to(c4_icon, 0.3, { rotation: "+=10", xPercent: "0%", transformOrigin: "50% 0%" }, "+=0.2");

    



    var c5_plus = flow.find(".c5_plus");
    var c5_check = flow.find(".c5_check > g");
    var c5_rec = flow.find(".c5_rec rect");
    var c5_star = flow.find(".star g");
    var starBlink = function () {
      c5_star.each(function (i, el) {
        var tl = new TimelineMax({ delay: i * 0.1 })
          .to(el, 0.4, { autoAlpha: 1, scale: 0.8, transformOrigin: "50% 50%" })
          .to(el, 0.3, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" });
      });
    };

    var tl_c5 = new TimelineLite(tl_option)
      .to([c5_plus, c5_rec], 0.3, { autoAlpha: 0 })
      .staggerTo(c5_rec, 0.3, { autoAlpha: 1 }, 0.08)
      .set(c5_check, { autoAlpha: 1 })
      .fromTo(c5_check[0], 0.3, { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 0.5 })
      .fromTo(c5_check[1], 0.3, { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 0.8 })
      .call(starBlink)
      .from('#nullobject', 2, { autoAlpha: 0 })
      .to(c5_check, 0.2, { autoAlpha: 0 })
      .to(c5_plus, 0.2, { autoAlpha: 1 })
      


    flow.find("[class^=circle]").each(function (i) {
      $(this).hover(function () {
        var arr = [tl_c1, tl_c2, tl_c3, tl_c4, tl_c5];
        arr[i].play();
      });
    });

  }

  // if (wW >= 768) {
  //   var trend, i;
  
  //   $(".register-index select").each(function() {
    
  //     var mix = "";
  //     for (i = 0; i < this.length; i++) {
  //       trend = this[i];
  //       mix = mix + `<li><a href="department.html">${trend.value}</a></li>`;
  //     }
  //     $(this).parent(".register__block").append(mix);
  //   });
  // }


    



  if (wW < 1100) {

    // var chars = new SplitText($(".nav__cover > a"), { type: "words,chars" }).chars;
    var menuTL = new TimelineMax({ paused: true, reversed: true, yoyo: true });
    var menu__cover = $(".nav__cover");    
    var toggle = $(".nav__toggle");
    var burger1 = toggle.find(".one");
    var burger2 = toggle.find(".two");
    var burger3 = toggle.find(".three");

    var maenu__anchor = menu__cover.find("a");

    menuTL
      .set(menu__cover, { visibility: "visible" })
      .to(menu__cover,0.3 , {autoAlpha:1 })
      .staggerFrom(maenu__anchor,0.3, {  autoAlpha:0 , x: "10%"},0.1)
      
      .to(burger3, 0.3, { y: -6 }, 0)
      .to(burger1, 0.3, { y: 6 }, 0)
      .to([burger1, burger2], 0.8, { rotation: 235, ease: Power2.easeInOut }, 0.3)
      .to([burger1, burger2], 0.2, { rotation: "-=10", ease: Power3.easeOut }, 1.2)
      .to(burger3, 0.8, { rotation: 325, ease: Power2.easeInOut }, 0.3)
      .to(burger3, 0.2, { rotation: "-=10", ease: Power3.easeOut }, 1.2);

    $(".nav__toggle").click(function () {
      menuTL.reversed() ? menuTL.play() : menuTL.reverse();
    });
  }

});



// $(this).toggleClass("active")
// $(this).find(".toggle").slideToggle().css("display","flex");
// if (wW > 768) {
//   $(".mCustomScrollbar_index").mCustomScrollbar({
//     theme: "dark-thick"
//   });
// }
  
  
// var main = $("main");

// $.when($.ready).then(function () {
//   var mainTL = new TimelineLite()
//     .to(main, 0.6, { autoAlpha: 1, ease: Power0.easeNone});
// });




if (document.getElementById("dashboard") !== null) {

  var nav_height = $("#nav").height();
  var dashboard = $("#dashboard");
  var dashboard_main = dashboard.find(".dashboard__main");
  var dashboard_btn = dashboard.find(".dashboard__btn");
  var top_distance = $("#dashboard").css("margin-top").slice(0,-2);
  
  
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
      $window.scrollTop() > top_distance ? 
        dashboard_main.css({top: nav_height, position: "fixed"}) : 
        dashboard_main.css({ top: "auto", position: "absolute"})
    });
  } else {
  
    var dashboard_height = dashboard_main.outerHeight();
    top_distance = dashboard_height + Number(top_distance);
    var exrea_height = nav_height - dashboard_height;
    
    $window.on("scroll", function () {
      $window.scrollTop() > top_distance ? 
        dashboard_main.css({ top: exrea_height, position: "fixed"}).addClass("fixed") : 
        dashboard_main.css({ top: "auto", position: "absolute" }).removeClass("fixed")
    });
      
    var toggle = dashboard_main.find(".icon-1");
    var toggle_boolean = true;
    toggle.click(function () {
      if (toggle_boolean) {
        dashboard_main.css({ top: nav_height});
        toggle_boolean = !toggle_boolean;
      } else {
        dashboard_main.css({ top: exrea_height });
        toggle_boolean = !toggle_boolean;
      }
    });
  
  }

}




//因架構變化，resize trigger reload
// var trigger_size = [1366, 767, 480];

// $window.resize(function () {
//   trigger_size.forEach(function (ele) {
//     if (wW > ele ) {
//       ($window.width() <= ele) ? reload() : "";
//     } else {
//       ($window.width() > ele) ? reload() : "" ;
//     }  
//   });

// });

// function reload() {
//   // TweenLite.set($("main"), { autoAlpha: 0});
//   location.reload();
// }



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
  })
  


  if (document.querySelector(".register") !== null) {

    var autocomplete = $(".autocomplete");
    var autocomplete_input = $("#autocomplete_input");
    var tmpData = ["林士敏(放射腫瘤科)","林倩(放射腫瘤科)","林士傑(家醫科)","林政道(婦癌科)","林婉妮(耳鼻喉部)","林淳榮(胃腸肝膽科)","林蔚然(胃腸肝膽科)","林成俊(肝臟科)","林東儀(骨科部外傷科)",]

    function findMatches(wordToMatch, tmpData){
      return tmpData.filter(el => {
        var regex = new RegExp(wordToMatch, 'gi');
        return el.match(regex)
      });
    }

    function displayMatches(letter){
      var matchArray = findMatches(letter, tmpData);
      if (matchArray.length == 0) {
        autocomplete.addClass("hide");
        return;
      }
      
      var html = matchArray.map(name => `<li>${name}</li>`).join("");
      autocomplete.html(html).removeClass("hide");
      
      $(autocomplete).find("li").each(function (i) {

        console.log("each run",i);
        
        var $this = $(this);
        var $text = $(this).text();

        $this.click(function() {
          console.log("li click ");
          autocomplete_input.val($text);
        });
      });
      close_search_bar();

    }

    autocomplete_input
      .change(function () {displayMatches(this.value);  })
      .keyup(function () { displayMatches(this.value); });

    
    var close_search_bar = function() {
      $("main").click(function(){
        console.log("close_search_bar");  
        autocomplete.addClass("hide");
        $("main").off();
      });
    }

  }


  if (document.querySelector(".department") !== null) {

    //table time toggle
    var td_show = 2;
    var calendar_table = $(".department-table")

    calendar_table.find(`td:nth-child(2) ~ td`).addClass("small")


    calendar_table.find(".toggle").click(function () {

      var hide_td = `td:nth-child(${td_show})`
      td_show++;
      if (td_show == 5) {td_show = 2}
      var show_td = `td:nth-child(${td_show})`

      calendar_table.find(hide_td).addClass("small")
      calendar_table.find(show_td).removeClass("small")
    });

    //fixed table thead
    var $thead = $("thead");
    var nav_height = $("#nav").height();
    var thead_offset_height = $thead.offset().top - nav_height - 10;

  
    var fix_css = {
      "top": nav_height + "px",
      "left": $thead.offset().left + "px"
    }
    
    calendar_table.css("paddingTop", $thead.height())
    $thead.css({"width": $thead.width()});
    
    $window.on("scroll", function () {
      
      if ($window.scrollTop() > thead_offset_height  ) {
        $thead.addClass("fixed")
        $thead.css(fix_css);
      } else {
        $thead.removeClass("fixed")
        $thead.css({
          "top": "0",
          "left": "0px"
        });
      }
    });
    
  }

  
});// $(function ) end




if (document.querySelector(".register") !== null) {

  if (wW < 480) {
    $(".register__block").each(function () {
      var $block = $(this);
      if ($block.find("li").length > 7) {
        $block
          .addClass("cut")
          .append(`<li class="more"><a>更多...</a></li>`)
          .find(".more").click(() => {$block.removeClass("cut");});
      }
    });
  }
}





