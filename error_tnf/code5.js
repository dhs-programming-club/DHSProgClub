gdjs.Level4Code = {};
gdjs.Level4Code.GDenemy2Objects1_1final = [];

gdjs.Level4Code.GDenemyObjects1_1final = [];

gdjs.Level4Code.GDnameObjects1_1final = [];

gdjs.Level4Code.GDvObjects1= [];
gdjs.Level4Code.GDvObjects2= [];
gdjs.Level4Code.GDvObjects3= [];
gdjs.Level4Code.GDhObjects1= [];
gdjs.Level4Code.GDhObjects2= [];
gdjs.Level4Code.GDhObjects3= [];
gdjs.Level4Code.GDnameObjects1= [];
gdjs.Level4Code.GDnameObjects2= [];
gdjs.Level4Code.GDnameObjects3= [];
gdjs.Level4Code.GDcodekeyObjects1= [];
gdjs.Level4Code.GDcodekeyObjects2= [];
gdjs.Level4Code.GDcodekeyObjects3= [];
gdjs.Level4Code.GDcodeendpointObjects1= [];
gdjs.Level4Code.GDcodeendpointObjects2= [];
gdjs.Level4Code.GDcodeendpointObjects3= [];
gdjs.Level4Code.GDcodedoorObjects1= [];
gdjs.Level4Code.GDcodedoorObjects2= [];
gdjs.Level4Code.GDcodedoorObjects3= [];
gdjs.Level4Code.GDcode2Objects1= [];
gdjs.Level4Code.GDcode2Objects2= [];
gdjs.Level4Code.GDcode2Objects3= [];
gdjs.Level4Code.GDDialogueObjects1= [];
gdjs.Level4Code.GDDialogueObjects2= [];
gdjs.Level4Code.GDDialogueObjects3= [];
gdjs.Level4Code.GDflashObjects1= [];
gdjs.Level4Code.GDflashObjects2= [];
gdjs.Level4Code.GDflashObjects3= [];
gdjs.Level4Code.GDBugRObjects1= [];
gdjs.Level4Code.GDBugRObjects2= [];
gdjs.Level4Code.GDBugRObjects3= [];
gdjs.Level4Code.GDBugObjects1= [];
gdjs.Level4Code.GDBugObjects2= [];
gdjs.Level4Code.GDBugObjects3= [];
gdjs.Level4Code.GDdoorObjects1= [];
gdjs.Level4Code.GDdoorObjects2= [];
gdjs.Level4Code.GDdoorObjects3= [];
gdjs.Level4Code.GDenemy2Objects1= [];
gdjs.Level4Code.GDenemy2Objects2= [];
gdjs.Level4Code.GDenemy2Objects3= [];
gdjs.Level4Code.GDenemyObjects1= [];
gdjs.Level4Code.GDenemyObjects2= [];
gdjs.Level4Code.GDenemyObjects3= [];
gdjs.Level4Code.GDwallminiObjects1= [];
gdjs.Level4Code.GDwallminiObjects2= [];
gdjs.Level4Code.GDwallminiObjects3= [];
gdjs.Level4Code.GDwallObjects1= [];
gdjs.Level4Code.GDwallObjects2= [];
gdjs.Level4Code.GDwallObjects3= [];
gdjs.Level4Code.GDnameboxObjects1= [];
gdjs.Level4Code.GDnameboxObjects2= [];
gdjs.Level4Code.GDnameboxObjects3= [];
gdjs.Level4Code.GDbgObjects1= [];
gdjs.Level4Code.GDbgObjects2= [];
gdjs.Level4Code.GDbgObjects3= [];
gdjs.Level4Code.GDcommentObjects1= [];
gdjs.Level4Code.GDcommentObjects2= [];
gdjs.Level4Code.GDcommentObjects3= [];

gdjs.Level4Code.conditionTrue_0 = {val:false};
gdjs.Level4Code.condition0IsTrue_0 = {val:false};
gdjs.Level4Code.condition1IsTrue_0 = {val:false};
gdjs.Level4Code.condition2IsTrue_0 = {val:false};
gdjs.Level4Code.condition3IsTrue_0 = {val:false};
gdjs.Level4Code.condition4IsTrue_0 = {val:false};
gdjs.Level4Code.conditionTrue_1 = {val:false};
gdjs.Level4Code.condition0IsTrue_1 = {val:false};
gdjs.Level4Code.condition1IsTrue_1 = {val:false};
gdjs.Level4Code.condition2IsTrue_1 = {val:false};
gdjs.Level4Code.condition3IsTrue_1 = {val:false};
gdjs.Level4Code.condition4IsTrue_1 = {val:false};


gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.Level4Code.GDvObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.Level4Code.GDhObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.Level4Code.GDwallObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallminiObjects1Objects = Hashtable.newFrom({"wallmini": gdjs.Level4Code.GDwallminiObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level4Code.GDcode2Objects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodedoorObjects1Objects = Hashtable.newFrom({"codedoor": gdjs.Level4Code.GDcodedoorObjects1});gdjs.Level4Code.eventsList0x833c04 = function(runtimeScene) {

{

gdjs.Level4Code.GDcode2Objects2.createFrom(gdjs.Level4Code.GDcode2Objects1);


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects2[i].getVariables().get("installed")) == 1 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects2[k] = gdjs.Level4Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcode2Objects2 */
{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects2[i].returnVariable(gdjs.Level4Code.GDcode2Objects2[i].getVariables().get("installed")).setNumber(2);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects2[i].setAnimation(1);
}
}}

}


{

/* Reuse gdjs.Level4Code.GDcode2Objects1 */

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].returnVariable(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(4);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].setAnimation(3);
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x833c04
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodekeyObjects1Objects = Hashtable.newFrom({"codekey": gdjs.Level4Code.GDcodekeyObjects1});gdjs.Level4Code.eventsList0x83485c = function(runtimeScene) {

{

gdjs.Level4Code.GDcode2Objects2.createFrom(gdjs.Level4Code.GDcode2Objects1);


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects2[i].getVariables().get("installed")) == 1 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects2[k] = gdjs.Level4Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcode2Objects2 */
{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects2[i].returnVariable(gdjs.Level4Code.GDcode2Objects2[i].getVariables().get("installed")).setNumber(3);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects2[i].setAnimation(2);
}
}}

}


{

/* Reuse gdjs.Level4Code.GDcode2Objects1 */

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].returnVariable(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(4);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].setAnimation(3);
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x83485c
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodeendpointObjects1Objects = Hashtable.newFrom({"codeendpoint": gdjs.Level4Code.GDcodeendpointObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.Level4Code.GDwallObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs.Level4Code.GDBugObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDBugRObjects1Objects = Hashtable.newFrom({"BugR": gdjs.Level4Code.GDBugRObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Level4Code.GDdoorObjects1});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects2Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects2});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.Level4Code.GDenemyObjects2});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects2Objects = Hashtable.newFrom({"name": gdjs.Level4Code.GDnameObjects2});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemy2Objects2Objects = Hashtable.newFrom({"enemy2": gdjs.Level4Code.GDenemy2Objects2});gdjs.Level4Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Level4Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level4Code.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level4Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.Level4Code.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
gdjs.Level4Code.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));
gdjs.Level4Code.GDwallminiObjects1.createFrom(runtimeScene.getObjects("wallmini"));
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDhObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallminiObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Level4Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDDialogueObjects1[i].setWrappingWidth((( gdjs.Level4Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level4Code.GDnameObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameboxObjects1[i].setPosition((( gdjs.Level4Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level4Code.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.Level4Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level4Code.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.Level4Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDDialogueObjects1[i].setPosition((( gdjs.Level4Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level4Code.GDnameObjects1[0].getPointX("")) - (gdjs.Level4Code.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.Level4Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level4Code.GDnameObjects1[0].getPointY("")) - 128);
}
}}

}


{

gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].getVariableNumber(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
gdjs.Level4Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].returnVariable(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].getVariableNumber(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("text1")) == 0 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
gdjs.Level4Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDDialogueObjects1[i].setBBText("I need to find it.");
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].returnVariable(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDcodedoorObjects1.createFrom(runtimeScene.getObjects("codedoor"));
gdjs.Level4Code.GDcodekeyObjects1.createFrom(runtimeScene.getObjects("codekey"));
gdjs.Level4Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level4Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level4Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDdoorObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "eny");
}{for(var i = 0, len = gdjs.Level4Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 252, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 656, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcodekeyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodekeyObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcodedoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodedoorObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level4Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "eny");
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDenemyObjects1[i].getVariableNumber(gdjs.Level4Code.GDenemyObjects1[i].getVariables().get("dir")) == 0 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDenemyObjects1[k] = gdjs.Level4Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDenemyObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDenemyObjects1 */
gdjs.Level4Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));
{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects1[i].returnVariable(gdjs.Level4Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 656, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 252, "linear", 3000, false);
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "eny");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));
{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects1[i].returnVariable(gdjs.Level4Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "eny");
}{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 656, "linear", 3000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDenemy2Objects1[i].getBehavior("Tween").addObjectPositionYTween("slider", 252, "linear", 3000, false);
}
}}

}


{

gdjs.Level4Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcode2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level4Code.condition2IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].returnVariable(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 0, 0, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level4Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level4Code.GDcodedoorObjects1.createFrom(runtimeScene.getObjects("codedoor"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodedoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level4Code.condition2IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcodedoorObjects1 */
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level4Code.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));
{for(var i = 0, len = gdjs.Level4Code.GDcodedoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodedoorObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwallObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDwallObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level4Code.eventsList0x833c04(runtimeScene);} //End of subevents
}

}


{

gdjs.Level4Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level4Code.GDcodekeyObjects1.createFrom(runtimeScene.getObjects("codekey"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodekeyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level4Code.condition2IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDcodekeyObjects1 */
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDcodekeyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodekeyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level4Code.eventsList0x83485c(runtimeScene);} //End of subevents
}

}


{

gdjs.Level4Code.GDcodeendpointObjects1.createFrom(runtimeScene.getObjects("codeendpoint"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDcodeendpointObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
gdjs.Level4Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
/* Reuse gdjs.Level4Code.GDcodeendpointObjects1 */
gdjs.Level4Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level4Code.GDcodeendpointObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodeendpointObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].returnVariable(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(5);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcode2Objects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.Level4Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDdoorObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}}

}


{

gdjs.Level4Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level4Code.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDwallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level4Code.GDcode2Objects1[i].getVariables().get("installed")) == 4 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDcode2Objects1[k] = gdjs.Level4Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDcode2Objects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDnameObjects1 */
/* Reuse gdjs.Level4Code.GDwallObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwallObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDwallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level4Code.GDBugObjects1.createFrom(runtimeScene.getObjects("Bug"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDBugObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDBugObjects1 */
gdjs.Level4Code.GDcodedoorObjects1.createFrom(runtimeScene.getObjects("codedoor"));
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level4Code.GDBugObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcodedoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodedoorObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error.wav", false, 100, 1);
}}

}


{

gdjs.Level4Code.GDBugRObjects1.createFrom(runtimeScene.getObjects("BugR"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDBugRObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDBugRObjects1 */
gdjs.Level4Code.GDcodekeyObjects1.createFrom(runtimeScene.getObjects("codekey"));
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level4Code.GDBugRObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDBugRObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDcodekeyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDcodekeyObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error.wav", false, 100, 1);
}}

}


{

gdjs.Level4Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
gdjs.Level4Code.condition3IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( !(gdjs.Level4Code.GDdoorObjects1[i].getOpacity() == 0) ) {
        gdjs.Level4Code.condition2IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}if ( gdjs.Level4Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level4Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level4Code.condition3IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}}
}
}
if (gdjs.Level4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDdoorObjects1 */
gdjs.Level4Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 255, "easeInCubic", 2500, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDdoorObjects1[i].resetTimer("fadecounter");
}
}{for(var i = 0, len = gdjs.Level4Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDdoorObjects1[i].returnVariable(gdjs.Level4Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level4Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 1) ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level4Code.GDdoorObjects1[i].getVariables().get("exit")) == 1 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDdoorObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level4Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDdoorObjects1[i].returnVariable(gdjs.Level4Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(2);
}
}}

}


{

gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].getVariableNumber(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].returnVariable(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].getVariableNumber(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].returnVariable(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.Level4Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].getVariableNumber(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDnameObjects1[k] = gdjs.Level4Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDnameObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].returnVariable(gdjs.Level4Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{

gdjs.Level4Code.GDenemyObjects1.length = 0;

gdjs.Level4Code.GDenemy2Objects1.length = 0;

gdjs.Level4Code.GDnameObjects1.length = 0;


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.GDenemyObjects1_1final.length = 0;gdjs.Level4Code.GDenemy2Objects1_1final.length = 0;gdjs.Level4Code.GDnameObjects1_1final.length = 0;gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDnameObjects2.createFrom(runtimeScene.getObjects("name"));
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects2Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects2Objects, false, runtimeScene, false);
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDenemyObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDenemyObjects1_1final.indexOf(gdjs.Level4Code.GDenemyObjects2[j]) === -1 )
            gdjs.Level4Code.GDenemyObjects1_1final.push(gdjs.Level4Code.GDenemyObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level4Code.GDnameObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDnameObjects1_1final.indexOf(gdjs.Level4Code.GDnameObjects2[j]) === -1 )
            gdjs.Level4Code.GDnameObjects1_1final.push(gdjs.Level4Code.GDnameObjects2[j]);
    }
}
}
{
gdjs.Level4Code.GDenemy2Objects2.createFrom(runtimeScene.getObjects("enemy2"));
gdjs.Level4Code.GDnameObjects2.createFrom(runtimeScene.getObjects("name"));
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDnameObjects2Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemy2Objects2Objects, false, runtimeScene, false);
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDenemy2Objects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDenemy2Objects1_1final.indexOf(gdjs.Level4Code.GDenemy2Objects2[j]) === -1 )
            gdjs.Level4Code.GDenemy2Objects1_1final.push(gdjs.Level4Code.GDenemy2Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level4Code.GDnameObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDnameObjects1_1final.indexOf(gdjs.Level4Code.GDnameObjects2[j]) === -1 )
            gdjs.Level4Code.GDnameObjects1_1final.push(gdjs.Level4Code.GDnameObjects2[j]);
    }
}
}
{
gdjs.Level4Code.GDenemyObjects1.createFrom(gdjs.Level4Code.GDenemyObjects1_1final);
gdjs.Level4Code.GDenemy2Objects1.createFrom(gdjs.Level4Code.GDenemy2Objects1_1final);
gdjs.Level4Code.GDnameObjects1.createFrom(gdjs.Level4Code.GDnameObjects1_1final);
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameObjects1[i].setPosition(911,628);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level4Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level4Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level4Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 4) ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level4Code.GDdoorObjects1[i].getVariables().get("exit")) == 2 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDdoorObjects1[k] = gdjs.Level4Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDdoorObjects1.length = k;}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", true);
}}

}


}; //End of gdjs.Level4Code.eventsList0xb4be0


gdjs.Level4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level4Code.GDvObjects1.length = 0;
gdjs.Level4Code.GDvObjects2.length = 0;
gdjs.Level4Code.GDvObjects3.length = 0;
gdjs.Level4Code.GDhObjects1.length = 0;
gdjs.Level4Code.GDhObjects2.length = 0;
gdjs.Level4Code.GDhObjects3.length = 0;
gdjs.Level4Code.GDnameObjects1.length = 0;
gdjs.Level4Code.GDnameObjects2.length = 0;
gdjs.Level4Code.GDnameObjects3.length = 0;
gdjs.Level4Code.GDcodekeyObjects1.length = 0;
gdjs.Level4Code.GDcodekeyObjects2.length = 0;
gdjs.Level4Code.GDcodekeyObjects3.length = 0;
gdjs.Level4Code.GDcodeendpointObjects1.length = 0;
gdjs.Level4Code.GDcodeendpointObjects2.length = 0;
gdjs.Level4Code.GDcodeendpointObjects3.length = 0;
gdjs.Level4Code.GDcodedoorObjects1.length = 0;
gdjs.Level4Code.GDcodedoorObjects2.length = 0;
gdjs.Level4Code.GDcodedoorObjects3.length = 0;
gdjs.Level4Code.GDcode2Objects1.length = 0;
gdjs.Level4Code.GDcode2Objects2.length = 0;
gdjs.Level4Code.GDcode2Objects3.length = 0;
gdjs.Level4Code.GDDialogueObjects1.length = 0;
gdjs.Level4Code.GDDialogueObjects2.length = 0;
gdjs.Level4Code.GDDialogueObjects3.length = 0;
gdjs.Level4Code.GDflashObjects1.length = 0;
gdjs.Level4Code.GDflashObjects2.length = 0;
gdjs.Level4Code.GDflashObjects3.length = 0;
gdjs.Level4Code.GDBugRObjects1.length = 0;
gdjs.Level4Code.GDBugRObjects2.length = 0;
gdjs.Level4Code.GDBugRObjects3.length = 0;
gdjs.Level4Code.GDBugObjects1.length = 0;
gdjs.Level4Code.GDBugObjects2.length = 0;
gdjs.Level4Code.GDBugObjects3.length = 0;
gdjs.Level4Code.GDdoorObjects1.length = 0;
gdjs.Level4Code.GDdoorObjects2.length = 0;
gdjs.Level4Code.GDdoorObjects3.length = 0;
gdjs.Level4Code.GDenemy2Objects1.length = 0;
gdjs.Level4Code.GDenemy2Objects2.length = 0;
gdjs.Level4Code.GDenemy2Objects3.length = 0;
gdjs.Level4Code.GDenemyObjects1.length = 0;
gdjs.Level4Code.GDenemyObjects2.length = 0;
gdjs.Level4Code.GDenemyObjects3.length = 0;
gdjs.Level4Code.GDwallminiObjects1.length = 0;
gdjs.Level4Code.GDwallminiObjects2.length = 0;
gdjs.Level4Code.GDwallminiObjects3.length = 0;
gdjs.Level4Code.GDwallObjects1.length = 0;
gdjs.Level4Code.GDwallObjects2.length = 0;
gdjs.Level4Code.GDwallObjects3.length = 0;
gdjs.Level4Code.GDnameboxObjects1.length = 0;
gdjs.Level4Code.GDnameboxObjects2.length = 0;
gdjs.Level4Code.GDnameboxObjects3.length = 0;
gdjs.Level4Code.GDbgObjects1.length = 0;
gdjs.Level4Code.GDbgObjects2.length = 0;
gdjs.Level4Code.GDbgObjects3.length = 0;
gdjs.Level4Code.GDcommentObjects1.length = 0;
gdjs.Level4Code.GDcommentObjects2.length = 0;
gdjs.Level4Code.GDcommentObjects3.length = 0;

gdjs.Level4Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Level4Code'] = gdjs.Level4Code;
