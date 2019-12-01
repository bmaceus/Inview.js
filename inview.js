 (function ($) {
     $.fn.inview = function (options, offset, SetClass = false) {
         if ($(this).length > 0) {
             var _this = this;
             var pos_check_ex = false;
             if (typeof options !== 'undefined' && options !== false) {
                 if (typeof SetClass !== 'undefined' && SetClass !== false) {
                     if (typeof SetClass !== 'boolean') {
                         var SetClass = SetClass.toLowerCase();
                     }
                 }
                 var objectOS = $(this).offset().top;
                 var el_targteheight = "40%";
                 if (typeof offset !== 'undefined' && offset !== false) {
                     el_targteheight = offset;
                 }
                 if (typeof el_targteheight == "string") {
                     if (el_targteheight.indexOf('%') >= 0) {
                         var getpcf = Math.floor((window.innerHeight * parseInt(el_targteheight)) / 100);
                     } else {
                         var getpcf = parseInt(el_targteheight);
                     }
                 } else if (typeof el_targteheight == "number") {
                     var getpcf = el_targteheight;
                 }
                 var pos_check = function () {
                     var winscrollT = $(window).scrollTop();
                     var el_position = objectOS - winscrollT;
                     if (SetClass && SetClass == "true") {
                         if (el_position <= getpcf) {
                             $(_this).addClass("bm-ui-inview");
                             options();
                         } else {
                             $(_this).removeClass("bm-ui-inview");
                             options();
                         }
                     } else {
                         if (el_position <= getpcf) {
                             options();
                             pos_check_ex = true

                         }
                     }
                 }
                 pos_check();
                 $(window).on("scroll", function () {
                     if (SetClass && SetClass == "true") {
                         pos_check();
                     } else {
                         if (!pos_check_ex) {
                             pos_check();
                         }
                     }
                 });

             }
         }
     }
 }(jQuery));