gdjs.Level2Code = {};
gdjs.Level2Code.GDenemy2Objects1_1final = [];

gdjs.Level2Code.GDenemyObjects1_1final = [];

gdjs.Level2Code.GDnameObjects1_1final = [];

gdjs.Level2Code.GDvObjects1= [];
gdjs.Level2Code.GDvObjects2= [];
gdjs.Level2Code.GDvObjects3= [];
gdjs.Level2Code.GDhObjects1= [];
gdjs.Level2Code.GDhObjects2= [];
gdjs.Level2Code.GDhObjects3= [];
gdjs.Level2Code.GDnameObjects1= [];
gdjs.Level2Code.GDnameObjects2= [];
gdjs.Level2Code.GDnameObjects3= [];
gdjs.Level2Code.GDDialogueObjects1= [];
gdjs.Level2Code.GDDialogueObjects2= [];
gdjs.Level2Code.GDDialogueObjects3= [];
gdjs.Level2Code.GDflashObjects1= [];
gdjs.Level2Code.GDflashObjects2= [];
gdjs.Level2Code.GDflashObjects3= [];
gdjs.Level2Code.GDBugObjects1= [];
gdjs.Level2Code.GDBugObjects2= [];
gdjs.Level2Code.GDBugObjects3= [];
gdjs.Level2Code.GDdoorObjects1= [];
gdjs.Level2Code.GDdoorObjects2= [];
gdjs.Level2Code.GDdoorObjects3= [];
gdjs.Level2Code.GDcode4Objects1= [];
gdjs.Level2Code.GDcode4Objects2= [];
gdjs.Level2Code.GDcode4Objects3= [];
gdjs.Level2Code.GDenemy2Objects1= [];
gdjs.Level2Code.GDenemy2Objects2= [];
gdjs.Level2Code.GDenemy2Objects3= [];
gdjs.Level2Code.GDenemyObjects1= [];
gdjs.Level2Code.GDenemyObjects2= [];
gdjs.Level2Code.GDenemyObjects3= [];
gdjs.Level2Code.GDwallObjects1= [];
gdjs.Level2Code.GDwallObjects2= [];
gdjs.Level2Code.GDwallObjects3= [];
gdjs.Level2Code.GDnameboxObjects1= [];
gdjs.Level2Code.GDnameboxObjects2= [];
gdjs.Level2Code.GDnameboxObjects3= [];
gdjs.Level2Code.GDbgObjects1= [];
gdjs.Level2Code.GDbgObjects2= [];
gdjs.Level2Code.GDbgObjects3= [];
gdjs.Level2Code.GDcommentObjects1= [];
gdjs.Level2Code.GDcommentObjects2= [];
gdjs.Level2Code.GDcommentObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.condition4IsTrue_0 = {val:false};
gdjs.Level2Code.condition5IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};
gdjs.Level2Code.condition4IsTrue_1 = {val:false};
gdjs.Level2Code.condition5IsTrue_1 = {val:false};


gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.Level2Code.GDvObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.Level2Code.GDhObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.Level2Code.GDwallObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcode4Objects1Objects = Hashtable.newFrom({"code4": gdjs.Level2Code.GDcode4Objects1});gdjs.Level2Code.eventsList0x81b62c = function(runtimeScene) {

{

gdjs.Level2Code.GDcode4Objects2.createFrom(gdjs.Level2Code.GDcode4Objects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDcode4Objects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDcode4Objects2[i].getVariableNumber(gdjs.Level2Code.GDcode4Objects2[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDcode4Objects2[k] = gdjs.Level2Code.GDcode4Objects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDcode4Objects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDcode4Objects2 */
{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects2[i].returnVariable(gdjs.Level2Code.GDcode4Objects2[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects2[i].setAnimation(0);
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "en", 1);
}}

}


{

/* Reuse gdjs.Level2Code.GDcode4Objects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDcode4Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDcode4Objects1[i].getVariableNumber(gdjs.Level2Code.GDcode4Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDcode4Objects1[k] = gdjs.Level2Code.GDcode4Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDcode4Objects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDcode4Objects1 */
{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].setAnimation(1);
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "en", 0.1);
}}

}


}; //End of gdjs.Level2Code.eventsList0x81b62c
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level2Code.GDnameObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Level2Code.GDdoorObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level2Code.GDnameObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcode4Objects1Objects = Hashtable.newFrom({"code4": gdjs.Level2Code.GDcode4Objects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects2Objects = Hashtable.newFrom({"name": gdjs.Level2Code.GDnameObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects2Objects = Hashtable.newFrom({"name": gdjs.Level2Code.GDnameObjects2});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemy2Objects2Objects = Hashtable.newFrom({"enemy2": gdjs.Level2Code.GDenemy2Objects2});gdjs.Level2Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level2Code.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level2Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.Level2Code.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
gdjs.Level2Code.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));
{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDhObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDwallObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setWrappingWidth((( gdjs.Level2Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDnameObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameboxObjects1[i].setPosition((( gdjs.Level2Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.Level2Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setPosition((( gdjs.Level2Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDnameObjects1[0].getPointX("")) - (gdjs.Level2Code.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.Level2Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDnameObjects1[0].getPointY("")) - 128);
}
}}

}


{

gdjs.Level2Code.GDcode4Objects1.createFrom(runtimeScene.getObjects("code4"));
gdjs.Level2Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
gdjs.Level2Code.condition3IsTrue_0.val = false;
gdjs.Level2Code.condition4IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcode4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDcode4Objects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDcode4Objects1[i].getVariableNumber(gdjs.Level2Code.GDcode4Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDcode4Objects1[k] = gdjs.Level2Code.GDcode4Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDcode4Objects1.length = k;}if ( gdjs.Level2Code.condition2IsTrue_0.val ) {
{
gdjs.Level2Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.Level2Code.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level2Code.condition4IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.Level2Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDcode4Objects1 */
gdjs.Level2Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level2Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].returnVariable(gdjs.Level2Code.GDcode4Objects1[i].getVariables().get("installed")).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level2Code.eventsList0x81b62c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDcode4Objects1.createFrom(runtimeScene.getObjects("code4"));
gdjs.Level2Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level2Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));
gdjs.Level2Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 809, "linear", 3000, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "en1x");
}{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionXTween("slider2", 1216, "linear", 250 / gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "en"), false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].resetTimer("x");
}
}}

}


{

gdjs.Level2Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "en1x");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDenemyObjects1[i].getVariableNumber(gdjs.Level2Code.GDenemyObjects1[i].getVariables().get("dir")) == 0 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDenemyObjects1[k] = gdjs.Level2Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDenemyObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 427, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].returnVariable(gdjs.Level2Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(1);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "en1x");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 809, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].returnVariable(gdjs.Level2Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "en1x");
}}

}


{

gdjs.Level2Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDenemy2Objects1[i].timerElapsedTime("x", 0.25) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDenemy2Objects1[k] = gdjs.Level2Code.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDenemy2Objects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDenemy2Objects1[i].getVariableNumber(gdjs.Level2Code.GDenemy2Objects1[i].getVariables().get("dir")) == 0 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDenemy2Objects1[k] = gdjs.Level2Code.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDenemy2Objects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 884, "linear", 250 / gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "en"), false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].returnVariable(gdjs.Level2Code.GDenemy2Objects1[i].getVariables().get("dir")).setNumber(1);
}
}}

}


{

gdjs.Level2Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDenemy2Objects1[i].timerElapsedTime("x", 0.5) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDenemy2Objects1[k] = gdjs.Level2Code.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDenemy2Objects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 1216, "linear", 250 / gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "en"), false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].returnVariable(gdjs.Level2Code.GDenemy2Objects1[i].getVariables().get("dir")).setNumber(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemy2Objects1[i].resetTimer("x");
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")) == 2 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(3);
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setBBText("I better stay away and stick to the ones that I can understand.");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")) == 0 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setBBText("I don’t even know where to begin trying to fix these errors.");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}}

}


{

gdjs.Level2Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDdoorObjects1 */
gdjs.Level2Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 255, "easeInCubic", 2500, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDdoorObjects1[i].resetTimer("fadecounter");
}
}{for(var i = 0, len = gdjs.Level2Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDdoorObjects1[i].returnVariable(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level2Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 1) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")) == 1 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDdoorObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level2Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDdoorObjects1[i].returnVariable(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(2);
}
}}

}


{

gdjs.Level2Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 4) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level2Code.GDdoorObjects1[i].getVariables().get("exit")) == 2 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDdoorObjects1[k] = gdjs.Level2Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDdoorObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", true);
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text2")) == 1 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text2")).setNumber(0);
}
}}

}


{

gdjs.Level2Code.GDcode4Objects1.createFrom(runtimeScene.getObjects("code4"));
gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDcode4Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDcode4Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDcode4Objects1[i].getVariableNumber(gdjs.Level2Code.GDcode4Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDcode4Objects1[k] = gdjs.Level2Code.GDcode4Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDcode4Objects1.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDcode4Objects1 */
{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].returnVariable(gdjs.Level2Code.GDcode4Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 90, 50, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.Level2Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].getVariableNumber(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDnameObjects1[k] = gdjs.Level2Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDnameObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level2Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level2Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level2Code.GDenemyObjects1.length = 0;

gdjs.Level2Code.GDenemy2Objects1.length = 0;

gdjs.Level2Code.GDnameObjects1.length = 0;


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.GDenemyObjects1_1final.length = 0;gdjs.Level2Code.GDenemy2Objects1_1final.length = 0;gdjs.Level2Code.GDnameObjects1_1final.length = 0;gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level2Code.GDnameObjects2.createFrom(runtimeScene.getObjects("name"));
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects2Objects, false, runtimeScene, false);
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDenemyObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDenemyObjects1_1final.indexOf(gdjs.Level2Code.GDenemyObjects2[j]) === -1 )
            gdjs.Level2Code.GDenemyObjects1_1final.push(gdjs.Level2Code.GDenemyObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level2Code.GDnameObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDnameObjects1_1final.indexOf(gdjs.Level2Code.GDnameObjects2[j]) === -1 )
            gdjs.Level2Code.GDnameObjects1_1final.push(gdjs.Level2Code.GDnameObjects2[j]);
    }
}
}
{
gdjs.Level2Code.GDenemy2Objects2.createFrom(runtimeScene.getObjects("enemy2"));
gdjs.Level2Code.GDnameObjects2.createFrom(runtimeScene.getObjects("name"));
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDnameObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemy2Objects2Objects, false, runtimeScene, false);
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDenemy2Objects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDenemy2Objects1_1final.indexOf(gdjs.Level2Code.GDenemy2Objects2[j]) === -1 )
            gdjs.Level2Code.GDenemy2Objects1_1final.push(gdjs.Level2Code.GDenemy2Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level2Code.GDnameObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDnameObjects1_1final.indexOf(gdjs.Level2Code.GDnameObjects2[j]) === -1 )
            gdjs.Level2Code.GDnameObjects1_1final.push(gdjs.Level2Code.GDnameObjects2[j]);
    }
}
}
{
gdjs.Level2Code.GDenemyObjects1.createFrom(gdjs.Level2Code.GDenemyObjects1_1final);
gdjs.Level2Code.GDenemy2Objects1.createFrom(gdjs.Level2Code.GDenemy2Objects1_1final);
gdjs.Level2Code.GDnameObjects1.createFrom(gdjs.Level2Code.GDnameObjects1_1final);
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level2Code.GDcode4Objects1.createFrom(runtimeScene.getObjects("code4"));
/* Reuse gdjs.Level2Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].setPosition(911,628);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level2Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDialogueObjects1[i].setBBText("Ow...");
}
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDnameObjects1[i].returnVariable(gdjs.Level2Code.GDnameObjects1[i].getVariables().get("text2")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDcode4Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDcode4Objects1[i].setOpacity(255);
}
}}

}


}; //End of gdjs.Level2Code.eventsList0xb4be0


gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDvObjects1.length = 0;
gdjs.Level2Code.GDvObjects2.length = 0;
gdjs.Level2Code.GDvObjects3.length = 0;
gdjs.Level2Code.GDhObjects1.length = 0;
gdjs.Level2Code.GDhObjects2.length = 0;
gdjs.Level2Code.GDhObjects3.length = 0;
gdjs.Level2Code.GDnameObjects1.length = 0;
gdjs.Level2Code.GDnameObjects2.length = 0;
gdjs.Level2Code.GDnameObjects3.length = 0;
gdjs.Level2Code.GDDialogueObjects1.length = 0;
gdjs.Level2Code.GDDialogueObjects2.length = 0;
gdjs.Level2Code.GDDialogueObjects3.length = 0;
gdjs.Level2Code.GDflashObjects1.length = 0;
gdjs.Level2Code.GDflashObjects2.length = 0;
gdjs.Level2Code.GDflashObjects3.length = 0;
gdjs.Level2Code.GDBugObjects1.length = 0;
gdjs.Level2Code.GDBugObjects2.length = 0;
gdjs.Level2Code.GDBugObjects3.length = 0;
gdjs.Level2Code.GDdoorObjects1.length = 0;
gdjs.Level2Code.GDdoorObjects2.length = 0;
gdjs.Level2Code.GDdoorObjects3.length = 0;
gdjs.Level2Code.GDcode4Objects1.length = 0;
gdjs.Level2Code.GDcode4Objects2.length = 0;
gdjs.Level2Code.GDcode4Objects3.length = 0;
gdjs.Level2Code.GDenemy2Objects1.length = 0;
gdjs.Level2Code.GDenemy2Objects2.length = 0;
gdjs.Level2Code.GDenemy2Objects3.length = 0;
gdjs.Level2Code.GDenemyObjects1.length = 0;
gdjs.Level2Code.GDenemyObjects2.length = 0;
gdjs.Level2Code.GDenemyObjects3.length = 0;
gdjs.Level2Code.GDwallObjects1.length = 0;
gdjs.Level2Code.GDwallObjects2.length = 0;
gdjs.Level2Code.GDwallObjects3.length = 0;
gdjs.Level2Code.GDnameboxObjects1.length = 0;
gdjs.Level2Code.GDnameboxObjects2.length = 0;
gdjs.Level2Code.GDnameboxObjects3.length = 0;
gdjs.Level2Code.GDbgObjects1.length = 0;
gdjs.Level2Code.GDbgObjects2.length = 0;
gdjs.Level2Code.GDbgObjects3.length = 0;
gdjs.Level2Code.GDcommentObjects1.length = 0;
gdjs.Level2Code.GDcommentObjects2.length = 0;
gdjs.Level2Code.GDcommentObjects3.length = 0;

gdjs.Level2Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Level2Code'] = gdjs.Level2Code;
