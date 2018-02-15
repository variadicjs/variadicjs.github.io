import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function FuncResult(props) {
  const {funcName, params, result} = props;
  const code = `variadic.${funcName}(${params}) = ${result}`;
  const html = Prism.highlight(code, Prism.languages.javascript);
  return(
    <pre className="language-js">
      <code  dangerouslySetInnerHTML={{__html:html}}/>
    </pre>
  );
}

export default FuncResult;
