var Links = {
  setColor: function (color) {
    // $('a').css('color', color);
    document.querySelectorAll('a').forEach((a) => {
      a.style.color = color;
    });
  },
};
var Body = {
  setColor: function (color) {
    // $('body').css('color', color);
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    // $('body').css('backgroundColor', color);
    document.querySelector('body').style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
