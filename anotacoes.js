/*   
                Anotações do mudulo de fundamentos do React
                
        
            COMPONENTES REACT 
        
        Componente é um pdeço da nossa aplicação que pode ser repetida varias vezes e também 
        pode conter informações diferentes. 
        O Componente é uma função que retorna código html, jsx.
        Todos os componentes precisam ter extenção Jsx (JSX = JavaScript + XML(HTML));

                PROPRIEDADES 

        São informações que podem ser passadas para componentes, essas propriedades são atributos 
        essas propriedades podem ser acessadas como parametros das funções no componente, esse 
        parametro se chama props e dentro dessas props contém um  objeto que contém propriedades que eu definir
        essas propriedades são chamadas utilizanso {} e a variavel props com o nome na propriedade.

        export function Post(props) {
            return (
                <>
                    <strong>{props.author}</strong>
                    <p>{props.content}</p>
                </>
            )
        }

                
        
                        CSS MODULES e COMPONENTE HEADER (Scoped CSS)

        O escopo devemos atrelar ao componente scoped Css (Css escopado) da para escopar o css apenas a 
        um componente especifico e com isso evitar alguns problemas.

        Utilizamos uma tecnica chamada Css modules e podemos ver a documentação disso ou até na propria 
        documentação do Vite também.
        
        PS- é importante sempre criar o componente iniciando com a letra maiuscula para não ser
        confudido com elementos html.

        Para que meu arquivo css fique atrelado apenas ao meu componente especifico e não interfira em outros 
        componentes eu devo utilizar o .module quando for criar o arquivo css.

        Ps- Uma boa dica é utilizar apenas classes no css, evitar usar outros seletores como id . 

        PS - No react não utilizamos class no html isso por que estamos dentro de um arquivo JS e existe 
        a class do JavaScript, para o React não confundir foi adotada a className.

        Na hora de importar os arquivos css dentro do componente quando eu estou utilizando o module 
        eu preciso também informar o nome do arquivo na importação igual na importação de componentes.

            import styles from "./Header.module.css";

        E para passar essa estilização eu vou utilizar {} pois ele gera uma variavel JavaScript. 

            <strong className={styles.header}>Ignite Feed</strong>   

        PS- No css module dá para evitar que e estilização de um componente afete outro componente 
        com isso não temos interferencia de estilos dentro da aplicação, o css modules gera para cada classe
        que for estilizada ele gera dentro do Browser calsses com numeros e letras aleatórios e unicos para 
        cada estilização. 

                                        CSS GLOBAL

        É importante criar um arquivo para estilização global de nossa aplicação e essa estilização 
        reflete em todas as páginas.

        Esse arquivo eu chamo de global.css 

        PS - Na hora de importar a font do google fonts é importante pegar as tags de links do preconnect  e 
        colocar em cima para as primeiras coisas que vão ser carregadas, isso por que essas tags de links 
        fazem conexão com o  servidor do google para carregar as fontes , e fazendo dessa forma gera mais 
        otimização. 

                                    COMPONENTE HEADER 

        Nese modulo foi estilizado o componente Header e também foi inserido a imagem da logo a partir do 
        figma.


                                    COMPONENTE SIDEBAR 

        Nesse modulo construimos a sidebar e foi feito a divisção da tela.
        Eu criei também um App.module.css para estilizar essa página.

        Nesse projeto foi utilizado icons da https://phosphoricons.com/
        Para instalar eu rodo o comando npm i phosphor-react 
        Após isso eu posso importar os icones e utilizar. 

                                    COMPONENTE POST 

        PS - quando estamos nos referindo a data ou tempo existe uma tag especifica para isso no html que é 
        a tag time , essa tag possue um atributo chamado dateTime e posso colocar a data em que o post foi 
        publicado, e também utilizei a propriedade title informando a data da publicação , com isso quando 
        o usuario colocar o mause em cime ele mostra a data da publicação.

        Ps- Uma das coisas que no React muda quando utilizamos elementos do html é que nos atributos devemos 
        colocar em formato cameocase que é a primeira letra maiuscula nas palavras seguintes ex dataTime , se 
        fosse apenas no html seria datatime.

                                    ESTILIZAÇÕES DO POST 
                    
        Apenas estilizando o componente.

                                    FORMULÁRIO DE COMENTÁRIOS 

        Criando e estilizando o formulario.

                                    COMPONENTE COMMENT

        Apenas estilizando o componente.

                                    COMPONENTE AVATAR  ( Revisando : Props)

        No react existem dois momentos em que criamos um componente , um momento é quando alguma 
        coisa repete muito em tela,  outro ponto é quando se consegue tirar algo de um componente 
        maior sem que o componente maior pare de funcionar. 
        Ou seja esses dois momentos são primeiro quando algo se repete muito ou se repete, e segundo
        é quando conseguimos desacoplar um pedaço da logica, estrutura, visual de algum componente 
        para outro componente menor. 

        Foi criado um componente Avatar e definir através de props o src para passar essa propriedade
        dentro do componente em que eu estiver usando o componente Avatar.
        
        Com isso aprendemos que sempre que quisermos que o componente tenha alguma elemento visual
        diferente de acordo com onde ele é aplicado podemos utilizar props. 

        As props(Propriedades) são a maneira em que os componentes se comunicam e através delas 
        podemos remover ou adicionar propriedades.

        No exemplo aqui eu criei uma propriedade exclusiva para meu componente de comentario 
        a hasBorder e depois criei duas estilizações diferentes e coloquei uma condição dentro 
        do meu ClassName se as minhas propriedades contém hasBorder eu mostro styles.avatarWithBorder senão 
        eu mostro o styles.avatar.

        Isso mostra o um pouco do poder das props.

        Mas isso vai fazer a borda ser removida em todos os componentes , por que eu preciso criar uma 
        conastante dentro do meu componente Avatar para que quando a propriedade hasBorder for diferente de false 
        quer dizer que ele tem borda.

        Eu posso melhorar esse código utilizando o conceito de desestruturação do JavaScript eu 
        posso usar desestruturação nas minhas propriedades REact  
                ({ hasBorder = true, src})  

        Com isso eu consigo passar valores padrão para propriedades no meu componente. 
        Com isso eu tbm não preciso mais criar uma const 

                                        
                                            OS MOTORES DO REACT
                                            
                                    ITERANDO NO JSX 

        Primeiramente organizei as informações de meu componente Post, eu preciso das  informações 
        author: { avatar_url: "", name: "", role: "" }
        publishedAt: Date     (data de publicação)
        content: String

        Dentro do  meu componente App.tsx eu criei um array de posts de é um array de objetos, onde eu vou passar
        os dados. 

        PS- Uma coisa bem importante é evitar a todo custo que o back end retorne dados html isso  por que se o 
        back end está retornando html e esse html é mostrado em tela, fica mais fácil de deixar o site aberto a 
        vulnerabilidade, algum usuario mau intensionado pode tentar jogar algum tag script e isso abre uma brecha 
        por que outro usuario consegue executar scripts.

        É importante trabalhar com conteudo bruto sem html e se utilizar algumas estruturas de formatação, nesse projeto 
        foi colocado cada linha do conteudo do post como sendo uma posição no array.

                ITERAÇAO 
            Dentro da programação é repetir alguma coisa, criar uma estrutura de repetição exemplo 
            se vamos iterar um array vamos percorrer esse array e fazer algumas coisa. 
            Sempre que for se fazer alguma iteração dentro do jsx se utiliza o map por que ele 
            vai percorrer o array e vai retornar algumas coisa.

            Na aplicação eu utilizei um map que percorre meu array post e retorna isso no meu 
            componente Post.

            Em seguida eu passei as propriedades dentro do meu Post que está sendo retornado.

                    {posts.map(post => {
                        return (
                            <Post 
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                            />
                        )
                        })}

            PS- dentro de Post eu preciso acessar minhas propriedades passando props.


                                    PROPRIEDADES DO POST 

            Os dados dentro do Componente Post foi passado utilizando props; 
            PS- Para não ter que ficar repetindo o props eu posso utilizar uma desestruturação 
            buscando minhas propriedades que eu vou utilizar.

                            export function Post({ author, publishedat }) 

            Dentro da minha tag time eu vou trazer meu publishedat que retorna uma data porém 
            se eu apenas trazer o publishedat vai gerar um erro pois é necessário primeiro 
            converter para formato de string e em seguida fazer a formatação da date.

            foi utilizado a função toString e o metodo new Intl para fazer a conversão da data.

            Posso criar uma const e no ex foi  criada uma publisheDateFormatted e foi utilizado o 
            new Intl.DateTimeFormat passando os parametros de como eu quero formatar.

            const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit'
            }).format(publishedAt);

            Existe uma outra maneira também de se fazer essa formatação que é utilizando uma lib que é o 
            date-fns e para instalar essa lib eu rodo o seguinte comando.  
                npm i date-fns 

            Após isso eu posso fazer importações de dentro de date-fns e vou importar aqui a função format e 
            vou passar para minha const  publishedDateFormatted dentro da função format eu vou passar o meu 
            publishedAt que é o que eu quero formatar e o segundo parametro é o formato, eu posso perquisar 
            por date-fns format eu posso consultar a documentação e ter varias opções de formatações diferentes. 
            PS- Vou colocar dentro de uma string com aspas duplas, as strings que sobram colocamos aspas simples.

                const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'" ); 

            O proprio date-fns tem também um pacote de idiomas que podemos importar  

                    import ptBR from "date-fns/locale/pt-BR";
                    
            Em seguida passamos um terceiro parametro com um objeto passando o meu locale: ptBR,

                const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
                    locale: ptBR,
                } ); 

            
            Foi criado uma nova variavel para armazenar de quanto tempo foi puiblicado da data atual
            Para isso foi utilizado uma outra função do date-fns que é o formatDistanceToNow essa função 
            recebe como paramtro a nossa data publishedAt e ela compara essa data com a data atual.
            Também foi passado o locale para traduzir, vou utilizar também uma propriedade chamada 
            addSuffix: true  para colocar o 'há' antes.

            No dateTime eu utilizei uma  função nativa mesmo do JavaScript toISOString()

            O conteudo do post está sendo enviado como um array por isso é necessário percorrer 
            esse array mostrando as informações em tela, para percorrer o array utilizamos o 
            map()


                                    ESTADO  (useState)

            Foi criado um array de commenmts e depois dentro da minha duv foi utilizado um 
            map que percorre esse array retornando  o componente Comment para cada comment.

            Dentro do formulario é necessário aplicar algum evento para quando for clicar o botão 
            ele adicionar o comentário, pode ser usado o onclick porém dentro do React colocamos com
            cameocase assim fica onClick. Mas aqui utilizaremos o onSubmite para que seja no envio do 
            formulario.

            Um padrão bem interessante aqui é sempre que for criada uma função e essa função 
            for disparada através de uma ação do usuario, iniciamos a função com handle.
            aqui na aplicalçao criamos a função handleCreateNewComment que foi colocado 
            dentro do evendo onSubmit.

            PS- Quando eu utilizo o evento onSubmit existe um comportamento padrão no html 
            que redireciona para outra página, porém estamos desenvolvendo uma SPA , e por 
            isso que o console irá retornar um erro, para corrigir esse problema utilizamos 
            dentro da nossa função o event.preventDefault() que faz com que esse padrão seja 
            corrigido. 

            O React não fica observando o valor das variaveis sempre que ela muda, para ser mostrado 
            em tela, isso por que se o react fizesse isso não iria ser performatico o React ter que 
            ouvir todas as variavels utilizadas pelo compomente e é por isso que no React existe 
            o concento de estado. 

            ESTADO = São variaveis que eu quero que o componente monitore.

            Sempre que for necessário criar uma variavel que o valor dela for sempre mudar e que
            o React mostre esses novos valores em tela é necessário criar um estado.

            Para criar um estado eu vou dentro do componente e crio uma constante para a minha 
            variavel e ela vai receber useState() o useState será importado de dentro do react, 
            essa const retorna um array de duas posições e por isso eu posso utilizar desestruturação 
            passando o nome da minha variavel que quero criar e na segunda posição utilizo o prefixo 
            set para ela , isso indica que será a variavel modificada. na vdd essa set é uma função 
            que avisa ao react toda vez que a variavel for modificada e com isso o React não precisa 
            ficar monitorando a variavel.

                const [comments, setComments] = useState([
                    1,
                    2,
                ])

            Com isso eu posso ir dentro da minha função handleCreateNew e ai inves de utilizar o 
            push eu vou passar o meu setComments passando o novo valor. porém note que eu também 
            repetir os valores já existente isso é necessário por causa da imutabilidade do React.

                     function handleCreateNewComment() {
                        event.preventDefault()
                        setComments([1, 2, 3]);
                    }
            
            Mas dessa forma a cima ai se caso eu queira adicionar um quarto comentário não 
            será possivel por que ele sempre irá atualizar essas 3 posições que foram passadas.
            para resolver isso eu posso utilizar o operador spred operator ... e ele basicamente 
            clona todos os valores atuais da variavel, e em seguida eu utilixo o comments.lenght que 
            pega todo o tamanho do array e adiciono um + 1 

                         function handleCreateNewComment() {
                            event.preventDefault()
                            setComments([...comments, comments.length + 1]);
                        }
*/ 