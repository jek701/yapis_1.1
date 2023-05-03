import antlr4 from 'antlr4';
import { MatrixOperationsLexer } from './gen/MatrixOperationsLexer.js';
import { MatrixOperationsParser } from './gen/MatrixOperationsParser.js';
import { MatrixOperationsWalker } from './MatrixOperationsWalker.js';

function checkCode(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new MatrixOperationsLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MatrixOperationsParser(tokenStream);
    const tree = parser.startRule(); // Замените на имя вашего стартового правила

    const semanticAnalyzer = new MatrixOperationsWalker();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(semanticAnalyzer, tree);

    const errors = semanticAnalyzer.getErrors();
    if (errors.length > 0) {
        console.error("Semantic errors found:");
        console.error(errors.join('\n'));
    } else {
        console.log("No semantic errors found.");
    }
}

const input = "i = 42; var j; j = 2 + 1;";
checkCode(input);