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

Blockly.Arduino.y12_mb_buzzer = function(){
	var comm = this.getFieldValue('COMM');
	var commId = -1;
	if(comm == '1') commId = 1;
	else if(comm == '0') commId = 0;

	var code = 'yetenek.setBuzzer(' + commId + ');\n'
	return code;
}

Blockly.Arduino.y12_mb_temperature = function(){
	var code = 'yetenek.readTemperature()'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.y12_mb_button = function(){
	var comm = this.getFieldValue('COMM');
	var commId = -1;
	if(comm == '1') commId = 1;
	else if(comm == '2') commId = 2;

	var code = 'yetenek.readButton(' + commId + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.y12_mb_led = function(){
	var comm = this.getFieldValue('COMM');
	var commId = -1;
	if(comm == '1') commId = 1;
	else if(comm == '0') commId = 0;

	var code = 'yetenek.setLed(' + commId + ');\n'
	return code;
}

Blockly.Arduino.y12_mb_rgb_color = function(){
	var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var white = Blockly.Arduino.valueToCode(this, 'WHITE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHT', Blockly.Arduino.ORDER_ATOMIC) || '255';
	var code = 'yetenek.setRGBWColor(' + red + ', '+ green +', '+ blue +', '+ white +', '+brightness+');\n';
	return code;
}

Blockly.Arduino.y12_mb_clear_screen = function(){	
	var code = 'yetenek.clearScreen();\n';
	return code;
}

Blockly.Arduino.y12_mb_show_screen = function(){	
	var code = 'yetenek.showScreen();\n';
	return code;
}

Blockly.Arduino.y12_mb_screen_text = function(){	
	var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
	var size = this.getFieldValue('SIZE');
	var color = this.getFieldValue('COLOR');
	var xPos = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '-1';
	var yPos = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '-1';
	var code = 'yetenek.setScreenText('+text+', '+size+', '+color+', '+xPos+', '+yPos+');\n';
	return code;
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

Blockly.Arduino.y12_get_air_temperature = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getAirTemperature(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_air_humidity = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getAirHumidity(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_air_pressure = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getAirPressure(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_altitude = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getAltitude(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_mic_db = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getMicrophoneFrequency(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_mic_hz = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getMicrophoneAmplitude(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_co2 = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getCO2(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_tvoc = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getTVOC(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_H2 = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getH2(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_ethanol = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getEthanol(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}



Blockly.Arduino.y12_get_distance = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getDistance(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_uva = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getUVA(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_uvb = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getUVB(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_uv_index = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getUVIndex(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_color_red = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getColorRed(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_color_green = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getColorGreen(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_color_blue = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getColorBlue(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_color_temp = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getColorTemp(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_color_lux = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getColorLux(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Arduino.y12_get_ir = function(){
	var addrValue = this.getFieldValue('ADDR');
	var addr = addrValue.split('_')[1];

	var code = 'yetenek.getIRSensor(' + addr + ')'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}