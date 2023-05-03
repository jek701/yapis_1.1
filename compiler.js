import antlr4 from 'antlr4';
import { MatrixOperationsLexer } from './gen/MatrixOperationsLexer.js';
import { MatrixOperationsParser } from './gen/MatrixOperationsParser.js';
import { MatrixOperationsCompiler } from './MatrixOperationsCompiler.js';

function compile(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new MatrixOperationsLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MatrixOperationsParser(tokenStream);
    const tree = parser.startRule(); // Замените на имя вашего стартового правила

    const compiler = new MatrixOperationsCompiler();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(compiler, tree);

    return compiler.getCompiledCode();
}

const input = "var i; i = 42; if (i > 40) { i = i - 1; }";
const compiledCode = compile(input);
console.log("Compiled code:");
console.log(compiledCode);
