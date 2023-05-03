import MatrixOperationsListener from './gen/MatrixOperationsListener.js';

export class MatrixOperationsCompiler extends MatrixOperationsListener {
    constructor() {
        super();
        this.compiledCode = "";
    }

    enterVarDeclaration(ctx) {
        const identifier = ctx.IDENTIFIER().getText();
        this.compiledCode += `let ${identifier};\n`;
    }

    enterAssignment(ctx) {
        const identifier = ctx.IDENTIFIER().getText();
        const expr = ctx.expr().getText();
        this.compiledCode += `${identifier} = ${expr};\n`;
    }

    enterIfStatement(ctx) {
        const expr = ctx.expr().getText();
        this.compiledCode += `if (${expr}) {\n`;
    }

    exitIfStatement(ctx) {
        this.compiledCode += `}\n`;
    }

    enterStatement(ctx) {
        if (ctx.ifStatement() && ctx.ifStatement().parentCtx.getChildCount() > 5) {
            this.compiledCode += `else {\n`;
        }
    }

    exitStatement(ctx) {
        if (ctx.ifStatement() && ctx.ifStatement().parentCtx.getChildCount() > 5) {
            this.compiledCode += `}\n`;
        }
    }

    getCompiledCode() {
        return this.compiledCode;
    }
}
