const nome = document.getElementById('nome');

const dog = document.getElementsByName('dog');

const escolhaSim = document.getElementById('escolhaSim');

const escolhaNao = document.getElementById('escolhaNao');

const foto = document.getElementById('foto');

const submit = document.getElementById('submit');

const cardFlex = document.getElementById('cardFlex');


function criarCard(event) {
    event.preventDefault();


        if (foto.value !== '' && nome.value !== '' && escolhaSim.value !== '' && escolhaNao.value !== '') {

            if (escolhaSim.checked == true){
                document.getElementById("cardFlex").innerHTML = ` 
                <div class="heaven">
                <h3>C É U</h3>
                <p class="frase">Parabéns, não fez mais que sua obrigação!</p>
                <center><img src="${foto.value}"  width="100" height="100"></img></center>
                <center><p class="nomePessoa">${nome.value}</p></center>          
                </div>
        
                `
        
                cardFlex.style.overflow = "hidden";
                cardFlex.style.overfloxX = "scroll"; 

            } else {
                document.getElementById("cardFlex").innerHTML = ` 
                <div class="hell">
                <h3>I N F E R N O </h3>
                <p class="frase">Espero que goste do calor!</p>
                <center><img src="${foto.value}"  width="100" height="100"></img></center>
                <center><p class="nomePessoa">${nome.value}</p></center>          
                </div>
        
                `
        
                cardFlex.style.overflow = "hidden";
                cardFlex.style.overfloxX = "scroll"; 
            }


        } else {

            alert("Por favor preencha todos os campos");

            }
}

submit.addEventListener('click', criarCard);