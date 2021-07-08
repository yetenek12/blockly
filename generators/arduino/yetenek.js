/* eslint-disable */

Blockly.Arduino.base_start = function() {
    return '';
};

Blockly.Arduino.base_loop = function() {
    var loopCode = Blockly.Arduino.statementToCode(this, 'LOOP');
    Blockly.Arduino.loop_ = loopCode
    return '';
};

Blockly.Arduino.variables_type = function(){
    var variableId = this.getFieldValue('VAR');
    var variableType = this.getFieldValue('TYPE');
    Blockly.Arduino.types_[variableId] = variableType;
    return '';
}

// ================================================================================================
// ================================================================================================

Blockly.Arduino.renk_1 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.renk_2 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.renk_3 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.renk_4 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};






Blockly.Arduino.tof_1 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.tof_2 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};






Blockly.Arduino.sound_1 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sound_2 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sound_3 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sound_4 = function() {
    var code = '1';
    return [code, Blockly.Arduino.ORDER_NONE];
};