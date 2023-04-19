import antlr4 from 'antlr4';

class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({ line, column, msg });
    }

    getErrors() {
        return this.errors;
    }

    hasErrors() {
        return this.errors.length > 0;
    }
}

export default ErrorListener;
