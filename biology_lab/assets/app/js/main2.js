///////// lab 0701 ///////

var lab_work = function () {
        var obj = new LaboratoryWork();

        //--------adding tab icons with arguments(id, class_name, class_img, img)----------//

        obj.tab_icons("drop_glass", "tab_menu2", "drop_glass", "glass_113x17.png");
        obj.tab_icons("cover_glass", "tab_menu2", "cover_glass", "cover_glass_55x19.png");
        obj.tab_icons("glass_stick", "tab_menu2", "glass_stick", "pipette_empty.png");
        obj.tab_icons("pipette", "tab_menu2", "pipette1", "img106.png");
        obj.tab_icons("cotton", "tab_menu3", "cotton1", "cotton.png");
        obj.tab_icons("yeast", "tab_menu1", "solt_water", "yeast.png");
        obj.tab_icons("solt_water", "tab_menu1", "solt_water", "img68.png");
        obj.tab_icons("grass_water", "tab_menu1", "grass_water", "cap1.png");
        obj.table_icons("part_laboratory", "microscope", "microscope", "microscope.png", "180", "50");


        //--------adding places in table with arguments(where, id, width, height, top, left, color)----------//
        obj.places("part_laboratory", "place_red_area", 400, 86, 304, 180, "red");
        obj.places("part_laboratory", "place_blue_area", 184, 150, 240, 581, "blue");
        obj.places("part_laboratory", "place_green_area", 80, 10, 304, 85, "green");
    
    var picCount=0;
            var arrfoto = ["assets/app/img/img111.png",
                           "assets/app/img/img112.png",
                           "assets/app/img/img113.png",
                           "assets/app/img/img114.png",
                           "assets/app/img/img115.png",
                           ];
    /*function makeSlider(parent_ID)
    {
        $(parent_ID).append(
        
        ..)
    }*/
    function GetDraggedSrc(dragged_id) //ui.draggable
    {
        var imgSrc = dragged_id.attr('src');
        var imgSrcArr = imgSrc.split("/");
        imgSrc = imgSrcArr[imgSrcArr.length-1];     
        return imgSrc;
    }
    
function DropEvent(draggableID, parentID, dragTop, dragLeft){
    if(!typeof(dragTop)==='undefined')
    if(typeof(dragLeft)==='undefined')
    var imgSrcArr = draggableID.attr('src').split("/");
    var imgSrc = imgSrcArr[imgSrcArr.length - 1];
    $('#'+parentID).append("<div id='" + draggableID.attr('id')+'1' + "'></div>");
    obj.table_icons(draggableID.attr('id')+'1',draggableID.attr('id'),draggableID.attr('classimg'),imgSrc, 0, 0);                                                                            
    $('#'+draggableID.attr('id')+"1").draggable({
        containment: '#place_red_area',
        cancel: '#place_yellow_area',
        cursor: 'pointer'
    });
    $('#'+draggableID.attr('id')+"1").addClass(draggableID.attr('classimg'));
    $('#'+draggableID.attr('id')+"1").css({
        "position": 'absolute',
        "top": draggableID.position().top - dragTop,
        "left": draggableID.position().left - dragLeft,
    });
    ui.draggable.remove();
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
            tolerance: "fit",
            drop: function (event, ui) {
                DropEvent(ui.draggable, '#place_red_area', 435, 181);

                obj.add_task(task_text_am.hint, 1);
                //----------------------------------Grass water on table-----------------------------------------------
                $("#place_blue_area").droppable({
                    tolerance: "pointer",
                    accept: "#grass_water",
                    scope: "second",
                    drop: function (event, ui){
                        DropEvent(ui.draggable, '#place_blue_area', 371, 581);
                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "yellow");
                        obj.add_task(task_text_am.hint, 2);
                        //----------------------------------Pipette on Grass water-----------------------------------------------
                        $("#place_yellow_area").droppable({
                            tolerance: "pointer",
                            аccept: "#pipette",
                            drop: function (event, ui) {
                                DropEvent(ui.draggable, '#grass_water1', 371, 581);
                                $('#pipette1').css({
                                    "position": 'absolute',
                                    "top": '-60px'
                                }).animate({top: '-35px'});
                                /*
                                setTimeout(function () {
                                    $("#pipette").attr("src", obj.path_icons + "material_1_fill_1_ani.gif");
                                }, 100);
                                $("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                $("#pipette").animate({top: '-60px'});*/
                                $("#place_yellow_area").remove();
                                obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "yellow");
                                obj.add_task(task_text_am.hint, 3);
                                //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                $("#place_yellow_area").droppable({
                                    tolerance: "pointer",
                                    аccept: "#pipette1",
                                    drop: function (event, ui) {
                                        DropEvent(ui.draggable, '#drop_glass1', 371, 581);
                                        
                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                        $("#pipette1").animate({top: '-75px'});
                                        /* setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                        setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+
                                                                                        "material_1_fill_1_ani.gif");},100);*/
                                        $("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1">')});
                                        obj.add_task(task_text_am.hint, 4);
                                        //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                        $("#place_yellow_area").droppable({
                                            tolerance: "pointer",
                                            accept: "#cover_glass",
                                            drop: function (event, ui) {
                                                DropEvent(ui.draggable, '#drop_glass1', 371, 581);
                                                
                                                $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                    /*ui.draggable.css({
                                                        top: ,
                                                        left: 12,
                                                        //"z-index": "20"
                                                    });*/
                                                $("#cover_glass").draggable("disable");
                                                $("#place_yellow_area").appendTo("#place_red_area").css({
                                                    "position": "absolute",
                                                    "top": '0px' ,
                                                    "left": '12px' 
                                                });
                                                obj.add_task(task_text_am.hint, 5);
                                                //----------------------------------Drop Glass under microscope-----------------------------------------------
                                                $("#place_yellow_area").droppable({
                                                    tolerance: "pointer",
                                                    accept: "#drop_glass_group",
                                                    drop: function (event, ui){
                                                        var slider = '<div id="slider"><img class="slidePic" src="assets/app/img/img151.png"></div>';
                                                        $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                            $("#drop_glass_group").remove();});
                                                        $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass">');
                                                        $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png">');
                                                        $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                        $("#place_yellow_area").remove();
                                                        $(".zoominout").bind("click",function(){
                                                                $(".zoominout").remove();
                                                                $("#part_laboratory").append(slider);
                                                                $('.slidePic').bind("click",function(){
                                                                picCount++;
                                                                if(picCount>=arrfoto.length){
                                                                    $('#slider').remove();
                                                                }
                                                                    else
                                                                    {
                                                                        $('.slidePic').attr('src',arrfoto[picCount]);  
                                                                    }
                                                                });
//------------------------------------------------------------------------------------------LAB 2 solt water activation-----------------------------------------------
                                                        //----------------------------------Make components draggable-----------------------------------------------    
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
                                                            //scope: "dropglass",
                                                        });
                                                        $("#pipette").draggable({
                                                            conteinment: "#container_workplace",
                                                            revert: "invalid",
                                                            cursor: "pointer",
                                                            //scope: "pipette",
                                                        });

                                                        $("#solt_water").draggable({
                                                            conteinment: "#container_workplace",
                                                            revert: "invalid",
                                                            cursor: "pointer",
                                                            //scope: "dropglass",
                                                        });
                                                        
                                                        obj.add_task(task_text_am.hint, 6);
                                                        //----------------------------------Drop Glass on table-----------------------------------------------
                                                        $("#place_red_area").droppable({
                                                            accept: "#drop_glass",
                                                            tolerance: "fit",
                                                            drop: function (event, ui) {
                                                                DropEvent(ui.draggable, '#place_red_area', 371, 581);                                                                
                                                                obj.add_task(task_text_am.hint, 7);
                                                                //----------------------------------Solt Water on table-----------------------------------------------
                                                                $("#place_red_area").droppable({
                                                                    tolerance: "pointer",
                                                                    accept: "#solt_water",
                                                                    //scope: "second",
                                                                    drop: function (event, ui){
                                                                        DropEvent(ui.draggable, '#place_red_area', 435, 181);
                                                                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "yellow");
                                                                        obj.add_task(task_text_am.hint, 8);
                                                                        //----------------------------------Pipette on Grass Water-----------------------------------------------
                                                /*----->>>*/                $("#place_yellow_area").droppable({
                                                                                tolerance: "pointer",
                                                                                аccept: ".pipette",
                                                                                drop: function (event, ui) {
                                                                                    DropEvent(ui.draggable, '#grass_water1', 371, 581);                                                                
                                                                                    $('#pipette1').css({
                                                                                        "position": 'absolute',
                                                                                        "top": '-60px'
                                                                                    }).animate({top: '-35px'});
                                                                                    /*setTimeout(function () { $("#pipette").attr("src", obj.path_icons + "material_1_fill_1_ani.gif");}, 100);
                                                                                    $("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                                                                    $("#pipette").animate({top: '-60px'});*/
                                                                                    $("#place_yellow_area").remove();
                                                                                    obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "yellow");
                                                                                    obj.add_task(task_text_am.hint, 9);
                                                                                    //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                                                                    $("#place_yellow_area").droppable({
                                                                                        tolerance: "pointer",
                                                                                        аccept: "#pipette1",
                                                                                        drop: function (event, ui) {
                                                                                            DropEvent(ui.draggable, '#drop_glass_group', -100, 20);   
                                                                                            
                                                                                            $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                                                                            $("#pipette1").animate({top: '-75px'});
                                                                                            /*setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                            setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                            $("#pipette1").animate({top: '-100px'});
                                                                                            $("#place_yellow_area").remove();
                                                                                            obj.places("solt_water1", "place_yellow_area", 40, 40, -25, 0, "yellow");
                                                                                            
                                                                                            obj.add_task(task_text_am.hint, 10);
                                                                                            //----------------------------------Pipette on Solt Water-----------------------------------------------
                                                                                            $("#place_yellow_area").droppable({
                                                                                                tolerance: "pointer",
                                                                                                accept: "#pipette1",
                                                                                                drop: function (event, ui) {
                                                                                                    DropEvent(ui.draggable, '#solt_water1', -100, 10);
                                                                                                    
                                                                                                    $('#pipette1').css({"position": 'absolute', top: '-100px', left: '10px'});
                                                                                                    $("#pipette1").animate({top: '-75px'});
                                                                                                    /*setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                                    setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                                    $("#pipette1").animate({top: '-100px'});
                                                                                                    obj.add_task(task_text_am.hint, 11);
                                                                                                    $("#place_yellow_area").remove();
                                                                                                    obj.places("drop_glass_group", "place_yellow_area", 40, 40, -25, 20, "yellow");
                                                                                                //----------------------------------Pipette on Drop Glass-----------------------------------------------    
                                                                                                $("#place_yellow_area").droppable({
                                                                                                    tolerance: "pointer",
                                                                                                    аccept: ".pipette1",
                                                                                                    drop: function (event, ui) {
                                                                                                        DropEvent(ui.draggable, '#drop_glass_group', -100, 20); 
                                                                                                        
                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                                                                                        $("#pipette1").animate({top: '-75px'});
                                                                                                        /*setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                                        setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                                        $("#place_yellow_area").remove();
                                                                                                        obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "yellow");
                                                                                                        $("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1">')});
                                                                                                        obj.add_task(task_text_am.hint, 12);
                                                                                                        //----------------------------------Cover Glass on Drop Glass-----------------------------------------------
                                                                                                        $("#place_yellow_area").droppable({
                                                                                                            tolerance: "pointer",
                                                                                                            accept: "#cover_glass",
                                                                                                            drop: function (event, ui) {
                                                                                                                DropEvent(ui.draggable, '#drop_glass_group', -100, 20); 
                                                                                                        
                                                                                                                $("#cover_glass").css({"position": "absolute", "top": "0px", "left": "12px"});
                                                                                                                    
                                                                                                                $("#cover_glass").draggable("disable");
                                                                                                                $("#place_yellow_area").appendTo("#place_red_area").css({
                                                                                                                    "position": "absolute",
                                                                                                                    "top": '0px' ,
                                                                                                                    "left": '12px' 
                                                                                                                });
                                                                                                                obj.add_task(task_text_am.hint, 13);
                                                                                                                //----------------------------------Drop Glass under microscope-----------------------------------------------
                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                    tolerance: "pointer",
                                                                                                                    accept: "#drop_glass_group",
                                                                                                                    drop: function (event, ui){
                                                                                                                        var slider = '<div id="slider"><img class="slidePic" src="assets/app/img/img151.png"></div>';
                                                                                                                        $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                                                                                        $("#drop_glass_group").remove();
                                                                                                                        });
                                                                                                                        $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass">');
                                                                                                                        $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png">');
                                                                                                                        $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                        $(".zoominout").bind("click",function(){
                                                                                                                                $(".zoominout").remove();
                                                                                                                                $("#part_laboratory").append(slider);
                                                                                                                                $('.slidePic').bind("click",function(){
                                                                                                                                picCount++;
                                                                                                                                if(picCount>=arrfoto.length){
                                                                                                                                    $('#slider').remove();
                                                                                                                                }
                                                                                                                                    else
                                                                                                                                    {
                                                                                                                                        $('.slidePic').attr('src',arrfoto[picCount]);  
                                                                                                                                    }
                                                                                                                                });
//----------------------------------------------------------------------------------------------------------------------LAB 3 solt water activation---------------------------------------------
                                                                                    //----------------------------------Make components draggable-----------------------------------------------                                                                                                                           
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
                                                                                                                            //scope: "dropglass",
                                                                                                                        });
                                                                                                                        $("#glass_stick").draggable({
                                                                                                                            conteinment: "#container_workplace",
                                                                                                                            revert: "invalid",
                                                                                                                            cursor: "pointer",
                                                                                                                            //scope: "glass_stick",
                                                                                                                        });
                                                                                                                        $("#pipette").draggable({
                                                                                                                            conteinment: "#container_workplace",
                                                                                                                            revert: "invalid",
                                                                                                                            cursor: "pointer",
                                                                                                                            //scope: "glass_stick",
                                                                                                                        });
                                                                                                                        $("#yeast").draggable({
                                                                                                                            conteinment: "#container_workplace",
                                                                                                                            revert: "invalid",
                                                                                                                            cursor: "pointer",
                                                                                                                            //scope: "dropglass",
                                                                                                                        });
                                                                                                                        $("#solt_water").draggable({
                                                                                                                            conteinment: "#container_workplace",
                                                                                                                            revert: "invalid",
                                                                                                                            cursor: "pointer",
                                                                                                                            //scope: "dropglass",
                                                                                                                        });
                                                                                                                        
                                                                                                                        obj.add_task(task_text_am.hint, 14)
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
                                                                                                                                $("#place_red_area").droppable({
                                                                                                                                    tolerance: "pointer",
                                                                                                                                    accept: "#yeast",
                                                                                                                                    //scope: "second",
                                                                                                                                    drop: function (event, ui){
                                                                                                                                        imgSrc = ui.draggable.attr('src');
                                                                                                                                        imgSrcArr = imgSrc.split("/");
                                                                                                                                        imgSrc = imgSrcArr[imgSrcArr.length - 1];
                                                                                                                                        $("#place_red_area").append("<div id='" + ui.draggable.attr('id')+"1" + "'></div>");
                                                                                                                                        obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc, 0, 0);
                                                                                                                                        console.log(ui.draggable.attr('id')+"1");
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").draggable({
                                                                                                                                            containment: '#place_red_area',
                                                                                                                                            cancel: "#place_yellow_area",
                                                                                                                                            cursor: "pointer"
                                                                                                                                        });
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").addClass(ui.draggable.attr('classimg'));
                                                                                                                                        $('#'+ui.draggable.attr('id')+"1").css({
                                                                                                                                            "position": "absolute",
                                                                                                                                            "top": ui.draggable.position().top -435,
                                                                                                                                            "left": ui.draggable.position().left -181,
                                                                                                                                        });
                                                                                                                                        obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "yellow");
                                                                                                                                        ui.draggable.remove();
                                                                                                                                        $("#solt_water1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('աղի լուծույթ')").siblings().append('<img id="solt_water" class="tab_icons solt_water ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="glass_stick1">')});
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
                                                                                                                                                $('#pipette1').css({
                                                                                                                                                    "position": 'absolute',
                                                                                                                                                    "top": '-60px'
                                                                                                                                                }).animate({top: '-35px'});
                                                                                                                                                /*setTimeout(function () { $("#glass_stick").attr("src", obj.path_icons + "material_1_fill_1_ani.gif");}, 100);
                                                                                                                                                $("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                                                                                                                                $("#glass_stick").animate({top: '-60px'});*/
                                                                                                                                                $('#pipette1').draggable({
                                                                                                                                                    conteinment: "#container_workplace",
                                                                                                                                                    revert: "invalid",
                                                                                                                                                    cursor: "pointer",
                                                                                                                                                });
                                                                                                                                                ui.draggable.remove();
                                                                                                                                                $("#place_yellow_area").remove();
                                                                                                                                                obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "yellow");
                                                                                                                                                obj.add_task(task_text_am.hint, 17);
                                                                                                                                                //----------------------------------Pipette on drop glass-----------------------------------------------
                                                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                                                    tolerance: "pointer",
                                                                                                                                                    accept: "#pipette1",
                                                                                                                                                    drop: function (event, ui) {
                                                                                                                                                        $("#pipette1").appendTo("#drop_glass_group");
                                                                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                                                                                                                                        $("#pipette1").animate({top: '-75px'});
                                                                                                                                                        /*setTimeout(function(){$("#glass_stick").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                                                                                        setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                                                                                        $("#pipette1").animate({top: '-100px'});
                                                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                                                        obj.places("yeast1", "place_yellow_area", 40, 40, -30, 0, "yellow");
                                                                                                                                                        $('#pipette1').draggable({
                                                                                                                                                            conteinment: "#container_workplace",
                                                                                                                                                            revert: "invalid",
                                                                                                                                                            cursor: "pointer",
                                                                                                                                                        });
                                                                                                                                                        //----------------------------------Pipette on Yeast-----------------------------------------------
                                                                                                                                                        $("#place_yellow_area").droppable({
                                                                                                                                                            tolerance: "pointer",
                                                                                                                                                            accept: "#pipette1",
                                                                                                                                                            drop: function (event, ui) {
                                                                                                                                                                $("#pipette1").appendTo("#yeast1")
                                                                                                                                                        //--->  //$().appendTo("#place_yellow_area");
                                                                                                                                                                $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                                                                                                                                                $("#pipette1").animate({top: '-75px'});
                                                                                                                                                                /*setTimeout(function(){$("#glass_stick").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                                                                                                setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                                                                                                $("#pipette1").animate({top: '-100px'});
                                                                                                                                                                obj.add_task(task_text_am.hint, 18);
                                                                                                                                                                $("#place_yellow_area").remove();
                                                                                                                                                                obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "yellow");
                                                                                                                                                                //----------------------------------Pipette on Drop Glass-----------------------------------------------
                                                                                                                                                                $("#place_yellow_area").droppable({
                                                                                                                                                                    tolerance: "pointer",
                                                                                                                                                                    accept: "#pipette1",
                                                                                                                                                                    drop: function (event, ui) {
                                                                                                                                                                        $("#pipette1").appendTo("#drop_glass_group")
                                                                                                                                                                //--->  //$().appendTo("#place_yellow_area");
                                                                                                                                                                        $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                                                                                                                                                        $("#pipette1").animate({top: '-75px'});
                                                                                                                                                                        /*setTimeout(function(){$("#glass_stick").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                                                                                                                                                        setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                                                                                                                                                        $("#place_yellow_area").remove();
                                                                                                                                                                        obj.places("drop_glass_group", "place_yellow_area", 40, 40, -45, 20, "yellow");
                                                                                                                                                                        $("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette">')});
                                                                                                                                                                        obj.add_task(task_text_am.hint, 19);
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
                                                                                                                                                                                    "position": "absolute",
                                                                                                                                                                                    "top": '0px' ,
                                                                                                                                                                                    "left": '12px' 
                                                                                                                                                                                });
                                                                                                                                                                                    obj.add_task(task_text_am.hint, 20);
                                                                                                                                                                                    $("#place_yellow_area").droppable({
                                                                                                                                                                                        tolerance: "pointer",
                                                                                                                                                                                        accept: "#drop_glass_group",
                                                                                                                                                                                        drop: function (event, ui){
                                                                                                                                                                                            var slider = '<div id="slider"><img class="slidePic" src="assets/app/img/img151.png"></div>';
                                                                                                                                                                                            $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                                                                                                                                                                $("#drop_glass_group").remove();});
                                                                                                                                                                                            $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass">');
                                                                                                                                                                                            $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png">');
                                                                                                                                                                                            
                                                                                                                                                                                            $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                                                                                                                                                            $("#place_yellow_area").remove();
                                                                                                                                                                                            $(".zoominout").bind("click",function(){
                                                                                                                                                                                                    $(".zoominout").remove();
                                                                                                                                                                                                    $("#part_laboratory").append(slider);
                                                                                                                                                                                                    $('.slidePic').bind("click",function(){
                                                                                                                                                                                                    picCount++;
                                                                                                                                                                                                    if(picCount>=arrfoto.length){
                                                                                                                                                                                                        $('#slider').remove();
                                                                                                                                                                                                    }
                                                                                                                                                                                                        else
                                                                                                                                                                                                        {
                                                                                                                                                                                                            $('.slidePic').attr('src',arrfoto[picCount]);  
                                                                                                                                                                                                        }
                                                                                                                                                                                                    });
                                                                                                                                                                                                });
                                                                                                                                                                                                
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
$("#cotton").draggable({
    conteinment: "#container_workplace",
    revert: "invalid",
    cursor: "pointer",
});
$("#pipette").draggable({
    conteinment: "#container_workplace",
    revert: "invalid",
    cursor: "pointer",
    //scope: "pipette",
});
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
        obj.add_task(task_text_am.hint, 21);
        //----------------------------------Cotton on table-----------------------------------------------
        $("#place_red_area").droppable({
            tolerance: "pointer",
            accept: "#cotton",
            drop: function (event, ui){
                imgSrc = ui.draggable.attr('src');
                imgSrcArr = imgSrc.split("/");
                imgSrc = imgSrcArr[imgSrcArr.length - 1];
                $("#place_red_area").append("<div id='" + ui.draggable.attr('id')+"1" + "'></div>");
                obj.table_icons(ui.draggable.attr('id')+"1",ui.draggable.attr('id'),ui.draggable.attr('classimg'),imgSrc, 0, 0);                                                                            
                $('#'+ui.draggable.attr('id')+"1").draggable({
                    containment: '#place_red_area',
                    cancel: "#place_yellow_area",
                    cursor: "pointer"//---------------------------------------------------+-+-+-+-++-+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                });
                $('#'+ui.draggable.attr('id')+"1").addClass(ui.draggable.attr('classimg'));
                $('#'+ui.draggable.attr('id')+"1").css({
                    "position": "absolute",
                    "top": ui.draggable.position().top -435,
                    "left": ui.draggable.position().left -181,
                });
                $("#yeast1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('╒╜╒╢╒»╒í╒¡╒┤╒╕╓Ç')").siblings().append('<img id="yeast" class="tab_icons solt_water ui-draggable ui-draggable-handle" src="assets/app/img/yeast.png" classimg="solt_water">')});
                obj.places("grass_water1", "place_yellow_area", 40, 40, -45, 0, "yellow");
                ui.draggable.remove();
                obj.add_task(task_text_am.hint, 22);
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
                        $('#pipette1').css({
                            "position": 'absolute',
                            "top": '-60px'
                        }).animate({top: '-35px'});
                        /*setTimeout(function () {$("#pipette").attr("src", obj.path_icons + "material_1_fill_1_ani.gif");}, 100);
                        $("#"+groupId).attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                        $("#pipette").animate({top: '-60px'});*/
                        $('#pipette1').draggable({
                                conteinment: "#container_workplace",
                                revert: "invalid",
                                cursor: "pointer",
                            });
                        ui.draggable.remove();
                        $("#place_yellow_area").remove();
                        obj.places(groupId, "place_yellow_area", 40, 40, -45, 20, "yellow");
                        obj.add_task(task_text_am.hint, 23);
                        //----------------------------------Pipette on Drop Glass-----------------------------------------------
                        $("#place_yellow_area").droppable({
                            tolerance: "pointer",
                            аccept: "#pipette1",
                            drop: function (event, ui) {
                                $("#pipette1").appendTo("#drop_glass_group")
    //------->                  //$().appendTo("#place_yellow_area");
                                $('#pipette1').css({"position": 'absolute', top: '-100px', left: '20px'});
                                $("#pipette1").animate({top: '-75px'});
                                /* setTimeout(function(){$("#pipette").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");}, 100);
                                setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);*/
                                $("#pipette1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('կաթոցիկ')").siblings().append('<img id="pipette" class="tab_icons pipette1 ui-draggable ui-draggable-handle" src="assets/app/img/img106.png" classimg="pipette1">')});
                                //setTimeout(function(){$("#"+groupId+"img").attr("src",obj.path_icons+"material_1_fill_1_ani.gif");},100);
                                $("#cotton1").animate({top: '-100px'}).fadeOut(function(){$("div.lab_titles:contains('բամբակ')").siblings().append('<img id="cotton" class="tab_icons cotton1 ui-draggable ui-draggable-handle" src="assets/app/img/cotton.png" classimg="cotton1">')});
                                obj.add_task(task_text_am.hint, 24);
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
                                            "position": "absolute",
                                            "top": '0px' ,
                                            "left": '12px' 
                                        });
                                        obj.add_task(task_text_am.hint, 25);
                                        //----------------------------------Drop Glass under microscope-----------------------------------------------
                                        $("#place_yellow_area").droppable({
                                            tolerance: "pointer",
                                            accept: "#drop_glass_group",
                                            drop: function (event, ui){
                                                var slider = '<div id="slider"><img class="slidePic" src="assets/app/img/img151.png"></div>';
                                                $("#drop_glass_group").animate({height: '0px', left: '-90px'},100).queue(function(){
                                                    $("#drop_glass_group").remove();});
                                                $("div.lab_titles:contains('առարկայական')").siblings().append('<img id="drop_glass" class="tab_icons drop_glass ui-draggable ui-draggable-handle" src="assets/app/img/glass_113x17.png" classimg="drop_glass">');
                                                $("div.lab_titles:contains('ծածկապակի')").siblings().append('<img id="cover_glass" class="tab_icons cover_glass ui-draggable ui-draggable-handle" src="assets/app/img/cover_glass_55x19.png" classimg="cover_glass_55x19.png">');
                                                $('#part_laboratory').append('<img class="zoominout" src="assets/app/img/zoom_in.png">');
                                                $("#place_yellow_area").remove();
                                                $(".zoominout").bind("click",function(){
                                                        $(".zoominout").remove();
                                                        $("#part_laboratory").append(slider);
                                                        $('.slidePic').bind("click",function(){
                                                        picCount++;
                                                        if(picCount>=arrfoto.length){
                                                            $('#slider').remove();
                                                        }
                                                            else
                                                            {
                                                                $('.slidePic').attr('src',arrfoto[picCount]);  
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