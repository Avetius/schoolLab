function LaboratoryWork() {

    //---------------------path to images------------------------//
    this.path_common_icons = "assets/common/img/";
    this.path_icons = "assets/app/img/";
    //---------------------for creation icons in tab------------------------//
    this.tab_icons = function(id, class_name, class_img, img) {
        var tab_shelf_id = $("." + class_name + "").attr("data");
        var name = content_am.icon_information[id];
        var icon_name = name.split(" ");
        $("#" + tab_shelf_id + "").append("<div class='tab_icons_group " + class_name + "'><div class='lab_icons_group'><img id='" + id + "' class='lab_inocs " + class_img + "' src='assets/app/img/" + img + "' /></div><div class='lab_titles'>" + icon_name[0] + "</div></div>");
        // img_icons_sorted();
        for (var i = 1; i <= 8; i++) {
            for (var j = 0; j < 5; j++) {
                $("#tab_for_icons_group").children().eq(j).children().eq(i).children().children().css("left", i * 100 + 4);
            }
        }
        $(".lab_icons_group img").bind("click", function() {
            var id = $(this).attr("id");
            $("#part_info div").empty().append("<div>" + content_am.icon_information[id] + "</div>");
        });
    };
    //---------------------for creation icons in table------------------------//
    this.table_icons = function(where, id, class_img, img, top, left) {
        $("#" + where + "").append("<img id='" + id + "' class='" + class_img + "' src='assets/app/img/" + img + "' style='position:absolute; top:" + top + "px; left:" + left + "px' />");
        $("#part_laboratory img").bind("click", function() {
            var id = $(this).attr("id");
            $("#part_info div").empty().append("<div>" + content_am.icon_information[id] + "</div>");
        });
    };
    //---------------------for craetion places in table------------------------//
    this.places = function(where, id, width, height, top, left, color) {
        $("#" + where + "").append("<div id='" + id + "' style='position:absolute; width:" + width + "px; height:" + height + "px; top:" + top + "px; left:" + left + "px; border:1px solid " + color + "'></div>");
    };
    //---------------------for adding and changing tasks------------------------//
    this.add_task = function(name, number) {
            $("#part_task div").empty().html(task_text_am.task);
            $("#part_hint div").empty().html(name[number]).effect("pulsate", {
                times: 3
            }, 2000);
        }
        //---------------------for message ------------------------//
    this.message = function(name, number, type) {
        $("#part_message div").empty().html(name[number]).css("color", "" + type + "").effect("pulsate", {
            times: 1
        }, 1000);
    }
} ///end LaboratoryWork function constructor///









$("document").ready(function() {

    for (var i = 0; i < content_am.tab_menu.length; i++) {
        $("#tab_menu").append("<li class='tab_menu" + (i + 1) + "' data='tab_shelf" + (i + 1) + "' style='left:" + (i * 165) + "px; z-index: " + (6 - i) + "'>" + content_am.tab_menu[i] + "</li>");
        $("#tab_for_icons_group").append("<div class='tab_for_icons' id='tab_shelf" + (i + 1) + "'></div>");
    }
    for (var i = 0; i < content_am.sidebar_title.length; i++) {
        $("#container_sidebar").children().eq(i).children("span").html(content_am.sidebar_title[i]);
    }


    $("#tab_menu li").bind("click", function() {
        var el_index = $("#tab_menu li").index(this);
        $("#tab_menu li").css({
            "background-image": "url('assets/common/img/tab_select.png')",
            "color": "#b7b7b7"
        });
        $("#tab_menu li").eq(el_index).css({
            "background-image": "url('assets/common/img/tab_unselect.png')",
            "color": "#3e3e3e"
        });
        $(".tab_for_icons").css("z-index", "999");
        $(".tab_for_icons").eq(el_index).css("z-index", "1000");
    });





    $(".cls_sidebar").bind("click", function() {
        if ($(this).css("height") < "484px" || $(this).css("height") == "88px") {
            $(".cls_sidebar").css({
                "height": "88px"
            });
            $(this).animate({
                height: 484
            }, 400);
        } else if ($(this).css("height") == "484px") {
            $(".cls_sidebar").css({
                "height": "187px"
            });
        }
    });



    lab_work();

}); /// end onload ///