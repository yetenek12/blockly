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

Blockly.Arduino.y12_init = function(){
    var comm = this.getFieldValue('COMM');
    var commId = -1;
    if(comm == 'I2C') commId = 0;
    else if(comm == 'MODBUS') commId = 1;

    Blockly.Arduino.setups_['setup_init'] = 'yetenek.init(' + commId + ');';
    // var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n'
    // return code;
    return '';
}

Blockly.Arduino.y12_get_digital_io = function(){
    var addrValue = this.getFieldValue('ADDR');
    var pinValue = this.getFieldValue('PIN');
    var addr = addrValue.split('_')[1];
    var pin = pinValue.split('_')[1];

    var commId = -1;
    if(comm == 'I2C') commId = 0;
    else if(comm == 'MODBUS') commId = 1;

    var code = 'yetenek.getDigitalIO(' + addr + ', ' + pin + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.y12_set_digital_io = function(){
    var addrValue = this.getFieldValue('ADDR');
    var pinValue = this.getFieldValue('PIN');
    var addr = addrValue.split('_')[1];
    var pin = pinValue.split('_')[1];

    var val = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'yetenek.setDigitalIO(' + addr + ', ' + pin + ', ' + val + ');\n';
    return code;
}

Blockly.Arduino.y12_get_adc = function(){
    var addrValue = this.getFieldValue('ADDR');
    var pinValue = this.getFieldValue('PIN');
    var addr = addrValue.split('_')[1];
    var pin = pinValue.split('_')[1];

    var code = 'yetenek.getADC(' + addr + ', ' + pin + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.y12_get_adc_voltage = function(){
    var addrValue = this.getFieldValue('ADDR');
    var pinValue = this.getFieldValue('PIN');
    var addr = addrValue.split('_')[1];
    var pin = pinValue.split('_')[1];

    var code = 'yetenek.getADCVoltage(' + addr + ', ' + pin + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}
