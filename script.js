// console.log("Mandando oi para o amigo!")
//
// function mandaMensagem() {
//  console.log("Tudo bem?");
//  console.log("Vou te mandar uma solicitação");
//  console.log("Solicitação recebida");
//
// }
//
// mandaMensagem();
//
// setTimeout(mandaMensagem, 5000)
//
// console.log("Tchau, tchau!!")
//


// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if(r.erro){
//             throw Error('Esse cep não existe')
//         }else{
//             console.log(r)
//         }
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluido!'))
//
// console.log(consultaCep);

async function buscarEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCepConvertida = await consultaCEP.json()
        if(consultaCepConvertida.erro){
            throw Error("CEP não existente!")
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf

        console.log(consultaCepConvertida)
        return consultaCepConvertida
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscarEndereco(valores))
// console.log(conjuntoCeps)
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
// buscarEndereco()


var cep = document.getElementById('cep')
cep.addEventListener("focusout", ()=> buscarEndereco(cep.value))



