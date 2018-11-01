// Слайдер в 3 контейнере
/*var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');
var innerDiv = document.querySelector('.container_3 > div');//null?
var margin = 0;
var slideWidth = innerDiv.children[0].offsetWidth; // 1602px
var targetMargin = 0;
var speed = 10;
leftButton.onclick = function() {
  targetMargin += slideWidth;
  var t = setInterval(function() {
    margin += speed;
    if (margin == targetMargin) {
      clearInterval(t);
    }
    innerDiv.style.marginLeft = margin + 'px';
  }, 25);
};
rightButton.onclick = function() {
  targetMargin -= slideWidth;
  var t = setInterval(function() {
    margin -= speed;
    if (margin == targetMargin) {
      clearInterval(t);
    }
    innerDiv.style.marginLeft = margin + 'px';
  }, 25);
};
};*/
window.onload = function() {
(function() {
  var sliderInnerDiv = document.querySelector('.container_3 > div');
  var leftButton = document.querySelector('.left');
  var rightButton = document.querySelector('.right');
  var margin = 0;
  var targetMargin = 0;
  var blockWidth = sliderInnerDiv.children[0].offsetWidth;
  var blocksCount = sliderInnerDiv.children.length;
  var speed = 10;
  var animateIsActive = false;

  function animate() {
    if (!animateIsActive) {
      animateIsActive = true;
      var t = setInterval(function() {
        if (Math.abs(margin - targetMargin) < speed) {
          margin = targetMargin;
          clearInterval(t);
          animateIsActive = false;
        }
        else {
          margin += targetMargin > margin ? speed : -speed;
        }
        sliderInnerDiv.style.marginLeft = margin + 'px';
      }, 3);
    }


  leftButton.onclick = function() {
    if (targetMargin < 0) {
      targetMargin += blockWidth;
    }
    animate();
  };

  rightButton.onclick = function() {
    if (targetMargin > -blockWidth * (blocksCount - 1)) {
      targetMargin -= blockWidth;
    }
    animate();
  };
})();
};

// Переключение в 6 контейнере

  var left_button = document.querySelector('.slide_1_hidden');
  var left_text = document.querySelector('.text_6');
  var left_img = document.querySelector('.container_5');
  var right_button = document.querySelector('.slide_2_hidden');
  var right_text = document.querySelector('.text_6_hidden');
  var right_img = document.querySelector('.container_5_hidden');
    left_button.onclick = function() {
       right_text.style.display = 'none';
       right_img.style.display = 'none';
       left_text.style.display = 'block';
       left_img.style.display = 'block';
    };
    right_button.onclick = function() {
       right_text.style.display = 'block';
       right_img.style.display = 'block';
       left_text.style.display = 'none';
       left_img.style.display = 'none';
    };
  };
