$(function() {
//		主屏文字
    setTimeout(function() {
        $(".magass").children().addClass('in');
    }, 10);
//		滚动事件
    $(window).on("scroll",function(){
        if($(window).scrollTop()>50){
            $("#header").children(1).addClass('scrolled');
            $("#fontColor").children().children("a").css({
                color:"black"
            });
        }else{
            $("#header").children(1).removeClass('scrolled');
            $("#fontColor").children().children("a").css({
                color:"white"
            })
        };
        if($(window).scrollTop()>150){
            $("#makeIn").children('div').addClass('in');
        };
        if($(window).scrollTop()>350){
            $(".message").children('div').addClass('in');
        };
        if($(window).scrollTop()>600){
            $("#newsIn").children('div').addClass('in');
        };
        if($(window).scrollTop()>1200){
            $("#project").children("h2").addClass('hIn');
        };
        if($(window).scrollTop()>1300){
            $("#project").children("div").addClass('in');
        };
        if($(window).scrollTop()>1900){
            $("#name").addClass('name-in');
            $("#text").addClass('text-in');
            $("#phone").addClass('phone-in');
        };

        $("#name input").on("focus", function () {
            $("#name").children("span").css({
                "top":-40,
                "color": 'white'
            })
        });
        $("#name input").on("focusout", function () {
            if(this.value==""){
                $("#name").children("span").css({
                    "top":8,"color": 'gray'
                })
            }
        });
        $("#phone input").on("focus", function () {
            $("#phone").children("span").css({
                "top":-40,
                "color": 'white'
            })
        });
        $("#phone input").on("focusout", function () {
            if(this.value==""){
                $("#phone").children("span").css({
                    "top":8,"color": 'gray'
                })
            }
        });
        $("#text input").on("focus", function () {
            $("#text").children("span").css({
                "top":-40,
                "color": 'white'
            })
        });
        $("#text input").on("focusout", function () {
            if(this.value==""){
                $("#text").children("span").css({
                    "top":8,"color": 'gray'
                })
            }
        });

        $(".submit button").on("click", function () {
            $.ajax()
        })
    });
//		提交留言
    $(".submit button").on("click", function () {
        $.ajax({
            type:"get",
            url:"js/ajax.php",
            data:{name:$("#name input").val(),
                  phone:$("#phone input").val(),
                  text:$("#text input").val()
            },
            success: function (info) {
                console.log(info);
            }
        })
    })
})