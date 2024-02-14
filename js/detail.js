//$(function(){
$(document).ready(function () {
   $('.img-thumb-box>img').click(function () {
      const src = $(this).attr('src');
      $('.img-box>img').attr('src', src);
   });
   $('.colors input[type=radio]').click(function () {
      const color = $(this).val();
      $('.selected').text(color + '색');
   });

   //상품가격 계산
   const prcode = $("#prcode").val();
   const prprice = Number($('#prprice').val());
   const reserves = parseInt($("#reserves").val());
   const delivery = parseInt($("#delivery").val());
   const prtitle = $("#title").val();
   let totalmoney = prprice;
   let tmoney = prprice;
   let totalTextLength,opt1,opt11, colortxt, color, opt2,opt21, size, sizetxt, optionText;

   $('input[name="color"]').change(function () {
      $('.size').find("option:first").prop("selected", true);
      opt1 = Number($(this).data('color'));  //추가금액
      colortxt = $(this).data("colorname");
      color = $(this).val();                 //폼으로 전송할 색상값
      if (opt1 > 0) {
         opt11 = "(+" + opt1.toLocaleString() + "원)";
      } else {
         opt11 = "";
      }
      colortxt += " " + opt11; //화면에 출력할 색상이름


      $('.size').attr('disabled', false);//size박스 활성화
   });



   let opthtml = `
   <ul class="add-opt">
   <li class="d-flex align-items-center">
      <div class="total-text col"></div>
       <ul class="add-opts">
   </li>
   <li class="addbox d-flex align-items-center">
      <label class="title-label">수량</label>
      <div class="input-group col">
          <div class="input-group-prepend">
            <button class="btn btn-outline-line qdown" type="button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <input type="number" 
                 class="quantity"  
                 name="quantity" 
                 value="1"
                 readonly>
          <div class="input-group-append">
              <button class="btn btn-outline-line qup" type="button">
                  <i class="fa-solid fa-chevron-up"></i>
              </button>
          </div>  
      </div>
     </ul>
      <div class="tomoney col text-right"></div>
      <i class="fa-solid fa-close remove-order"></i>
   </li>
 </ul>`;
   

   $('.size').change(function () {
      totalTextLength = $('.total-text').length;
      const oradd = $('.addquantity').html();
      const livequantity = $(".quantity").eq(totalTextLength).val();
      opt2 = Number($(this).find("option:selected").data('size'));  //추가금액
      size = $(this).find("option:selected").val();
      sizetxt = $(this).find("option:selected").text();
      if (opt2 > 0) {
         opt21 = "(+" + opt2.toLocaleString() + "원)";
      } else {
         opt21 = "";
      }
      if(size){
      totalmoney = prprice + (opt1 + opt2);
      sizetxt += " " + opt21;
      optionText = `<p>${colortxt}-${sizetxt}</p>`; 
      $('.addquantity').html(oradd + opthtml);
      $('.total-text').eq(totalTextLength).html(optionText);
      $(".quantity").eq(totalTextLength).val(1);
      $('.tomoney').eq(totalTextLength).html(totalmoney.toLocaleString()+"원");
   }
      //eq는 순서이다 eq1,eq2
   });



   // $('#qup').click(function(){
   $(document).on('click', ".qup", function () {
      let quantity = Number($(this).parent().prev().val()); // 누른것에 부모의 위에 있는 형제
    //  let quantity = Number($('.quantity').eq(totalTextLength).val());
      quantity += 1;
      if (quantity > 9) {
         alert("최대수량입니다.");
         quantity = 9;
      }
     // $('.quantity').eq(totalTextLength).val(quantity);
      $(this).parent().prev().val(quantity);
      totalmoney = prprice * quantity;
      let tmoney = totalmoney.toLocaleString();
      let txt = "총 상품금액(수량) : <strong>" + tmoney + "원</strong>(" + quantity + "개)";
      $('.totalmoney').html(txt);
   });

   //$('#qdown').click(function(){
   $(document).on('click', ".qdown", function () {
      let quantity = Number($(this).parent().next().val()); // 누른것에 부모의 아래에 있는 형제
    //  let quantity = Number($('.quantity').eq(totalTextLength).val());
      quantity -= 1;
      if (quantity < 1) {
         quantity = 1;
      }
     // $('.quantity').eq(totalTextLength).val(quantity);
     $(this).parent().next().val(quantity);
      totalmoney = prprice * quantity;
      let tmoney = totalmoney.toLocaleString();
      let txt = "총 상품금액(수량) : <strong>" + tmoney + "원</strong>(" + quantity + "개)";
      $('.totalmoney').html(txt);
   });

   // 장바구니 추가한 물품 삭제
   $(document).on('click', '.remove-order', function(){
           $(this).parents('.add-opt').remove();
   });
});


