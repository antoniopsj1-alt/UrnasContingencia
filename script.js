
/* =====================================================
   BASE DE DADOS DOS SOFTWARES
   Para adicionar novos softwares basta inserir
   novos objetos neste array.
===================================================== */

const softwares = [

{
id:"CONTINGÊNCIA 1",
icon:"imagem/icone-01-contingencia-1.png",
name:"01 VÍDEO - CONTINGÊNCIA 1",
description:"Reinício da Urna Eletrônica (U.E.) com defeito.",
tutorials:[
"Como REINICIAR A URNA ELETRÔNICA (U.E.)."
]
},

{
id:"CONTINGÊNCIA 2",
icon:"imagem/icone-02-contingencia-2.png",
name:"02 VÍDEO - CONTINGÊNCIA 2",
description:"Verificação da Mídia de Votação (M.V.) com defeito.",
tutorials:[
"Como fazer a VERIFICAÇÃO DA MÍDIA DE VOTAÇÃO (M.V.)."
]
},

{
id:"CONTINGÊNCIA 3",
icon:"imagem/icone-03-contingencia-3.png",
name:"03 VÍDEO - CONTINGÊNCIA 3",
description:"Substituição da Urna Eletrônica (U.E.) com defeito por uma de contingência.",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA URNA ELETRÔNICA (U.E.) DE CONTINGÊNCIA."
]
},

{
id:"CONTINGÊNCIA 4",
icon:"imagem/icone-04-contingencia-4.png",
name:"04 VÍDEO - CONTINGÊNCIA 4",
description:"Substituição da Mídia de Votação (M.V.) com defeito por uma de contingência.",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA MÍDIA DE VOTAÇÃO (M.V.) DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA MÍDIA DE VOTAÇÃO (M.V.) DE CONTINGÊNCIA."
]
},

{
id:"RECUPERADOR DE DADOS",
icon:"imagem/icone-05-red.png",
name:"05 VÍDEO - RED (RECUPERADOR DE DADOS)",
description:"Recuperação de dados da Urna Eletrônica (U.E.) que não foi encerrada ou não possui dados (B.U. ou M.R.).",
tutorials:[
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DE BOLETIM DE URNA (B.U.) OU DA URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DA MÍDIA DE RESULTADO (M.R.).",
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA SEM VOTAÇÃO MISTA.",
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA COM VOTAÇÃO MISTA."
]
},

{
id:"MÓDULO IMPRESSOR",
icon:"imagem/icone-06-modulo-impressor.png",
name:"06 VÍDEO - MÓDULO IMPRESSOR",
description:"Verificação e troca da bobina de papel do módulo impressor da Urna Eletrônica (U.E.).",
tutorials:[
"Como VERIFICAR A BOBINA DE PAPEL.",
"Como fazer a TROCA DA BOBINA DE PAPEL."
]
},

{
id:"BOBINA DE PAPEL",
icon:"imagem/icone-07-bobina-papel.png",
name:"07 VÍDEO - SUBSTITUIÇÃO DA BOBINA DE PAPEL DO MÓDULO IMPRESSOR",
description:"Substituição da bobina de papel do módulo impressor da Urna Eletrônica (U.E.).",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA BOBINA DE PAPEL."
]
},

{
id:"INICIAIS",
icon:"imagem/icone-08-procedimentos-iniciais.png",
name:"08 - PROCEDIMENTOS INICIAIS",
description:"Procedimentos iniciais de instalação da Urna Eletrônica (U.E.).",
tutorials:[
"Como proceder com a INSTALAÇÃO DA URNA ELETRÔNICA (U.E.)",
]
}

];

// Conteúdo individual de cada tela de instrução.
// Para usar imagens reais, coloque os arquivos na pasta "imagens" e ajuste o campo image.
const tutorialDetails = {
  "Como REINICIAR A URNA ELETRÔNICA (U.E.).": {
    image: [
            "imagem/01 - REINICIAR - 01.png",
            "imagem/01 - REINICIAR - 02.png",
            "imagem/01 - REINICIAR - 03.png"
            ],
    video: "videos/01-reiniciar-urna.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.", "Aguarde pelo menos 10 segundos.","Ligue a Urna Eletrônica (U.E.) clicando no botão verde na parte de trás da urna.","Observe a tela reiniciar.","Verifique se o problema foi resolvido.","Caso o problema persista, repita os passos 2 a 6 até no máximo duas vezes.","Se o problema for resolvido, a votação deve retornar ao normal imediatamente.","Se o problema continuar, siga para a Contingência 2."]
  },
  "Como fazer a VERIFICAÇÃO DA MÍDIA DE VOTAÇÃO (M.V.).": {
    image: [
            "imagem/01 - REINICIAR - 01.png",
            "imagem/02 - VERIFICAR MV - 01.png",
            "imagem/02 - VERIFICAR MV - 02.png",
            "imagem/02 - VERIFICAR MV - 03.png",
            "imagem/01 - REINICIAR - 02.png",
            "imagem/01 - REINICIAR - 03.png",
            "imagem/02 - VERIFICAR MV - 04.png",
            "imagem/02 - VERIFICAR MV - 05.png"
            ],
    video: "videos/02-verificacao-midia-votacao.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários. ", "Desligue a urna.", "É necessário utilizar uma chave Philips.","Rompa o lacre da Mídia de Vídeo (M.V.).","Solte o parafuso da tampa do compartimento da Mídia de Vídeo (M.V.).","Retire a Mídia de Vídeo (M.V.).","Insira novamente a Mídia de Vídeo (M.V.), encaixando-a perfeitamente.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente a tampa da Mídia de Vídeo (M.V.).","Instale um novo lacre no local.","A votação deve retornar ao funcionamento normal imediatamente.","Se o problema persistir, siga para a Contingência 3."]
  },
  "Como fazer a SUBSTITUIÇÃO DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA URNA ELETRÔNICA (U.E.) DE CONTINGÊNCIA.": {
    image: [
            "imagem/01 - REINICIAR - 01.png",
            "imagem/03 - SUBSTITUIR UE - 01.png",
            "imagem/02 - VERIFICAR MV - 01.png",
            "imagem/02 - VERIFICAR MV - 02.png",          
            "imagem/03 - SUBSTITUIR UE - 02.png",
            "imagem/03 - SUBSTITUIR UE - 03.png",
            "imagem/03 - SUBSTITUIR UE - 04.png",
            "imagem/03 - SUBSTITUIR UE - 05.png",
            "imagem/03 - SUBSTITUIR UE - 06.png",
            "imagem/01 - REINICIAR - 02.png",
            "imagem/01 - REINICIAR - 03.png",
            "imagem/02 - VERIFICAR MV - 04.png",
            "imagem/02 - VERIFICAR MV - 05.png"
            ],
    video: "videos/03-substituicao-ue.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "Desligue a urna.", "É necessário utilizar uma chave Philips.","Retire o lacre da Mídia de Resultado (M.R.).","Retire o lacre da Mídia de Vídeo (M.V.). ","Solte os parafusos das tampas dos compartimentos das mídias (M.V. e M.R.).","Retire a Mídia de Resultado (M.R.) e a Mídia de Vídeo (M.V.).","Substitua o Urna Eletrônica (U.E.) com defeito pela Urna Eletrônica (U.E.) de contingência.","Retire o lacres (M.V e M.R) da Urna Eletrônica (U.E.) de contingência.","Solte os parafusos das tampas dos compartimentos das mídias da Urna de Contingência.","Insira a Mídia de Resultado (M.R.) e a Mídia de Vídeo (M.V.) na Urna de Contingência","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente as tampas das mídias (M.V. e M.R.).","Instale um novo lacre sobre as tampas das mídias","A votação deve retornar ao funcionamento normal imediatamente.","Se o problema persistir, siga para a Contingência 4."]
  },
  "Como fazer a SUBSTITUIÇÃO DA MÍDIA DE VOTAÇÃO (M.V.) DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA MÍDIA DE VOTAÇÃO (M.V.) DE CONTINGÊNCIA.": {
    image: [
            "imagem/01 - REINICIAR - 01.png",
            "imagem/04 - TROCAR MV - 01.png",
            "imagem/03 - SUBSTITUIR UE - 06.png",
            "imagem/01 - REINICIAR - 02.png",
            "imagem/01 - REINICIAR - 03.png",
            "imagem/02 - VERIFICAR MV - 04.png",
            "imagem/02 - VERIFICAR MV - 05.png"
            ],
    video: "videos/04-substituicao-mv.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "É necessário utilizar uma chave Philips.", "Desligue a urna.","Retire as Mídia de Vídeo (M.V.) e a Mídia de Resultado (M.R.) da Urna de Contingência.","Substitua inserindo a Mídia de Vídeo (M.V.) de Contingência na Urna de Contingência.","Insira a Mídia de Resultado (M.R.) na Urna de Contingência.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente as tampas das mídias (M.V. e M.R.).","Instale um novo lacre nas tampas das mídias.","A votação deve retornar ao funcionamento normal imediatamente.","Caso o problema persista, entre em contato com o responsável pelo cartório eleitoral para solicitar a realização da votação de forma manual, utilizando cédulas de papel."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DE BOLETIM DE URNA (B.U.) OU DA URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DA MÍDIA DE RESULTADO (M.R.).": {
    image: "imagem/05-red-encerrada.jpg",
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Insira aqui a instrução 1 para este procedimento RED.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA SEM VOTAÇÃO MISTA.": {
    image: "imagem/06-red-nao-encerrada-sem-mista.jpg",
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Insira aqui a instrução 1 para este procedimento RED.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA COM VOTAÇÃO MISTA.": {
    image: "imagem/07-red-nao-encerrada-com-mista.jpg",
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Insira aqui a instrução 1 para este procedimento RED.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como VERIFICAR A BOBINA DE PAPEL.": {
    image: "imagem/08-conferir-bobina.jpg",
    video: "videos/08-conferir-bobina.mp4",
    instructions: ["Insira aqui a instrução 1 para conferir a bobina.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como fazer a TROCA DA BOBINA DE PAPEL.": {
    image: "imagem/09-troca-bobina.jpg",
    video: "videos/08-conferir-bobina.mp4",
    instructions: ["Insira aqui a instrução 1 para trocar a bobina.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como fazer a SUBSTITUIÇÃO DA BOBINA DE PAPEL.": {
    image: "imagem/10-substituicao-bobina.jpg",
    video: "videos/09-troca-bobina.mp4",
    instructions: ["Insira aqui a instrução 1 para substituir a bobina.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Como proceder com a INSTALAÇÃO DA URNA ELETRÔNICA (U.E.)": {
    image: "imagem/11-instalacao-ue.jpg",
    video: "videos/11-instalacao-ue.mp4",
    instructions: ["Insira aqui a instrução 1 para instalar a U.E.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  }
};

let currentSoftware = null;

const homeScreen = document.getElementById("homeScreen");
const indexScreen = document.getElementById("indexScreen");
const contentScreen = document.getElementById("contentScreen");

function renderSoftwares(filter = "") {

const grid = document.getElementById("softwareGrid");

grid.innerHTML = "";

softwares
.filter(item =>
item.name.toLowerCase().includes(filter.toLowerCase())
)
.forEach(item => {

grid.innerHTML += `
<div
class="software-card card-hover"
onclick="showSoftwareIndex('${item.id}')"
>
<img src="${item.icon}" alt="Figura relacionada a ${item.name}" class="software-icon-img" onerror="this.style.display='none';">

<h3 class="text-xl font-bold mb-2">
${item.name}
</h3>

<p class="text-gray-400">
${item.description}
</p>

</div>
`;

});

}

function hideAll(){

homeScreen.style.display="none";
indexScreen.style.display="none";
contentScreen.style.display="none";

}

function showHome(){

hideAll();

homeScreen.style.display="block";

}

function showSoftwareIndex(id){

currentSoftware = softwares.find(x => x.id === id);

hideAll();

indexScreen.style.display="block";

document.getElementById(
"selectedSoftwareIcon"
).innerHTML=`<img src="${currentSoftware.icon}" alt="Figura relacionada a ${currentSoftware.name}" class="selected-software-icon-img" onerror="this.style.display='none';">`;

document.getElementById(
"selectedSoftwareTitle"
).innerHTML=currentSoftware.name;

const list = document.getElementById(
"tutorialList"
);

list.innerHTML="";

currentSoftware.tutorials.forEach(title => {

list.innerHTML += `
<div
    onclick="showTutorial('${title}')"
    class="tutorial-card"
>

<div class="flex items-center justify-between">

    <span class="font-medium">
        ${title}
    </span>

    <span class="text-cyan-400 text-xl">
        →
    </span>

</div>

</div>
`;

});

}

function showTutorial(title){ // MOSTRA UMA TELA PRÓPRIA PARA CADA TÍTULO
    hideAll();
    contentScreen.style.display="block";
    document.getElementById("tutorialTitle").innerHTML=title;

    const details = tutorialDetails[title] || { image: "", instructions: ["Conteúdo ainda não cadastrado."] };
    const content = document.getElementById("tutorialContent");
    const steps = [...details.instructions, { video: details.video }];
    content.innerHTML = steps.map((step, index) => {
        const texto = typeof step === "string"
            ? step
            : `<span>Assista ao vídeo deste procedimento: <a href="${step.video}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 font-semibold hover:underline">▶ Abrir vídeo MP4</a></span>`;
        return `<li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 h-5 w-5 accent-cyan-500 cursor-pointer" aria-label="Conferir passo ${index + 1}">
            <span><span class="text-cyan-400 font-bold">${index + 1}.</span> ${texto}</span>
        </li>`;
    }).join("");

    const imageArea = document.getElementById("tutorialImageArea");

// Aceita tanto uma única imagem quanto várias imagens
const images = Array.isArray(details.image)
    ? details.image
    : [details.image];

imageArea.innerHTML = `
    <div class="tutorial-images-list">
        ${images.map((src, index) => `
            <img
                src="${src}"
                alt="Imagem de apoio ${index + 1}: ${title.replace(/<br>/g, ' ')}"
                class="tutorial-image"
                onerror="this.style.display='none';"
            >
        `).join("")}
    </div>
`;
}
//fim da função

/* ====================================================
    PESQUISA
==================================================== */

document
.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

renderSoftwares(e.target.value);

});

renderSoftwares();