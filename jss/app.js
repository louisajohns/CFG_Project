unction showImage(id) {
var photo_class=document.getElementsByClassName('photo');
// if(document.getElementById('image1') == 'image1')
for (var i = 0; i < photo_class.length; i++) {
 photo_class[i].style.display="none";
console.log(photo_class[i]);
}
var str="img"+id;
console.log(str);
  document.getElementById(str).style.display="block";
}
