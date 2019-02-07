///////// lab 0701 ///////

var lab_work = function () {
        var obj = new LaboratoryWork();

        //--------adding tab icons with arguments(id, class_name, class_img, img)----------//

        obj.tab_icons("drop_glass", "tab_menu2", "drop_glass", "glass_113x17.png");
        obj.tab_icons("cover_glass", "tab_menu2", "cover_glass", "cover_glass_55x19.png");
        //obj.tab_icons("glass_stick", "tab_menu2", "glass_stick", "pipette_empty.png");
        obj.tab_icons("pipette", "tab_menu2", "pipette1", "img106.png");
        obj.tab_icons("cotton", "tab_menu3", "cotton1", "cotton_1.png");
        obj.tab_icons("yeast", "tab_menu1", "solt_water", "yeast.png");
        obj.tab_icons("solt_water", "tab_menu1", "solt_water", "solt_water.png");
        obj.tab_icons("grass_water", "tab_menu1", "grass_water", "cap1.png");
        obj.table_icons("part_laboratory", "microscope", "microscope", "microscope.png", "190", "55");


        //--------adding places in table with arguments(where, id, width, height, top, left, color)----------//
        obj.places("part_laboratory", "place_green_area", 490, 86, 304, 90, "rgba(0,0,0,0)");
        obj.places("part_laboratory", "place_aqua_area", 400, 172, 230, 180, "rgba(0,0,0,0)");
        obj.places("part_laboratory", "place_red_area", 400, 86, 304, 180, "rgba(0,0,0,0)");        
        obj.places("part_laboratory", "place_blue_area", 184, 160, 235, 581, "rgba(0,0,0,0)");
    
/*$(window).height();   // returns height of browser viewport
$(document).height();   // returns height of HTML document
$(window).width();   // returns width of browser viewport
$(document).width(); // returns width of HTML document*/

        var slideHeight;
        var slideWidth;
        var slideTop;
        var slideLeft;
        var screenProp = 1.36;
        //if(window.screen.availWidth >= window.screen.availHeight){
            slideHeight = 1.25 * $(document).height();
            slideWidth = screenProp*slideHeight;
            slideTop = $(document).height()/2 - slideHeight/2;
            slideLeft = $(document).width()/2 - slideWidth/2;
        //}
        /*else{
            slideWidth = window.screen.availWidth;
            slideHeight = screenProp*window.screen.availWidth;
            slideLeft = 0;
        }*/
        console.log("slideLeft = "+ slideLeft+", slideTop = "+slideTop+ ", slideHeight = " + slideHeight+ ", slideWidth = "+slideWidth);
        
            var zoom_coef=0;
            var picCount=0;
            var photoArray = ["assets/app/img/img111.gif",
                              "assets/app/img/img115.gif",
                              "assets/app/img/img151.gif",
                              "assets/app/img/img143.gif",];

            var zoomArray1 = ["assets/app/img/img111_1.gif",
                            "assets/app/img/img111_2.gif",
                            "assets/app/img/img111_3.gif"];

            var zoomArray2 = [];

    var slider = '<div id="slider" style="position: absolute; height: '+slideHeight+'px; width: '+slideWidth+'px; top: '+slideTop+'px; left: '+slideLeft+'px; z-Index: 1100; "><img class="slidePic" src="assets/app/img/img111.gif" style="height: '+slideHeight+'px; width: '+slideWidth+'px; top: 0px;"><img class="slideFon" src="assets/app/img/fon.png" style="height: '+slideHeight+'px; width: '+slideWidth+'px; top: 0px; left: 0px;"></div>';
    var prev = '<img id="prev" src="assets/app/img/arrow.png" style="">';
    var next = '<img id="next" src="assets/app/img/arrow.png" style="left: '+ (0.72 * slideWidth) +'px; top: '+(0.44 * slideHeight)+'px;">';
    var zoom_in = '<img id="zoom_in" src="assets/app/img/zoom_in.png" style="left: '+ (0.25 * slideWidth) +'px; top: '+(0.366 * slideHeight)+'px;">';
    var zoom_out = '<img id="zoom_out" src="assets/app/img/zoom_out.png" style="left: '+ (0.25 * slideWidth) +'px; bottom: '+(0.418 * slideHeight)+'px;">';
                                                        
    function GetDraggedSrc(dragged_id) //ui.draggable
    {
        var imgSrc = dragged_id.attr('src');
        var imgSrcArr = imgSrc.split("/");
        imgSrc = imgSrcArr[imgSrcArr.length-1];     
        return imgSrc;
    }
    //--------adding task into 'part_task' with arguments(name, number)----------//
        obj.add_task(task_text_am.hint, 0);

        $("#drop_glass").draggable({
            conteinment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            //scope: "second",
            zIndex: 21,
        });

        $("#grass_water").draggable({
            conteinment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            scope: "second",
        });

        $("#cover_glass").draggable({
            conteinment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            //scope: "dropglass",
        });

        $("#pipette").draggable({
            conteinment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            //scope: "pipette",
        }); 
var imgSrc;
var imgSrcArr;
//------------------------------------------LAB 1 Observe under microscope-----------------------------------------------
        //----------------------------------Drop glass on table-----------------------------------------------
        $("#place_red_area").droppable({
            accept: "#drop_glass",
            tolerance: "pointer",
            drop: function (event, ui) {
                // find the img source
                imgSrc = ui.draggable.attr('src');
                imgSrcArr = imgSrc.split("/");
                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                var groupId = ui.draggable.attr('id') + "_group"; // create ID for DIV from dropped draggable name
                $("#place_red_area").append("<div id='" + groupId + "'></div>"); // append created DIV to Red area
                obj.table_icons(groupId, ui.draggable.attr('id') + "1", ui.draggable.attr('classimg'), imgSrc, 0, 0); //append img to DIV
                $("#" + groupId).draggable({ // make it draggable
                    containment: "#place_red_area",
                    cancel: "#place_yellow_area",
                    cursor: "pointer",
                    //revert: "invalid"
                });
                $("#" + groupId).css({
                    "position": "absolute",
                    "width": "80px",
                    "height": "20px",
                    "top": ui.draggable.position().top - 435,
                    "left": ui.draggable.position().left - 181,
                });
                ui.draggable.remove();
                obj.add_task(task_text_am.hint, 1);
                //----------------------------------Grass water on table-----------------------------------------------
                $("#place_blue_area").droppable({
                    tolerance: "pointer",
                    accept: "#grass_water",
                    scope: "second",
                    drop: function (event, ui){
                        imgSrc = ui.draggable.attr('src');
                        imgSrcArr = imgSrc.split("/");
                        imgSrc = imgSrcArr[imgSrcArr.length - 1];
                        $("#place_blue_area").append("<div id='" + ui.draggable.attr('id')+"1" + "'></div>");
                        obj.table_icons(ui.draggable.attr('id')+"1","grass_water",ui.draggable.attr('classimg'),imgSrc, 0, 0);
                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "rgba(0,0,0,0)");
                        $('#grass_water1').draggable({
                            containment: '#place_blue_area',
                            cancel: "#place_yellow_area",
                            cursor: "pointer"
                        });
                        $('#grass_water1').css({
                            "position": "absolute",
                            "width": "90px",
                            "height": "67px",
                            "top": ui.draggable.position().top - 371,
                            "left": ui.draggable.position().left - 581,
                        });
                        console.log(ui.draggable);
                        ui.draggable.remove();
                        obj.add_task(task_text_am.hint, 2);
                        //----------------------------------Pipette on Grass water-----------------------------------------------
                        $("#place_yellow_area").droppable({
                            tolerance: "pointer",
                            аccept: ".pipette",
                            drop: function (event, ui) {
                                imgSrc = ui.draggable.attr('src');
                                imgSrcArr = imgSrc.split("/");
                                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                //$("#pipette, #"+groupId).draggable("disable");
                                $("#grass_water1").append("<div id='" + ui.draggable.attr('id') + "1" + "'></div>");
                                obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc,0,0);
                                $('#pipette1').css({"position": 'absolute', "top": '-100px', "left": '12px'})
                                $('#pipette1').animate({top: '-60px'},500);
                                setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);                                
                                //$("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                setTimeout(function(){$("#pipette1").animate({top: '-100px'},500);}, 2500);
                                $('#pipette1').draggable({
                                        conteinment: "#container_workplace",
                                        revert: "invalid",
                                        cursor: "pointer",
                                });
                                ui.draggable.remove();
                                $("#place_yellow_area").remove();
                                obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                obj.add_task(task_text_am.hint, 3);
                                //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                $("#place_yellow_area").droppable({
                                    tolerance: "pointer",
                                    аccept: "#pipette1",
                                    drop: function (event, ui){
                                        $('#pipette1').appendTo("#drop_glass_group");
                                        $('#drop_glass_group').append('<img src="'+obj.path_icons+'elipse1.png" class="elipse">');                                
                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                        $('#pipette1').animate({top: '-80px'},500);
                                        setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif");}, 1000);
                                        setTimeout(function(){$(".elipse").animate({width: "20px"});},1000);
                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'},500).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1" style="position: absolute; left: 280px; top: 0px; ">')});}, 2000);
                                        obj.add_task(task_text_am.hint, 4);
                                        //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                        $("#place_yellow_area").droppable({
                                            tolerance: "pointer",
                                            accept: "#cover_glass",
                                            drop: function (event, ui){
                                                $("#cover_glass").appendTo("#drop_glass_group");
                                                $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                $("#cover_glass").draggable("disable");
                                                $("#place_yellow_area").appendTo("#place_red_area").css({
                                                    "width": "120px",
                                                    "height": "120px",
                                                    "position": "absolute",
                                                    "top": '-35px',
                                                    "left": '-100px' 
                                                });
                                                $("#" + groupId).draggable({ // make it draggable
                                                    containment: "#place_green_area",
                                                    cancel: "#place_yellow_area",
                                                    cursor: "pointer",
                                                    //revert: "invalid"
                                                });
                                                obj.img_icons_sorted();
                                                obj.add_task(task_text_am.hint, 5);
                                                //----------------------------------Drop Glass under microscope-----------------------------------------------
                                                $("#place_yellow_area").droppable({
                                                    tolerance: "pointer",
                                                    accept: "#drop_glass_group",
                                                    drop: function (event, ui){
                                                        obj.add_task(task_text_am.hint, 29);
                                                        $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                            $("#drop_glass_group").remove();});
                                                        $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass" style="position: absolute; left: 15px; top: 80px;">');
                                                        $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png" style="position: absolute; left: 144px; top: 81px;">');
                                                        $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                        $("#place_yellow_area").remove();
                                                        obj.img_icons_sorted();
                                                        $(".zoominout").bind("click",function(){
                                                                $(".zoominout").remove();
                                                                $("body").append(slider);
                                                                $("#slider").append(next).append(zoom_in).append(zoom_out);//.append(prev);
                                                                $('#zoom_in').bind("click", function(){                                                           
                                                                    zoom_coef++;
                                                                    if(zoom_coef<zoomArray1.length)
                                                                    {
                                                                        $('.slidePic').attr('src',zoomArray1[zoom_coef]);
                                                                    }
                                                                    else{
                                                                        zoom_coef--;
                                                                    }
                                                                });
                                                                $('#zoom_out').bind("click", function(){
                                                                    zoom_coef--;                                                                 
                                                                    if(zoom_coef<=0)
                                                                    {
                                                                        $('.slidePic').attr('src',photoArray[picCount]);
                                                                        zoom_coef =0;
                                                                    }
                                                                    else{
                                                                        $('.slidePic').attr('src',zoomArray1[zoom_coef]);
                                                                    }
                                                                });
                                                                $('#next').bind("click", function(){
                                                                    picCount++;
                                                                    if(picCount>=1){
                                                                        $('#slider').remove();
                                                                        $("#drop_glass").draggable({
                                                                            conteinment: "#container_workplace",
                                                                            revert: "invalid",
                                                                            cursor: "pointer",
                                                                            //scope: "second",
                                                                            zIndex: 21,
                                                                        })
                                                                        $("#cover_glass").draggable({
                                                                            conteinment: "#container_workplace",
                                                                            revert: "invalid",
                                                                            cursor: "pointer",
                                                                        });
                                                                        $("#pipette").draggable({
                                                                            conteinment: "#container_workplace",
                                                                            revert: "invalid",
                                                                            cursor: "pointer",
                                                                        });

                                                                        $("#solt_water").draggable({
                                                                            conteinment: "#container_workplace",
                                                                            revert: "invalid",
                                                                            cursor: "pointer",                                                         
                                                                        });

                                                                        obj.add_task(task_text_am.hint, 6);
                                                                    }
                                                                    else{
                                                                        
                                                                        $('.slidePic').attr('src',photoArray[picCount]);
                                                                        console.log("i="+ picCount);
                                                                    }
                                                                });
                                                                /*$('#prev').bind("click", function(){
                                                                    (picCount-1<0)? picCount = picCount = 0 : picCount--;
                                                                    $('.slidePic').attr('src',photoArray[picCount]);
                                                                    console.log("i="+ picCount);                                                                    
                                                                });*/
                                                                
//------------------------------------------------------------------------------------------LAB 2 solt water activation-----------------------------------------------
                                                        //----------------------------------Make components draggable-----------------------------------------------    
                                                        
                                                        //----------------------------------Drop Glass on table-----------------------------------------------
                                                        $("#place_red_area").droppable({
                                                            accept: "#drop_glass",
                                                            tolerance: "fit",
                                                            drop: function (event, ui) {
                                                                // find the img source
                                                                imgSrc = ui.draggable.attr('src');
                                                                imgSrcArr = imgSrc.split("/");
                                                                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                var groupId = ui.draggable.attr('id') + "_group"; // create ID for DIV from dropped draggable name
                                                                $("#place_red_area").append("<div id='" + groupId + "'></div>"); // append created DIV to Red area
                                                                obj.table_icons(groupId, ui.draggable.attr('id') + "1", ui.draggable.attr('classimg'), imgSrc, 0, 0); //append img to DIV
                                                                $("#" + groupId).draggable({ // make it draggable
                                                                    containment: "#place_red_area",
                                                                    cancel: "#place_yellow_area",
                                                                    cursor: "pointer",
                                                                });
                                                                $("#" + groupId).css({
                                                                    "position": "absolute",
                                                                    "width": "80px",
                                                                    "height": "20px",
                                                                    "top": ui.draggable.position().top - 435,
                                                                    "left": ui.draggable.position().left - 181,
                                                                });
                                                                ui.draggable.remove();
                                                                obj.add_task(task_text_am.hint, 7);
                                                                //----------------------------------Solt Water on table-----------------------------------------------
                                                                $("#place_aqua_area").droppable({
                                                                    tolerance: "pointer",
                                                                    accept: "#solt_water",
                                                                    //scope: "second",
                                                                    drop: function (event, ui){
                                                                        imgSrc = ui.draggable.attr('src');
                                                                        imgSrcArr = imgSrc.split("/");
                                                                        imgSrc = imgSrcArr[imgSrcArr.length - 1].split(".")[0]+"_opened.png";
                                                                        $("#place_aqua_area").append("<div id='" + ui.draggable.attr('id')+"1" + "'></div>");
                                                                        obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc, 0, 0);                                                                            
                                                                        console.log(ui.draggable.attr('id')+"1");
                                                                        $('#'+ui.draggable.attr('id')+"1").draggable({
                                                                            containment: '#place_aqua_area',
                                                                            cancel: "#place_yellow_area",
                                                                            cursor: "pointer"
                                                                        });
                                                                        $('#'+ui.draggable.attr('id')+"1").addClass(ui.draggable.attr('classimg'));
                                                                        $('#'+ui.draggable.attr('id')+"1").css({
                                                                            "z-Index": "25",
                                                                            "position": "absolute",
                                                                            "top": ui.draggable.position().top -360,
                                                                            "left": ui.draggable.position().left -181,
                                                                        });
                                                                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "rgba(0,0,0,0)");
                                                                        ui.draggable.remove();
                                                                        obj.add_task(task_text_am.hint, 8);
                                                                        //----------------------------------Pipette on Grass Water-----------------------------------------------
                                                /*----->>>*/                $("#place_yellow_area").droppable({
                                                                                tolerance: "pointer",
                                                                                аccept: ".pipette",
                                                                                drop: function (event, ui) {
                                                                                    imgSrc = ui.draggable.attr('src');
                                                                                    imgSrcArr = imgSrc.split("/");
                                                                                    imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                    //$("#pipette, #"+groupId).draggable("disable");
                                                                                    $("#grass_water1").append("<div id='" + ui.draggable.attr('id') + "1" + "'></div>");
                                                                                    obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc,0,0);
                                                                                    //$("#grass_water1").draggable("disable");
                                                                                    $('#pipette1').css({"position": 'absolute', "top": '-100px', "left": '12px'})
                                                                                    $('#pipette1').animate({top: '-60px'},500);
                                                                                    setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);                                
                                                                                    //$("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                                                                    setTimeout(function(){$("#pipette1").animate({top: '-100px'},500);}, 2500);
                                                                                    $('#pipette1').draggable({
                                                                                        conteinment: "#container_workplace",
                                                                                        revert: "invalid",
                                                                                        cursor: "pointer",
                                                                                    });
                                                                                    ui.draggable.remove();
                                                                                    $("#place_yellow_area").remove();
                                                                                    obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                    obj.add_task(task_text_am.hint, 9);
                                                                                    //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                                                                    $("#place_yellow_area").droppable({
                                                                                        tolerance: "pointer",
                                                                                        аccept: "#pipette1",
                                                                                        drop: function (event, ui) {
                                                                                            $("#pipette1").appendTo("#drop_glass_group");
                                                                                            $('#drop_glass_group').append('<img src="'+obj.path_icons+'elipse1.png" class="elipse">');
                                                                                            $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                                                                            $('#pipette1').animate({top: '-80px'},500);
                                                                                            setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif");}, 1000);
                                                                                            setTimeout(function(){$(".elipse").animate({width: "20px"});},1000);
                                                                                            setTimeout(function(){$("#pipette1").animate({top: '-100px'},500)}, 2000);
                                                                                            $("#place_yellow_area").remove();
                                                                                            obj.places("solt_water1", "place_yellow_area", 40, 40, -30, 6, "rgba(0,0,0,0)");
                                                                                            $('#pipette1').draggable({
                                                                                                conteinment: "#container_workplace",
                                                                                                revert: "invalid",
                                                                                                cursor: "pointer",
                                                                                            });
                                                                                            obj.add_task(task_text_am.hint, 10);
                                                                                            //----------------------------------Pipette on Solt Water-----------------------------------------------
                                                                                            $("#place_yellow_area").droppable({
                                                                                                tolerance: "pointer",
                                                                                                accept: "#pipette1",
                                                                                                drop: function (event, ui) {
                                                                                                    $("#pipette1").appendTo("#solt_water1");
                                                                                                    $('#pipette1').css({"position": 'absolute', top: '-75px', left: '20px'});
                                                                                                    $("#pipette1").animate({top: '-50px'});
                                                                                                    setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);
                                                                                                    setTimeout(function(){$("#pipette1").animate({top: '-75px'},500);}, 2500);
                                                                                                    obj.add_task(task_text_am.hint, 11);
                                                                                                    $("#place_yellow_area").remove();
                                                                                                    obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                //----------------------------------Pipette on Drop Glass-----------------------------------------------    
                                                                                                $("#place_yellow_area").droppable({
                                                                                                    tolerance: "pointer",
                                                                                                    аccept: ".pipette1",
                                                                                                    drop: function (event, ui) {
                                                                                                        $("#pipette1").appendTo("#drop_glass_group");
                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                                                                                        $('#pipette1').animate({top: '-80px'},500);
                                                                                                        setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif")}, 1000);
                                                                                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'},500)}, 2000);
                                                                                                        $("#place_yellow_area").remove();
                                                                                                        obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1" style="position: absolute; left: 280px; top: 0px;">')})}, 2750);
                                                                                                        obj.add_task(task_text_am.hint, 12);
                                                                                                        //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                                                                                        $("#place_yellow_area").droppable({
                                                                                                            tolerance: "pointer",
                                                                                                            accept: "#cover_glass",
                                                                                                            drop: function (event, ui) {
                                                                                                                $("#cover_glass").appendTo("#drop_glass_group");
                                                                                                                $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                                                                                    /*ui.draggable.css({
                                                                                                                        top: ,
                                                                                                                        left: 12,
                                                                                                                        //"z-index": "20"
                                                                                                                    });*/
                                                                                                                $("#cover_glass").draggable("disable");
                                                                                                                $("#place_yellow_area").appendTo("#place_red_area").css({
                                                                                                                    "width": "120px",
                                                                                                                    "height": "120px",
                                                                                                                    "position": "absolute",
                                                                                                                    "top": '-35px' ,
                                                                                                                    "left": '-100px' 
                                                                                                                });
                                                                                                                $("#" + groupId).draggable({ // make it draggable
                                                                                                                    containment: "#place_green_area",
                                                                                                                    cancel: "#place_yellow_area",
                                                                                                                    cursor: "pointer",
                                                                                                                    //revert: "invalid"
                                                                                                                });
                                                                                                                obj.add_task(task_text_am.hint, 13);
                                                                                                                //----------------------------------Drop Glass under microscope-----------------------------------------------
                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                    tolerance: "pointer",
                                                                                                                    accept: "#drop_glass_group",
                                                                                                                    drop: function (event, ui){
                                                                                                                        $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                                                                                        $("#drop_glass_group").remove();
                                                                                                                        });
                                                                                                                        $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass" style="position: absolute; left: 15px; top: 80px;">');
                                                                                                                        $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png" style="position: absolute; left: 144px; top: 81px;">');
                                                                                                                        $("#solt_water1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('աղի')").siblings().append('<img id="solt_water" class="tab_icons solt_water ui-draggable ui-draggable-handle" src="assets/app/img/solt_water.png" classimg="glass_stick1" style="position: absolute; left: 144px; top: 0px;">')});
                                                                                                                        $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                        $(".zoominout").bind("click",function(){
                                                                                                                            obj.img_icons_sorted();
                                                                                                                                $(".zoominout").remove();
                                                                                                                                $("body").append(slider);
                                                                                                                                $("#slider").append(next);
                                                                                                                                $('.slidePic').attr('src',photoArray[1])
                                                                                                                                $('#next').bind("click", function(){
                                                                                                                                    $('#slider').remove();
                                                                                                                                    $("#drop_glass").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                        zIndex: 21,
                                                                                                                                    })
                                                                                                                                    $("#cover_glass").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                    });
                                                                                                                                    $("#glass_stick").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                    });
                                                                                                                                    $("#pipette").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                    });
                                                                                                                                    $("#yeast").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                    });
                                                                                                                                    $("#solt_water").draggable({
                                                                                                                                        conteinment: "#container_workplace",
                                                                                                                                        revert: "invalid",
                                                                                                                                        cursor: "pointer",
                                                                                                                                    });
                                                                                                                                    obj.add_task(task_text_am.hint, 14);
                                                                                                                                });
                                                                                                                                
//----------------------------------------------------------------------------------------------------------------------LAB 3 feeding yeast---------------------------------------------
                                                                                    //----------------------------------Make components draggable-----------------------------------------------                                                                                                                           
                                                                                                                        //----------------------------------Drop Glass on table-----------------------------------------------
                                                                                                                        $("#place_red_area").droppable({
                                                                                                                            accept: "#drop_glass",
                                                                                                                            tolerance: "fit",
                                                                                                                            drop: function (event, ui) {
                                                                                                                                imgSrc = ui.draggable.attr('src');
                                                                                                                                imgSrcArr = imgSrc.split("/");
                                                                                                                                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                var groupId = ui.draggable.attr('id') + "_group"; // create ID for DIV from dropped draggable name
                                                                                                                                $("#place_red_area").append("<div id='" + groupId + "'></div>"); // append created DIV to Red area
                                                                                                                                obj.table_icons(groupId, ui.draggable.attr('id') + "1", ui.draggable.attr('classimg'), imgSrc, 0, 0); //append img to DIV
                                                                                                                                $("#" + groupId).draggable({ // make it draggable
                                                                                                                                    containment: "#place_red_area",
                                                                                                                                    cancel: "#place_yellow_area",
                                                                                                                                    cursor: "pointer",
                                                                                                                                });
                                                                                                                                $("#" + groupId).css({
                                                                                                                                    "position": "absolute",
                                                                                                                                    "width": "80px",
                                                                                                                                    "height": "20px",
                                                                                                                                    "top": ui.draggable.position().top - 435,
                                                                                                                                    "left": ui.draggable.position().left - 181,
                                                                                                                                });
                                                                                                                                ui.draggable.remove();
                                                                                                                                obj.add_task(task_text_am.hint, 15);
                                                                                                                                //----------------------------------Yeast on table-----------------------------------------------
                                                                                                                                $("#place_aqua_area").droppable({
                                                                                                                                    tolerance: "pointer",
                                                                                                                                    accept: "#yeast",
                                                                                                                                    //scope: "second",
                                                                                                                                    drop: function (event, ui){
                                                                                                                                        imgSrc = ui.draggable.attr('src');
                                                                                                                                        imgSrcArr = imgSrc.split("/");
                                                                                                                                        imgSrc = imgSrcArr[imgSrcArr.length - 1].split(".")[0]+"_opened.png";
                                                                                                                                        $("#place_aqua_area").append("<div id='" + ui.draggable.attr('id')+"1" + "'></div>");
                                                                                                                                        obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc, 0, 0);
                                                                                                                                        console.log(ui.draggable.attr('id')+"1");
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").draggable({
                                                                                                                                            containment: '#place_red_area',
                                                                                                                                            cancel: "#place_yellow_area",
                                                                                                                                            cursor: "pointer"
                                                                                                                                        });
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").addClass(ui.draggable.attr('classimg'));
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").css({
                                                                                                                                            "z-Index": "25",
                                                                                                                                            "position": "absolute",
                                                                                                                                            "top": ui.draggable.position().top -360,
                                                                                                                                            "left": ui.draggable.position().left -181,
                                                                                                                                        });
                                                                                                                                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "rgba(0,0,0,0)");
                                                                                                                                        ui.draggable.remove();
                                                                                                                                        obj.add_task(task_text_am.hint, 16);
                                                                                                                                        $("#glass_stick").draggable({
                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                            revert: "invalid",
                                                                                                                                            cursor: "pointer",                                                                                                                                            
                                                                                                                                        });
                                                                                                                                        //----------------------------------Pipette on Grass water-----------------------------------------------
                                                                                                                /*----->>>*/            $("#place_yellow_area").droppable({
                                                                                                                                            tolerance: "pointer",
                                                                                                                                            accept: "#pipette",
                                                                                                                                            drop: function (event, ui) {
                                                                                                                                                imgSrc = ui.draggable.attr('src');
                                                                                                                                                imgSrcArr = imgSrc.split("/");
                                                                                                                                                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                                $("#grass_water1").append("<div id='" + ui.draggable.attr('id') + "1" + "'></div>");
                                                                                                                                                obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc,0,0);                                                                                                                                                
                                                                                                                                                $('#pipette1').css({"position": 'absolute', "top": '-100px', "left": '12px'})
                                                                                                                                                $('#pipette1').animate({top: '-60px'},500);
                                                                                                                                                setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);                                
                                                                                                                                                //$("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                                                                                                                                setTimeout(function(){$("#pipette1").animate({top: '-100px'},500);}, 2500);
                                                                                                                                                $('#pipette1').draggable({
                                                                                                                                                    conteinment: "#container_workplace",
                                                                                                                                                    revert: "invalid",
                                                                                                                                                    cursor: "pointer",
                                                                                                                                                });
                                                                                                                                                ui.draggable.remove();
                                                                                                                                                $("#place_yellow_area").remove();
                                                                                                                                                obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                                                                obj.add_task(task_text_am.hint, 17);
                                                                                                                                                //----------------------------------Pipette on drop glass-----------------------------------------------
                                                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                                                    tolerance: "pointer",
                                                                                                                                                    accept: "#pipette1",
                                                                                                                                                    drop: function (event, ui) {
                                                                                                                                                        $("#pipette1").appendTo("#drop_glass_group");
                                                                                                                                                        $('#drop_glass_group').append('<img src="'+obj.path_icons+'elipse1.png" class="elipse">');
                                                                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                                                                                                                                        $('#pipette1').animate({top: '-80px'},500);
                                                                                                                                                        setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif");}, 1000);
                                                                                                                                                        setTimeout(function(){$(".elipse").animate({width: "20px"});},1000);
                                                                                                                                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'},500)}, 2000);
                                                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                                                        obj.places("yeast1", "place_yellow_area", 40, 40, -30, 6, "rgba(0,0,0,0)");
                                                                                                                                                        $('#pipette1').draggable({
                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                            revert: "invalid",
                                                                                                                                                            cursor: "pointer",
                                                                                                                                                        });
                                                                                                                                                        obj.add_task(task_text_am.hint, 18);
                                                                                                                                                        //----------------------------------Pipette on Yeast-----------------------------------------------
                                                                                                                                                        $("#place_yellow_area").droppable({
                                                                                                                                                            tolerance: "pointer",
                                                                                                                                                            accept: "#pipette1",
                                                                                                                                                            drop: function (event, ui) {
                                                                                                                                                                $("#pipette1").appendTo("#yeast1");
                                                                                                                                                                $('#pipette1').css({"position": 'absolute', top: '-75px', left: '20px'});
                                                                                                                                                                $("#pipette1").animate({top: '-50px'});
                                                                                                                                                                setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);
                                                                                                                                                                setTimeout(function(){$("#pipette1").animate({top: '-75px'},500);}, 2500);
                                                                                                                                                                obj.add_task(task_text_am.hint, 19);
                                                                                                                                                                $("#place_yellow_area").remove();
                                                                                                                                                                obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                                                                                //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                                                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                                                                    tolerance: "pointer",
                                                                                                                                                                    accept: "#pipette1",
                                                                                                                                                                    drop: function (event, ui) {
                                                                                                                                                                        $("#pipette1").appendTo("#drop_glass_group");
                                                                                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                                                                                                                                                        $('#pipette1').animate({top: '-80px'},500);
                                                                                                                                                                        setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif")}, 1000);
                                                                                                                                                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'},500)}, 2000);
                                                                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                                                                        obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                                                                                        setTimeout(function(){$("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1" style="position: absolute; left: 280px; top: 0px;">')})}, 2750);
                                                                                                                                                                        obj.add_task(task_text_am.hint, 20);
                                                                                                                                                                        //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                                                                                                                                                        $("#place_yellow_area").droppable({
                                                                                                                                                                            tolerance: "pointer",
                                                                                                                                                                            accept: "#cover_glass",
                                                                                                                                                                            drop: function (event, ui) {
                                                                                                                                                                                $("#cover_glass").appendTo("#drop_glass_group");
                                                                                                                                                                                $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                                                                                                                                                    /*ui.draggable.css({
                                                                                                                                                                                        top:,
                                                                                                                                                                                        left: 12,
                                                                                                                                                                                        //"z-index": "20"
                                                                                                                                                                                    });*/
                                                                                                                                                                                $("#cover_glass").draggable("disable");
                                                                                                                                                                                $("#place_yellow_area").appendTo("#place_red_area").css({
                                                                                                                                                                                    "width": "120px",
                                                                                                                                                                                    "height": "120px",
                                                                                                                                                                                    "position": "absolute",
                                                                                                                                                                                    "top": '-35px' ,
                                                                                                                                                                                    "left": '-100px' 
                                                                                                                                                                                });
                                                                                                                                                                                $("#" + groupId).draggable({ // make it draggable
                                                                                                                                                                                    containment: "#place_green_area",
                                                                                                                                                                                    cancel: "#place_yellow_area",
                                                                                                                                                                                    cursor: "pointer",
                                                                                                                                                                                    //revert: "invalid"
                                                                                                                                                                                });
                                                                                                                                                                                obj.add_task(task_text_am.hint, 21);
                                                                                                                                                                                    $("#place_yellow_area").droppable({
                                                                                                                                                                                        tolerance: "pointer",
                                                                                                                                                                                        accept: "#drop_glass_group",
                                                                                                                                                                                        drop: function (event, ui){
                                                                                                                                                                                            $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                                                                                                                                                                $("#drop_glass_group").remove();});
                                                                                                                                                                                            $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass" style="position: absolute; left: 15px; top: 80px;">');
                                                                                                                                                                                            $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png" style="position: absolute; left: 144px; top: 81px;">');
                                                                                                                                                                                            $("#yeast1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('սնկախմոր')").siblings().append('<img id="yeast" class="tab_icons solt_water ui-draggable ui-draggable-handle" src="assets/app/img/yeast.png" classimg="solt_water" style="position: absolute; left: 25px; top: 0px;">')});
                                                                                                                                                                                            $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                                                                                                                                                            $("#place_yellow_area").remove();
                                                                                                                                                                                            $(".zoominout").bind("click",function(){
                                                                                                                                                                                                    $(".zoominout").remove();
                                                                                                                                                                                                    $("body").append(slider);
                                                                                                                                                                                                    $("#slider").append(next);
                                                                                                                                                                                                    $('.slidePic').attr('src',photoArray[2]);
                                                                                                                                                                                                    $('#next').bind("click", function(){
                                                                                                                                                                                                        $('#slider').remove();
                                                                                                                                                                                                        $("#drop_glass").draggable({
                                                                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                                                                            revert: "invalid",
                                                                                                                                                                                                            cursor: "pointer",
                                                                                                                                                                                                            zIndex: 21,
                                                                                                                                                                                                        });
                                                                                                                                                                                                        $("#cover_glass").draggable({
                                                                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                                                                            revert: "invalid",
                                                                                                                                                                                                            cursor: "pointer",
                                                                                                                                                                                                        });
                                                                                                                                                                                                        $("#cotton").draggable({
                                                                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                                                                            revert: "invalid",
                                                                                                                                                                                                            cursor: "pointer",
                                                                                                                                                                                                        });
                                                                                                                                                                                                        $("#pipette").draggable({
                                                                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                                                                            revert: "invalid",
                                                                                                                                                                                                            cursor: "pointer",
                                                                                                                                                                                                        });
                                                                                                                                                                                                        obj.add_task(task_text_am.hint, 29);
                                                                                                                                                                                                    });
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------LAB 4 COTTON-------------------------------------------------------------------------------------------    
                                                                                                                                                                                            //--------------Preparing lab 4---------------------------------------------------------------------------------------- 
                                                                                                                                                                                            
                                                                                                                                                                                            //----------------------------------Drop glass on table-----------------------------------------------
                                                                                                                                                                                            $("#place_red_area").droppable({
                                                                                                                                                                                                accept: "#drop_glass",
                                                                                                                                                                                                tolerance: "fit",
                                                                                                                                                                                                drop: function (event, ui) {
                                                                                                                                                                                                    // find the img source
                                                                                                                                                                                                    imgSrc = ui.draggable.attr('src');
                                                                                                                                                                                                    imgSrcArr = imgSrc.split("/");
                                                                                                                                                                                                    imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                                                                                    var groupId = ui.draggable.attr('id') + "_group"; // create ID for DIV from dropped draggable name
                                                                                                                                                                                                    $("#place_red_area").append("<div id='" + groupId + "'></div>"); // append created DIV to Red area
                                                                                                                                                                                                    obj.table_icons(groupId, ui.draggable.attr('id') + "1", ui.draggable.attr('classimg'), imgSrc, 0, 0); //append img to DIV
                                                                                                                                                                                                    $("#" + groupId).draggable({ // make it draggable
                                                                                                                                                                                                        containment: "#place_red_area",
                                                                                                                                                                                                        cancel: "#place_yellow_area",
                                                                                                                                                                                                        cursor: "pointer",
                                                                                                                                                                                                    });
                                                                                                                                                                                                    $("#" + groupId).css({
                                                                                                                                                                                                        "position": "absolute",
                                                                                                                                                                                                        "width": "80px",
                                                                                                                                                                                                        "height": "20px",
                                                                                                                                                                                                        "top": ui.draggable.position().top - 435,
                                                                                                                                                                                                        "left": ui.draggable.position().left - 181,
                                                                                                                                                                                                    });
                                                                                                                                                                                                    ui.draggable.remove();
                                                                                                                                                                                                    obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "rgba(0,0,0,0)");
                                                                                                                                                                                                    obj.add_task(task_text_am.hint, 23);
                                                                                                                                                                                                    //----------------------------------Pipette on Grass water-----------------------------------------------
                                                                                                                                                                                                            $("#place_yellow_area").droppable({
                                                                                                                                                                                                                tolerance: "pointer",
                                                                                                                                                                                                                аccept: "#pipette",
                                                                                                                                                                                                                drop: function (event, ui) {
                                                                                                                                                                                                                    imgSrc = ui.draggable.attr('src');
                                                                                                                                                                                                                    imgSrcArr = imgSrc.split("/");
                                                                                                                                                                                                                    imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                                                                                                    //$("#pipette, #"+groupId).draggable("disable");
                                                                                                                                                                                                                    $("#grass_water1").append("<div id='" + ui.draggable.attr('id') + "1" + "'></div>");
                                                                                                                                                                                                                    obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc,0,0);
                                                                                                                                                                                                                    $('#pipette1').css({"position": 'absolute', "top": '-100px', "left": '12px'})
                                                                                                                                                                                                                    $('#pipette1').animate({top: '-60px'},500);
                                                                                                                                                                                                                    setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"lcvel.gif");}, 750);
                                                                                                                                                                                                                    setTimeout(function(){$("#pipette1").animate({top: '-100px'},500);}, 2500);
                                                                                                                                                                                                                    $('#pipette1').draggable({
                                                                                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                                                                                            revert: "invalid",
                                                                                                                                                                                                                            cursor: "pointer",
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                    ui.draggable.remove();
                                                                                                                                                                                                                    $("#place_yellow_area").remove();
                                                                                                                                                                                                                    obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "rgba(0,0,0,0)");
                                                                                                                                                                                                                    obj.add_task(task_text_am.hint, 24);
                                                                                                                                                                                                                    //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                                                                                                                                                                                                    $("#place_yellow_area").droppable({
                                                                                                                                                                                                                        tolerance: "pointer",
                                                                                                                                                                                                                        аccept: "#pipette1",
                                                                                                                                                                                                                        drop: function (event, ui) {
                                                                                                                                                                                                                            $("#pipette1").appendTo("#drop_glass_group");
                                                                                                                                                                                                                            $('#drop_glass_group').append('<img src="'+obj.path_icons+'elipse1.png" class="elipse">');
                                                                                                                                                                                                                            $('#pipette1').css({"position": 'absolute', top: '-100px', left: '32px'});
                                                                                                                                                                                                                            $('#pipette1').animate({top: '-80px'},500);
                                                                                                                                                                                                                            setTimeout(function(){$('#pipette').attr("src",obj.path_icons+"tapvel.gif");}, 1000);
                                                                                                                                                                                                                            //$(".elipse").css({"visibility": "visible"});
                                                                                                                                                                                                                            setTimeout(function(){$(".elipse").animate({width: "20px"});},1000);
                                                                                                                                                                                                                            setTimeout(function(){$("#pipette1").animate({top: '-100px'},500).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1" style="position: absolute; left: 260px; top: 0px;">')});}, 2000);
                                                                                                                                                                                                                            obj.add_task(task_text_am.hint, 25);
                                                                                                                                                                                                                            //----------------------------------Cotton on table-----------------------------------------------
                                                                                                                                                                                                                            $("#place_yellow_area").droppable({
                                                                                                                                                                                                                                tolerance: "pointer",
                                                                                                                                                                                                                                accept: "#cotton",
                                                                                                                                                                                                                                drop: function (event, ui){
                                                                                                                                                                                                                                $('#pipette1').remove();
                                                                                                                                                                                                                                imgSrc = ui.draggable.attr('src');
                                                                                                                                                                                                                                imgSrcArr = imgSrc.split("/");
                                                                                                                                                                                                                                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                                                                                                                $("#drop_glass_group").append("<div id='" + ui.draggable.attr('id') + "1" + "'></div>");
                                                                                                                                                                                                                                obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc,0,0);
                                                                                                                                                                                                                                $('#cotton1').css({"position": 'absolute', top: '-23px', left: '23px',});
                                                                                                                                                                                                                                ui.draggable.remove();
                                                                                                                                                                                                                                obj.add_task(task_text_am.hint, 26);
                                                                                                                                                                                                                            //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                                                                                                                                                                                                            $("#place_yellow_area").droppable({
                                                                                                                                                                                                                                tolerance: "pointer",
                                                                                                                                                                                                                                accept: "#cover_glass",
                                                                                                                                                                                                                                drop: function (event, ui) {
                                                                                                                                                                                                                                    $("#cover_glass").appendTo("#drop_glass_group");
                                                                                                                                                                                                                                    $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                                                                                                                                                                                                        /*ui.draggable.css({
                                                                                                                                                                                                                                            top: ,
                                                                                                                                                                                                                                            left: 12,
                                                                                                                                                                                                                                            //"z-index": "20"
                                                                                                                                                                                                                                        });*/
                                                                                                                                                                                                                                    $("#cover_glass").draggable("disable");
                                                                                                                                                                                                                                    $("#place_yellow_area").appendTo("#place_red_area").css({
                                                                                                                                                                                                                                        "width": "120px",
                                                                                                                                                                                                                                        "height": "120px",
                                                                                                                                                                                                                                        "position": "absolute",
                                                                                                                                                                                                                                        "top": '-35px' ,
                                                                                                                                                                                                                                        "left": '-100px' 
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                    $("#" + groupId).draggable({ // make it draggable
                                                                                                                                                                                                                                        containment: "#place_green_area",
                                                                                                                                                                                                                                        cancel: "#place_yellow_area",
                                                                                                                                                                                                                                        cursor: "pointer",
                                                                                                                                                                                                                                        //revert: "invalid"
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                    //setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);
                                                                                                                                                                                                                                    $("#cotton1").remove()
                                                                                                                                                                                                                                    obj.add_task(task_text_am.hint, 27);
                                                                                                                                                                                                                                    //----------------------------------Drop Glass under microscope-----------------------------------------------
                                                                                                                                                                                                                                    $("#place_yellow_area").droppable({
                                                                                                                                                                                                                                        tolerance: "pointer",
                                                                                                                                                                                                                                        accept: "#drop_glass_group",
                                                                                                                                                                                                                                        drop: function (event, ui){
                                                                                                                                                                                                                                            $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                                                                                                                                                                                                                $("#drop_glass_group").remove();});
                                                                                                                                                                                                                                                $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass" style="position: absolute; left: 6px; top: 80px;">');
                                                                                                                                                                                                                                                $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png" style="position: absolute; left: 128.5px; top: 81px;">');
                                                                                                                                                                                                                                                $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                                                                                                                                                                                                                $("#place_yellow_area").remove();
                                                                                                                                                                                                                                                $(".zoominout").bind("click",function(){
                                                                                                                                                                                                                                                    $(".zoominout").remove();
                                                                                                                                                                                                                                                    $('body').append(slider);
                                                                                                                                                                                                                                                    $("#slider").append(next);
                                                                                                                                                                                                                                                    $('.slidePic').attr('src',photoArray[3]);
                                                                                                                                                                                                                                                    $('#next').bind("click", function(){
                                                                                                                                                                                                                                                    picCount++;
                                                                                                                                                                                                                                                    if(picCount=photoArray.length){
                                                                                                                                                                                                                                                        $('#slider').remove();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                        else
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                            $('.slidePic').attr('src',photoArray[3]);  
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                }
                                                                                                                                                                                                            });
                                                                                                                                                                                                        }
                                                                                                                                                                                                    });
                                                                                                                                                                                                }
                                                                                                                                                                                            });
                                                                                                                                                                                                     //----------- END COTTON
                                                                                                                                                                                                     }) 
                                                                                                                                                                                            }
                                                                                                                                                                                        });
                                                                                                                                                                                    }
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        });
                                                                                                                                                                    }
                                                                                                                                                                });
                                                                                                                                                            }
                                                                                                                                                        });
                                                                                                                                                    }
                                                                                                                                                });
                                                                                                                                            }
                                                                                                                                        });
                                                                                                                                    }
                                                                                                                                });    
                                                                           //-----------END GLASS STICK                                                     
                                                                                                                                
                                                                                                                            });
                                                                                                                        }
                                                                                                                    });
                                                                                                            }
                                                                                                        });
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            });
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });

                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

      

        
                   
    } /// end lab 0701 ///