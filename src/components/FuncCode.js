import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function FuncCode(props) {
  const html = Prism.highlight(props.code, Prism.languages.javascript);
  return(
    <pre className="language-js">
      <code  dangerouslySetInnerHTML={{__html:html}}/>
    </pre>
  );
}

export default FuncCode;
