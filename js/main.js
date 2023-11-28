
/* Galeria de Fotos */
const fotos = document.querySelector('.foto');
let numFoto = 0;

const mudarFoto = (n) => {
  numFoto += n;

  if (numFoto < 0) {
    numFoto = 7;
  }
  else if (numFoto > 7) {
    numFoto = 0;
  }

  fotos.style.backgroundImage = `url('img/Galeria de Fotos/${numFoto}.jpg')`;
}

/* Confirmar presença */
document.getElementById('enviar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value; 
    var email = document.getElementById('email').value; 
    var whatsapp = document.getElementById('whatsapp').value;
    
    if (nome && email && whatsapp) {
      var linkWhatsapp = `https://api.whatsapp.com/send?phone=+558899702957&text=Olá, passando para confirmar minha presença no casamento. Meu nome é: ${nome}, e email é ${email}`;
    
      window.open(linkWhatsapp);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
});

