


// document.addEventListener("mousemove", e => {
//   img11.setAttribute(
//     "style",
//     "top :" + (e.pageY - 75) + "px; left: " + (e.pageX - 50) + "px"
//   );
//   img22.setAttribute(
//     "style",
//     "top :" + (e.pageY - 75) + "px; left: " + (e.pageX - 50) + "px"
//   );
// });


document.addEventListener("DOMContentLoaded", function () {
    var X = Y = 0;

    function move() {
        document.getElementById('fly').style.left = X + 'px';
        document.getElementById('fly').style.top = Y + 'px';
    }
    document.addEventListener("mousemove", function (e) {
        X = e.clientX;
        Y = e.clientY;
    }, false);

    setInterval(move, 100);
});

var img1 = document.getElementById('fly-img1');
var img2 = document.getElementById('fly-img2');
var img3 = document.getElementById('fly-img3');
var img4 = document.getElementById('fly-img4');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3');
var menu4 = document.getElementById('menu4');
var fly = document.getElementById('fly');

menu1.onmouseover = function(e) {

    img1.classList.add("fly--current");
    img11.classList.add("cursor-dn");
    img22.classList.add("cursor-dn");
  }

menu1.onmouseout = function(e) {

    img1.classList.remove("fly--current");
    img11.classList.remove("cursor-dn");
    img22.classList.remove("cursor-dn");
  };

  menu2.onmouseover = function(e) {
      // document.getElementById('exemple1').style.display='none';
      img2.classList.add("fly--current");
      img2.style.margin="-27% 0 0 -15%";
    }

  menu2.onmouseout = function(e) {

      img2.classList.remove("fly--current");
    };
    menu3.onmouseover = function(e) {

        img3.classList.add("fly--current");
          img3.style.margin="-57% 0 0 -15%";
      }

    menu3.onmouseout = function(e) {

        img3.classList.remove("fly--current");
      };

      menu4.onmouseover = function(e) {

          img4.classList.add("fly--current");
            img4.style.margin="-77% 0 0 -15%";
        }

      menu4.onmouseout = function(e) {

          img4.classList.remove("fly--current");
        };





      /**
       * Example of starting a plugin with options.
       * I am just passing some of the options in the following example.
       * you can also start the plugin using $('.marquee').marquee(); with defaults
      */
      $('.ticker-left').marquee({
      	//duration in milliseconds of the marquee
      	duration: 40000,
      	//gap in pixels between the tickers
      	gap: 0,
      	//time in milliseconds before the marquee will start animating
      	delayBeforeStart: 0,
      	//'left' or 'right'
        startVisible: true,
      	direction: 'left',
      	//true or false - should the marquee be duplicated to show an effect of continues flow
      	duplicated: true
      });

      $('.ticker-right').marquee({
        //duration in milliseconds of the marquee
        duration: 40000,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        startVisible: true,
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
      });