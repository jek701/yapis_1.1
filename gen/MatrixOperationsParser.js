// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MatrixOperationsListener from './MatrixOperationsListener.js';
import MatrixOperationsVisitor from './MatrixOperationsVisitor.js';

const serializedATN = [4,1,27,134,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,24,8,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,49,8,3,10,3,12,3,52,9,3,1,3,1,3,1,3,1,3,5,3,58,8,
3,10,3,12,3,61,9,3,1,3,3,3,64,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,72,8,4,10,
4,12,4,75,9,4,3,4,77,8,4,1,4,1,4,1,4,5,4,82,8,4,10,4,12,4,85,9,4,1,4,1,4,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
5,5,107,8,5,10,5,12,5,110,9,5,1,6,1,6,1,6,1,6,5,6,116,8,6,10,6,12,6,119,
9,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,127,8,7,10,7,12,7,130,9,7,1,7,1,7,1,7,0,
1,10,8,0,2,4,6,8,10,12,14,0,4,1,0,11,12,1,0,13,16,1,0,5,6,1,0,7,9,142,0,
16,1,0,0,0,2,23,1,0,0,0,4,25,1,0,0,0,6,42,1,0,0,0,8,65,1,0,0,0,10,88,1,0,
0,0,12,111,1,0,0,0,14,122,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,
0,19,24,3,4,2,0,20,24,3,6,3,0,21,24,3,8,4,0,22,24,3,10,5,0,23,19,1,0,0,0,
23,20,1,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,3,1,0,0,0,25,26,5,1,0,0,26,
27,5,19,0,0,27,28,3,10,5,0,28,29,5,24,0,0,29,30,3,10,5,0,30,31,5,24,0,0,
31,32,3,10,5,0,32,33,5,20,0,0,33,37,5,21,0,0,34,36,3,2,1,0,35,34,1,0,0,0,
36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,
41,5,22,0,0,41,5,1,0,0,0,42,43,5,2,0,0,43,44,5,19,0,0,44,45,3,10,5,0,45,
46,5,20,0,0,46,50,5,21,0,0,47,49,3,2,1,0,48,47,1,0,0,0,49,52,1,0,0,0,50,
48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,0,53,63,5,22,0,0,54,55,
5,4,0,0,55,59,5,21,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,
0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,64,5,22,0,0,63,54,1,0,
0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,66,5,3,0,0,66,67,5,25,0,0,67,76,5,19,0,
0,68,73,5,25,0,0,69,70,5,23,0,0,70,72,5,25,0,0,71,69,1,0,0,0,72,75,1,0,0,
0,73,71,1,0,0,0,73,74,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,76,68,1,0,0,0,
76,77,1,0,0,0,77,78,1,0,0,0,78,79,5,20,0,0,79,83,5,21,0,0,80,82,3,2,1,0,
81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,
83,1,0,0,0,86,87,5,22,0,0,87,9,1,0,0,0,88,89,6,5,-1,0,89,90,3,12,6,0,90,
108,1,0,0,0,91,92,10,6,0,0,92,93,7,0,0,0,93,107,3,10,5,7,94,95,10,5,0,0,
95,96,7,1,0,0,96,107,3,10,5,6,97,98,10,4,0,0,98,99,7,2,0,0,99,107,3,10,5,
5,100,101,10,3,0,0,101,102,7,3,0,0,102,107,3,10,5,4,103,104,10,2,0,0,104,
105,5,10,0,0,105,107,3,10,5,3,106,91,1,0,0,0,106,94,1,0,0,0,106,97,1,0,0,
0,106,100,1,0,0,0,106,103,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,
1,0,0,0,109,11,1,0,0,0,110,108,1,0,0,0,111,112,5,17,0,0,112,117,3,14,7,0,
113,114,5,23,0,0,114,116,3,14,7,0,115,113,1,0,0,0,116,119,1,0,0,0,117,115,
1,0,0,0,117,118,1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,121,5,18,0,0,
121,13,1,0,0,0,122,123,5,17,0,0,123,128,5,26,0,0,124,125,5,23,0,0,125,127,
5,26,0,0,126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,
129,131,1,0,0,0,130,128,1,0,0,0,131,132,5,18,0,0,132,15,1,0,0,0,12,23,37,
50,59,63,73,76,83,106,108,117,128];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export class MatrixOperationsParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'for'", "'if'", "'function'", "'else'", 
                            "'+'", "'-'", "'*'", "'\\'", "'%'", "'^'", "'=='", 
                            "'!='", "'<'", "'>'", "'<='", "'>='", "'['", 
                            "']'", "'('", "')'", "'{'", "'}'", "','", "';'" ];
    static symbolicNames = [ null, "FOR", "IF", "FUNCTION", "ELSE", "PLUS", 
                             "MINUS", "MULT", "DIV", "MOD", "POW", "EQ", 
                             "NEQ", "LT", "GT", "LEQ", "GEQ", "LBRACKET", 
                             "RBRACKET", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "COMMA", "SEMI", "IDENTIFIER", "NUMBER", "WS" ];
    static ruleNames = [ "startRule", "statement", "forStatement", "ifStatement", 
                         "functionDeclaration", "expr", "matrix", "row" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA);
        this.ruleNames = MatrixOperationsParser.ruleNames;
        this.literalNames = MatrixOperationsParser.literalNames;
        this.symbolicNames = MatrixOperationsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MatrixOperationsParser.RULE_startRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.statement();
	        this.state = 17;
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
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.forStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.ifStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 21;
	            this.functionDeclaration();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 22;
	            this.expr(0);
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MatrixOperationsParser.RULE_forStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(MatrixOperationsParser.FOR);
	        this.state = 26;
	        this.match(MatrixOperationsParser.LPAREN);
	        this.state = 27;
	        this.expr(0);
	        this.state = 28;
	        this.match(MatrixOperationsParser.SEMI);
	        this.state = 29;
	        this.expr(0);
	        this.state = 30;
	        this.match(MatrixOperationsParser.SEMI);
	        this.state = 31;
	        this.expr(0);
	        this.state = 32;
	        this.match(MatrixOperationsParser.RPAREN);
	        this.state = 33;
	        this.match(MatrixOperationsParser.LBRACE);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 131086) !== 0)) {
	            this.state = 34;
	            this.statement();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(MatrixOperationsParser.RBRACE);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MatrixOperationsParser.IF);
	        this.state = 43;
	        this.match(MatrixOperationsParser.LPAREN);
	        this.state = 44;
	        this.expr(0);
	        this.state = 45;
	        this.match(MatrixOperationsParser.RPAREN);
	        this.state = 46;
	        this.match(MatrixOperationsParser.LBRACE);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 131086) !== 0)) {
	            this.state = 47;
	            this.statement();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this.match(MatrixOperationsParser.RBRACE);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 54;
	            this.match(MatrixOperationsParser.ELSE);
	            this.state = 55;
	            this.match(MatrixOperationsParser.LBRACE);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 131086) !== 0)) {
	                this.state = 56;
	                this.statement();
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 62;
	            this.match(MatrixOperationsParser.RBRACE);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MatrixOperationsParser.FUNCTION);
	        this.state = 66;
	        this.match(MatrixOperationsParser.IDENTIFIER);
	        this.state = 67;
	        this.match(MatrixOperationsParser.LPAREN);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 68;
	            this.match(MatrixOperationsParser.IDENTIFIER);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===23) {
	                this.state = 69;
	                this.match(MatrixOperationsParser.COMMA);
	                this.state = 70;
	                this.match(MatrixOperationsParser.IDENTIFIER);
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 78;
	        this.match(MatrixOperationsParser.RPAREN);
	        this.state = 79;
	        this.match(MatrixOperationsParser.LBRACE);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 131086) !== 0)) {
	            this.state = 80;
	            this.statement();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(MatrixOperationsParser.RBRACE);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, MatrixOperationsParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.matrix();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 106;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatrixOperationsParser.RULE_expr);
	                    this.state = 91;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 92;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 93;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatrixOperationsParser.RULE_expr);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 95;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 122880) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 96;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatrixOperationsParser.RULE_expr);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 98;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 99;
	                    this.expr(5);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatrixOperationsParser.RULE_expr);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 101;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 896) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 102;
	                    this.expr(4);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MatrixOperationsParser.RULE_expr);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 104;
	                    this.match(MatrixOperationsParser.POW);
	                    this.state = 105;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 110;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	matrix() {
	    let localctx = new MatrixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MatrixOperationsParser.RULE_matrix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(MatrixOperationsParser.LBRACKET);
	        this.state = 112;
	        this.row();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 113;
	            this.match(MatrixOperationsParser.COMMA);
	            this.state = 114;
	            this.row();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 120;
	        this.match(MatrixOperationsParser.RBRACKET);
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
	    this.enterRule(localctx, 14, MatrixOperationsParser.RULE_row);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(MatrixOperationsParser.LBRACKET);
	        this.state = 123;
	        this.match(MatrixOperationsParser.NUMBER);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 124;
	            this.match(MatrixOperationsParser.COMMA);
	            this.state = 125;
	            this.match(MatrixOperationsParser.NUMBER);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 131;
	        this.match(MatrixOperationsParser.RBRACKET);
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
MatrixOperationsParser.FOR = 1;
MatrixOperationsParser.IF = 2;
MatrixOperationsParser.FUNCTION = 3;
MatrixOperationsParser.ELSE = 4;
MatrixOperationsParser.PLUS = 5;
MatrixOperationsParser.MINUS = 6;
MatrixOperationsParser.MULT = 7;
MatrixOperationsParser.DIV = 8;
MatrixOperationsParser.MOD = 9;
MatrixOperationsParser.POW = 10;
MatrixOperationsParser.EQ = 11;
MatrixOperationsParser.NEQ = 12;
MatrixOperationsParser.LT = 13;
MatrixOperationsParser.GT = 14;
MatrixOperationsParser.LEQ = 15;
MatrixOperationsParser.GEQ = 16;
MatrixOperationsParser.LBRACKET = 17;
MatrixOperationsParser.RBRACKET = 18;
MatrixOperationsParser.LPAREN = 19;
MatrixOperationsParser.RPAREN = 20;
MatrixOperationsParser.LBRACE = 21;
MatrixOperationsParser.RBRACE = 22;
MatrixOperationsParser.COMMA = 23;
MatrixOperationsParser.SEMI = 24;
MatrixOperationsParser.IDENTIFIER = 25;
MatrixOperationsParser.NUMBER = 26;
MatrixOperationsParser.WS = 27;

MatrixOperationsParser.RULE_startRule = 0;
MatrixOperationsParser.RULE_statement = 1;
MatrixOperationsParser.RULE_forStatement = 2;
MatrixOperationsParser.RULE_ifStatement = 3;
MatrixOperationsParser.RULE_functionDeclaration = 4;
MatrixOperationsParser.RULE_expr = 5;
MatrixOperationsParser.RULE_matrix = 6;
MatrixOperationsParser.RULE_row = 7;

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

	FOR() {
	    return this.getToken(MatrixOperationsParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(MatrixOperationsParser.LPAREN, 0);
	};

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

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.SEMI);
	    } else {
	        return this.getToken(MatrixOperationsParser.SEMI, i);
	    }
	};


	RPAREN() {
	    return this.getToken(MatrixOperationsParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MatrixOperationsParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MatrixOperationsParser.RBRACE, 0);
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

	IF() {
	    return this.getToken(MatrixOperationsParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(MatrixOperationsParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(MatrixOperationsParser.RPAREN, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.LBRACE);
	    } else {
	        return this.getToken(MatrixOperationsParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.RBRACE);
	    } else {
	        return this.getToken(MatrixOperationsParser.RBRACE, i);
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

	ELSE() {
	    return this.getToken(MatrixOperationsParser.ELSE, 0);
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

	FUNCTION() {
	    return this.getToken(MatrixOperationsParser.FUNCTION, 0);
	};

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


	LPAREN() {
	    return this.getToken(MatrixOperationsParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MatrixOperationsParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MatrixOperationsParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MatrixOperationsParser.RBRACE, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.COMMA);
	    } else {
	        return this.getToken(MatrixOperationsParser.COMMA, i);
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
        this.op = null; // Token
    }

	matrix() {
	    return this.getTypedRuleContext(MatrixContext,0);
	};

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

	EQ() {
	    return this.getToken(MatrixOperationsParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(MatrixOperationsParser.NEQ, 0);
	};

	LT() {
	    return this.getToken(MatrixOperationsParser.LT, 0);
	};

	GT() {
	    return this.getToken(MatrixOperationsParser.GT, 0);
	};

	LEQ() {
	    return this.getToken(MatrixOperationsParser.LEQ, 0);
	};

	GEQ() {
	    return this.getToken(MatrixOperationsParser.GEQ, 0);
	};

	PLUS() {
	    return this.getToken(MatrixOperationsParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(MatrixOperationsParser.MINUS, 0);
	};

	MULT() {
	    return this.getToken(MatrixOperationsParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(MatrixOperationsParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(MatrixOperationsParser.MOD, 0);
	};

	POW() {
	    return this.getToken(MatrixOperationsParser.POW, 0);
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

	LBRACKET() {
	    return this.getToken(MatrixOperationsParser.LBRACKET, 0);
	};

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

	RBRACKET() {
	    return this.getToken(MatrixOperationsParser.RBRACKET, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.COMMA);
	    } else {
	        return this.getToken(MatrixOperationsParser.COMMA, i);
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

	LBRACKET() {
	    return this.getToken(MatrixOperationsParser.LBRACKET, 0);
	};

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


	RBRACKET() {
	    return this.getToken(MatrixOperationsParser.RBRACKET, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MatrixOperationsParser.COMMA);
	    } else {
	        return this.getToken(MatrixOperationsParser.COMMA, i);
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
MatrixOperationsParser.ExprContext = ExprContext; 
MatrixOperationsParser.MatrixContext = MatrixContext; 
MatrixOperationsParser.RowContext = RowContext; 
