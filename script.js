
/* =====================================================
   BASE DE DADOS DOS SOFTWARES
   Para adicionar novos softwares basta inserir
   novos objetos neste array.
===================================================== */

const softwares = [

{
id:"CONTINGÊNCIA 1",
icon:"icone-01-contingencia-1.png",
name:"01 VÍDEO - CONTINGÊNCIA 1",
description:"Reinício da Urna Eletrônica (U.E.) com defeito.",
tutorials:[
"Como REINICIAR A URNA ELETRÔNICA (U.E.)."
]
},

{
id:"CONTINGÊNCIA 2",
icon:"icone-02-contingencia-2.png",
name:"02 VÍDEO - CONTINGÊNCIA 2",
description:"Verificação do encaixe da Mídia de Votação (M.V.).",
tutorials:[
"Como fazer a VERIFICAÇÃO DA MÍDIA DE VOTAÇÃO (M.V.)."
]
},

{
id:"CONTINGÊNCIA 3",
icon:"icone-03-contingencia-3.png",
name:"03 VÍDEO - CONTINGÊNCIA 3",
description:"Substituição da Urna Eletrônica (U.E.) com defeito por uma de contingência.",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA URNA ELETRÔNICA (U.E.) DE CONTINGÊNCIA."
]
},

{
id:"CONTINGÊNCIA 4",
icon:"icone-04-contingencia-4.png",
name:"04 VÍDEO - CONTINGÊNCIA 4",
description:"Substituição da Mídia de Votação (M.V.) com defeito por uma de contingência.",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA MÍDIA DE VOTAÇÃO (M.V.) DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA MÍDIA DE VOTAÇÃO (M.V.) DE CONTINGÊNCIA."
]
},

{
id:"RECUPERADOR DE DADOS",
icon:"icone-05-red.png",
name:"05 VÍDEO - RED (RECUPERADOR DE DADOS)",
description:"Recuperação de dados da Urna Eletrônica (U.E.) quando a sessão NÃO FOI ENCERRADA ou quando a sessão FOI ENCERRADA SEM a geração do Boletim de Urna (B.U.) ou sem os dados da Mídia de Resultado (M.R.).",
tutorials:[
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DE BOLETIM DE URNA (B.U.) OU DA URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DA MÍDIA DE RESULTADO (M.R.).",
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA SEM VOTAÇÃO MISTA.",
"Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA COM VOTAÇÃO MISTA."
]
},

{
id:"MÓDULO IMPRESSOR",
icon:"icone-06-modulo-impressor.png",
name:"06 VÍDEO - MÓDULO IMPRESSOR",
description:"Verificação e troca da bobina de papel do módulo impressor da Urna Eletrônica (U.E.).",
tutorials:[
"Como VERIFICAR A BOBINA DE PAPEL.",
"Como fazer a TROCA DA BOBINA DE PAPEL."
]
},

{
id:"BOBINA DE PAPEL",
icon:"icone-07-bobina-papel.png",
name:"07 VÍDEO - SUBSTITUIÇÃO DA BOBINA DE PAPEL DO MÓDULO IMPRESSOR",
description:"Substituição da bobina de papel do módulo impressor da Urna Eletrônica (U.E.).",
tutorials:[
"Como fazer a SUBSTITUIÇÃO DA BOBINA DE PAPEL."
]
},

{
id:"INICIAIS",
icon:"icone-08-procedimentos-iniciais.png",
name:"08 - PREPARAÇÃO DA URNA ELETRÔNICA PARA VOTAÇÃO.",
description:"Instruções de preparação da Urna Eletrônica (U.E.) para a votação.",
tutorials:[
"Parte 1 – Componentes da Urna Eletrônica (U.E.).",
"Parte 2 – Preparação Oficial da Urna Eletrônica (U.E.) antes da Eleição.",
"Parte 3 – Ligando e Testando a Urna no Dia da Votação.",
"Parte 4 – Iniciando a Votação.",
"Parte 5 – Ciclo de Votação no Dia da Eleição."
]
}

];

// Conteúdo individual de cada tela de instrução.
// Para usar imagens reais, coloque os arquivos na pasta "imagens" e ajuste o campo image.
const tutorialDetails = {
  "Como REINICIAR A URNA ELETRÔNICA (U.E.).": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 2 - Desligar a Urna Eletrônica (U.E.)."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 4 - Religar a Urna Eletrônica (U.E.)."
        },
        {
            src: "01 - REINICIAR - 03.png",
            caption: "Passo 5 e 6 - Observar a tela reinicialização do sistema."
        }
            ],
    video: "videos/01-reiniciar-urna.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.", "Aguarde pelo menos 10 segundos.","Ligue a Urna Eletrônica (U.E.) clicando no botão verde na parte de trás da urna.","Observe a tela reiniciar.","Verifique se o problema foi resolvido.","Caso o problema persista, repita os passos 2 a 6 até no máximo duas vezes.","Se o problema for resolvido, a votação deve retornar ao normal imediatamente.","Se o problema continuar, siga para a Contingência 2."]
  },
  "Como fazer a VERIFICAÇÃO DA MÍDIA DE VOTAÇÃO (M.V.).": {
   images: [
    {
        src: "01 - REINICIAR - 01.png",
        caption: "Passo 2 - Desligar a Urna Eletrônica (U.E.)."
    },
    {
        src: "02 - VERIFICAR MV - 01.png",
        caption: "Passo 4 - Rompa o lacre da Mídia de Votação (M.V.)."
    },
    {
        src: "02 - VERIFICAR MV - 02.png",
        caption: "Passo 5 - Retire o parafuso da Mídia de Votação (M.V.)."
    },
    {
        src: "02 - VERIFICAR MV - 03.png",
        caption: "Passo 6 e 7 - Retire e Insira a Mídia de Votação (M.V.)."
    },
    {
        src: "01 - REINICIAR - 02.png",
        caption: "Passo 8 - Religar a Urna Eletrônica (U.E.)."
    },
    {
        src: "01 - REINICIAR - 03.png",
        caption: "Passo 9 - Verifique se o problema foi resolvido."
    },
    {
        src: "02 - VERIFICAR MV - 04.png",
        caption: "Passo 10 - Parafuse a tampa da Mídia de Votação (M.V.)."
    },
    {
        src: "02 - VERIFICAR MV - 05.png",
        caption: "Passo 11 - Instale um novo lacre na tampa da Mídia de Votação (M.V.)."
    }
],
    video: "videos/02-verificacao-midia-votacao.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários. ", "Desligue a urna.", "É necessário utilizar uma chave Philips.","Rompa o lacre da Mídia de Votação (M.V.).","Solte o parafuso da tampa do compartimento da Mídia de Votação (M.V.).","Retire a Mídia de Votação (M.V.).","Insira novamente a Mídia de Votação (M.V.), encaixando-a perfeitamente.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente a tampa da Mídia de Votação (M.V.).","Instale um novo lacre no local.","A votação deve retornar ao funcionamento normal imediatamente.","Se o problema persistir, siga para a Contingência 3."]
  },
  "Como fazer a SUBSTITUIÇÃO DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA URNA ELETRÔNICA (U.E.) DE CONTINGÊNCIA.": {
images: [
    {
        src: "01 - REINICIAR - 01.png",
        caption: "Passo 2 - Desligar a Urna Eletrônica (U.E.)."
    },
    {
        src: "03 - SUBSTITUIR UE - 01.png",
        caption: "Passo 4 - Retire o lacre da Mídia de Resultado (M.R.)."
    },
    {
        src: "02 - VERIFICAR MV - 01.png",
        caption: "Passo 5 - Retire o lacre da Mídia de Votação (M.V.)."
    },
    {
        src: "02 - VERIFICAR MV - 02.png",
        caption: "Passo 6 - Solte o parafuso da tampa e abra os compartimentos das Mídias ((M.V. e M.R.)."
    },
    {
        src: "03 - SUBSTITUIR UE - 02.png",
        caption: "Passo 7 - Retire a Mídia de Resultado (M.R.) e a Mídia de Votação (M.V.)."
    },
    {
        src: "03 - SUBSTITUIR UE - 03.png",
        caption: "Passo 8 - Substitua o Urna Eletrônica (U.E.) com defeito pela de contingência."
    },
    {
        src: "03 - SUBSTITUIR UE - 04.png",
        caption: "Passo 9 - Retire o lacres (M.V e M.R) da Urna de contingência."
    },
    {
        src: "03 - SUBSTITUIR UE - 05.png",
        caption: "Passo 10 -  Solte o parafuso da tampa da Mídia de Votação (M.V.) e abra os compartimentos das Mídias (M.V. e M.R.)."
    },
    {
        src: "03 - SUBSTITUIR UE - 06.png",
        caption: "Passo 11 - Insira a Mídia de Resultado (M.R.) e a Mídia de Votação (M.V.) na Urna de contingência."
    },
    {
        src: "01 - REINICIAR - 02.png",
        caption: "Passo 12 - Ligue a urna pressionando o botão verde."
    },
    {
        src: "01 - REINICIAR - 03.png",
        caption: "Passo 13 - Verifique se o problema foi resolvido."
    },
    {
        src: "02 - VERIFICAR MV - 04.png",
        caption: "Passo 14 - Parafuse a tampa da Mídia de Votação (M.V.) e fixe a tampa da Mídia de Resultado (M.R.)."
    },
    {
        src: "02 - VERIFICAR MV - 05.png",
        caption: "Passo 15 - Instale um novo lacre sobre as tampas das Mídias (M.V. e M.R.)"
    }
],
    video: "videos/03-substituicao-ue.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "Desligue a urna.", "É necessário utilizar uma chave Philips.","Retire o lacre da Mídia de Resultado (M.R.).","Retire o lacre da Mídia de Votação (M.V.). ","Solte o parafuso da tampa da Mídia de Votação (M.V.) e abra os compartimentos das Mídias (M.V. e M.R.).","Retire a Mídia de Resultado (M.R.) e a Mídia de Votação (M.V.).","Substitua o Urna Eletrônica (U.E.) com defeito pela Urna Eletrônica (U.E.) de contingência.","Retire o lacres (M.V e M.R) da Urna Eletrônica (U.E.) de contingência.","Solte o parafuso da tampa da Mídia de Votação (M.V.) e abra os compartimentos das Mídias (M.V. e M.R.). da Urna de contingência.","Insira a Mídia de Resultado (M.R.) e a Mídia de Votação (M.V.) na Urna de Contingência","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente a tampa da Mídia de Votação (M.V.) e fixe a tampa da Mídia de Resultado (M.R.).","Instale um novo lacre sobre as tampas das Mídias (M.V. e M.R.)","A votação deve retornar ao funcionamento normal imediatamente.","Se o problema persistir, siga para a Contingência 4."]
  },
  "Como fazer a SUBSTITUIÇÃO DA MÍDIA DE VOTAÇÃO (M.V.) DA URNA ELETRÔNICA (U.E.) COM DEFEITO PELA MÍDIA DE VOTAÇÃO (M.V.) DE CONTINGÊNCIA.": {
    images: [
    {
        src: "01 - REINICIAR - 01.png",
        caption: "Passo 3 - Desligar a Urna Eletrônica (U.E.)."
    },
    {
        src: "04 - TROCAR MV - 01.png",
        caption: "Passo 4 - Retire a Mídia de Resultado (M.R.) e a Mídia de Votação (M.V.) da Urna de contingência."
    },
    {
        src: "04 - TROCAR MV - 02.png",
        caption: "Passo 5 - Insira a Mídia de Votação (M.V.) de Contingência na Urna de Contingência."
    },
    {
        src: "03 - SUBSTITUIR UE - 06.png",
        caption: "Passo 6 - Insira a Mídia de Resultado (M.R.) na Urna de Contingência."
    },
    {
        src: "01 - REINICIAR - 02.png",
        caption: "Passo 7 - Ligue a urna pressionando o botão verde."
    },
    {
        src: "01 - REINICIAR - 03.png",
        caption: "Passo 8 - Verifique se o problema foi resolvido."
    },
    {
        src: "02 - VERIFICAR MV - 04.png",
        caption: "Passo 9 - Parafuse a tampa da Mídia de Votação (M.V.) e fixe a tampa da Mídia de Resultado (M.R.)."
    },
    {
        src: "02 - VERIFICAR MV - 05.png",
        caption: "Passo 10 - Instale um novo lacre sobre as tampas das Mídias (M.V. e M.R.)"
    }
            
            ],
    video: "videos/04-substituicao-mv.mp4",
    instructions: ["Os processos de contingência devem ser acompanhados pelos fiscais e mesários.", "É necessário utilizar uma chave Philips.", "Desligue a urna.","Retire as Mídia de Votação (M.V.) e a Mídia de Resultado (M.R.) da Urna de Contingência.","Substitua inserindo a Mídia de Votação (M.V.) de contingência na Urna de contingência.","Insira a Mídia de Resultado (M.R.) na Urna de Contingência.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Verifique se o problema foi resolvido.","Se o problema for resolvido, parafuse novamente e fixe as tampas das Mídias (M.V. e M.R.).","Instale um novo lacre nas tampas das Mídias (M.V. e M.R.).","A votação deve retornar ao funcionamento normal imediatamente.","Caso o problema persista, entre em contato com o responsável pelo cartório eleitoral para solicitar a realização da votação de forma manual, utilizando cédulas de papel."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DE BOLETIM DE URNA (B.U.) OU DA URNA ELETRÔNICA (U.E.) ENCERRADA COM AUSÊNCIA DA MÍDIA DE RESULTADO (M.R.).": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 4 - Desligar a Urna Eletrônica (U.E.)."
        },
        {
            src: "03 - SUBSTITUIR UE - 01.png",
            caption: "Passo 5 - Retire o lacre da Mídia de Resultado (M.R.)"
        },
        {
            src: "05 - RED - 21.png",
            caption: "Passo 6 - Destrave e Abra a tampa do compartimento (M.R.)."
        },
        {
            src: "05 - RED - 01.png",
            caption: "Passo 7 - Retire a Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 02.png",
            caption: "Passo 8 - Insira a Mídia RED no slot da Mídia de Resultado."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 9 - Ligue a urna pressionando o botão verde."
        },
        {
            src: "01 - REINICIAR - 03.png",
            caption: "Passo 10 - Aguarde a inicialização completa do sistema."
        },
        {
            src: "05 - RED - 03.png",
            caption: "Passo 11 - Digite o código de acesso ao RECUPERADOR DE DADOS."
        },
        {
            src: "05 - RED - 04.png",
            caption: "Passo 13, 14 e 15 - Caso a urna esteja **ENCERRADA**, SEM Boletim de Urna (B.U) ou SEM Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 05.png",
            caption: "Passo 16 - Imprimir a 1ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 10.png",
            caption: "Passo 17 e 18 - Confirmação, se a impressão do Boletim de Urna (B.U.) está correta. "
        },
        {
            src: "05 - RED - 06.png",
            caption: "Passo 19 - 2ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 07.png",
            caption: "Passo 19 - 1ª via do Boletim de Urna de Justificativa (B.U.J.)."
        },
        {
            src: "05 - RED - 08.png",
            caption: "Passo 19 - 1ª via do Boletim de Identificação de Mesários (B.I.M.)."
        },
        {
            src: "05 - RED - 09.png",
            caption: "Passo 20 - Solicitação de Mídia de Resultado (M.R.) válida para gravar os dados."
        },
        {
            src: "05 - RED - 11.png",
            caption: "Passo 21 - Retirando a Mídia RED."
        },
        {
            src: "05 - RED - 12.png",
            caption: "Passo 22 - Insirindo a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 13.png",
            caption: "Passo 23, 24 e 25 - Confirmação de gravação bem-sucedida."
        },
        {
            src: "05 - RED - 14.png",
            caption: "Passo 26 - Retire a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 15.png",
            caption: "Passo 27, 28 e 29 - Cópias adicionais do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 16.png",
            caption: "Passo 30 - Mensagem para Lacra a tampa do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 17.png",
            caption: "Passo 31, 32 e 33 - Fixando a tampa e o lacre do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 18.png",
            caption: "Passo 34 e 35 - Mensagem de Operação realizada com sucesso. Desligue a urna."
        },
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 36 - Desligue a urna eletrônica pressionando o botão vermelho."
        }
            ],
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Utilize uma chave Phillips adequada para todas as operações de abertura e fechamento de compartimento.", "Prepare uma Mídia RED específica para o procedimento.","Prepare uma Mídia de Resultado (M.R.) específica para receber as informações do sistema.","Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.","Retire o lacre da Mídia de Resultado (M.R.) na Urna Eletrônica (U.E.).","Destrave e abra a tampa do compartimento da Mídia de Resultado (M.R.).","Retire a Mídia de Resultado (M.R.) da U.E.","Insira a Mídia RED no slot da Mídia de Resultado.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Aguarde a inicialização completa do sistema.","Digite o código de acesso ao RECUPERADOR DE DADOS quando solicitado.","Na tela, serão exibidas todas as informações a serem recuperadas, incluindo o status da urna: **ENCERRADA** ou **NÃO ENCERRADA**.","Caso a urna esteja **ENCERRADA**, selecione uma das opções seguintes:<br>[1] - Copiar resultado para o Totalizador<br>[2] - Imprimir Boletim de Urna (BU)<br>[3] - Imprimir Boletim de Urna de Justiça (BUJ)<br>[4] - Imprimir Boletim de Mesários (B.I.M.)<br>[9] - Finalizar o procedimento de recuperação de dados","Digite: **1** para copiar o resultado para o totalizador.","Pressione o botão **CONFIRMA**.","A urna irá imprimir a 1ª via do Boletim de Urna (B.U.).","Após a impressão, na tela aparecerá a mensagem:*Por favor, verifique se o Boletim de Urna foi impresso corretamente e de forma legível.*","Confirme pressionando **CONFIRMA** se a impressão estiver correta.","A urna imprimirá as seguintes vias/documentos:<br>- 2ª via do Boletim de Urna (B.U.)<br>- 1ª via do Boletim de Justificativa (B.U.J.)<br>- 1ª via do Boletim de Mesários (B.I.M.)","Após as impressões, na tela será exibida a mensagem: *Por favor, insira uma mídia de resultado válida para gravar os dados.*","Retire a Mídia RED.","Insira novamente a Mídia de Resultado (M.R.) específica.","Pressione o botão **CONFIRMA** para iniciar a gravação.","Aguarde a confirmação de gravação bem-sucedida.","Quando aparecer na tela: *Mídia de resultado gravada com sucesso. Por favor, retire a mídia...*",
    "Retire a Mídia de Resultado (M.R.) específica.","A urna perguntará sobre o número de cópias adicionais do Boletim de Urna (B.U.).","Digite o número desejado de cópias.","Confirme pressionando **CONFIRMA** ou finalize sem impressões adicionais pressionando **CORRIGE**.","Na tela será exibida a mensagem **Lacre a tampa dos compartimentos da mídia de resultado e mídia externa**","Proceda fixando a tampa do compartimento da Mídia de Resultado (M.R.).","Instale um novo lacre sobre a tampa da Mídia de Resultado (M.R.).","Confirme pressionando **CONFIRMA**.","A mensagem na tela será: *Operação realizada com sucesso. Desligue a urna.*","Confirme pressionando **CONFIRMA**.","Desligue a urna eletrônica pressionando o botão vermelho localizado na parte traseira."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA SEM VOTAÇÃO MISTA.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 4 - Desligar a Urna Eletrônica (U.E.)."
        },
        {
            src: "03 - SUBSTITUIR UE - 01.png",
            caption: "Passo 5 - Retire o lacre da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 21.png",
            caption: "Passo 6 - Destrave e Abra a tampa do compartimento (M.R.)."
        },
        {
            src: "05 - RED - 01.png",
            caption: "Passo 7 - Retire a Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 02.png",
            caption: "Passo 8 - Insira a Mídia RED no slot da Mídia de Resultado."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 9 - Ligue a urna pressionando o botão verde."
        },
        {
            src: "01 - REINICIAR - 03.png",
            caption: "Passo 10 - Aguarde o sistema iniciar."
        },
        {
            src: "05 - RED - 03.png",
            caption: "Passo 11 - Digite o código de acesso ao RECUPERADOR DE DADOS."
        },
        {
            src: "05 - RED - 20.png",
            caption: "Passo 13, 14 e 15 - Tela para **NÃO ENCERRADA**, SEM VOTAÇÃO MISTA (Sessão Totalmente Eletrônica)."
        },
        {
            src: "05 - RED - 05.png",
            caption: "Passo 16 - Imprimir a 1ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 10.png",
            caption: "Passo 17 e 18 - Confirmação, se a impressão do Boletim de Urna (B.U.) está correta."
        },
        {
            src: "05 - RED - 06.png",
            caption: "Passo 19 - 2ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 07.png",
            caption: "Passo 19 - 1ª via do Boletim de Urna de Justificativa (B.U.J.)."
        },
        {
            src: "05 - RED - 08.png",
            caption: "Passo 19 - 1ª via do Boletim de Identificação de Mesários (B.I.M.)."
        },
        {
            src: "05 - RED - 09.png",
            caption: "Passo 20 - Solicitação de Mídia de Resultado (M.R.) válida para gravar os dados."
        },
        {
            src: "05 - RED - 11.png",
            caption: "Passo 21 - Retirando a Mídia RED."
        },
        {
            src: "05 - RED - 12.png",
            caption: "Passo 22 - Insirindo a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 13.png",
            caption: "Passo 23, 24 e 25 - Confirmação de gravação bem-sucedida."
        },
        {
            src: "05 - RED - 14.png",
            caption: "Passo 26 - Retire a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 15.png",
            caption: "Passo 27, 28 e 29 - Cópias adicionais do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 16.png",
            caption: "Passo 30 - Mensagem para Lacra a tampa do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 17.png",
            caption: "Passo 31, 32 e 33 - Fixando a tampa e o lacre do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 18.png",
            caption: "Passo 34 e 35 - Mensagem de Operação realizada com sucesso. Desligue a urna."
        },
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 36 - Desligue a urna eletrônica pressionando o botão vermelho."
        }
            ],
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Utilize uma chave Phillips adequada para todas as operações de abertura e fechamento de compartimento.", "Prepare uma Mídia RED específica para o procedimento.","Prepare uma Mídia de Resultado (M.R.) específica para receber as informações do sistema.","Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.","Retire o lacre da Mídia de Resultado (M.R.) na Urna Eletrônica (U.E.).","Destrave e abra a tampa do compartimento da Mídia de Resultado (M.R.).","Retire a Mídia de Resultado (M.R.) da U.E.","Insira a Mídia RED no slot da Mídia de Resultado.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Aguarde a inicialização completa do sistema.","Digite o código de acesso ao RECUPERADOR DE DADOS quando solicitado.","Na tela, serão exibidas todas as informações a serem recuperadas, incluindo o status da urna: **ENCERRADA** ou **NÃO ENCERRADA**.","Caso a urna esteja **NÃO ENCERRADA**, selecione uma das opções seguintes:<br>[1] - Gerar BU para Sistema de Apuração<br>[2] - Gerar resultados para Totalizados<br>[9] - Finalizar Recuperador de Dados","Digite: 2 para Sessão com votação totalmente Eletrônica.","Pressione o botão **CONFIRMA**.","A urna irá imprimir a 1ª via do Boletim de Urna (B.U.).","Após a impressão, na tela aparecerá a mensagem:*Por favor, verifique se o Boletim de Urna foi impresso corretamente e de forma legível.*","Confirme pressionando **CONFIRMA** se a impressão estiver correta.","A urna imprimirá as seguintes vias/documentos:<br>- 2ª via do Boletim de Urna (B.U.)<br>- 1ª via do Boletim de Justificativa (B.U.J.)<br>- 1ª via do Boletim de Mesários (B.I.M.)","Após as impressões, na tela será exibida a mensagem: *Por favor, insira uma mídia de resultado válida para gravar os dados.*","Retire a Mídia RED.","Insira novamente a Mídia de Resultado (M.R.) específica.","Pressione o botão **CONFIRMA** para iniciar a gravação.","Aguarde a confirmação de gravação bem-sucedida.","Quando aparecer na tela: *Mídia de resultado gravada com sucesso. Por favor, retire a mídia...*","Retire a Mídia de Resultado (M.R.) específica.","A urna perguntará sobre o número de cópias adicionais do Boletim de Urna (B.U.).",
    "Digite o número desejado de cópias.","Confirme pressionando **CONFIRMA** ou finalize sem impressões adicionais pressionando **CORRIGE**.","Na tela será exibida a mensagem **Lacre a tampa dos compartimentos da mídia de resultado e mídia externa**","Proceda fixando a tampa do compartimento da Mídia de Resultado (M.R.).","Instale um novo lacre sobre a tampa da Mídia de Resultado (M.R.).","Confirme pressionando **CONFIRMA**.","A mensagem na tela será: *Operação realizada com sucesso. Desligue a urna.*","Confirme pressionando **CONFIRMA**.","Desligue a urna eletrônica pressionando o botão vermelho localizado na parte traseira."]
  },
  "Como executar o RED (RECUPERADOR DE DADOS) da URNA ELETRÔNICA (U.E.) NÃO ENCERRADA COM VOTAÇÃO MISTA.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 4 - Desligar a Urna Eletrônica (U.E.)."
        },
        {
            src: "03 - SUBSTITUIR UE - 01.png",
            caption: "Passo 5 - Retire o lacre da Mídia de Resultado (M.R.)"
        },
        {
            src: "05 - RED - 21.png",
            caption: "Passo 6 - Destrave e Abra a tampa do compartimento (M.R.)."
        },
        {
            src: "05 - RED - 01.png",
            caption: "Passo 7 - Retire a Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 02.png",
            caption: "Passo 8 - Insira a Mídia RED no slot da Mídia de Resultado."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 9 - Ligue a urna pressionando o botão verde."
        },
        {
            src: "01 - REINICIAR - 03.png",
            caption: "Passo 10 - Aguarde o sistema iniciar."
        },
        {
            src: "05 - RED - 03.png",
            caption: "Passo 11 - Digite o código de acesso ao RECUPERADOR DE DADOS."
        },
        {
            src: "05 - RED - 19.png",
            caption: "Passo 13, 14 e 15 - Tela para **NÃO ENCERRADA**, COM VOTAÇÃO MISTA (Sessão Eletrônica e Manual com cédulas)."
        },
        {
            src: "05 - RED - 05.png",
            caption: "Passo 16 - Imprimir a 1ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 10.png",
            caption: "Passo 17 e 18 - Confirmação, se a impressão do Boletim de Urna (B.U.) está correta."
        },
        {
            src: "05 - RED - 06.png",
            caption: "Passo 19 - Imprimir a 2ª via do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 07.png",
            caption: "Passo 19 - 1ª via do Boletim de Urna de Justificativa (B.U.J.)."
        },
        {
            src: "05 - RED - 08.png",
            caption: "Passo 19 - 1ª via do Boletim de Identificação de Mesários (B.I.M.)."
        },
        {
            src: "05 - RED - 09.png",
            caption: "Passo 20 - Solicitação de Mídia de Resultado (M.R.) válida para gravar os dados"
        },
        {
            src: "05 - RED - 11.png",
            caption: "Passo 21 - Retirando a Mídia RED."
        },
        {
            src: "05 - RED - 12.png",
            caption: "Passo 22 - Insirindo a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 13.png",
            caption: "Passo 23, 24 e 25 - Confirmação de gravação bem-sucedida."
        },
        {
            src: "05 - RED - 14.png",
            caption: "Passo 26 - Retire a Mídia de Resultado (M.R.) específica."
        },
        {
            src: "05 - RED - 15.png",
            caption: "Passo 27, 28 e 29 - Cópias adicionais do Boletim de Urna (B.U.)."
        },
        {
            src: "05 - RED - 16.png",
            caption: "Passo 30 - Mensagem para Lacra a tampa do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 17.png",
            caption: "Passo 31, 32 e 33 - Fixando a tampa e o lacre do compartimento da Mídia de Resultado (M.R.)."
        },
        {
            src: "05 - RED - 18.png",
            caption: "Passo 34 e 35 - Mensagem de Operação realizada com sucesso. Desligue a urna."
        },
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 36 - Desligue a urna eletrônica pressionando o botão vermelho."
        }
            ],
    video: "videos/05-red-encerrada.mp4",
    instructions: ["Utilize uma chave Phillips adequada para todas as operações de abertura e fechamento de compartimento.", "Prepare uma Mídia RED específica para o procedimento.","Prepare uma Mídia de Resultado (M.R.) específica para receber as informações do sistema.","Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.","Retire o lacre da Mídia de Resultado (M.R.) na Urna Eletrônica (U.E.).","Destrave e abra a tampa do compartimento da Mídia de Resultado (M.R.).","Retire a Mídia de Resultado (M.R.) da U.E.","Insira a Mídia RED no slot da Mídia de Resultado.","Ligue a urna pressionando o botão verde antes de fechar o compartimento da mídia.","Aguarde a inicialização completa do sistema.","Digite o código de acesso ao RECUPERADOR DE DADOS quando solicitado.","Na tela, serão exibidas todas as informações a serem recuperadas, incluindo o status da urna: **ENCERRADA** ou **NÃO ENCERRADA**.","Caso a urna esteja **NÃO ENCERRADA**, selecione uma das opções seguintes:<br>[1] - Gerar BU para Sistema de Apuração<br>[2] - Gerar resultados para Totalizados<br>[9] - Finalizar Recuperador de Dados","Digite: 1 para Sessão Mista com votação Eletrônica e com votação Manual.","Pressione o botão **CONFIRMA**.","A urna irá imprimir a 1ª via do Boletim de Urna (B.U.).","Após a impressão, na tela aparecerá a mensagem:*Por favor, verifique se o Boletim de Urna foi impresso corretamente e de forma legível.*","Confirme pressionando **CONFIRMA** se a impressão estiver correta.","A urna imprimirá as seguintes vias/documentos:<br>- 2ª via do Boletim de Urna (B.U.)<br>- 1ª via do Boletim de Justificativa (B.U.J.)<br>- 1ª via do Boletim de Mesários (B.I.M.)","Após as impressões, na tela será exibida a mensagem: *Por favor, insira uma mídia de resultado válida para gravar os dados.*","Retire a Mídia RED.","Insira novamente a Mídia de Resultado (M.R.) específica.","Pressione o botão **CONFIRMA** para iniciar a gravação.","Aguarde a confirmação de gravação bem-sucedida.","Quando aparecer na tela: *Mídia de resultado gravada com sucesso. Por favor, retire a mídia...*","Retire a Mídia de Resultado (M.R.) específica.","A urna perguntará sobre o número de cópias adicionais do Boletim de Urna (B.U.).",
    "Digite o número desejado de cópias.","Confirme pressionando **CONFIRMA** ou finalize sem impressões adicionais pressionando **CORRIGE**.","Na tela será exibida a mensagem **Lacre a tampa dos compartimentos da mídia de resultado e mídia externa**","Proceda fixando a tampa do compartimento da Mídia de Resultado (M.R.).","Instale um novo lacre sobre a tampa da Mídia de Resultado (M.R.).","Confirme pressionando **CONFIRMA**.","A mensagem na tela será: *Operação realizada com sucesso. Desligue a urna.*","Confirme pressionando **CONFIRMA**.","Desligue a urna eletrônica pressionando o botão vermelho localizado na parte traseira."]      
  },
  "Como VERIFICAR A BOBINA DE PAPEL.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 2 - Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 01.png",
            caption: "Passo 3 - Retire os parafusos do Módulo Impressor."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 02.png",
            caption: "Passo 4 - Desacople o Módulo Impressor da urna eletrônica."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 03.png",
            caption: "Passo 5 e 6 - Observe diâmetro do papel restante na bobina."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 12.png",
            caption: "Passo 7 - Reconecte o Módulo Impressor na urna eletrônica"
        },
        {
            src: "06 - MODULO_IMPRESSOR - 13.png",
            caption: "Passo 8 - Parafuse novamente o Módulo Impressor na urna eletrônica."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 9 - Ligue a Urna Eletrônica (U.E.) clicando no botão verde."
        }
            ],
    video: "videos/08-conferir-bobina.mp4",
    instructions: ["Ferramenta necessária: chave Phillips.", "Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.", "Com a chave Phillips, retire o parafuso que fixa o Módulo Impressor na urna eletrônica.","Puxe suavemente o Módulo Impressor para desacoplar da urna eletrônica.","Observe pela fresta lateral do módulo impressor o diâmetro do papel restante na bobina.","Verifique visualmente se há quantidade suficiente de papel para a operação ou se será necessário trocar a bobina.","Se não for necessário substituir a bobina de papel, reconecte o Módulo Impressor na urna eletrônica, garantindo que esteja encaixado corretamente.","Parafuse novamente o módulo na urna usando a chave Phillips.","Ligue a Urna Eletrônica (U.E.) clicando no botão verde na parte de trás da urna.","Se a quantidade de papel for insuficiente, prossiga com a troca da bobina de papel."]
  },
  "Como fazer a TROCA DA BOBINA DE PAPEL.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 2 - Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 01.png",
            caption: "Passo 3 - Retire os parafusos do Módulo Impressor."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 02.png",
            caption: "Passo 4 - Desacople o Módulo Impressor da urna eletrônica."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 03.png",
            caption: "Passo 5 - Observe diâmetro do papel restante na bobina."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 04.png",
            caption: "Passo 6 - Módulo Impressor com saída de papel voltada para cima."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 05.png",
            caption: "Passo 7 - Abrindo a tampa do Módulo Impressor."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 06.png",
            caption: "Passo 8 - Mova a alavanca amarela da portinhola."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 07.png",
            caption: "Passo 8 - Destravando a portinhola que segura o papel."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 08.png",
            caption: "Passo 9 - Retire a bobina de papel usada."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 09.png",
            caption: "Passo 10 e 11 - Colocando nova bobina no suporte do Módulo Impressor, na posição correta."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 10.png",
            caption: "Passo 12 - Feche a portinhola para travar a nova bobina no lugar."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 11.png",
            caption: "Passo 13 - Feche a tampa do Módulo Impressor pressionando até travar."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 12.png",
            caption: "Passo 14 - Reconecte o Módulo Impressor na urna eletrônica."
        },
        {
            src: "06 - MODULO_IMPRESSOR - 13.png",
            caption: "Passo 15 - Parafuse novamente o Módulo Impressor na urna eletrônica."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 16 - Ligue a Urna Eletrônica (U.E.) clicando no botão verde."
        }
            ],
    video: "videos/08-conferir-bobina.mp4",
    instructions: ["Ferramentas necessárias: chave Phillips.", "Desligue a Urna Eletrônica (U.E.) clicando no botão vermelho localizado na parte de trás da urna.", "Com a chave Phillips, retire o parafuso que fixa o Módulo Impressor na urna eletrônica.","Puxe suavemente o Módulo Impressor para desacoplar da Urna Eletrônica.","Observe pela fresta lateral do Módulo Impressor o diâmetro do papel restante na bobina.","Coloque o Módulo Impressor deitado com a saída de papel voltada para cima.","Aperte a trava e abra a tampa do Módulo Impressor, deixando a bobina de papel exposta.","Mova a alavanca amarela até destravar a portinhola que segura o papel.","Retire a bobina de papel usada.","Pegue uma nova bobina de papel e coloque no suporte, na posição correta (normalmente, o papel deve desenrolar no sentido anti-horário).","Puxe a ponta do papel até sair da bobina e do Módulo Impressor.","Feche a portinhola para travar a nova bobina no lugar.","Feche a tampa do Módulo Impressor pressionando até ouvir o som de travamento.","Recoloque o Módulo Impressor na urna eletrônica, encaixando corretamente.","Parafuse novamente o Módulo na urna usando a chave Phillips.","Ligue a Urna Eletrônica (U.E.) clicando no botão verde na parte de trás da urna.","Faça testes de impressão para garantir que o papel está sendo alimentado corretamente."]
  },
  "Como fazer a SUBSTITUIÇÃO DA BOBINA DE PAPEL.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Passo 1 - Desligue a Urna Eletrônica (U.E.)."
        },
        {
            src: "07 - Troca_Bobina - 01.png",
            caption: "Passo 3 - Retirando o parafuso de fixação do Módulo Impressor."
        },
        {
            src: "07 - Troca_Bobina - 02.png",
            caption: "Passo 4 - Retirando o Módulo Impressor."
        },
        {
            src: "07 - Troca_Bobina - 03.png",
            caption: "Passo 5 - Desapertando o parafuso borboleta (manopla)."
        },
        {
            src: "07 - Troca_Bobina - 04.png",
            caption: "Passo 6 - Retirando a tampa lateral."
        },
        {
            src: "07 - Troca_Bobina - 05.png",
            caption: "Passo 7 e 8 - Retirando a bobina de papel e colocando a nova bobina de papel tracionando o papel."
        },
        {
            src: "07 - Troca_Bobina - 06.png",
            caption: "Passo 9 - Verificando a posição da bobina de papel."
        },
        {
            src: "07 - Troca_Bobina - 07.png",
            caption: "Passo 10 - Recolocando a tampa lateral do Módulo Impressor."
        },
        {
            src: "07 - Troca_Bobina - 08.png",
            caption: "Passo 11 e 12 - Recolocandoo Módulo Impressor de volta ao terminal do eleitor e apertando o parafuso de fixação."
        },
        {
            src: "01 - REINICIAR - 02.png",
            caption: "Passo 13 - Ligue a Urna Eletrônica (U.E.)."
        }
            ],
    video: "videos/09-troca-bobina.mp4",
    instructions: ["Desligue a urna na chave;", "Aguarde a tela do terminal do eleitor se apagar, sob pena de danos à urna e/ou ao módulo;","Desaperte totalmente o parafuso de fixação do Módulo Impressor.", "Retire o Módulo Impressor, puxando firmemente pelas laterais;", "Desaperte o parafuso borboleta (manopla) no sentido anti-horário;", "Retire a tampa lateral;", "Retire a bobina e coloque a nova;", "Gire a engrenagem maior para tracionar o papel;","Verifique a correta posição da bobina de papel.", "Recoloque a tampa lateral, tomando cuidado para não apertar demasiadamente o parafuso corboleta;","Recoloque o Módulo Impressor de volta ao terminal do eleitor;","Pressione firmemente para assegurar o encaixe, e aperte o parafuso.","Ligue a Urna Eletrônica (U.E.) clicando no botão verde na parte de trás da urna."]
  },
  "Parte 1 – Componentes da Urna Eletrônica (U.E.).": {
    images: [
        {
            src: "08.01 - PREPARAÇÃO.png",
            caption: "Passo 1 - U.E. Modelo: 2022."
        },
        {
            src: "08.02 - PREPARAÇÃO.png",
            caption: "Passo 2 - U.E. Modelo: 2020."
        },
        {
            src: "08.03 - PREPARAÇÃO.png",
            caption: "Passo 3 - U.E. Modelo: 2015 e 2013."
        },
        {
            src: "08.04 - PREPARAÇÃO.png",
            caption: "Passo 4 - Terminal do Eleitor (T.E.) e Terminal do Mésario (T.M.) modelo U.E. 2020 e 2022."
        },
        {
            src: "08.09 - PREPARAÇÃO.png",
            caption: "Passo 4 - Terminal do Mésario (T.M.) modelo U.E. 2020 e 2022."
        },
        {
            src: "08.05 - PREPARAÇÃO.png",
            caption: "Passo 5 - Traseira do Terminal do Eleitor (T.E.) modelo U.E. 2020 e 2022."
        },
        {
            src: "08.06 - PREPARAÇÃO.png",
            caption: "Passo 6 - Terminal do Eleitor (T.E.) e Terminal do Mésario (T.M.) modelo U.E. 2013 e 2015."
        },
        {
            src: "08.08 - PREPARAÇÃO.png",
            caption: "Passo 6 - Terminal do Mésario (T.M.) modelo U.E. 2013 e 2015."
        },
        {
            src: "08.07 - PREPARAÇÃO.png",
            caption: "Passo 7 - Traseira do Terminal do Eleitor (T.E.) modelo U.E. 2013 e 2015."
        },
        {
            src: "08.10 - PREPARAÇÃO.png",
            caption: "Passo 8 - Bateria Externa."
        },
        {
            src: "08.11 - PREPARAÇÃO.png",
            caption: "Passo 9 - Lacres."
        },
        {
            src: "08.12 - PREPARAÇÃO.png",
            caption: "Passo 10 - Mídia de Carga."
        },
        {
            src: "08.13 - PREPARAÇÃO.png",
            caption: "Passo 10 - Mídia de Votação (M.V.)."
        },
        {
            src: "08.14 - PREPARAÇÃO.png",
            caption: "Passo 10 - Mídia de Resultado (M.R.)."
        },
        {
            src: "08.15 - PREPARAÇÃO.png",
            caption: "Passo 10 - Mídia do Recuperador de Dados (RED)."
        },
        {
            src: "08.16 - PREPARAÇÃO.png",
            caption: "Passo 11 - Cabina de Votação."
        },
        ],
    video: "videos/11-instalacao-ue.mp4",
    instructions: ["O modelo mais recente da urna eletrônica, UE2022 com tela touch screen, fabricado em 2023.", "Modelo de Urna Eletrônica 2020.","Modelo de Urna Eletrônica 2015 e 2013.","Urnas modelo 2020 e 2022 são idênticas:<br><ul style='list-style-type: disc;'><li><strong>Terminal do Mesário (T.M.):</strong> com tela totalmente gráfica, sensível ao toque (touch screen);</li><li><strong>Terminal do Eleitor (T.E.)</strong>: com teclado numérico mais moderno que possui teclas com duplo fator de contato para detecção de erros. Utilização de mídia de aplicação (MA-pen drive).</li></ul>","Os principais componentes localizados na parte traseira do terminal do eleitor das urnas eletrônicas dos modelos 2020 e 2022 são:<br><ul style='list-style-type: disc;'><li>    🖨️Impressora térmica (Módulo Impressor):</strong> Responsável por emitir os relatórios oficiais, como a Zerésima (antes da votação) e o Boletim de Urna (ao final), além de contar com a saída de papel (bobina);</li><li><strong>⚙️Compartimento de mídias(M.V. e M.R.):</strong> Compartimento protegido por tampa e lacre para a Mídia de Votação (sistema) e a Mídia de Resultado (onde ficam gravados os votos de forma criptografada).;</li><li><strong>Chave liga/desliga:</strong> Interruptor para ligar ou desligar o equipamento;</li><li><strong>📊Indicadores LED de bateria e energia:</strong> Luzes que indicam o status do funcionamento elétrico e o nível da bateria interna (com alerta visual para carga crítica);</li><li><strong>🔌Conector de energia / Cabo de alimentação:</strong> Ponto de saída ou entrada do cabo de energia que liga a urna à rede elétrica.</li></ul>",
        "Urnas modelo 2013 e 2015 são praticamente idênticas:<br><ul style='list-style-type: disc;'><li><strong>Terminal do Mesário (T.M.):</strong> com Teclado numérico e Tela de cristal líquido;</li><li><strong>Terminal do Eleitor (T.E.)</strong>: com Teclado numérico e Utilização de Flashes Cards – FC e Memória de Resultado - MR.</li></ul>","Os principais componentes localizados na parte traseira do terminal do eleitor das urnas eletrônicas dos modelos 2013 e 2015 são:<br><ul style='list-style-type: disc;'><li><strong>🖨️Módulo Impressor Integrado:</strong> Responsável por emitir os relatórios oficiais, como a Zerésima (antes da votação) e o Boletim de Urna (ao final), além de contar com a saída de papel (bobina);</li><li><strong>⚙️Compartimento de mídias(M.V. e M.R.):</strong> Compartimento protegido por tampa e lacre para a Mídia Flash Card (FC) (sistema) e a Mídia de Resultado (onde ficam gravados os votos de forma criptografada).;</li><li><strong>Chave liga/desliga:</strong> Interruptor para ligar ou desligar o equipamento;</li><li><strong>📊Indicadores LED de bateria e energia:</strong> Luzes que indicam o status do funcionamento elétrico e o nível da bateria interna (com alerta visual para carga crítica);</li><li><strong>🔌Conector de energia / Cabo de alimentação:</strong> Ponto de saída ou entrada do cabo de energia que liga a urna à rede elétrica.</li></ul>","<strong>A Bateria Externa</strong> da urna eletrônica é uma fonte secundária de energia de emergência, utilizada pela Justiça Eleitoral para garantir que a votação continue ocorrendo normalmente mesmo se houver queda ou ausência total de eletricidade na seção eleitoral.<br>A bateria interna da Urna Eletrônica tem duração de até 10h e é acionada quando há falta de energia elétrica no local de votação.",
    "<strong>Lacres - </strong>Quando a urna está pronta para a votação, ela recebe lacres de segurança em material autoadesivo fabricados pela Casa da Moeda, que evidenciam qualquer tentativa de violação. Os lacres são colados em vários pontos da máquina:<ul style='list-style-type: disc;'><li>Tampa do compartimento da mídia de votação;</li><li>Tampa do compartimento da mídia de resultado;</li><li>Tampa do compartimento do conector USB;</li><li>Teclado alfanumérico;</li><li>Gabinete do terminal do eleitor;</li><li>Compartimento do conector do terminal do mesário.</li></ul>","<strong>Mídias - </strong>são dispositivos de armazenamento usado para gravar, guardar e transportar dados e programas. Na eleição são utilizadas as seguintes mídias:<ul style='list-style-type: disc;'><li><strong>Mídia de Carga:</strong> Guarda os sistemas operacionais, aplicativos da eleição e os dados da seção (como a lista de eleitores aptos e os nomes e fotos dos candidatos).</li><li><strong>Mídia de Votação:(M.V.):</strong> Armazena os votos digitados pelos eleitores durante o dia da votação de forma isolada e aleatória.</li><li><strong>Mídia de Resultado (M.R.):</strong> Grava o resultado final da votação de cada seção eleitoral após o encerramento, sendo retirada para enviar os dados à central de totalização.</li><li><strong>Mídia do Recuperador de Dados (RED):</strong> é um dispositivo de contingência da Justiça Eleitoral utilizado quando ocorre algum problema grave com a urna eletrônica ou com as mídias originais durante a eleição. Exemplo:<br>a) Urna não encerrada (votação eletrônica ou mista);<br>b) Urna encerrada mas sem o Boletim de Urna (B.U.);<br>c) Urna encerrada mas sem a Mídia de Resultado (M.R.);<br>d) Entre outros...</li><li><strong>Mídia de Contingência (M.V.):</strong> é um dispositivo usado em casos de substituição de urna eletrônica ou falhas durante a votação.</li></ul>","<strong>Cabina de Votação - </strong> A cabina de votação garante o sigilo do voto na seção eleitoral. As cabinas para os modelos de urnas 2013 e 2015 são diferentes das cabinas utilizadas para os modelos 2020 e 2022.",
"<strong>O Microterminal</strong> (oficialmente chamado de <strong>Terminal do Mesário)</strong> é o dispositivo físico operado pela mesa receptora — sob a supervisão do presidente da seção eleitoral — que serve para controlar e gerenciar o fluxo da votação, além de habilitar cada eleitor a exercer o seu direito ao voto. As principais funções e características do microterminal incluem:<ul style='list-style-type: disc;'><li>Identificação e Liberação (Biometria);</li><li>Monitoramento da Cabina;<ul><li>• <span style='color: green;'><strong>VERDE: LIBERADO</strong></span> - para identificação de eleitor;</li><li>• <span style='color: orange;'><strong>LARANJA: AGUARDE</strong></span> - eleitor está votando na cabina;</li><li>• <span style='color: red;'><strong>VERMELHO: BATERIA INTERNA</strong></span> em uso.</li></ul><li>Procedimento de Zerésima, é o relatório emitido antes do início da votação (geralmente por volta das 7h da manhã).</li><li>Procedimento de Boletim de Urna (B.U.), é o relatório impresso imediatamente após o encerramento da votação (a partir das 17h).</li></li></ul>"]
  },
  "Parte 2 – Preparação Oficial da Urna Eletrônica (U.E.) antes da Eleição": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Legenda01"
        }
        ],
    video: "videos/11-instalacao-ue.mp4",
    instructions: ["Insira aqui a instrução 1 para instalar a U.E.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Parte 3 – Ligando e Testando a Urna no Dia da Votação.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Legenda01"
        }
        ],
    video: "videos/11-instalacao-ue.mp4",
    instructions: ["Insira aqui a instrução 1 para instalar a U.E.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Parte 4 – Iniciando a Votação.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Legenda01"
        }
        ],
    video: "videos/11-instalacao-ue.mp4",
    instructions: ["Insira aqui a instrução 1 para instalar a U.E.", "Insira aqui a instrução 2.", "Insira aqui a instrução 3."]
  },
  "Parte 5 – Ciclo de Votação no Dia da Eleição.": {
    images: [
        {
            src: "01 - REINICIAR - 01.png",
            caption: "Legenda01"
        }
        ],
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

function escapeHtml(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// Se a imagem não carregar, mostra um aviso com o nome do arquivo procurado
function imagemComErro(img) {
    const arquivo = decodeURI(img.getAttribute("src"));
    console.log("Imagem não encontrada:", arquivo);
    img.style.display = "none";

    const aviso = document.createElement("div");
    aviso.style.cssText = "padding:16px;color:#fca5a5;border:2px dashed #ff3355;font-size:.9rem;";
    aviso.textContent = "⚠ Imagem não encontrada: " + arquivo;
    img.after(aviso);
}

function showTutorial(title) {

    hideAll();
    contentScreen.style.display = "block";

    document.getElementById("tutorialTitle").innerHTML = title;

    const details = tutorialDetails[title] || {
        images: [],
        instructions: ["Conteúdo ainda não cadastrado."]
    };

    // PASSOS
    const content = document.getElementById("tutorialContent");

    const steps = [...details.instructions];

    if (details.video) {
        steps.push({ video: details.video });
    }

    content.innerHTML = steps.map((step, index) => {

        const texto =
            typeof step === "string"
                ? step
                : `<span>
                       Assista ao vídeo deste procedimento:
                       <a href="${encodeURI(step.video)}" target="_blank" rel="noopener" class="text-cyan-400 underline">
                          ▶ Abrir vídeo MP4
                       </a>
                   </span>`;

        return `
            <li class="flex items-start gap-3">
                <input
                    type="checkbox"
                    class="mt-1 h-5 w-5 accent-cyan-500 cursor-pointer">

                <span class="text-xl font-bold">
                    <span class="text-cyan-400 font-bold">
                        ${index + 1}.
                    </span>
                    ${texto}
                </span>
            </li>
        `;
    }).join("");

    // IMAGENS (cada imagem com a sua legenda)
    const imageArea = document.getElementById("tutorialImageArea");

    const images = details.images || [];

    const cards = images.map(img => `
        <div class="tutorial-image-card">
            <img
                src="${encodeURI(img.src)}"
                alt="${escapeHtml(img.caption)}"
                class="tutorial-image"
                loading="lazy"
                onerror="imagemComErro(this)"
            >
            <div class="tutorial-caption">${img.caption}</div>
        </div>
    `).join("");

    imageArea.innerHTML = `
        <div class="tutorial-images-list">
            ${cards || '<p class="tutorial-caption">Nenhuma imagem cadastrada.</p>'}
        </div>
    `;
}//fim da função

/* ====================================================
    PESQUISA
==================================================== */

document
.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

renderSoftwares(e.target.value);

});

renderSoftwares();