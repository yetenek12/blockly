/* eslint-disable */

// ================================================================================================
// GOOG
// ================================================================================================
goog.provide('Blockly.Arduino');
goog.require('Blockly.Generator');

// ================================================================================================
// REGISTER ARDUINO GENERATOR
// ================================================================================================
Blockly.Arduino = new Blockly.Generator('Arduino');

// ================================================================================================
// CPP/ARDUINO RESERVED KEYWORDS
// ================================================================================================
Blockly.Arduino.addReservedWords(
    // http://arduino.cc/en/Reference/HomePage
    'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer,constant,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts'
);

// ================================================================================================
// ORDER OF OPERATIONS
// ================================================================================================
Blockly.Arduino.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4;       // + -
Blockly.Arduino.ORDER_SHIFT = 5;          // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6;     // is is! >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8;    // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;    // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_NONE = 99;          // (...)

// ================================================================================================
// GENERATOR INIT
// ================================================================================================
Blockly.Arduino.init = function(workspace) {

    // maps
    Blockly.Arduino.loop_ = ''
    Blockly.Arduino.definitions_ = [];
    Blockly.Arduino.setups_ = Object.create(null);
    Blockly.Arduino.types_ = Object.create(null);

    // variableDB_
    if (!Blockly.Arduino.variableDB_) {
        Blockly.Arduino.variableDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
    } else {
        Blockly.Arduino.variableDB_.reset();
    }
    Blockly.Arduino.variableDB_.setVariableMap(workspace.getVariableMap());
}

// ================================================================================================
// FINISH
// ================================================================================================
Blockly.Arduino.finish = function(code) {

    // include statements
    var includes = ''
    includes += '#include <Arduino.h>\n'
    includes += '#include <YETENEK12.h>\n'
    includes += '\n'

    // variable declerations
    var variables = Blockly.Variables.allUsedVarModels(workspace);
    for (var i = 0; i < variables.length; i++) {
        var variable = variables[i];
        var variableType = Blockly.Arduino.types_[variable.id_] ? Blockly.Arduino.types_[variable.id_] : 'int';
        var variableName = Blockly.Arduino.variableDB_.getName(variable.name, Blockly.Variables.NAME_TYPE);
      
        Blockly.Arduino.definitions_.push({name: variableName, type: variableType})
	}
    var definitions = Blockly.Arduino.definitions_.map(function(d){return d.type + ' ' + d.name + ';'}).join('\n')
    definitions += '\n\n'

    // Indent every line.
    code = '  ' + code.replace(/\n/g, '\n  ');
    code = code.replace(/\n\s+$/, '\n');

    // Convert the setups dictionary into a list.
    var setups = [];
    for (var name in Blockly.Arduino.setups_) {
        setups.push(Blockly.Arduino.setups_[name]);
    }

    // setup
    var setupCode = ''
    setupCode = 'void setup() {\n'
    setupCode += setups.join('\n  ') + '\n'
    setupCode += code
    setupCode += '}\n\n'

    // loop
    // ...
    var loopCode = ''
    loopCode = 'void loop() {\n'
    loopCode += Blockly.Arduino.loop_
    loopCode += '}\n\n'

    // OUTPUT CODE
    return includes + definitions + setupCode + loopCode;
}

// ================================================================================================
// UTILS
// ================================================================================================

Blockly.Arduino.scrubNakedValue = function(line) {
    return line + ';\n';
};

Blockly.Arduino.quote_ = function(string) {
    // TODO: This is a quick hack.  Replace with goog.string.quote
    string = string.replace(/\\/g, '\\\\')
                    .replace(/\n/g, '\\\n')
                    .replace(/\$/g, '\\$')
                    .replace(/'/g, '\\\'');
    return '\"' + string + '\"';
};

Blockly.Arduino.scrub_ = function(block, code) {
    if (code === null) {
        // Block has handled code generation itself.
        return '';
    }
    var commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
        // Collect comment for this block.
        var comment = block.getCommentText();
        if (comment) {
            commentCode += Blockly.Arduino.prefixLines(comment, '// ') + '\n';
        }
        // Collect comments for all value arguments.
        // Don't collect comments for nested statements.
        for (var x = 0; x < block.inputList.length; x++) {
            if (block.inputList[x].type == Blockly.INPUT_VALUE) {
                var childBlock = block.inputList[x].connection.targetBlock();
                if (childBlock) {
                    var comment = Blockly.Arduino.allNestedComments(childBlock);
                    if (comment) {
                        commentCode += Blockly.Arduino.prefixLines(comment, '// ');
                    }
                }
            }
        }
    }
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.Arduino.blockToCode(nextBlock);
    return commentCode + code + nextCode;
};