const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = canvas.clientWidth;

canvas.height = canvas.clientHeight;

let counter = 0;

let xx = 0;
let xxx = 0;
let word = '  $git commit -m "Phu_Bar"   ';

setInterval(function() {
    context.fillStyle = (counter % 2 === 0) ? 'lightgreen' : 'black';
    context.fillRect(2.5*xx, 1, 20, 50);
	  counter++;

    if (counter%4 === 0) {
    	xx += 10;
      xxx += 10;
      context.fillStyle = 'lightgreen';
      context.font = "200% Arial";
     	context.fillText(word[xxx/10 - 1], 2.5*xxx - 40, 45);

    } else if (counter%110 === 0){
      xx = 0;
      xxx = 0;
      counter = 0;
    	context.clearRect(0, 0, canvas.width, canvas.height);
    }



}, 50);