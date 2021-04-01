
var sensor1Num=0;
var sensor2Num=0;
var meNum=0;
var sensor1State=0;
var sensor2State=0;

function sendNumber() {
  $('#main').append( $('#number').val());
  $('#main').append('<br>');  
  meNum=$('#number').val();
  $.ajax({
    url: './find.php',
   // username: 'interlogin',
   // password: 'argo2904', 
    method: 'get',
    cache: false,
    data: {s1: sensor1Num,s2: sensor2Num,me: meNum},  
    contentType: 'application/json',
    success: function(data){
       jstring=JSON.parse(data);
       sensor1State=sensor1State+jstring.sensor1;
       sensor2State=sensor2State+jstring.sensor2;
       $('#sensor1State').html('Sensor1='+sensor1State);
       $('#sensor2State').html('Sensor2='+sensor2State);
    },
      error: function (request, status, error) {
               
      }
      
    });     




}


function readyToTest() {
    $.ajax({
        url: './sensor.php',
     //   username: 'interlogin',
     //   password: 'argo2904', 
        method: 'get',
        cache: false,
        //data: {data: encrypted},  
        contentType: 'application/json',
        success: function(data){
           jstring=JSON.parse(data);
           sensor1Num=jstring.sensor1;
           sensor2Num=jstring.sensor2;
           $('#sensor1').append(jstring.sensor1);
           $('#sensor1').append('<br>');
           $('#sensor2').append(jstring.sensor2);
           $('#sensor2').append('<br>');           
        },
          error: function (request, status, error) {
                   
          }
          
        });       
}
  
  