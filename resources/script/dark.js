const dark = document.querySelector('#dark');


function darkmode(){
  const header2 = document.querySelector('.header2');
  const dark= document.querySelector('.dark');
  header2.style.background="black";
  dark.style.color="black";
  return true;
  
}
function lightmode(){
  const header = document.querySelector('.header2');
  header.style.background="white";
  return true;
}
