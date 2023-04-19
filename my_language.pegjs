start
  = program

_ "whitespace"
  = [ \t\n\r]*

program
  = _ statement* _

assignment
  = identifier _ "=" _ expr

statement
  = variable_declaration _ ";"
  / function_declaration
  / if_statement _
  / while_statement _
  / for_statement _
  / block

variable_declaration
  = type:("int" / "float" / "string" / "vector" / "matrix") _ identifier:identifier _ "=" _ value:expr

function_declaration
  = "function" identifier:identifier "(" params:param_list ")" block:block

if_statement
  = "if" _ condition:expr _ "then" _ if_block:block ("else" _ else_block:block)? ";"

while_statement
  = "while" _ condition:expr _ block:block

for_statement
  = "for" _ variable_declaration _ condition:expr _ ";" _ update:expr _ block:block

identifier
  = [a-zA-Z_][a-zA-Z0-9_]*

param_list
  = head:param tail:( "," param )* { return [head].concat(tail.map(p => p[1])); }
  / empty

param
  = type:("int" / "float" / "string") identifier:identifier

block
  = "{" statement* "}"

expr
  = left:term rest:(("+" / "-") term)* {
      return rest.reduce((acc, cur) => {
        return cur[0] === "+" ? acc + cur[1] : acc - cur[1];
      }, left);
    }

term
  = left:primary rest:(("*" / "/") primary)* {
      return rest.reduce((acc, cur) => {
        return cur[0] === "*" ? acc * cur[1] : acc / cur[1];
      }, left);
    }

primary
  = integer
  / "(" expr ")"

integer "integer"
  = [0-9]+ { return parseInt(text(), 10); }

empty
  = ""
