import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js';

//const renderer = new marked.Renderer();
const predeterminado = `# BIENVENIDO AL PREVISULAIZADOR DE MARKDOWN

## Elaborado con componentes React

Ejecicio de certificación con [freeCodeCamp](https://www.freecodecamp.org)

Donde puedes ver código inscrito, \`<div></div>\`, en el mismo documento.

\`\`\`
// Esto es código inscrito:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

- Puedes tener elementos de lista
- De forma facil
  - Y rápida

Se pueden integrar estilos, como pueden ser **negritas**

>Incluso se tiene formato especial para citas

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: predeterminado,
      output: predeterminado
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      output: event.target.value
    });
  }

  render() {
    return(
      <div className='main-container'>
        <div id='entrada-container'>
          <Entrada 
            input={this.state.input} 
            onChange={this.handleChange} 
          />
        </div>
        <div id='salida-container'>
          <Salida 
            output={this.state.output} 
          />
        </div>
      </div>
    );
  }
}

const Entrada = (props) => {
  return (
    <textarea
      id='editor'
      onChange={props.onChange}
      type='text'
      value={props.input} 
    ></textarea>
  );
};

const Salida = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.output)
      }}
      id='preview'
    ></div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*

Lógica

- Lo que se escribe en el área de texto genera un cambio, esto debe actualizar el estado del input y del output (entiendo que así funcionan los ejercicio VERIFICAR)
- No se está renderizando ninugun resultado en 'root'
- Revisar la lógica del estado.
- Quiza sea conveniente rehacer el código.


*/