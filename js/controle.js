let contador = 0;

let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista")

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput!== null) && (valorInput!==undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <!-- item nome -->
        <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
        </div>

        <!-- item botão -->
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="botao"><img src="img/delete.png" alt=""><img/></button>
        </div>
    </div>`;

    //adicionar novo item no mais
    main.innerHTML += novoItem;

    //zerar campos
    input.value = "";
    input.focus();

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == "item"){
        item.classList.add('clicado');
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
    }
}

input.addEventListener("keyup", function(event){
    //se teclou enter
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})