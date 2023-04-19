// Generated from /Users/ikromjonahmadjonov/WebstormProjects/yapis_1.1/MatrixOperations.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MatrixOperationsListener from './MatrixOperationsListener.js';
import MatrixOperationsVisitor from './MatrixOperationsVisitor.js';

const serializedATN = [4,1,29,154,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,44,
8,2,10,2,12,2,47,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,57,8,3,10,3,12,
3,60,9,3,1,3,1,3,1,3,1,3,5,3,66,8,3,10,3,12,3,69,9,3,1,3,3,3,72,8,3,1,4,
1,4,1,4,1,4,1,4,1,4,5,4,80,8,4,10,4,12,4,83,9,4,3,4,85,8,4,1,4,1,4,1,4,5,
4,90,8,4,10,4,12,4,93,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,3,7,126,8,7,1,8,1,8,3,8,130,8,8,1,9,1,9,1,9,1,9,5,9,136,8,9,10,9,12,
9,139,9,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,147,8,10,10,10,12,10,150,9,10,
1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,4,1,0,13,14,1,0,15,18,
1,0,19,20,1,0,21,23,161,0,22,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,50,1,0,
0,0,8,73,1,0,0,0,10,96,1,0,0,0,12,101,1,0,0,0,14,125,1,0,0,0,16,129,1,0,
0,0,18,131,1,0,0,0,20,142,1,0,0,0,22,23,3,2,1,0,23,24,5,0,0,1,24,1,1,0,0,
0,25,32,3,4,2,0,26,32,3,6,3,0,27,32,3,8,4,0,28,32,3,10,5,0,29,32,3,12,6,
0,30,32,3,14,7,0,31,25,1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,31,28,1,0,0,0,
31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,1,0,0,34,35,5,2,0,0,35,
36,3,14,7,0,36,37,5,3,0,0,37,38,3,14,7,0,38,39,5,3,0,0,39,40,3,14,7,0,40,
41,5,4,0,0,41,45,5,5,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,
1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,6,0,0,49,5,1,0,
0,0,50,51,5,7,0,0,51,52,5,2,0,0,52,53,3,14,7,0,53,54,5,4,0,0,54,58,5,5,0,
0,55,57,3,2,1,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,
59,61,1,0,0,0,60,58,1,0,0,0,61,71,5,6,0,0,62,63,5,8,0,0,63,67,5,5,0,0,64,
66,3,2,1,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,
1,0,0,0,69,67,1,0,0,0,70,72,5,6,0,0,71,62,1,0,0,0,71,72,1,0,0,0,72,7,1,0,
0,0,73,74,5,9,0,0,74,75,5,27,0,0,75,84,5,2,0,0,76,81,5,27,0,0,77,78,5,10,
0,0,78,80,5,27,0,0,79,77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,
0,82,85,1,0,0,0,83,81,1,0,0,0,84,76,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,
86,87,5,4,0,0,87,91,5,5,0,0,88,90,3,2,1,0,89,88,1,0,0,0,90,93,1,0,0,0,91,
89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,95,5,6,0,0,95,9,
1,0,0,0,96,97,5,27,0,0,97,98,5,11,0,0,98,99,3,14,7,0,99,100,5,3,0,0,100,
11,1,0,0,0,101,102,5,12,0,0,102,103,5,27,0,0,103,104,5,3,0,0,104,13,1,0,
0,0,105,106,3,16,8,0,106,107,7,0,0,0,107,108,3,16,8,0,108,126,1,0,0,0,109,
110,3,16,8,0,110,111,7,1,0,0,111,112,3,16,8,0,112,126,1,0,0,0,113,114,3,
16,8,0,114,115,7,2,0,0,115,116,3,16,8,0,116,126,1,0,0,0,117,118,3,16,8,0,
118,119,7,3,0,0,119,120,3,16,8,0,120,126,1,0,0,0,121,122,3,16,8,0,122,123,
5,24,0,0,123,124,3,16,8,0,124,126,1,0,0,0,125,105,1,0,0,0,125,109,1,0,0,
0,125,113,1,0,0,0,125,117,1,0,0,0,125,121,1,0,0,0,126,15,1,0,0,0,127,130,
5,27,0,0,128,130,3,18,9,0,129,127,1,0,0,0,129,128,1,0,0,0,130,17,1,0,0,0,
131,132,5,25,0,0,132,137,3,20,10,0,133,134,5,10,0,0,134,136,3,20,10,0,135,
133,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,140,1,0,
0,0,139,137,1,0,0,0,140,141,5,26,0,0,141,19,1,0,0,0,142,143,5,25,0,0,143,
148,5,28,0,0,144,145,5,10,0,0,145,147,5,28,0,0,146,144,1,0,0,0,147,150,1,
0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,148,1,0,0,0,151,
152,5,26,0,0,152,21,1,0,0,0,12,31,45,58,67,71,81,84,91,125,129,137,148];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export class MatrixOperationsParser extends antlr4.Parser {

    static grammarFileName = "MatrixOperations.g4";
    static literalNames = [ null, "'for'", "'('", "';'", "')'", "'{'", "'}'", 
                            "'if'", "'else'", "'function'", "','", "'='", 
                            "'var'", "'=='", "'!='", "'<'", "'>'", "'<='", 
                            "'>='", "'+'", "'-'", "'*'", "'\\'", "'%'", 
                            "'^'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "IDENTIFIER", "NUMBER", "WS" ];
    static ruleNames = [ "startRule", "statement", "forStatement", "ifStatement", 
                         "functionDeclaration", "assignment", "varDeclaration", 
                         "expr", "operand", "matrix", "row" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MatrixOperationsParser.ruleNames;
        this.literalNames = MatrixOperationsParser.literalNames;
        this.symbolicNames = MatrixOperationsParser.symbolicNames;
    }



	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MatrixOperationsParser.RULE_startRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.statement();
	        this.state = 23;
	        this.match(MatrixOperationsParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MatrixOperationsParser.RULE_statement);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.forStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.ifStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.functionDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 28;
	            this.assignment();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 29;
	            this.varDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 30;
	            this.expr();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MatrixOperationsParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MatrixOperationsParser.T__0);
	        this.state = 34;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 35;
	        this.expr();
	        this.state = 36;
	        this.match(MatrixOperationsParser.T__2);
	        this.state = 37;
	        this.expr();
	        this.state = 38;
	        this.match(MatrixOperationsParser.T__2);
	        this.state = 39;
	        this.expr();
	        this.state = 40;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 41;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 42;
	            this.statement();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(MatrixOperationsParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MatrixOperationsParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MatrixOperationsParser.T__6);
	        this.state = 51;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 52;
	        this.expr();
	        this.state = 53;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 54;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 55;
	            this.statement();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(MatrixOperationsParser.T__5);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 62;
	            this.match(MatrixOperationsParser.T__7);
	            this.state = 63;
	            this.match(MatrixOperationsParser.T__4);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	                this.state = 64;
	                this.statement();
	                this.state = 69;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 70;
	            this.match(MatrixOperationsParser.T__5);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MatrixOperationsParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(MatrixOperationsParser.T__8);
	        this.state = 74;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 75;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 76;
	            this.match(MatrixOperationsParser.IDENTIFIER);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 77;
	                this.match(MatrixOperationsParser.T__9);
	                this.state = 78;
	                this.match(MatrixOperationsParser.IDENTIFIER);
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 86;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 87;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 88;
	            this.statement();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this.match(MatrixOperationsParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MatrixOperationsParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 97;
	        this.match(MatrixOperationsParser.T__10);
	        this.state = 98;
	        this.expr();
	        this.state = 99;
	        this.match(MatrixOperationsParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MatrixOperationsParser.RULE_varDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(MatrixOperationsParser.T__11);
	        this.state = 102;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 103;
	        this.match(MatrixOperationsParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MatrixOperationsParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.operand();
	            this.state = 106;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 107;
	            this.operand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.operand();
	            this.state = 110;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 111;
	            this.operand();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.operand();
	            this.state = 114;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 115;
	            this.operand();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 117;
	            this.operand();
	            this.state = 118;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 119;
	            this.operand();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.operand();
	            this.state = 122;
	            this.match(MatrixOperationsParser.T__23);
	            this.state = 123;
	            this.operand();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MatrixOperationsParser.RULE_operand);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(MatrixOperationsParser.IDENTIFIER);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.matrix();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matrix() {
	    let localctx = new MatrixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MatrixOperationsParser.RULE_matrix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(MatrixOperationsParser.T__24);
	        this.state = 132;
	        this.row();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 133;
	            this.match(MatrixOperationsParser.T__9);
	            this.state = 134;
	            this.row();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
	        this.match(MatrixOperationsParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MatrixOperationsParser.RULE_row);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(MatrixOperationsParser.T__24);
	        this.state = 143;
	        this.match(MatrixOperationsParser.NUMBER);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 144;
	            this.match(MatrixOperationsParser.T__9);
	            this.state = 145;
	            this.match(MatrixOperationsParser.NUMBER);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this.match(MatrixOperationsParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MatrixOperationsParser.EOF = antlr4.Token.EOF;
MatrixOperationsParser.T__0 = 1;
MatrixOperationsParser.T__1 = 2;
MatrixOperationsParser.T__2 = 3;
MatrixOperationsParser.T__3 = 4;
MatrixOperationsParser.T__4 = 5;
MatrixOperationsParser.T__5 = 6;
MatrixOperationsParser.T__6 = 7;
MatrixOperationsParser.T__7 = 8;
MatrixOperationsParser.T__8 = 9;
MatrixOperationsParser.T__9 = 10;
MatrixOperationsParser.T__10 = 11;
MatrixOperationsParser.T__11 = 12;
MatrixOperationsParser.T__12 = 13;
MatrixOperationsParser.T__13 = 14;
MatrixOperationsParser.T__14 = 15;
MatrixOperationsParser.T__15 = 16;
MatrixOperationsParser.T__16 = 17;
MatrixOperationsParser.T__17 = 18;
MatrixOperationsParser.T__18 = 19;
MatrixOperationsParser.T__19 = 20;
MatrixOperationsParser.T__20 = 21;
MatrixOperationsParser.T__21 = 22;
MatrixOperationsParser.T__22 = 23;
MatrixOperationsParser.T__23 = 24;
MatrixOperationsParser.T__24 = 25;
MatrixOperationsParser.T__25 = 26;
MatrixOperationsParser.IDENTIFIER = 27;
MatrixOperationsParser.NUMBER = 28;
MatrixOperationsParser.WS = 29;

MatrixOperationsParser.RULE_startRule = 0;
MatrixOperationsParser.RULE_statement = 1;
MatrixOperationsParser.RULE_forStatement = 2;
MatrixOperationsParser.RULE_ifStatement = 3;
MatrixOperationsParser.RULE_functionDeclaration = 4;
MatrixOperationsParser.RULE_assignment = 5;
MatrixOperationsParser.RULE_varDeclaration = 6;
MatrixOperationsParser.RULE_expr = 7;
MatrixOperationsParser.RULE_operand = 8;
MatrixOperationsParser.RULE_matrix = 9;
MatrixOperationsParser.RULE_row = 10;

class StartRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_startRule;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	EOF() {
	    return this.getToken(MatrixOperationsParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterStartRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitStartRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitStartRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_statement;
    }

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_forStatement;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_ifStatement;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_functionDeclaration;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.IDENTIFIER);
	    } else {
	        return this.getToken(MatrixOperationsParser.IDENTIFIER, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_assignment;
    }

	IDENTIFIER() {
	    return this.getToken(MatrixOperationsParser.IDENTIFIER, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_varDeclaration;
    }

	IDENTIFIER() {
	    return this.getToken(MatrixOperationsParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitVarDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitVarDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_expr;
        this.op = null;
    }

	operand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperandContext);
	    } else {
	        return this.getTypedRuleContext(OperandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_operand;
    }

	IDENTIFIER() {
	    return this.getToken(MatrixOperationsParser.IDENTIFIER, 0);
	};

	matrix() {
	    return this.getTypedRuleContext(MatrixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitOperand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitOperand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MatrixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_matrix;
    }

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterMatrix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitMatrix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitMatrix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatrixOperationsParser.RULE_row;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.NUMBER);
	    } else {
	        return this.getToken(MatrixOperationsParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatrixOperationsListener ) {
	        listener.exitRow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatrixOperationsVisitor ) {
	        return visitor.visitRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MatrixOperationsParser.StartRuleContext = StartRuleContext; 
MatrixOperationsParser.StatementContext = StatementContext; 
MatrixOperationsParser.ForStatementContext = ForStatementContext; 
MatrixOperationsParser.IfStatementContext = IfStatementContext; 
MatrixOperationsParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MatrixOperationsParser.AssignmentContext = AssignmentContext; 
MatrixOperationsParser.VarDeclarationContext = VarDeclarationContext; 
MatrixOperationsParser.ExprContext = ExprContext; 
MatrixOperationsParser.OperandContext = OperandContext; 
MatrixOperationsParser.MatrixContext = MatrixContext; 
MatrixOperationsParser.RowContext = RowContext; 
