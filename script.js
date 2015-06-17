// Code goes here

$(function(){
  var playerX = true;
  var playerO = false;


  $("td").click(function(){
    var td = $("td");
    var status = $(this).html();
    console.log("status: ", status);
    console.log("td clcked");
    if(playerX && status === ''){
      $(this).append("X");
      playerO = true;
      playerX = false;
    } else if(playerO && status === ''){
      $(this).append("O");
      playerO = false;
      playerX = true;
    }

  });
});
