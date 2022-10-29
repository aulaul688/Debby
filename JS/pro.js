$(function(){
    $(".pro").click(function(){
        //獲得索引號
        var index=$(this).index();
        $(".page").hide();
        $(".pro_btn").show();
        //讓下面相應索引號item顯示 其餘隱藏
        $(".page2").eq(index).show().siblings().hide();
    })

})

$(function(){
    $(".probtn").click(function(){
        var index2=$(this).index();
        $(".page2").eq(index2).show().siblings().hide();
    })
})


