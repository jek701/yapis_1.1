import antlr4 from 'antlr4';
import { MatrixOperationsLexer } from './gen/MatrixOperationsLexer.js';
import { MatrixOperationsParser } from './gen/MatrixOperationsParser.js';
import { MatrixOperationsWalker } from './MatrixOperationsWalker.js';

function test(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new MatrixOperationsLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MatrixOperationsParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.startRule();

    const walker = new MatrixOperationsWalker();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);

    console.log("Parsed successfully:", input);
}

// ... тестовые случаи

test("[[1, 2], [3, 4]] + [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] - [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] * [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] \\ [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] % [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] ^ [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] == [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] != [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] < [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] > [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] <= [[5, 6], [7, 8]]");
test("[[1, 2], [3, 4]] >= [[5, 6], [7, 8]]");
test("for(i = 0; i < 10; i++) { }");
test("if([[1, 2], [3, 4]] != [[5, 6], [7, 8]]) { }");
test("function matrixAdd(a, b) { }");