$( function() {
  $( ".drag" ).draggable();
} );

$( function() {
  $( ".imgKtr" ).draggable();
} );

function flip01() {
    $('.01').toggleClass('flipped');}
function flip02() {
    $('.02').toggleClass('flipped');
    var x = document.getElementById("i06");
    if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";}
    var y = document.getElementById("i05");
        if (y.style.display === "block") {
          y.style.display = "none";
        } else { y.style.display = "block"; }
    }
function flip03() {
    $('.03').toggleClass('flipped');
    var x = document.getElementById("i03");
    if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }

    var y = document.getElementById("i04");
        if (y.style.display === "block") {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
    }
function flip04() {
    $('.04').toggleClass('flipped');
    var y = document.getElementById("i02");
        if (y.style.display === "block") {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
}
function flip05() {
    $('.05').toggleClass('flipped');
    // var x = document.getElementById("i03");
    // if (x.style.display === "block") {
    //   x.style.display = "none";
    // } else {
    //   x.style.display = "block";
    // }
    //
    // var y = document.getElementById("i04");
    // if (y.style.display === "block") {
    //   y.style.display = "none";
    // } else {
    //   y.style.display = "block";
    // }
}
function flip06() {
    $('.06').toggleClass('flipped');}
function flip07() {
    $('.07').toggleClass('flipped');}
function flip08() {
    $('.08').toggleClass('flipped');}
function flip09() {
    $('.09').toggleClass('flipped');}
function flip10() {
    $('.10').toggleClass('flipped');

    var x = document.getElementById("i99");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    }



function focusz01() {
  document.getElementById('z01').style.zIndex = 4;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}

function focusz02() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 4;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz03() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 4;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz04() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 4;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz05() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 4;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz06() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 4;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz07() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 4;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz08() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 4;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz09() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 4;
  document.getElementById('z10').style.zIndex = 2;
}
function focusz10() {
  document.getElementById('z01').style.zIndex = 2;
  document.getElementById('z02').style.zIndex = 2;
  document.getElementById('z03').style.zIndex = 2;
  document.getElementById('z04').style.zIndex = 2;
  document.getElementById('z05').style.zIndex = 2;
  document.getElementById('z06').style.zIndex = 2;
  document.getElementById('z07').style.zIndex = 2;
  document.getElementById('z08').style.zIndex = 2;
  document.getElementById('z09').style.zIndex = 2;
  document.getElementById('z10').style.zIndex = 4;
}





// function focusi01() {
//   document.getElementById('i01').style.zIndex = 5;
//   document.getElementById('i02').style.zIndex = -2;
//   document.getElementById('i03').style.zIndex = -2;
//   document.getElementById('i04').style.zIndex = -2;
// }
//
// function focusi01() {
//   document.getElementById('i01').style.zIndex = -2;
//   document.getElementById('i02').style.zIndex = 5;
//   document.getElementById('i03').style.zIndex = -2;
//   document.getElementById('i04').style.zIndex = -2;
// }
// function focusi01() {
//   document.getElementById('i01').style.zIndex = -2;
//   document.getElementById('i02').style.zIndex = -2;
//   document.getElementById('i03').style.zIndex = 5;
//   document.getElementById('i04').style.zIndex = -2;
// }
// function focusi01() {
//   document.getElementById('i01').style.zIndex = -2;
//   document.getElementById('i02').style.zIndex = 2;
//   document.getElementById('i03').style.zIndex = -5;
//   document.getElementById('i04').style.zIndex = -2;
// }
