$(() => {
   $("#services").hover(() => {
     $(".services_info").show();
   })
   
     $(".services_info").mouseleave(() => {
        $("#services").find('.services_info').fadeOut();
      })
});