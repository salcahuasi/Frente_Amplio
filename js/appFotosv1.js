$(document).ready(function() {
 $('.modal').modal();   
 $('.carousel').carousel();

  var input = $('#image_uploads');
  var preview = $('.preview');
  var videofa = $('#videofa');
  
  input.hide();
  videofa.autoplay = true;
 /*Galeria de imagenes subidas */
 var areaphotos = $('.arephotos');
 var arrphotos = data["user"]["galery"]["albumns"][1]["photos"];
   
 for(var i=0 ; i < arrphotos.length;i++){
   
    var ancor = $('<a href="#modal-lg" class="big-photo modal-trigger"></a>');    
    var contimg = $('<div class="card galery col s6 m3 l3"></div>');
    var imgphoto = $('<img class="photo-galery">'); 
     
    areaphotos.append(ancor);
    ancor.append(contimg); 
    imgphoto.attr('src','../assets/img/'+ data["user"]["galery"]["albumns"][1]["photos"][i].photo);
    contimg.append(imgphoto);

    localStorage.setItem('image'+ i ,data["user"]["galery"]["albumns"][1]["photos"][i].photo);
 
  }

 var ruta= '../assets/img/';
 var index = 0;  
 var $img = $('#img');
 var $sliderimgs = $('.sliderimgs');
 $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][0].photo);
 $('#title').text(data["user"]["galery"]["albumns"][1]["photos"][0].date);
  $sliderimgs.on('click', '#next', function(event) {
    
    event.preventDefault();
    index++;
    index = (index >=  arrphotos.length) ? 0 : index;
    $('#title').text(data["user"]["galery"]["albumns"][1]["photos"][index].date);
    $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][index].photo);
  });

  $sliderimgs.on('click', '#back', function(event) {
    event.preventDefault();
    index--;
    index = (index < 0) ?  arrphotos.length - 1 : index;
    $('#title').text(data["user"]["galery"]["albumns"][1]["photos"][index].date);
    $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][index].photo);
  });

});