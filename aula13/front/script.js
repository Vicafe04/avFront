const lista = document.querySelector(".list");
const itemlista = document.querySelector(".item-list");

function carregar() {
    fetch("http://localhost:3000/read")
        .then(resp => { return resp.json() })
        .then(chamado => {
            chamado.forEach(data => {
                console.log(data.id);
                let item = itemlista.cloneNode(true);

                item.classList.remove("model");

                item.querySelector("#id").innerHTML = data.id;
                item.querySelector("#tipo").innerHTML = data.tipo;
                item.querySelector("#severidade").innerHTML = data.severidade;
                item.querySelector("#descricao").innerHTML = data.descricao;

                let dataFormat = new Date(data.data);
                item.querySelector("#data").innerHTML = dataFormat.toLocaleString('pt-BR');

                item.querySelector("#hora").innerHTML = data.hora;
                item.querySelector("#hora_inicio").innerHTML = data.hora_inicio;
                item.querySelector("#hora_fim").innerHTML = data.hora_fim;
                item.querySelector("#destino").innerHTML = data.destino;
                lista.appendChild(item);
            })
        })
}

function acao(){
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}