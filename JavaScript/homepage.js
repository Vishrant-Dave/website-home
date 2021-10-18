
  gsap.from('.p1text', {opacity: 0, duration: 1, y: -50})
  /*
  var counter = 1;
                  setInterval(function(){
                    document.getElementById('radio' + counter).checked = true;
                    counter++;
                    if(counter > 4){
                      counter = 1;
                    }
                  }, 5000);
*/
  let rots = [ 
    { ry: 0,   rx: 0  }, // 1
    { ry: 90,  rx: 0  }, // 2
    { ry: 180, rx: 0  }, // 3
    { ry: 270, rx: 0  }, // 4
    { ry: 0,   rx: 90 }, // 5
    { ry: 0,   rx:-90 }  // 6
  ];

  imageURLs = ['images_index/cubepix_2.jpg','images_index/cubepix_6.jpg','images_index/cubepix_4.jpg','images_index/cubepix_5.jpg','images_index/cubepix_8.jpg','images_index/cubepix_7.jpg'];
  gsap.timeline()
      .set(".face", {
        rotateY: (i) => rots[i].ry,
        rotateX: (i) => rots[i].rx,
        transformOrigin: "50% 50% -150px",
        z: 150,
        background:(i)=> 'url('+imageURLs[i]+') center',
      })

      .add(function(){
        
        window.onmousemove = (e)=> {
          let screen = {x:e.pageX, y:e.pageY};
          if(screen.x>900 & screen.x<1430 & screen.y>100 & screen.y<550) {
          let winPercent = { x:e.clientX/innerWidth, y:e.clientY/innerHeight };
          gsap.to(cube, {
            duration:1,
            rotationX:-180+360*winPercent.y,
            rotationY:-180+360*winPercent.x
          });
        }
        /*
          gsap.to('.face', {
            duration:1,
            backgroundPosition:-150+150*winPercent.x+'px '+(-150*winPercent.y)+'px'
          }); */
        }  
      })




    
