grammar MatrixOperations;

startRule
    : statement EOF
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
    : FOR LPAREN expr SEMI expr SEMI expr RPAREN LBRACE (statement)* RBRACE
    ;

ifStatement
    : IF LPAREN expr RPAREN LBRACE (statement)* RBRACE (ELSE LBRACE (statement)* RBRACE)?
    ;

functionDeclaration
    : FUNCTION IDENTIFIER LPAREN (IDENTIFIER (COMMA IDENTIFIER)*)? RPAREN LBRACE (statement)* RBRACE
    ;

assignment
    : IDENTIFIER ASSIGN expr SEMI
    ;

varDeclaration
    : VAR IDENTIFIER SEMI
    ;

expr
    : operand op=(EQ | NEQ) operand
    | operand op=(LT | GT | LEQ | GEQ) operand
    | operand op=(PLUS | MINUS) operand
    | operand op=(MULT | DIV | MOD) operand
    | operand POW operand
    | NOT operand
    ;

operand
    : IDENTIFIER
    | matrix
    ;

matrix
    : LBRACKET row (COMMA row)* RBRACKET
    ;

row
    : LBRACKET NUMBER (COMMA NUMBER)* RBRACKET
    ;

VAR        : 'var';
FOR        : 'for';
IF         : 'if';
FUNCTION   : 'function';
ELSE       : 'else';
ASSIGN     : '=';
PLUS       : '+';
MINUS      : '-';
MULT       : '*';
DIV        : '\\';
MOD        : '%';
POW        : '^';
EQ         : '==';
NEQ        : '!=';
LT         : '<';
GT         : '>';
LEQ        : '<=';
GEQ        : '>=';
LBRACKET   : '[';
RBRACKET   : ']';
LPAREN     : '(';
RPAREN     : ')';
LBRACE     : '{';
RBRACE     : '}';
COMMA      : ',';
SEMI       : ';';
NOT        : '!';
IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER     : [0-9]+;
WS         : [ \t\r\n]+ -> skip;
