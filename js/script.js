$(function(){
    $(document)
    .on("mouseenter", '.pr-category>li', function(){
        $(this).find('.sub-cate').fadeIn();
    })
    .on("mouseleave", '.pr-category>li', function(){
        $(".pr-category>li>.sub-cate").fadeOut();
    }); 
      $('.category')
      .mouseenter(function(){
      $(this).find('.category-subnav').css('display','flex');
   }).mouseleave(function(){
      $(this).find('.category-subnav').css('display','none');
   });

$('.listview').click(function(e){
    e.preventDefault();// e의 기능 중지 -> a에 기능이 중지됌
    const view = $(this).data("view");
    $("#pdlist>div").removeClass();
    $('.listview rect').removeClass('list-act-color').addClass('list-color');
    if(view == 3 ){
        $(this).find('rect').removeClass('list-color').addClass('list-act-color');
        $("#pdlist>div").addClass("col-md-4 mb-5");
    }else if(view == 4){
        $(this).find('rect').removeClass('list-color').addClass('list-act-color');
        $("#pdlist>div").addClass("col-md-3 mb-5");
    }else if(view == 5){
        $(this).find('rect').removeClass('list-color').addClass('list-act-color');
        $("#pdlist>div").addClass("col-md-55 mb-5");

    }
   });
   
});  