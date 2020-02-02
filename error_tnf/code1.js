gdjs.IntroCutscene_47TutorialCode = {};
gdjs.IntroCutscene_47TutorialCode.GDBGObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDBGObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDnameObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDblackObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDblackObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDvObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDvObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDhObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDhObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDBugObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDBugObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDflashObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1= [];
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects2= [];
gdjs.IntroCutscene_47TutorialCode.GDbgObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDbgObjects2= [];
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1= [];
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects2= [];

gdjs.IntroCutscene_47TutorialCode.conditionTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition5IsTrue_0 = {val:false};
gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_1 = {val:false};
gdjs.IntroCutscene_47TutorialCode.condition5IsTrue_1 = {val:false};


gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.IntroCutscene_47TutorialCode.GDvObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.IntroCutscene_47TutorialCode.GDhObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects = Hashtable.newFrom({"code1": gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1});gdjs.IntroCutscene_47TutorialCode.eventsList0x74da14 = function(runtimeScene) {

{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(1);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}}

}


}; //End of gdjs.IntroCutscene_47TutorialCode.eventsList0x74da14
gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects = Hashtable.newFrom({"code1": gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.IntroCutscene_47TutorialCode.GDnameObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs.IntroCutscene_47TutorialCode.GDBugObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.IntroCutscene_47TutorialCode.GDnameObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects = Hashtable.newFrom({"code1": gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.IntroCutscene_47TutorialCode.GDnameObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDInvisBugObjects1Objects = Hashtable.newFrom({"InvisBug": gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.IntroCutscene_47TutorialCode.GDnameObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1});gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDInvisBugObjects1Objects = Hashtable.newFrom({"InvisBug": gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1});gdjs.IntroCutscene_47TutorialCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.createFrom(runtimeScene.getObjects("BG"));
gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.createFrom(runtimeScene.getObjects("Bug"));
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.createFrom(runtimeScene.getObjects("InvisBug"));
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Piano-strings-intro-outro.mp3", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBGObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBGObjects1[i].getBehavior("Tween").addObjectOpacityTween("fadeinbg", 255, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i].resetTimer("dramacounter");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween("slidein", 100, "easeInQuad", 10000, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBugObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setScaleX(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setScaleY(0);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i].timerElapsedTime("dramacounter", 9) ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true && gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val && gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.createFrom(runtimeScene.getObjects("BG"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1 */
gdjs.IntroCutscene_47TutorialCode.GDblackObjects1.createFrom(runtimeScene.getObjects("black"));
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBGObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDblackObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i].timerElapsedTime("dramacounter", 11) ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true && gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val && gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("Tween").addObjectPositionYTween("slidein", 628, "easeInOutQuad", 1000, false);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 16;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(17);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 15;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("That’s right! With [b]space[/b] or [b]return[/b]!");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(16);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 14;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Are you broken? Maybe if I get closer, I can fix you.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(15);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 13;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.createFrom(runtimeScene.getObjects("Bug"));
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Ack! S-stay back!");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(14);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Electro-session-ambient-electronic-lounge-music.mp3", true, 80, 1);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBugObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 12;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Over here!");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(13);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 11;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Oh, I hear something! Maybe there’s someone else?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("I wonder if I can fix it.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(11);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("...but it seems to be broken.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(10);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("It looks like this was meant to be some sort of game...");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(9);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("What kind of a world is this?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(8);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Nothing seems to be working like it should.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(7);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("This little box thing says \"name.\" Is that right? Am I \"name\"?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(6);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("who... am I…?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("What is this place?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Is anyone out there?");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{


{
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setPosition((( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length === 0 ) ? 0 :gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[0].getPointX("")) - (gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length === 0 ) ? 0 :gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[0].getPointY("")) - 128);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1[i].setPosition((( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length === 0 ) ? 0 :gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length === 0 ) ? 0 :gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setWrappingWidth((( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length === 0 ) ? 0 :gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[0].getWidth()) * 1.5);
}
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 6;
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.IntroCutscene_47TutorialCode.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].separateFromObjectsList(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].separateFromObjectsList(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDhObjects1Objects, false);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")) == 3 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")).setNumber(4);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Hmm? What’s that!?");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")).setNumber(3);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getBehavior("Tween").addObjectScaleXTween("codeappearx", 0.682, "easeInOutQuad", 400, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getBehavior("Tween").addObjectScaleYTween("codeappeary", 0.682, "easeInOutQuad", 400, false);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Could I... be broken, too?");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")) == 3 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[k] = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = k;}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")) == 4 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[k] = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = k;}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")).setNumber(1);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[k] = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.createFrom(runtimeScene.getObjects("InvisBug"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1 */
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")).setNumber(3);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setAnimationName("active");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.IntroCutscene_47TutorialCode.eventsList0x74da14(runtimeScene);} //End of subevents
}

}


{

gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[k] = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.IntroCutscene_47TutorialCode.condition4IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.createFrom(runtimeScene.getObjects("InvisBug"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1 */
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")).setNumber(4);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].setAnimationName("default");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 8 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(9);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 7 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Maybe it’ll tell me who I’m meant to be.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(8);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 6 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Maybe there’s a reference for me buried in this code.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(7);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 5 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("\"Bug2\" referred to that thing over there.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(6);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 4 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Were they going to get back to me? Did they have a plan for me?");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(5);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 3 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("\"I’ll get back to this later\"? [i]Who[/i] is going to get back to [i]what[/i]?");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(4);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Maybe... I can fix this place where everything feels broken.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(3);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Woah! It’s like I’m editing the fabric of reality itself.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("textc")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")) == 4 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")).setNumber(5);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")) == 3 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Well, only one way to find out! To [b]click[/b] on it!");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")).setNumber(4);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("I have a feeling that it doesn’t belong floating around here like this.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")).setNumber(3);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("I wonder if I can use this? Maybe it’s part of what’s wrong.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.createFrom(runtimeScene.getObjects("Bug"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects, gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDBugObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDBugObjects1 */
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("I really didn’t think that would work...");
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error.wav", false, 100, 1);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.createFrom(runtimeScene.getObjects("code1"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects, gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDcode1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[k] = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = k;}}
}
if (gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1 */
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 0, 0, "easeInQuad", 300, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("Whoa, this stuff radiates… power.");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text3")).setNumber(1);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text2")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text2")).setNumber(2);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.createFrom(runtimeScene.getObjects("InvisBug"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects, gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDInvisBugObjects1Objects, false, runtimeScene, false);
}if ( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length;i<l;++i) {
    if ( !(gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i].getOpacity() == 0) ) {
        gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length = k;}}
}
if (gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1 */
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1[i].setBBText("There’s more? What kind of a world is this?");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("text2")).setNumber(1);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.createFrom(runtimeScene.getObjects("InvisBug"));
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = false;
{
{gdjs.IntroCutscene_47TutorialCode.conditionTrue_1 = gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0;
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_1.val ) {
    gdjs.IntroCutscene_47TutorialCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDnameObjects1Objects, gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val ) {
{
gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.IntroCutscene_47TutorialCode.mapOfGDgdjs_46IntroCutscene_9547TutorialCode_46GDInvisBugObjects1Objects) == 0;
}if ( gdjs.IntroCutscene_47TutorialCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}}
}
}
if (gdjs.IntroCutscene_47TutorialCode.condition3IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1 */
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 255, "easeInCubic", 2500, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].resetTimer("fadecounter");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")).setNumber(1);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].timerElapsedTime("fadecounter", 1) ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}if (gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCutscene_47TutorialCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].returnVariable(gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.IntroCutscene_47TutorialCode.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{

gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = false;
gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].timerElapsedTime("fadecounter", 4) ) {
        gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}if ( gdjs.IntroCutscene_47TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariableNumber(gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i].getVariables().get("exit")) == 2 ) {
        gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val = true;
        gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[k] = gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = k;}}
if (gdjs.IntroCutscene_47TutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


}; //End of gdjs.IntroCutscene_47TutorialCode.eventsList0xb4be0


gdjs.IntroCutscene_47TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCutscene_47TutorialCode.GDBGObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDBGObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDTitleObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDnameObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDnameObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDblackObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDblackObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDDialogueObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDvObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDvObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDhObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDhObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDInvisBugObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDBugObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDBugObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDflashObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDflashObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDdoorObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDcode1Objects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDbgObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDbgObjects2.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects1.length = 0;
gdjs.IntroCutscene_47TutorialCode.GDnameboxObjects2.length = 0;

gdjs.IntroCutscene_47TutorialCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['IntroCutscene_47TutorialCode'] = gdjs.IntroCutscene_47TutorialCode;
