import antlr4 from 'antlr4';
import {MatrixOperationsLexer} from './gen/MatrixOperationsLexer.js';
import {MatrixOperationsParser} from './gen/MatrixOperationsParser.js'
import ErrorListener from './error_listener.js';

function parse(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new MatrixOperationsLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MatrixOperationsParser(tokenStream);

    const errorListener = new ErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.startRule();

    if (errorListener.hasErrors()) {
        return {
            success: false,
            errors: errorListener.getErrors(),
        };
    }

    return {
        success: true,
        tree,
    };
}

export default parse;
