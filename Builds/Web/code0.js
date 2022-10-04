gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects3= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects1= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects2= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects3= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects1= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects2= [];
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects3= [];

gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.conditionTrue_0 = {val:false};
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0 = {val:false};
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0 = {val:false};
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition2IsTrue_0 = {val:false};


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val ) {
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Up");
}
}{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].addForce(0, -(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), 0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("Up");
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val ) {
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Down");
}
}{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("Down");
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val ) {
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Left");
}
}{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].addForce(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), 0, 0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("Left");
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val ) {
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1[i].setAnimationName("Right");
}
}{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1[i].addForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("Right");
}}

}


};gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList1 = function(runtimeScene) {

{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "Up";
}if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Idle_Up");
}
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "Down";
}if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Idle_Down");
}
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "Left";
}if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2[i].setAnimationName("Idle_Left");
}
}}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "Right";
}if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1[i].setAnimationName("Idle_Right");
}
}}

}


};gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_46_951053_951086_951074_951072_951103_9532_951089_951094_951077_951085_951072Code_46GDBrickWallObjects1Objects = Hashtable.newFrom({"BrickWall": gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects1});
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList2 = function(runtimeScene) {

{



}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = false;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = false;
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition0IsTrue_0.val ) {
{
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
}}
if (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BrickWall"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1);
{for(var i = 0, len = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length ;i < len;++i) {
    gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1[i].separateFromObjectsList(gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_46_951053_951086_951074_951072_951103_9532_951089_951094_951077_951085_951072Code_46GDBrickWallObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Masha_Mininskaya"), gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length !== 0 ? gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1[0] : null), true, "", 0);
}}

}


};

gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects1.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects2.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDMasha_95MininskayaObjects3.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects1.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects2.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDCafel_952x2_95cleanObjects3.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects1.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects2.length = 0;
gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.GDBrickWallObjects3.length = 0;

gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList2(runtimeScene);
return;

}

gdjs['_1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1053_1086_1074_1072_1103_32_1089_1094_1077_1085_1072Code;
