///////// lab 0807 ///////

var lab_work = function() {
        var obj = new LaboratoryWork();
        var gram = 0,
            plate_into_param = 0;

        //--------adding icons in tab with arguments(id, class_name, class_img, img)----------//
        obj.tab_icons("water", "tab_menu1", "material1", "material_1.png");

        obj.tab_icons("measuring_glass", "tab_menu2", "measuring_glass1", "measuring_glass_1.png");
        obj.tab_icons("cup_first", "tab_menu2", "cup1", "cup_1.png");
        obj.tab_icons("colba", "tab_menu2", "colba3", "colba_3.png");
        obj.tab_icons("mixer", "tab_menu2", "mixer1", "mixer_1.png");
        obj.tab_icons("spoon", "tab_menu2", "spoon1", "spoon_1.png");

        //--------adding icons in table with arguments(where, id, class_img, img, top, left)----------//
        obj.places("part_laboratory", "plate_solt_group", 0, 0, 325, 110, "transparent");
        obj.table_icons("plate_solt_group", "plate_solt", "plate1", "plate_1_1.png", 20, 0);
        obj.table_icons("part_laboratory", "chemical_balance", "chemical_balance1", "chemical_balance_1.png", 300, 242);
        obj.places("part_laboratory", "chemical_balance_plate_group", 70, 54, 271, 252, "transparent");
        obj.table_icons("chemical_balance_plate_group", "chemical_balance_plate", "chemical_balance_plate1", "chemical_balance_plate_1.png", 0, 0);
        obj.places("part_laboratory", "gram", 40, 20, 341, 265, "transparent");
        obj.places("part_laboratory", "milligram", 40, 20, 341, 275, "transparent");
        obj.table_icons("chemical_balance_plate_group", "solt", "plate_into_only1", "plate_into_only_1_1.png", 0, 0);

        obj.table_icons("part_laboratory", "box", "box1", "box_1.png", 235, 120);
        obj.table_icons("part_laboratory", "box_head", "box_head1", "box_head_1.png", 250, 144);

        //--------adding plases in table with arguments(where, id, width, height, top, left, color)----------//
        obj.places("part_laboratory", "place_cup", 380, 145, 250, 340, "red");
        obj.places("part_laboratory", "place_chemical_balance_plate", 72, 50, 240, 250, "yellow");

        $("#solt").hide();
        //--------adding task into 'part_task' with arguments(name, number)----------//
        obj.add_task(task_text_am.hint, 0);



        $("#gram").addClass("fnt").css({
            "text-align": "right",
            "color": "#fff"
        }).hide();
        $("#milligram").addClass("fnt").css({
            "text-align": "right",
            "color": "#fff"
        }).html("0");

        $("#measuring_glass").draggable({
            containment: "#container_workplace",
            cursor: "pointer",
            revert: "invalid",
            cursorAt: {
                top: 10,
                left: 10
            },
            snap: "#cup_first",
            snapMode: "outer",
            snapTolerance: 40,
            start: function(event, ui) {
                ui.helper.css({
                    "width": "40px",
                    "height": "130px"
                });
                $("#place_cup").css({
                    "height": "210px",
                    "top": "185px"
                })
            },
            stop: function(event, ui) {
                if (!$("#measuring_glass").hasClass("readyMeasuringGlass")) {
                    ui.helper.css({
                        "width": "30px",
                        "height": "100px"
                    });
                }
                $("#place_cup").css({
                    "height": "145px",
                    "top": "250px"
                });
            }
        });

        $("#cup_first").draggable({
            containment: "#container_workplace",
            cursor: "pointer",
            revert: "invalid",
            cursorAt: {
                top: 30,
                left: 20
            },
            snap: "#measuring_glass",
            snapMode: "outer",
            snapTolerance: 40

        });

        $("#water").draggable({
            containment: "#container_workplace",
            revert: "invalid",
            cursor: "pointer",
            cursorAt: {
                top: 20,
                left: 25
            },
        });

        $("#colba").draggable({
            revert: "invalid",
            cursor: "pointer",
            cursorAt: {
                top: 40,
                left: 10
            }
        });

        $("#spoon").draggable({
            containment: "#container_workplace",
            scope: "spoon",
            cursorAt: {
                top: 40,
                left: 15
            },
            cursor: "pointer",
            revert: "invalid",
        });

        $("#mixer").draggable({
            containment: "#container_workplace",
            cursorAt: {
                top: 80,
                left: 10
            },
            cursor: "none",
            revert: "invalid",
        });

        $("#place_cup").droppable({
            accept: "#cup_first, #measuring_glass",
            tolerance: "fit",
            drop: function(event, ui) {
                if (ui.draggable.attr("id") == "measuring_glass") {
                    ui.draggable.addClass("readyMeasuringGlass");
                    $("#place_measuring_glass").remove();
                    if ($("#measuring_glass").attr("src") != obj.path_icons + "measuring_glass_1_ani.gif") {
                        obj.places("part_laboratory", "place_measuring_glass", 38, 60, ui.draggable.position().top - 190, ui.draggable.position().left, "green");
                    }
                    $("#place_measuring_glass").droppable({
                        accept: "#water",
                        tolerance: "pointer",
                        drop: function(event, ui) {
                            $("#water, #measuring_glass").draggable("disable");
                            $("#measuring_glass").attr("src", obj.path_icons + "measuring_glass_1_ani.gif");
                            ui.draggable.attr("src", obj.path_icons + "material_1_fill_2_ani.gif").animate({
                                rotate: "-90deg",
                                top: $("#place_measuring_glass").position().top + 130,
                                left: $("#place_measuring_glass").position().left + 30,
                            }, 1000).animate({
                                rotate: "0deg",
                                top: 0,
                                left: 18,
                            }, 600);
                            setTimeout(function() {
                                $("#place_measuring_glass").remove();
                                $("#measuring_glass").draggable("enable");
                                $("#measuring_glass").addClass("withWater").draggable({
                                    snap: "",
                                    revert: true
                                });
                            }, 1600);
                        }
                    });
                }
                if (ui.draggable.attr("id") == "cup_first") {
                    $("#place_cup_first").remove();
                    obj.places("part_laboratory", "place_cup_first", 38, 60, ui.draggable.position().top - 190, ui.draggable.position().left, "blue");
                    $("#place_cup_first").droppable({
                        accept: "#chemical_balance_plate_group",
                        tolerance: "pointer",
                        drop: function(event, ui) {
                            $("#chemical_balance_plate").addClass("readyChemicalBP");
                            $("#gram").hide();
                            $("#milligram").html("0");
                            $("#part_message div").html("");
                            $("#chemical_balance_plate_group").draggable("disable");
                            if (ui.draggable.attr("id") == "chemical_balance_plate_group") {
                                $("#place_cup_first").droppable({
                                    accept: "#measuring_glass",
                                    tolerance: "pointer",
                                    drop: function(event, ui) {
                                        if ($("#measuring_glass").hasClass("withWater")) {
                                            $("#cup_first").attr("src", obj.path_icons + "cup_1_material_1_ani.gif");
                                            ui.draggable.attr("src", obj.path_icons + "measuring_glass_1_fill_1.gif").animate({
                                                rotate: "-90deg",
                                                top: $("#place_cup_first").position().top + 100,
                                                left: $("#place_cup_first").position().left + 60,
                                            }, 1000).animate({
                                                rotate: "0deg",
                                                top: 0,
                                                left: 31,
                                                width: 30,
                                                height: 100
                                            }, 600).queue(function() {
                                                $("#measuring_glass").draggable("destroy");
                                                obj.add_task(task_text_am.hint, 2);
                                            });
                                            $("#place_cup_first").droppable({
                                                accept: "#mixer",
                                                drop: function(event, ui) {
                                                    if (!ui.draggable.hasClass("readyMixer")) {
                                                        ui.draggable.css({
                                                            top: $("#place_cup_first").position().top + 150,
                                                        });
                                                        $("#place_cup_first").css({
                                                            "height": "100px",
                                                            "top": $("#place_cup_first").position().top + 16,
                                                        });
                                                        $("#mixer").attr("src", obj.path_icons + "mixer_1_2.png").addClass("readyMixer").draggable({
                                                            containment: "#place_cup_first",
                                                            cursorAt: {
                                                                top: 0,
                                                                left: 0
                                                            },
                                                            cursor: "pointer",
                                                            start: function(event, ui) {
                                                                $("#cup_first").attr("src", obj.path_icons + "cup_material_1_1_ani.gif");
                                                            },
                                                            drag: function(event, ui) {
                                                                $("#cup_first").attr("src", obj.path_icons + "cup_material_1_1_ani.gif");
                                                                if ($("#colba").attr("src") != obj.path_icons + "colba_3_fill_1.gif") {
                                                                    if (gram == 30) {
                                                                        obj.add_task(task_text_am.hint, 3);
                                                                    }
                                                                    //second task
                                                                    $("#box").droppable({
                                                                        accept: "#colba",
                                                                        tolerance: "pointer",
                                                                        drop: function(event, ui) {
                                                                            $("#water").draggable("enable");
                                                                            obj.places("part_laboratory", "place_colba", 30, 40, 170, 160, "yellow");
                                                                            obj.places("part_laboratory", "place_solt", 50, 50, 160, 150, "green");
                                                                            $("#place_solt").hide();
                                                                            ui.draggable.appendTo("#part_laboratory").css({
                                                                                "top": "206px",
                                                                                "left": "162px"
                                                                            });
                                                                            $("#place_colba").droppable({
                                                                                accept: "#water",
                                                                                tolerance: "pointer",
                                                                                drop: function(event, ui) {
                                                                                    $("#colba, #water").draggable("disable");
                                                                                    $("#spoon").draggable("enable");
                                                                                    if (!$("#colba").hasClass("readyWater")) {
                                                                                        $("#colba").attr("src", obj.path_icons + "colba_3_fill_1.gif").addClass("readyWater");
                                                                                    } else if ($("#colba").hasClass("readyWater")) {
                                                                                        $("#colba").attr("src", obj.path_icons + "colba_3_fill_2.gif");
                                                                                        $("#spoon").draggable("disable");
                                                                                        $("#part_hint div").html("");
                                                                                    }
                                                                                    ui.draggable.attr("src", obj.path_icons + "material_1_fill_2_ani.gif").animate({
                                                                                        rotate: "-90deg",
                                                                                        top: $("#place_colba").position().top + 110,
                                                                                        left: $("#place_colba").position().left + 30,
                                                                                    }, 800).animate({
                                                                                        rotate: "0deg",
                                                                                        top: 0,
                                                                                        left: 18,
                                                                                    }, 600);
                                                                                    setTimeout(function() {
                                                                                        $("#water").draggable("enable");
                                                                                        $("#place_solt").show();
                                                                                        $("#place_colba").hide();
                                                                                        if (gram == 30) {
                                                                                            obj.add_task(task_text_am.hint, 4);
                                                                                        }

                                                                                    }, 2000);
                                                                                }
                                                                            });
                                                                            $("#place_solt").droppable({
                                                                                accept: "#chemical_balance_plate_group",
                                                                                tolerance: "pointer",
                                                                                drop: function(event, ui) {
                                                                                    $("#colba, #chemical_balance_plate_group").draggable("disable");
                                                                                    $("#solt").animate({
                                                                                        top: +5,
                                                                                        left: -5
                                                                                    }, 1000);
                                                                                    ui.draggable.addClass("readyChemicalBPFin").animate({
                                                                                        rotate: "-120deg",
                                                                                        top: $("#place_solt").position().top - 20,
                                                                                        left: $("#place_solt").position().left,
                                                                                    }, 1000).animate({
                                                                                        rotate: "0deg",
                                                                                        top: 271,
                                                                                        left: 252
                                                                                    }, 600);
                                                                                    setTimeout(function() {
                                                                                        $("#solt").hide();
                                                                                    }, 1000);
                                                                                    setTimeout(function() {
                                                                                        obj.add_task(task_text_am.hint, 5);
                                                                                        $("#place_solt").hide();
                                                                                        $("#colba").draggable("enable");
                                                                                        $("#colba").draggable({
                                                                                            stop: function(event, ui) {
                                                                                                $("#place_colba").show();
                                                                                            }
                                                                                        });
                                                                                    }, 2000);
                                                                                }
                                                                            });
                                                                        }
                                                                    }); //end second task
                                                                }
                                                            },
                                                            stop: function(event, ui) {
                                                                $("#cup_first").attr("src", obj.path_icons + "cup_material_1_1_ani.gif");

                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                                $("#cup_first").draggable("disable");
                                $("#chemical_balance_plate_group").animate({
                                    rotate: "-120deg",
                                    top: $("#place_cup_first").position().top - 15,
                                    left: $("#place_cup_first").position().left,
                                }, 1000).animate({
                                    rotate: "0deg",
                                    top: 271,
                                    left: 252
                                });
                                $("#solt").animate({
                                    top: +5,
                                    left: -5
                                }, 1000).queue(function() {
                                    $("#solt").hide();
                                    obj.add_task(task_text_am.hint, 1);
                                });
                            }
                        }
                    });
                }
            }
        });


        $("#plate_solt").droppable({
            scope: "spoon",
            tolerance: "pointer",
            drop: function(event, ui) {
                if (!ui.draggable.hasClass("readySpoon_solt")) {
                    $("#place_chemical_balance_plate").droppable({
                        scope: "spoon_solt"
                    });
                    $("#plate_solt").droppable({
                        scope: "finish"
                    });
                    ui.draggable.appendTo("#plate_solt_group").attr({
                        "src": obj.path_icons + "spoon_hold_1_1.png"
                    }).addClass("readySpoon_solt").css({
                        "top": "-2px",
                        "left": "24px"
                    }).animate({
                        rotate: "25deg"
                    });
                    $("#spoon").draggable({
                        scope: "spoon_solt",
                        stop: function(event, ui) {
                            if (ui.helper.hasClass("readySpoon_solt")) {
                                ui.helper.css({
                                    "top": "-2px",
                                    "left": "24px"
                                }).rotate("25deg");
                            }
                        }
                    });
                }
            }
        });


        $("#place_chemical_balance_plate").droppable({
            accept: "#spoon",
            tolerance: "pointer",
            drop: function(event, ui) {
                var milligram = Math.floor(Math.random() * 4) + 1;
                gram += 5;
                plate_into_param += 2.5;
                $("#gram").show().html(gram + ".");
                $("#milligram").html(milligram);
                if (gram <= 25) {
                    if (ui.draggable.hasClass("readySpoon_solt")) {
                        $("#solt").show();
                    }
                    $("#solt").css({
                        "width": "40px",
                        "height": (15 + gram) / 1.8,
                        "top": (70 + gram) / 3,
                        "left": "15px",
                        "opacity": "0.7"
                    });
                } else if (gram == 30) {
                    obj.message(task_text_am.message, 0, "grey");
                    $("#spoon").draggable("disable");
                    $("#chemical_balance_plate_group").draggable({
                        containment: "#container_workplace",
                        revert: "invalid",
                        cursor: "pointer",
                        cursorAt: {
                            top: 20,
                            left: 10
                        },
                        start: function(event, ui) {
                            $("#gram").hide();
                            $("#milligram").html("0");
                        },
                        stop: function(event, ui) {
                            if (!$("#chemical_balance_plate").hasClass("readyChemicalBP")) {
                                $("#gram").show().html(gram + ".");
                                $("#milligram").html(milligram);
                            }
                        }
                    });
                    $("#chemical_balance_plate_group").draggable("enable");
                } else if (gram > 30) {
                    gram = 5;
                    $("#gram").show().html(gram + ".");
                    $("#milligram").html("6");
                    $("#solt").show().css({
                        "top": "30px",
                        "left": "15px"
                    });
                    $("#spoon").draggable("disable");
                    $("#chemical_balance_plate_group").draggable("enable");
                    $("#chemical_balance_plate_group").draggable({
                        stop: function(event, ui) {
                            if (!$("#chemical_balance_plate_group").hasClass("readyChemicalBPFin")) {
                                $("#gram").show().html(gram + ".");
                                $("#milligram").html("6");
                            } else if ($("#chemical_balance_plate_group").hasClass("readyChemicalBPFin")) {
                                $("#gram").hide();
                                $("#milligram").html("0");
                            }
                        }
                    });
                }
            }
        });

    } /// end lab 0807 ///