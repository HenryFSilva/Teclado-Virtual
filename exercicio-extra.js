//var quantidade = prompt("Digite a quantidade desejada:");
function carregarText(){
    var quantidade = prompt("Digite a quantidade desejada:");
     for(let i=0;i<quantidade;i++){
         let testeInput = document.createElement("input");
         testeInput.setAttribute("type","text");
         testeInput.setAttribute("id","text"+[i+1]);
         document.body.appendChild(testeInput);
        }
}


function carregarRadio(){
    var quantidade = prompt("Digite a quantidade desejada:");
    for(let i=0;i<quantidade;i++){
        let testeRadio = document.createElement("input");
        testeRadio.setAttribute("type","radio");
        testeRadio.setAttribute("id","radio"+[i+1]);
        testeRadio.setAttribute("disabled","disabled");
        document.body.appendChild(testeRadio);
        }
}


function carregarParagrafo(){
    var quantidade = prompt("Digite a quantidade desejada:");
    for(let i=0;i<quantidade;i++){
        let testeParagrafo = document.createElement("Paragrafo");
        testeParagrafo.setAttribute("class","texto");
        testeParagrafo.setAttribute("id","Paragrafo "+[i+1]);
        testeParagrafo.innerHTML = ("Paragrafo "+[i+1]+"<br>");
        document.body.appendChild(testeParagrafo);
       }
}

function verificaElemento(){
    if(document.getElementById('texto').checked){
        carregarText()
        //document.write("Você escolheu a opção Input");
       }
    if(document.getElementById('radio').checked){
        carregarRadio()
       //document.write("Você escolheu a opção Radio");
       }
    if(document.getElementById('paragrafo').checked){
        carregarParagrafo()
        //document.write("Você escolheu a opção Paragrafo");
       }

}

