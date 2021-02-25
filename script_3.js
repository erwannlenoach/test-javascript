//2.2.2 Pyramide de Mario


var numberChosen= prompt("Hello jeune plombier italien, tu veux sauver la princesse Daisy ? rentre un nombre (et attention à Bowser)?");

function marioPyramid(num) {
    for (var i = 1; i <= num; i++) {
        var row = '';

        for (var j = 1; j <= (num - i); j++) {
            row += ' ';
        }

        for (var k = 1; k <=i; k++)  {
            row += '#';
        }

        console.log(row);
    }
}

console.log(new marioPyramid(numberChosen));
