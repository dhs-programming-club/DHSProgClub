gdjs.ClickToBeginCode = {};
gdjs.ClickToBeginCode.GDPressStartObjects1= [];
gdjs.ClickToBeginCode.GDPressStartObjects2= [];

gdjs.ClickToBeginCode.conditionTrue_0 = {val:false};
gdjs.ClickToBeginCode.condition0IsTrue_0 = {val:false};
gdjs.ClickToBeginCode.condition1IsTrue_0 = {val:false};
gdjs.ClickToBeginCode.condition2IsTrue_0 = {val:false};
gdjs.ClickToBeginCode.conditionTrue_1 = {val:false};
gdjs.ClickToBeginCode.condition0IsTrue_1 = {val:false};
gdjs.ClickToBeginCode.condition1IsTrue_1 = {val:false};
gdjs.ClickToBeginCode.condition2IsTrue_1 = {val:false};


gdjs.ClickToBeginCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.ClickToBeginCode.condition0IsTrue_0.val = false;
{
{gdjs.ClickToBeginCode.conditionTrue_1 = gdjs.ClickToBeginCode.condition0IsTrue_0;
gdjs.ClickToBeginCode.condition0IsTrue_1.val = false;
gdjs.ClickToBeginCode.condition1IsTrue_1.val = false;
{
gdjs.ClickToBeginCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.ClickToBeginCode.condition0IsTrue_1.val ) {
    gdjs.ClickToBeginCode.conditionTrue_1.val = true;
}
}
{
gdjs.ClickToBeginCode.condition1IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.ClickToBeginCode.condition1IsTrue_1.val ) {
    gdjs.ClickToBeginCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.ClickToBeginCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "IntroCutscene/Tutorial", true);
}}

}


}; //End of gdjs.ClickToBeginCode.eventsList0xb4be0


gdjs.ClickToBeginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickToBeginCode.GDPressStartObjects1.length = 0;
gdjs.ClickToBeginCode.GDPressStartObjects2.length = 0;

gdjs.ClickToBeginCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['ClickToBeginCode'] = gdjs.ClickToBeginCode;
