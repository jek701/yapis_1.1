import MatrixOperationsListener from './gen/MatrixOperationsListener.js';

export class MatrixOperationsWalker extends MatrixOperationsListener {

    constructor() {
        super();
        this.compiledCode = []; // Инициализируйте структуру данных для хранения скомпилированного кода
    }

    enterAssignment(ctx) {
        // Реализуйте преобразование кода присваивания
        const identifier = ctx.IDENTIFIER().getText();
        const expr = ctx.expr().getText(); // Это простое преобразование, возможно, вам потребуется более сложное
        this.compiledCode.push(`${identifier} = ${expr};`);
    }

    // enterStartRule(ctx) {
    //     console.log("Entering Start Rule: ", ctx.getText());
    // }
    //
    // exitStartRule(ctx) {
    //     console.log("Exiting Start Rule: ", ctx.getText());
    // }
    //
    // enterStatement(ctx) {
    //     console.log("Entering Statement: ", ctx.getText());
    // }
    //
    // exitStatement(ctx) {
    //     console.log("Exiting Statement: ", ctx.getText());
    // }
    //
    // enterForStatement(ctx) {
    //     console.log("Entering For Statement: ", ctx.getText());
    // }
    //
    // exitForStatement(ctx) {
    //     console.log("Exiting For Statement: ", ctx.getText());
    // }
    //
    // enterIfStatement(ctx) {
    //     console.log("Entering If Statement: ", ctx.getText());
    // }
    //
    // exitIfStatement(ctx) {
    //     console.log("Exiting If Statement: ", ctx.getText());
    // }
    //
    // enterFunctionDeclaration(ctx) {
    //     console.log("Entering Function Declaration: ", ctx.getText());
    // }
    //
    // exitFunctionDeclaration(ctx) {
    //     console.log("Exiting Function Declaration: ", ctx.getText());
    // }
    //
    // enterMatrix(ctx) {
    //     console.log("Entering Matrix: ", ctx.getText());
    // }
    //
    // exitMatrix(ctx) {
    //     console.log("Exiting Matrix: ", ctx.getText());
    // }
    //
    // enterRow(ctx) {
    //     console.log("Entering Row: ", ctx.getText());
    // }
    //
    // exitRow(ctx) {
    //     console.log("Exiting Row: ", ctx.getText());
    // }

    getCompiledCode() {
        return this.compiledCode.join('\n');
    }
    //
    // constructor() {
    //     super();
    //     this.symbolTable = new Set(); // Таблица символов для хранения объявленных переменных
    //     this.errors = []; // Список ошибок семантического анализа
    // }
    //
    // syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    //     this.errors.push(`line ${line}:${column} ${msg}`);
    // }
    //
    // enterVarDeclaration(ctx) {
    //     const identifier = ctx.IDENTIFIER().getText();
    //     if (this.symbolTable.has(identifier)) {
    //         this.errors.push(`Variable '${identifier}' is already declared.`);
    //     } else {
    //         this.symbolTable.add(identifier);
    //     }
    // }
    //
    // enterAssignment(ctx) {
    //     const identifier = ctx.IDENTIFIER().getText();
    //     if (!this.symbolTable.has(identifier)) {
    //         this.errors.push(`Variable '${identifier}' is not declared.`);
    //     }
    // }
    //
    // // Добавьте другие методы для обработки различных правил вашей грамматики
    // // и выполнения соответствующих семантических проверок
    //
    // getErrors() {
    //     return this.errors;
    // }

}
