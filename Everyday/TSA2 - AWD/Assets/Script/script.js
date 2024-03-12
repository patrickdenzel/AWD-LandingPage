var currentActiveDay = null;

function showBox(day) {
  var activeBox = document.getElementById('box-' + day);
  var activeButton = document.getElementById('button-' + day);

  if (currentActiveDay) {
    var currentActiveBox = document.getElementById('box-' + currentActiveDay);
    currentActiveBox.classList.add('exit');
    setTimeout(function () {
      currentActiveBox.classList.remove('active', 'exit');
    }, 500); 
  }

  activeBox.style.borderColor = getBoxColor(day);

  activeButton.style.backgroundColor = getBoxColor(day);
  activeButton.style.borderColor = getBoxColor(day);

  activeBox.classList.add('active');
  
  currentActiveDay = day;
}

function resetBox() {
  if (currentActiveDay) {
    var currentActiveBox = document.getElementById('box-' + currentActiveDay);
    currentActiveBox.classList.add('exit');
    setTimeout(function () {
      currentActiveBox.classList.remove('active', 'exit');
    }, 500);
  }

  currentActiveDay = null;
}

function getBoxColor(day) {
  switch (day) {
    case 'Monday':
      return 'rgb(0, 255, 234)';
    case 'Tuesday':
      return 'rgb(162, 0, 255)';
    case 'Wednesday':
      return 'rgb(255, 0, 98)';
    case 'Thursday':
      return 'rgb(21, 255, 0)';
    case 'Friday':
      return 'rgb(255, 136, 0)';
    case 'Saturday':
      return 'rgb(255, 0, 0)';
    case 'Sunday':
      return 'rgb(255, 251, 0)';
    default:
      return 'transparent';
  }
}