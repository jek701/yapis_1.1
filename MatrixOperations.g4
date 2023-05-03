grammar MatrixOperations;

startRule
    : (statement)* EOF
    ;

statement
    : forStatement
    | ifStatement
    | functionDeclaration
    | assignment
    | varDeclaration
    | expr
    ;

forStatement
    : 'for' '(' expr ';' expr ';' expr ')' '{' (statement)* '}'
    ;

ifStatement
    : 'if' '(' expr ')' '{' (statement)* '}' ('else' '{' (statement)* '}')?
    ;

functionDeclaration
    : 'function' IDENTIFIER '(' (IDENTIFIER (',' IDENTIFIER)*)? ')' '{' (statement)* '}'
    ;

assignment
    : IDENTIFIER '=' expr ';'
    ;

varDeclaration
    : 'var' IDENTIFIER ';'
    ;

expr
    : operand op=('==' | '!=') operand
    | operand op=('<' | '>' | '<=' | '>=') operand
    | operand op=('+' | '-') operand
    | operand op=('*' | '\\' | '%') operand
    | operand '^' operand
    | matrix
    ;

operand
    : IDENTIFIER
    | matrix
    ;

matrix
    : '[' row (',' row)* ']'
    ;

row
    : '[' NUMBER (',' NUMBER)* ']'
    ;


IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER     : [0-9]+;
WS         : [ \t\r\n]+ -> skip;
