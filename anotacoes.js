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

        
*/ 