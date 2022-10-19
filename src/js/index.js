/*OBJETIVO -  quando clicarmos ma aba temos que mostrar
o contteúdo da aba que foi clicada pelo usuário e
esconder o conteúdo da aba anterior.

- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.

- passo 2 - darum jeito de indetificar o clique no elemento da aba.

- passo 3 - quando o usuário clicar, desmarcar a aba selecionada.

- passo 4 - ,arcar a aba clicando como selecionado.

- passo 5 - esconder o conteúdo anterior.

- passo 6 - mostrar o conteúdo da aba selecionada.*/

//- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

    //- passo 2 - dar um jeito de indetificar o clique no elemento da aba.
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }
        
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba)
        //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
        /*
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        //- passo 4 - marcar a aba clicando como selecionado.
        aba.classList.add("selecionado");
        */

        //- passo 5 - esconder o conteúdo anterior.
        /*
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        //- passo 6 - mostrar o conteúdo da aba selecionada.
        const idDoElementoDeInformcoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformcoesDaAba)
        informacaoASerMostrada.classList.add("selecionado");
        */
    });
});

function selecionarAba(aba) {
    //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

    //- passo 4 - marcar a aba clicando como selecionado.
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    //- passo 5 - esconder o conteúdo anterior.
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

    //- passo 6 - mostrar o conteúdo da aba selecionada.
        const idDoElementoDeInformcoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformcoesDaAba)
        informacaoASerMostrada.classList.add("selecionado");
}












