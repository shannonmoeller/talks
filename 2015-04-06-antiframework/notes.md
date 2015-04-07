# Links

https://babeljs.io/repl/

http://www.2ality.com/2014/09/es6-modules-final.html
https://github.com/ModuleLoader/es6-module-loader
https://github.com/systemjs/systemjs
https://github.com/jspm/jspm-cli

http://www.html5rocks.com/en/tutorials/webcomponents/customelements/
https://github.com/WebReflection/document-register-element

http://updates.html5rocks.com/2015/01/ES6-Template-Strings
http://www.2ality.com/2015/01/template-strings-html.html
https://github.com/cure53/DOMPurify

https://github.com/tastejs/todomvc-app-template

# Setup

    npm install --global browser-sync
    npm install --global jspm

    npm init
    browser-sync start --server --files 'src/{css,el,js}/**'

    jspm init
    jspm install document-register-element=github:WebReflection/document-register-element@0.3.0
    jspm bundle-sfx js/bootstrap bundle.js

    <script src="vendor/system.js"></script>
    <script src="js/config.js"></script>
    <script>System.import('js/app');</script>

    import 'document-register-element';
    import 'html/my-todos';

# Elements

- ES6 extends
  - Don't implement constructor()
- Unresolved vs Unknown
  - x-foo vs foo
  - :unresolved
- Lifecycle
  - createdCallback
  - attachedCallback
  - detachedCallback
  - attributeChangedCallback
