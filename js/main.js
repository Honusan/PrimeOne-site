$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var e=window.navigator.userAgent,t=(e.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}});if(((e=navigator.userAgent).indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1)&&$("body").addClass("ie"),t.any()&&$("body").addClass("touch"),(t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}}).any(),location.hash){var s=location.hash.replace("#","");$(".popup-"+s).length>0?n(s):$("div."+s).length>0&&$("body,html").animate({scrollTop:$("div."+s).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");var a,i,l;if(t.iOS());function n(e,s){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),t.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+e),""!=s&&null!=s&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+s+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),$(".popup-"+e).find(".slick-slider").length>0&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}function o(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(t.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function r(){var e=$(window).outerWidth();$(window).outerHeight();!function(e,t){var s=$(".header-menu"),a=$(".header-top-lang"),i=$(".header-bottom-menu");e<=765?a.hasClass("done")||a.addClass("done").appendTo(s):a.hasClass("done")&&a.removeClass("done").prependTo($(".header-top")),e<=765?i.hasClass("done")||i.addClass("done").appendTo(s):$.each($(".header-bottom-menu"),(function(e,t){$(this).hasClass("header-bottom-menu--right")?$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom-column").eq(2)):$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom-column").eq(0))}))}(e)}function c(e){var t=0,s=e.parents("form");if("email"==e.attr("name")||e.hasClass("email")){if(e.val()!=e.attr("data-value")){var a=e.val().replace(" ","");e.val(a)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.val())&&e.val()!=e.attr("data-value")?h(e):(t++,d(e))}else""==e.val()||e.val()==e.attr("data-value")?(t++,d(e)):h(e);return"checkbox"==e.attr("type")&&(1==e.prop("checked")?e.removeClass("err").parent().removeClass("err"):(t++,e.addClass("err").parent().addClass("err"))),e.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(e.val())||(t++,d(e))),e.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?d(e):h(e)),t}function d(e){if(e.addClass("err"),e.parent().addClass("err"),e.parent().find(".form__error").remove(),e.hasClass("email")){var t="";null!=(t=(""==e.val()||(e.val(),e.attr("data-value")),e.data("error")))&&e.parent().append('<div class="form__error">'+t+"</div>")}else null!=e.data("error")&&0==e.parent().find(".form__error").length&&e.parent().append('<div class="form__error">'+e.data("error")+"</div>");e.parents(".select-block").length>0&&(e.parents(".select-block").parent().addClass("err"),e.parents(".select-block").find(".select").addClass("err"))}function h(e){e.removeClass("err"),e.parent().removeClass("err"),e.parent().find(".form__error").remove(),e.parents(".select-block").length>0&&(e.parents(".select-block").parent().removeClass("err"),e.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function p(e){""==e.val()&&(e.inputmask("remove"),e.hasClass("l")||e.val(e.attr("data-value")),e.removeClass("focus"),e.parent().removeClass("focus"))}function u(){$.each($('.select[data-type="search"]'),(function(e,t){var s=$(this).parent(),a=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==a.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(a.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",a.find('option[selected="selected"]').html()))}))}function v(){$(".gm-style-iw").parent().addClass("baloon"),$(".gm-style-iw").prev().addClass("baloon-style"),$(".gm-style-iw").next().addClass("baloon-close"),$(".gm-style-iw").addClass("baloon-content")}$(".header-menu__icon").click((function(e){$(this).toggleClass("active"),$(".header-menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))})),$(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".pl").click((function(e){return n($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(e){return o(),!1})),$(".popup").click((function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return o(),!1})),$(document).on("keydown",(function(e){27==e.which&&o()})),$(".goto").click((function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,(function(){})),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1})),$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(".select").removeClass("active")})),$(window).scroll((function(){$(window).width();$(window).scrollTop()>50?$("#up").fadeIn(300):$("#up").fadeOut(300)})),$("#up").click((function(e){$("body,html").animate({scrollTop:0},300)})),$("body").on("click",".tab__navitem",(function(e){var t=$(this).index();if($(this).hasClass("parent"))t=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(t).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))})),$.each($(".spoller.active"),(function(e,t){$(this).next().show()})),$("body").on("click",".spoller",(function(e){return $(this).hasClass("mob")&&!t.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),(function(e,t){$(this).removeClass("active"),$(this).next().slideUp(300)})),$(this).toggleClass("active").next().slideToggle(300,(function(e,t){$(this).parent().find(".slick-slider").length>0&&$(this).parent().find(".slick-slider").slick("setPosition")}))),!1})),-1!=navigator.appVersion.indexOf("Mac")||$(".scroll-body").length>0&&$(".scroll-body").niceScroll(".scroll-list",(a=100,i=50,l=!1,t.any()&&(a=10,i=1,l=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:l,cursorborderradius:"0px",scrollspeed:a,mousescrollstep:i,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),$(".t,.tip").length>0&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(e){},onHide:function(e){}}).on("show.webui.popover hide.webui.popover",(function(e){$(this).toggleClass("active")})),$(window).resize((function(e){r()})),r(),function(){if($("select").length>0){function e(){$.each($("select"),(function(e,s){var a=e;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var i="",l="",n=$(this).parent(".select-block"),o="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(i="multiple",l="check"),$.each($(this).find("option"),(function(e,t){if(""!=$(this).attr("class")&&null!=$(this).attr("class")){$(this).attr("class")}""!=$(this).attr("value")?o=""!=$(this).attr("data-icon")&&null!=$(this).attr("data-icon")?o+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+a+" select-options__value value_"+$(this).val()+"  "+l+"'><div><img src="+$(this).attr("data-icon")+' alt=""></div><div>'+$(this).html()+"</div></div>":o+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+a+" select-options__value value_"+$(this).val()+"  "+l+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==n.find(".select__label").length&&n.prepend('<div class="select__label">'+$(this).html()+"</div>")})),o+="</div></div></div>","search"==$(this).attr("data-type")?(n.append("<div data-type='search' class='select_"+a+" select "+$(this).attr("class")+"__select "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+o+"</div>"),$(".select_"+a).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+a,parentLookupClass:"select-options__value_"+a,childBlockClass:"select-options__value_"+a})):"true"==$(this).attr("data-icon")?n.append("<div class='select_"+a+" select "+$(this).attr("class")+"__select icon "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr("data-icon")+' alt=""></div><div>'+$(this).find('option[selected="selected"]').html()+"</div></div></div>"+o+"</div>"):n.append("<div class='select_"+a+" select "+$(this).attr("class")+"__select "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+o+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&n.find(".select").addClass("focus"),1==n.find(".select-options__value").length&&n.find(".select").addClass("one"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+a+" .select-options-scroll").niceScroll(".select-options-list",function(){var e=100,s=50;return t.any()&&(e=10,s=1),{cursorcolor:"#9B4E7C",cursorwidth:"12px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"10px",scrollspeed:e,mousescrollstep:s,directionlockdeadzone:0,cursorborder:"0px solid #fff"}}())}))}e(),$("body").on("keyup","input.select-title__value",(function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),$(this).parents(".select-block").find("select").val("")})),$("body").on("click",".select",(function(){if(!$(this).hasClass("disabled")&&!$(this).hasClass("one")){$(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||u(),$(this).find(".select-options__value").show());var e=$.trim($(this).find(".select-title__value").attr("class").replace("select-title__value",""));$(this).find(".select-options__value").show().removeClass("hide").removeClass("last"),""!=e&&$(this).find(".select-options__value."+e).hide().addClass("hide"),$(this).find(".select-options__value").last().hasClass("hide")&&$(this).find(".select-options__value").last().prev().addClass("last")}})),$("body").on("click",".select-options__value",(function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?($(this).parents(".select").find(".select-title__value span").length>0?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&e()})),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(e.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),u())})),$(document).on("keydown",(function(e){27==e.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),u())}))}function s(e,t){e.find(".rating__activeline").css({width:t+"%"})}$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),h($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||($(this).hasClass("l")&&0==$(this).parent().find(".form__label").length?$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>"):this.value=$(this).attr("data-value")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&($(this).hasClass("l")||(this.value=$(this).attr("data-value")),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text")),$(this).hasClass("vn")&&c($(this))}))})),$(".form-input__viewpass").click((function(e){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$.each($("input.phone"),(function(e,t){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){p($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(e){p($(this))})),$.each($("input.num"),(function(e,t){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){p($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(e){p($(this))})),$.each($(".check"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$("body").off("click",".check",(function(e){})),$("body").on("click",".check",(function(e){$(this).hasClass("disable")||($(e.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1)))})),$.each($(".option.active"),(function(e,t){$(this).find("input").prop("checked",!0)})),$(".option").click((function(e){$(this).hasClass("disable")||($(e.target).is("a")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0)))})),$(".rating.edit .star").hover((function(){var e=$(this).parents(".rating");e.find(".rating__activeline").css({width:"0%"});var t=($(this).index()+1)/e.find(".star").length*100;s(e,t)}),(function(){var e=$(this).parents(".rating");e.find(".star").removeClass("active");var t=e.find("input").val()/e.find(".star").length*100;s(e,t)})),$(".rating.edit .star").click((function(e){var t=$(this).parents(".rating"),a=$(this).index()+1;t.find("input").val(a);var i=a/t.find(".star").length*100;s(t,i)})),$.each($(".rating"),(function(e,t){var a=$(this).find("input").val()/$(this).parent().find(".star").length*100;s($(this),a)})),$(".quantity__btn").click((function(e){var t=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(t-=1)<1&&(t=1):t+=1,$(this).parent().find(".quantity__input").val(t),!1})),$("#range").length>0&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){$("#rangefrom").val(t.values[0]),$("#rangeto").val(t.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+t.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+t.values[1]+"</span>")},change:function(e,t){t.values[0]!=$("#range").slider("option","min")||t.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())})),$("#rangeto").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())})),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change((function(e){if(""!=$(this).val()){var t=$(this);t.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(e.target.files,(function(s,a){0==t.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+e.target.files[s].name+'")').length&&t.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+e.target.files[s].name+"</li>")}))}}))}(),$("form button[type=submit]").click((function(){var e=0,t=$(this).parents("form"),s=t.data("ms");return $.each(t.find(".req"),(function(t,s){e+=c($(this))})),0==e&&(function(e){e.find(".form__generalerror").hide().html("")}(t),null!=s&&""!=s?(function(e){$(".popup").hide(),n("message."+e,"")}(s),!1):void 0)})),$("#map").length>0&&function(e){google.maps.Map.prototype.setCenterWithOffset=function(e,t,s){var a=this,i=new google.maps.OverlayView;i.onAdd=function(){var i=this.getProjection(),l=i.fromLatLngToContainerPixel(e);l.x=l.x+t,l.y=l.y+s,a.panTo(i.fromContainerPixelToLatLng(l))},i.draw=function(){},i.setMap(this)};for(var t=new Array,s=new google.maps.InfoWindow({}),a=[[new google.maps.LatLng(53.819055,27.8813694)],[new google.maps.LatLng(53.700055,27.5513694)],[new google.maps.LatLng(53.809055,27.5813694)],[new google.maps.LatLng(53.859055,27.5013694)]],i={zoom:10,panControl:!1,mapTypeControl:!1,center:a[0][0],styles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}],scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},l=new google.maps.Map(document.getElementById("map"),i),n={url:"../img/icons/map.svg",scaledSize:new google.maps.Size(18,20),anchor:new google.maps.Point(9,10)},o=0;o<a.length;o++){var r=new google.maps.Marker({icon:n,position:a[o][0],map:l});google.maps.event.addListener(r,"click",function(e,a){return function(){for(var i=0;i<t.length;i++)t[i].setIcon(n);var o=a+1;s.setContent($(".contacts-map-item_"+o).html()),s.open(l,e),e.setIcon(n),l.setCenterWithOffset(e.getPosition(),0,0),setTimeout((function(){v()}),10)}}(r,o)),t.push(r)}if(e){var c=e-1;setTimeout((function(){google.maps.event.trigger(t[c],"click")}),500)}}(1)}));