function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum Pokémon foi encontrado! Não desista...</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let numero = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || numero.includes(campoPesquisa)){
            resultados +=`
                <div class="item-resultado">
                    <h2>
                        <h2>${dado.titulo}</h2>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">>Saiba mais...</a>
                </div>
            `;
        }
    }
    
    if (!resultados) {
        resultados = "<p>Oops!!! Nenhum Pokémon foi encontrado!!!</p>"
    }

    section.innerHTML = resultados
    }