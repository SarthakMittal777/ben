!function(a){var o=public_js_object,p=0;a("a[id=psfw-copy-link]").on("click",(function(p){var e;p.preventDefault(),e=a("a[id=psfw-copy-link]").attr("data-url"),navigator.clipboard?(navigator.clipboard.writeText(e),a(".psfw-clipboard").removeClass("fa-clipboard").addClass("fa-clipboard-check"),a(".psfw-clipboard-text").text(o.copied_to_clipboard_text),setTimeout((function(){a(".psfw-clipboard").removeClass("fa-clipboard-check").addClass("fa-clipboard"),a(".psfw-clipboard-text").text(o.copy_to_clipboard_text)}),800)):alert("Please make sure you have a secure connection. For example: https://example.com ")})),a("a[id=psfw-all-icon]").on("click",(function(o){o.preventDefault(),0==p?(a(".psfw-popup-container").addClass("open"),p++):(a(".psfw-popup-container").removeClass("open"),p--)})),a(".psfw-popup-container").on("click",(function(o){var e=a(o.target);e.is(".psfw-popup-container")&&!e.is(".psfw-all-icon")&&(a(".psfw-popup-container").removeClass("open"),p--)}))}(jQuery);