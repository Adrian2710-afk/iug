function setup(){canvas=createCanvas(280,280);
    canvas.center();
    background("red");canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function preload(){
    classifier=ml5.imageClassifier('DoodleNet');}

    function draw(){ strokeWeight (8); stroke(0); if(mousePressed){

        line(pmousex, pmousey, mousex, mousey);
    }
}
function gotResult(error,results){
if (error) {
    console.error(error);
  }
  console.log(results);
  document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

  document.getElementById('confidence').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';

  utterThis = new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterThis);
}