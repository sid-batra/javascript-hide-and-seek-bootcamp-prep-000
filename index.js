function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested .target');
  //return document.getElementById('nested').getElementByClassName('target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + parseInt(n)).toString();
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}