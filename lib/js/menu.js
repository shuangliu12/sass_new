window.onload = function () {
  var design = document.getElementById('designs');

  // if(document.getElementById('design_items').style.display == 'none'){
  //   design.onclick = function(){document.getElementById('design_items').style.display = ''};
  // } else {
  //   design.onclick = function(){document.getElementById('design_items').style.display = 'none'};
  // }
  design.onclick = function(){
    if (document.getElementById('design_items').style.display == 'none'){
      document.getElementById('design_items').style.display = '';
    } else {
      document.getElementById('design_items').style.display = 'none';
    }
  };

};


