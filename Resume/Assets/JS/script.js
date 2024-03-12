var clickCount = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    changeBackgroundColor();
});

function changeBackgroundColor() {
    clickCount++;

    if (clickCount <= 9) {
        var resume = document.getElementById('resume');
        var randomColor = getRandomColor();
        resume.style.backgroundColor = randomColor;
    } else {
        var resume = document.getElementById('resume');
        resume.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        clickCount = 0;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}