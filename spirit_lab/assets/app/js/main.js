///////// lab 0701 ///////

var lab_work = function() {
        var obj = new LaboratoryWork();

        //--------adding tab icons with arguments(id, class_name, class_img, img)----------//
        obj.tab_icons("spirt", "tab_menu1", "material1", "material_1.png");
        obj.tab_icons("utensils_liquid", "tab_menu2", "utensils_liquid1", "utensils_liquid_1.png");
        obj.tab_icons("funnel", "tab_menu2", "funnel1", "funnel_1.png");
        obj.tab_icons("spirit_cap", "tab_menu2", "cap1", "cap_1.png");
        obj.tab_icons("utensils_liquid_cap", "tab_menu2", "cap2", "cap_2.png");
        obj.tab_icons("match", "tab_menu3", "match1", "match_1.png");
        obj.tab_icons("fitil", "tab_menu3", "fitil1", "fitil_1.png");

        //--------adding plases in table with arguments(where, id, width, height, top, left, color)----------//
        obj.places("part_laboratory", "place_utensils_liquid", 480, 150, 250, 80, "red");
        obj.places("part_laboratory", "place_funnel", 190, 116, 280, 560, "blue");

        //--------adding task into 'part_task' with arguments(name, number)----------//
        obj.add_task(task_text_am.hint, 0);


        $("#utensils_liquid").draggable({
            containment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            scope: "utensils_liquid",
            zIndex: 21,
        });

        $("#spirt").draggable({
            containment: "#container_workplace",
            revert: "invalid",
            scope: "spirt",
            cursor: "pointer",
            cursorAt: {
                top: 15,
                left: 20
            },
            zIndex: 15,
            start: function(event, ui) {
                $("#spirt").attr("src", obj.path_icons + "material_1_ani.gif");
            },
            stop: function(event, ui) {
                if (ui.helper.css("top") == "0px") {
                    $("#spirt").attr("src", obj.path_icons + "material_1.png");
                }
            },
        });

        $("#utensils_liquid_cap").draggable({
            containment: "#container_workplace",
            scope: "utensils_liquid_cap",
            revert: "invalid",
            cursor: "pointer",
            cursorAt: {
                top: 15,
                left: 15
            },
            zIndex: 0,
        });

        $("#fitil").draggable({
            containment: "#container_workplace",
            scope: "fitil",
            revert: "invalid",
            cursor: "pointer",
            cursorAt: {
                top: 65,
                left: 10
            },

        });

        $("#funnel").draggable({
            containment: "#container_workplace",
            revert: "invalid",
            scope: "funnel",
            cursor: "pointer",
            cursorAt: {
                top: 40,
                left: 25
            },
        });

        $("#match").draggable({
            containment: "#container_workplace",
            scope: "match",
            revert: true,
            cursor: "pointer",
            cursorAt: {
                top: 20,
                left: 55
            },
            zIndex: 22,
            drag: function(event, ui) {
                $(this).attr("src", obj.path_icons + "match_flame_1.gif");
            },
            stop: function(event, ui) {
                $(this).attr("src", obj.path_icons + "match_1.png");
            },
        });

        $("#spirit_cap").draggable({
            containment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            cursorAt: {
                top: 10,
                left: 20
            }
        });


        $("#place_utensils_liquid").droppable({
            scope: "utensils_liquid",
            tolerance: "fit",
            drop: function(event, ui) {
                $("#place_utensils_liquid").append("<div id='utensils_liquid_group'></div>");
                obj.places("utensils_liquid_group", "place_utensils_liquid_cap", 40, 40, -45, 25, "yellow");
                obj.table_icons("utensils_liquid_group", "utensils_liquid", "utensils_liquid1", "utensils_liquid_1.png", 0, 0);
                $("#utensils_liquid_group").css({
                    "position": "absolute",
                    "width": "90px",
                    "height": "67px",
                    "top": ui.draggable.position().top - 381,
                    "left": ui.draggable.position().left - 80,
                });
                $("#utensils_liquid").remove();
                $("#utensils_liquid_group").draggable({
                    containment: "#place_utensils_liquid",
                    cancel: "#place_utensils_liquid_cap",
                    cursor: "pointer",
                });
                obj.add_task(task_text_am.hint, 1);
                $("#place_utensils_liquid_cap").droppable({
                    tolerance: "pointer",
                    scope: "utensils_liquid_cap",
                    drop: function(event, ui) {
                        $("#utensils_liquid_cap").prependTo("#utensils_liquid_group").draggable("disable");
                        ui.draggable.css({
                            top: -4,
                            left: 30,
                        });
                        obj.add_task(task_text_am.hint, 2);
                        $("#place_utensils_liquid_cap").droppable({
                            tolerance: "pointer",
                            scope: "fitil",
                            drop: function(event, ui) {
                                $("#fitil").prependTo("#utensils_liquid_group");
                                ui.draggable.css({
                                    top: -15,
                                    left: 32,
                                    "zIndex": 0
                                });
                                obj.add_task(task_text_am.hint, 3);
                                $("#place_utensils_liquid_cap").droppable({
                                    tolerance: "pointer",
                                    scope: "funnel",
                                    over: function(event, ui) {
                                        $("#utensils_liquid_cap").animate({
                                            rotate: "-45deg",
                                            top: -20,
                                            left: 20,
                                        }, 600);
                                        $("#fitil").animate({
                                            scale: (1, 0.7),
                                            top: 0
                                        }, 1);
                                    },
                                    drop: function(event, ui) {
                                        if (ui.draggable.attr("id") == "funnel") {
                                            $("#funnel").prependTo("#utensils_liquid_group");
                                            ui.draggable.css({
                                                top: -40,
                                                left: 20,
                                                "z-index": "0"
                                            });
                                            obj.places("utensils_liquid_group", "place_spirt", 55, 50, -90, 20, "green");
                                            obj.add_task(task_text_am.hint, 4);
                                            $("#place_spirt").droppable({
                                                scope: "spirt",
                                                tolerance: "pointer",
                                                drop: function(event, ui) {
                                                    $("#spirt, #utensils_liquid_group").draggable("disable");
                                                    setTimeout(function() {
                                                        $("#spirt").attr("src", obj.path_icons + "material_1_fill_1_ani.gif");
                                                    }, 100);
                                                    $("#utensils_liquid").attr("src", obj.path_icons + "utensils_liquid_1_ani.gif");
                                                    ui.draggable.animate({
                                                        rotate: "-90deg",
                                                        top: $("#utensils_liquid_group").position().top + 270,
                                                        left: $("#utensils_liquid_group").position().left + 140
                                                    }, 1000).animate({
                                                        rotate: "0deg",
                                                        top: 0,
                                                        left: 0
                                                    }, 600).queue(function() {
                                                        obj.add_task(task_text_am.hint, 5);
                                                        $("#utensils_liquid_group").draggable("enable");
                                                        $("#utensils_liquid").css("z-index", "21");
                                                        $("#funnel").css("z-index", "20");
                                                        $("#funnel").draggable({
                                                            containment: "#container_workplace",
                                                            revert: "invalid",
                                                            scope: "place_funnel",
                                                            cursor: "pointer",
                                                            zIndex: 50,
                                                            cursorAt: {
                                                                top: 40,
                                                                left: 25
                                                            },
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });


        $("#place_funnel").droppable({
            scope: "place_funnel",
            tolerance: "fit",
            drop: function(event, ui) {
                $("#place_spirt").remove();
                ui.draggable.remove();
                obj.table_icons("part_laboratory", "funnel", "funnel1", "funnel_1.png", 300, 620);
                obj.add_task(task_text_am.hint, 6);
                $("#funnel").draggable({
                    revert: true,
                    stop: function(event, ui) {
                        ui.helper.css({
                            "top": "300px",
                            "left": "620px"
                        });
                    }
                }).animate({
                    rotate: "-60deg"
                }, 200);
                $("#utensils_liquid_cap").animate({
                    rotate: "0deg",
                    top: -4,
                    left: 30,
                }, 300);
                $("#fitil").animate({
                    scale: (1, 1),
                    top: -15,
                    left: 32
                }, 100).queue(function() {
                    $("#place_utensils_liquid_cap").droppable({
                        scope: "match",
                        tolerance: "pointer",
                        over: function(event, ui) {
                            if (ui.draggable.attr("id") == "match") {
                                obj.table_icons("utensils_liquid_group", "fire", "fire1", "fire_1.gif", -68, 26);
                                obj.add_task(task_text_am.hint, 7);
                            }
                            $("#fire").droppable({
                                accept: "#spirit_cap",
                                tolerance: "pointer",
                                drop: function(event, ui) {
                                    ui.draggable.appendTo("#utensils_liquid_group").css({
                                        top: -35,
                                        left: 25
                                    });
                                    $("#fire, #place_utensils_liquid_cap").remove();
                                    obj.add_task(task_text_am.hint, 8);
                                }
                            });
                        }
                    });
                })
            }
        });


    } /// end lab 0701 ///