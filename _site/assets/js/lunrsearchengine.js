
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/mediumish-theme-jekyll/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/mediumish-theme-jekyll/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/mediumish-theme-jekyll/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/mediumish-theme-jekyll/",
    "title": "Home",
    "body": "      Featured:                                                                                               Vagas de estágio em várias áreas TRF-5 em Pernambuco              :               Vagas de estágio no TRF-5 para cadastro de reserva Em edital publicado no dia 28/03/2023 pelo Tribunal Regional Federal da 5ª Região em Pernambuco foi. . . :               Ler Mais                                                                                        04 May 2023                                                                                                                                                                                                                      Várias vagas estão abertas na 123 Milhas em Minas Gerais. Venha conferir!              :               A 123 Milhas está com muitas vagas abertas A 123 Milhas abriu várias vagas para o estado de Minas Gerais, também há algumas vagas para. . . :               Ler Mais                                                                                        04 May 2023                                                                                                                                      All Stories:             "
    }, {
    "id": 4,
    "url": "http://localhost:4000/mediumish-theme-jekyll/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/mediumish-theme-jekyll/vagas-de-estagio-trf-5-em-Pernambuco-PE/",
    "title": "Vagas de estágio em várias áreas TRF-5 em Pernambuco",
    "body": "2023/05/04 - Vagas de estágio no TRF-5 para cadastro de reserva: Em edital publicado no dia 28/03/2023 pelo Tribunal Regional Federal da 5ª Região em Pernambuco foi aberto processo seletivo para formar o cadastro de reserva. O edital deixa claro que as inscrições serão gratuitas. As vagas estão abertas para os seguintes cursos:  ADMINISTRAÇÃO: a partir do 3º período; ANÁLISE E DESENVOLVIMENTO DE SISTEMAS: a partir do 3º período; ARQUITETURA: a partir do 3º período; BIBLIOTECONOMIA: a partir do 3º período; CIÊNCIAS CONTÁBEIS: a partir do 3º período CIÊNCIA DA COMPUTAÇÃO: a partir do 3º período; COMUNICAÇÃO (RÁDIO, TV E INTERNET): a partir do 3º período.  DESIGN: a partir do 3º período; · DIREITO: a partir do 5º período; ENGENHARIA CIVIL: a partir do 3º período ENGENHARIA DA COMPUTAÇÃO: a partir do 3º período; ENGENHARIA DE PRODUÇÃO: a partir do 3º período; ENGENHARIA ELÉTRICA: a partir do 3º período; ENGENHARIA MECÂNICA: a partir do 3º período; ESTATÍSTICA: a partir do 3º período; GESTÃO DA INFORMAÇÃO: a partir do 3º período; JORNALISMO: a partir do 3º período, PSICOLOGIA: a partir do 3º período; RELAÇÕES PÚBLICAS: a partir do 3º período; SISTEMAS DE INFORMAÇÃO: a partir do 3º períodoA maioria das vagas são para estudantes devidamente matriculados e que estejam cursando o terceiro período. Um dos critérios de classificação segundo o edital é o Coeficiente de Rendimento Global (CRG), acumulado até 2022. 2. Quando os candidatos serão chamados?: Por se tratar de uma formação de cadastro de reserva, os candidatos serão chamados a partir do surgimento de outras vagas. Vagas reservadas: Ainda segundo o edital, 10% (dez porcento) são reservadas a candidatos com deficiência e aos candidatos negros (pretos e pardos) o percentual de 30% (trinta por cento) das vagas reservadas. Quando posso me inscrever?Fique atento ao prazo, pois as inscrições começam no período de 22 a 31 de maio. Para mais detalhe olhe o edital. Clique aqui para acessar o edital. "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mediumish-theme-jekyll/vagas-abertas-123-milhas/",
    "title": "Várias vagas estão abertas na 123 Milhas em Minas Gerais. Venha conferir!",
    "body": "2023/05/04 - A 123 Milhas está com muitas vagas abertas: A 123 Milhas abriu várias vagas para o estado de Minas Gerais, também há algumas vagas para Belo Horizonte/MG. As vagas são para diversos cargos e possuem benefícios como assistência odontológica, assistência médica, auxilio academia, todas as vagas possuem mais benefícios que não foram citados. Cargos com vagas abertas:  Analista de CRM Motion Designer Analista De Planejamento Financeiro Ui/Ux Analista De Riscos e Compliance Sênior Especialista De Riscos e Compliance III Analista de Processos FinanceirosNão perca tempo e se cadastre, todas as vagas estão disponíveis no link desta publicação.  As vagas são presenciais e exigem graduação na área ou em áreas correlatas. Clique aqui para ver todas as vagas disponíveis. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});