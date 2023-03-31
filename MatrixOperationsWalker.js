import MatrixOperationsListener from './gen/MatrixOperationsListener.js';

export class MatrixOperationsWalker extends MatrixOperationsListener {

    enterStartRule(ctx) {
        console.log("Entering Start Rule: ", ctx.getText());
    }

    exitStartRule(ctx) {
        console.log("Exiting Start Rule: ", ctx.getText());
    }

    enterStatement(ctx) {
        console.log("Entering Statement: ", ctx.getText());
    }

    exitStatement(ctx) {
        console.log("Exiting Statement: ", ctx.getText());
    }

    enterForStatement(ctx) {
        console.log("Entering For Statement: ", ctx.getText());
    }

    exitForStatement(ctx) {
        console.log("Exiting For Statement: ", ctx.getText());
    }

    enterIfStatement(ctx) {
        console.log("Entering If Statement: ", ctx.getText());
    }

    exitIfStatement(ctx) {
        console.log("Exiting If Statement: ", ctx.getText());
    }

    enterFunctionDeclaration(ctx) {
        console.log("Entering Function Declaration: ", ctx.getText());
    }

    exitFunctionDeclaration(ctx) {
        console.log("Exiting Function Declaration: ", ctx.getText());
    }

    enterExpression(ctx) {
        console.log("Entering Expression: ", ctx.getText());
    }

    exitExpression(ctx) {
        console.log("Exiting Expression: ", ctx.getText());
    }

    enterMatrix(ctx) {
        console.log("Entering Matrix: ", ctx.getText());
    }

    exitMatrix(ctx) {
        console.log("Exiting Matrix: ", ctx.getText());
    }

    enterRow(ctx) {
        console.log("Entering Row: ", ctx.getText());
    }

    exitRow(ctx) {
        console.log("Exiting Row: ", ctx.getText());
    }

}
