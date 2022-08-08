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







        
*/ 