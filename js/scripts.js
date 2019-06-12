$(document).ready(function(){
  $("form#transport").submit(function(event){
    event.preventDefault(event);

    $("input:checkbox[name=non-work-transportation]:checked").each(function(){
      var nonWorkTransportationMode=$(this).val();
      $("#non-work-responses").append(nonWorkTransportationMode+"<br>");

    });
  });
});
