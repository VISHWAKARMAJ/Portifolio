

//skill bar javaScript


jQuery(document).ready(function () {
    jQuery(".skillbar").each(function () {
      jQuery(this)
        .find(".skill-bar")
        .animate(
          {
            width: jQuery(this).attr("data-percent"),
          },
          4000
        );
    });
  });
  
  
  
  
   
  console.log("pankaj");
   
  //  *****      project   *****  //-+*+
  
  
  
  
  
  
  
  
  
  
  
  
  
  //       Animation
  
    console.log('panlaj');
  const  colors = ['#da42da','#a0da42', '#42a2da','#4277da']; 
  function createSquere(){
    const section = document.querySelector('section');
    const square = document.createElement('span');
  //   square.setAttribute("id", "div1");
      square.className= "div1";
     var size = Math.random() * 50; 
  
     square.style.width = 20 + size + 'px';
     square.style.height = 20 + size +'px';
  
     square.style.top = Math.random() * innerHeight + 'px';
     square.style.left = Math.random() * innerWidth + 'px';
  
     const bg = colors[Math.floor(Math.random() * colors.length)];
     
     square.style.background = bg;
  
     section.appendChild(square);
  
     setTimeout(()=>{
      square.remove()
     },5000)
  }
  setInterval(createSquere, 150);
  
  
  
  