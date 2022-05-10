/* eslint-disable */

// ANA KART

Blockly.Blocks['base_start'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("BAŞLA");
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['base_loop'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("DÖNGÜ");
		this.appendStatementInput("LOOP")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['variables_type'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("degisken"), "VAR")
			.appendField(" değişkeninin türü ")
			.appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["String","String"]]), "TYPE")
			.appendField("olsun.");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.Blocks.variables.HUE);
		this.setTooltip("Değişkenin türünü belirle.");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_init'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("YETENEK Kitini Başlat")
			.appendField(new Blockly.FieldDropdown([["I2C","I2C"], ["MODBUS","MODBUS"]]), "COMM");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_buzzer'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki buzzerı")
			.appendField(new Blockly.FieldDropdown([["Aç","1"], ["Kapat","0"]]), "COMM");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_temperature'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart sıcaklık sensörü değeri")
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_button'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki ")
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "COMM")
			.appendField(" numaralı butonun değeri")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_led'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki LED'i ")
			.appendField(new Blockly.FieldDropdown([["Aç","1"], ["Kapat","0"]]), "COMM");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_rgb_color'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki RGB LED rengini: kırmızı")
		this.appendValueInput("RED")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("yeşil");
		this.appendValueInput("GREEN")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("mavi");
		this.appendValueInput("BLUE")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("beyaz");
		this.appendValueInput("WHITE")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("parlaklık");
		this.appendValueInput("BRIGHT")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("yap (0-255)");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_clear_screen'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki ekranın önbelleğini sil")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_show_screen'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki ekrana önbellektekileri yazdır")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_screen_new_line'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki ekranda yeni satıra geç")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_mb_screen_text'] = {
	init: function() {
		
		this.appendDummyInput()
			.appendField("Ana kart üzerindeki ekranın önbelleğine")
		
		this.appendValueInput("TEXT")
			.setCheck(null);
		
		this.appendDummyInput()
			.appendField("metnini")
			.appendField(new Blockly.FieldDropdown([["küçük","1"], ["orta","2"], ["büyük","3"]]), "SIZE")
			.appendField("boyutta")
			.appendField(new Blockly.FieldDropdown([["beyaz","1"], ["mavi","2"]]), "COLOR")
			.appendField("renginde X:")
		
		this.appendValueInput("X")
			.setCheck(null);

		this.appendDummyInput()
			.appendField(" Y:")

		this.appendValueInput("Y")
			.setCheck(null);

		this.appendDummyInput()
			.appendField("kordinatına yaz")

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


// IO Kart

Blockly.Blocks['y12_get_digital_io'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli IO kartının")
			.appendField(new Blockly.FieldDropdown([["1","PIN_1"], ["2","PIN_2"], ["3","PIN_3"], ["4","PIN_4"], ["5","PIN_5"], ["6","PIN_6"], ["7","PIN_7"], ["8","PIN_8"]]), "PIN")
			.appendField("numaralı dijital pininin değeri");
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_set_digital_io'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli IO kartının")
			.appendField(new Blockly.FieldDropdown([["1","PIN_1"], ["2","PIN_2"], ["3","PIN_3"], ["4","PIN_4"], ["5","PIN_5"], ["6","PIN_6"], ["7","PIN_7"], ["8","PIN_8"]]), "PIN")
			.appendField("numaralı dijital pininin değerini");
		this.appendValueInput("VALUE")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("yap");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_adc'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli IO kartının")
			.appendField(new Blockly.FieldDropdown([["1","PIN_1"], ["2","PIN_2"], ["3","PIN_3"], ["4","PIN_4"]]), "PIN")
			.appendField("numaralı analog pininin değeri");
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_adc_voltage'] = {
	init: function() {
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
		.appendField("renkli IO kartının")
		.appendField(new Blockly.FieldDropdown([["1","PIN_1"], ["2","PIN_2"], ["3","PIN_3"], ["4","PIN_4"]]), "PIN")
		.appendField("numaralı analog pininin voltaj değeri");
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(230);
	this.setTooltip("");
	this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_io_addr_change'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli IO kartının rengini")
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "NEWADDR")
			.appendField("yap")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


// Cevresel Olcum Sensoru

Blockly.Blocks['y12_get_air_temperature'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan hava sıcaklığını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_air_humidity'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan hava nem seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_air_pressure'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan açık hava basıncını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_set_sea_level'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli probun deniz seviyesinde hava basıncı")
		this.appendValueInput("HBAR")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("hBar'dır")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_altitude'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan deniz seviyesinden yüksekliği oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_mic_db'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan ses seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_mic_hz'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan ses frekansını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_co2'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan CO2 seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_tvoc'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan TVOC seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_H2'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan H2 seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_ethanol'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan ethanol seviyesini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_air_addr_change'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probunun rengini")
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "NEWADDR")
			.appendField("yap")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


// Optik Sensor

Blockly.Blocks['y12_get_distance'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan uzaklığı oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_uva'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan UV A değerini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_uvb'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan UV B değerini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_uv_index'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan UV indeksini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_color_red'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan kırmızı renginin yansımasını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_color_green'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan yeşil renginin yansımasını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_color_blue'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan mavi renginin yansımasını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_color_temp'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan renk sıcaklığını oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_color_lux'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan ışık şiddetini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_get_ir'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probunun karşısında cisim algılandı mı?")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_optic_addr_change'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probunun rengini")
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "NEWADDR")
			.appendField("yap")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};


// Sicaklik Probu

Blockly.Blocks['y12_temp_temp'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan sıcaklık değeri oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_temp_addr_change'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probunun rengini")
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "NEWADDR")
			.appendField("yap")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

// Ivme Sensoru

Blockly.Blocks['y12_imu_accel'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan")
			.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["Z","Z"]]), "AXIS")
			.appendField("eksenindeki doğrusal ivme değerini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_imu_gyro'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan")
			.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["Z","Z"]]), "AXIS")
			.appendField("eksenindeki açısal hız değerini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_imu_mag'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probundan")
			.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["Z","Z"]]), "AXIS")
			.appendField("eksenindeki manyetik alan değerini oku")
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['y12_imu_addr_change'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "ADDR")
			.appendField("renkli sensor probunun rengini")
			.appendField(new Blockly.FieldDropdown([["Yeşil","ADDR_1"], ["Mavi","ADDR_2"], ["Turuncu","ADDR_3"], ["Sarı","ADDR_4"], ["Turkuaz","ADDR_5"], ["Mor","ADDR_6"]]), "NEWADDR")
			.appendField("yap")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};