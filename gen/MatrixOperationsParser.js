// Generated from /Users/ikromjonahmadjonov/WebstormProjects/yapis_1.1/MatrixOperations.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MatrixOperationsListener from './MatrixOperationsListener.js';
import MatrixOperationsVisitor from './MatrixOperationsVisitor.js';

const serializedATN = [4,1,29,160,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,5,2,49,8,2,10,2,12,2,52,9,2,1,2,1,2,1,3,1,3,1,3,1,
3,1,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,1,3,1,3,1,3,1,3,5,3,71,8,3,10,3,12,
3,74,9,3,1,3,3,3,77,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,85,8,4,10,4,12,4,88,
9,4,3,4,90,8,4,1,4,1,4,1,4,5,4,95,8,4,10,4,12,4,98,9,4,1,4,1,4,1,5,1,5,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,132,8,7,1,8,1,8,3,8,136,8,8,1,
9,1,9,1,9,1,9,5,9,142,8,9,10,9,12,9,145,9,9,1,9,1,9,1,10,1,10,1,10,1,10,
5,10,153,8,10,10,10,12,10,156,9,10,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,
14,16,18,20,0,4,1,0,13,14,1,0,15,18,1,0,19,20,1,0,21,23,169,0,25,1,0,0,0,
2,36,1,0,0,0,4,38,1,0,0,0,6,55,1,0,0,0,8,78,1,0,0,0,10,101,1,0,0,0,12,106,
1,0,0,0,14,131,1,0,0,0,16,135,1,0,0,0,18,137,1,0,0,0,20,148,1,0,0,0,22,24,
3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,
0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,37,3,4,2,0,31,37,3,6,3,
0,32,37,3,8,4,0,33,37,3,10,5,0,34,37,3,12,6,0,35,37,3,14,7,0,36,30,1,0,0,
0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,
37,3,1,0,0,0,38,39,5,1,0,0,39,40,5,2,0,0,40,41,3,14,7,0,41,42,5,3,0,0,42,
43,3,14,7,0,43,44,5,3,0,0,44,45,3,14,7,0,45,46,5,4,0,0,46,50,5,5,0,0,47,
49,3,2,1,0,48,47,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,
1,0,0,0,52,50,1,0,0,0,53,54,5,6,0,0,54,5,1,0,0,0,55,56,5,7,0,0,56,57,5,2,
0,0,57,58,3,14,7,0,58,59,5,4,0,0,59,63,5,5,0,0,60,62,3,2,1,0,61,60,1,0,0,
0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,
66,76,5,6,0,0,67,68,5,8,0,0,68,72,5,5,0,0,69,71,3,2,1,0,70,69,1,0,0,0,71,
74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,0,74,72,1,0,0,0,75,77,
5,6,0,0,76,67,1,0,0,0,76,77,1,0,0,0,77,7,1,0,0,0,78,79,5,9,0,0,79,80,5,27,
0,0,80,89,5,2,0,0,81,86,5,27,0,0,82,83,5,10,0,0,83,85,5,27,0,0,84,82,1,0,
0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,
0,89,81,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,4,0,0,92,96,5,5,0,0,
93,95,3,2,1,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,
99,1,0,0,0,98,96,1,0,0,0,99,100,5,6,0,0,100,9,1,0,0,0,101,102,5,27,0,0,102,
103,5,11,0,0,103,104,3,14,7,0,104,105,5,3,0,0,105,11,1,0,0,0,106,107,5,12,
0,0,107,108,5,27,0,0,108,109,5,3,0,0,109,13,1,0,0,0,110,111,3,16,8,0,111,
112,7,0,0,0,112,113,3,16,8,0,113,132,1,0,0,0,114,115,3,16,8,0,115,116,7,
1,0,0,116,117,3,16,8,0,117,132,1,0,0,0,118,119,3,16,8,0,119,120,7,2,0,0,
120,121,3,16,8,0,121,132,1,0,0,0,122,123,3,16,8,0,123,124,7,3,0,0,124,125,
3,16,8,0,125,132,1,0,0,0,126,127,3,16,8,0,127,128,5,24,0,0,128,129,3,16,
8,0,129,132,1,0,0,0,130,132,3,18,9,0,131,110,1,0,0,0,131,114,1,0,0,0,131,
118,1,0,0,0,131,122,1,0,0,0,131,126,1,0,0,0,131,130,1,0,0,0,132,15,1,0,0,
0,133,136,5,27,0,0,134,136,3,18,9,0,135,133,1,0,0,0,135,134,1,0,0,0,136,
17,1,0,0,0,137,138,5,25,0,0,138,143,3,20,10,0,139,140,5,10,0,0,140,142,3,
20,10,0,141,139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,
144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,26,0,0,147,19,1,0,0,0,148,149,
5,25,0,0,149,154,5,28,0,0,150,151,5,10,0,0,151,153,5,28,0,0,152,150,1,0,
0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,
154,1,0,0,0,157,158,5,26,0,0,158,21,1,0,0,0,13,25,36,50,63,72,76,86,89,96,
131,135,143,154];


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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 22;
	            this.statement();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.forStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.ifStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.functionDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.assignment();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.varDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 35;
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
	        this.state = 38;
	        this.match(MatrixOperationsParser.T__0);
	        this.state = 39;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 40;
	        this.expr();
	        this.state = 41;
	        this.match(MatrixOperationsParser.T__2);
	        this.state = 42;
	        this.expr();
	        this.state = 43;
	        this.match(MatrixOperationsParser.T__2);
	        this.state = 44;
	        this.expr();
	        this.state = 45;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 46;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 47;
	            this.statement();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
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
	        this.state = 55;
	        this.match(MatrixOperationsParser.T__6);
	        this.state = 56;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 57;
	        this.expr();
	        this.state = 58;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 59;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 60;
	            this.statement();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(MatrixOperationsParser.T__5);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 67;
	            this.match(MatrixOperationsParser.T__7);
	            this.state = 68;
	            this.match(MatrixOperationsParser.T__4);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	                this.state = 69;
	                this.statement();
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 75;
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
	        this.state = 78;
	        this.match(MatrixOperationsParser.T__8);
	        this.state = 79;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 80;
	        this.match(MatrixOperationsParser.T__1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 81;
	            this.match(MatrixOperationsParser.IDENTIFIER);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 82;
	                this.match(MatrixOperationsParser.T__9);
	                this.state = 83;
	                this.match(MatrixOperationsParser.IDENTIFIER);
	                this.state = 88;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 91;
	        this.match(MatrixOperationsParser.T__3);
	        this.state = 92;
	        this.match(MatrixOperationsParser.T__4);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 167776898) !== 0)) {
	            this.state = 93;
	            this.statement();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
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
	        this.state = 101;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 102;
	        this.match(MatrixOperationsParser.T__10);
	        this.state = 103;
	        this.expr();
	        this.state = 104;
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
	        this.state = 106;
	        this.match(MatrixOperationsParser.T__11);
	        this.state = 107;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 108;
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
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.operand();
	            this.state = 111;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 112;
	            this.operand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.operand();
	            this.state = 115;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this.operand();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.operand();
	            this.state = 119;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 120;
	            this.operand();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122;
	            this.operand();
	            this.state = 123;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 124;
	            this.operand();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.operand();
	            this.state = 127;
	            this.match(MatrixOperationsParser.T__23);
	            this.state = 128;
	            this.operand();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 130;
	            this.matrix();
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
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(MatrixOperationsParser.IDENTIFIER);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
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
	        this.state = 137;
	        this.match(MatrixOperationsParser.T__24);
	        this.state = 138;
	        this.row();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 139;
	            this.match(MatrixOperationsParser.T__9);
	            this.state = 140;
	            this.row();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
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
	        this.state = 148;
	        this.match(MatrixOperationsParser.T__24);
	        this.state = 149;
	        this.match(MatrixOperationsParser.NUMBER);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 150;
	            this.match(MatrixOperationsParser.T__9);
	            this.state = 151;
	            this.match(MatrixOperationsParser.NUMBER);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 157;
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

	EOF() {
	    return this.getToken(MatrixOperationsParser.EOF, 0);
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

	matrix() {
	    return this.getTypedRuleContext(MatrixContext,0);
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
