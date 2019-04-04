$('input[type="submit"]').on("click",function(event){
  event.preventDefault();
  const height=$('#inputHeight').val();
  const width=$('#inputWeight').val();
  $('#pixelCanvas').empty();
  makeGrid(height,width);
});
$('#clearAll').on("click",function(){
  console.log("clear all");
  const height=$('#inputHeight').val();
  const width=$('#inputWeight').val();
  $('#pixelCanvas').empty();
  makeGrid(height,width);
//  $("td").removeAttr('background-color');
});
function makeGrid(height,width) {
for(var r=1; r<=height;r++)
{
$('#pixelCanvas').append($("<tr></tr>"));
  for(var w=1;w<=width;w++)
  {

    $("tr").last().append($("<td></td>"));
  }
}
$('#pixelCanvas').on("click","td",function(){
  $(this).css("background-color",$('#colorPicker').val());
});
}
