/* eslint-disable */


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

// ================================================================================================
// ================================================================================================

Blockly.Blocks['renk_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Renk sensörü")
          .appendField(new Blockly.FieldColour("#ff0000"), "color")
          .appendField("renginde mi?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['renk_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensor_id")
          .appendField("Renk sensörü değeri");
      this.setOutput(true, "String");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['renk_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Yansıyan ışık değeri")
          .appendField(new Blockly.FieldDropdown([["<","<"], ["=","="], [">",">"]]), "operator")
          .appendField("%")
          .appendField(new Blockly.FieldNumber(50, 0, 100), "percent")
          .appendField("mi?");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("Işık sensörü");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['renk_4'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Yansıyan ışık değeri");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['tof_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("mesafe: ")
          .appendField(new Blockly.FieldDropdown([["daha yakın","closer"], ["daha uzak","further"], ["tam olarak","exactly"]]), "NAME")
          .appendField(new Blockly.FieldNumber(10, 0), "value")
          .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inc","inc"], ["%","percent"]]), "unit");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['tof_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("mesafe")
          .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inc","inc"], ["%","percent"]]), "unit")
          .appendField("olarak");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['sound_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Ses şiddeti (dB)");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['sound_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Ses şiddeti (dB)")
          .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["=","="]]), "option")
          .appendField(new Blockly.FieldNumber(0), "value")
          .appendField("mi?");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['sound_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Ses frekansı (hz)")
          .appendField(new Blockly.FieldDropdown([[">",">"], ["<","<"], ["=","="]]), "option")
          .appendField(new Blockly.FieldNumber(0, 0), "NAME")
          .appendField("mi?");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['sound_4'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"]]), "sensorID")
          .appendField("Ses frekansı (hz)");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };