// float b = 3.14;
// string c = "hello world";
// matrix m = [[1, 2], [3, 4]];
// vector v = [1, 2, 3];

const sourceCode = `
  matrix m = [[1, 2], [3, 4]];
`;

(async () => {
    try {
        var parser = await import('./parser.cjs');
        const ast = parser.parse(sourceCode);
        console.log("Abstract Syntax Tree:", JSON.stringify(ast, null, 2));
    } catch (e) {
        if (e instanceof parser.SyntaxError) {
            console.error("Syntax error:", e.message);
        } else {
            console.error("Unknown error:", e);
        }
    }
})();
