function getById(id) {
    return document.getElementById(id);
}

let enviar = getById("enviar");
let tabelas = getById("tabelas");
let novaLinha = getById("novaLinha");
let temas = getById("temas")


temas.addEventListener("change", function () {
    let tema = temas.value; 
    
    document.body.className = ""; 
    document.body.classList.add(tema); 
});


enviar.addEventListener('click', function() {
    
    let nomeFilme = getById("título").value;
    let generoFilme = getById("genero").value;
    let anoFilme = getById("ano").value;
    let precoCompra = getById("compra").value;
    let precoAluguel = getById("aluguel").value;

    if (nomeFilme === "" || precoCompra === "" || precoAluguel === "") {
        alert("Preencha ao menos nome e preços!");
    } else {
        
        let novaLinha = document.createElement('tr');
        
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        
        let botaoReserva = document.createElement('button');
        botaoReserva.innerText = "Reservar";
        botaoReserva.style.backgroundColor = "lightgreen";

        let reservado = false;

        botaoReserva.addEventListener('click', function () {
            if (!reservado) {
                botaoReserva.innerText = "Filme reservado!";
                novaLinha.style.backgroundColor = "lightgreen";
                novaLinha.style.color = "black";
                reservado = true;
            } else {
                botaoReserva.innerText = "Reservar";
                novaLinha.style.backgroundColor = "";
                reservado = false;
            }
        });

        
        let botaoExcluir = document.createElement('button');
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.style.backgroundColor = "red";

        botaoExcluir.addEventListener('click', function () {
            novaLinha.remove();
        });
        
        td1.innerText = nomeFilme;
        td2.innerText = generoFilme;
        td3.innerText = anoFilme;
        td4.innerText = precoCompra;
        td5.innerText = precoAluguel;
        
        novaLinha.appendChild(td1);
        novaLinha.appendChild(td2);
        novaLinha.appendChild(td3);
        novaLinha.appendChild(td4);
        novaLinha.appendChild(td5);

        td6.appendChild(botaoReserva);
        novaLinha.appendChild(td6);

        td7.appendChild(botaoExcluir);
        novaLinha.appendChild(td7);
        
        novaLinha.style.textAlign = "center";
        
        tabelas.appendChild(novaLinha);
        
        getById("título").value = "";
        getById("genero").value = "";
        getById("ano").value = "";
        getById("compra").value = "";
        getById("aluguel").value = "";
    }
});