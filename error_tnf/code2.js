gdjs.Level1Code = {};
gdjs.Level1Code.GDcode2Objects1_1final = [];

gdjs.Level1Code.GDcode3Objects1_1final = [];

gdjs.Level1Code.GDvObjects1= [];
gdjs.Level1Code.GDvObjects2= [];
gdjs.Level1Code.GDvObjects3= [];
gdjs.Level1Code.GDhObjects1= [];
gdjs.Level1Code.GDhObjects2= [];
gdjs.Level1Code.GDhObjects3= [];
gdjs.Level1Code.GDnameObjects1= [];
gdjs.Level1Code.GDnameObjects2= [];
gdjs.Level1Code.GDnameObjects3= [];
gdjs.Level1Code.GDcode2Objects1= [];
gdjs.Level1Code.GDcode2Objects2= [];
gdjs.Level1Code.GDcode2Objects3= [];
gdjs.Level1Code.GDDialogueObjects1= [];
gdjs.Level1Code.GDDialogueObjects2= [];
gdjs.Level1Code.GDDialogueObjects3= [];
gdjs.Level1Code.GDflashObjects1= [];
gdjs.Level1Code.GDflashObjects2= [];
gdjs.Level1Code.GDflashObjects3= [];
gdjs.Level1Code.GDBugObjects1= [];
gdjs.Level1Code.GDBugObjects2= [];
gdjs.Level1Code.GDBugObjects3= [];
gdjs.Level1Code.GDdoorObjects1= [];
gdjs.Level1Code.GDdoorObjects2= [];
gdjs.Level1Code.GDdoorObjects3= [];
gdjs.Level1Code.GDcode3Objects1= [];
gdjs.Level1Code.GDcode3Objects2= [];
gdjs.Level1Code.GDcode3Objects3= [];
gdjs.Level1Code.GDnameboxObjects1= [];
gdjs.Level1Code.GDnameboxObjects2= [];
gdjs.Level1Code.GDnameboxObjects3= [];
gdjs.Level1Code.GDbgObjects1= [];
gdjs.Level1Code.GDbgObjects2= [];
gdjs.Level1Code.GDbgObjects3= [];
gdjs.Level1Code.GDcommentObjects1= [];
gdjs.Level1Code.GDcommentObjects2= [];
gdjs.Level1Code.GDcommentObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.condition4IsTrue_0 = {val:false};
gdjs.Level1Code.condition5IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};
gdjs.Level1Code.condition4IsTrue_1 = {val:false};
gdjs.Level1Code.condition5IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.Level1Code.GDvObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.Level1Code.GDhObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level1Code.GDcode2Objects1});gdjs.Level1Code.eventsList0x810384 = function(runtimeScene) {

{

gdjs.Level1Code.GDcode2Objects2.createFrom(gdjs.Level1Code.GDcode2Objects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects2[i].getVariables().get("installed")) == 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects2[k] = gdjs.Level1Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode2Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects2[i].returnVariable(gdjs.Level1Code.GDcode2Objects2[i].getVariables().get("installed")).setNumber(1);
}
}}

}


{

/* Reuse gdjs.Level1Code.GDcode2Objects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 4 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x810384
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode3Objects1Objects = Hashtable.newFrom({"code3": gdjs.Level1Code.GDcode3Objects1});gdjs.Level1Code.eventsList0x810eb4 = function(runtimeScene) {

{

gdjs.Level1Code.GDcode3Objects2.createFrom(gdjs.Level1Code.GDcode3Objects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode3Objects2[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects2[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects2[k] = gdjs.Level1Code.GDcode3Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode3Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects2[i].returnVariable(gdjs.Level1Code.GDcode3Objects2[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Level1Code.GDcode3Objects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects1[k] = gdjs.Level1Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode3Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x810eb4
gdjs.Level1Code.eventsList0x81235c = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDnameObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("teleports")) == 2 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].setOpacity(255);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x81235c
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level1Code.GDnameObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level1Code.GDcode2Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level1Code.GDnameObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode3Objects1Objects = Hashtable.newFrom({"code3": gdjs.Level1Code.GDcode3Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level1Code.GDnameObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs.Level1Code.GDBugObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level1Code.GDnameObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Level1Code.GDdoorObjects1});gdjs.Level1Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Level1Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level1Code.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level1Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.Level1Code.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogueObjects1[i].setWrappingWidth((( gdjs.Level1Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDnameObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameboxObjects1[i].setPosition((( gdjs.Level1Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.Level1Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogueObjects1[i].setPosition((( gdjs.Level1Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDnameObjects1[0].getPointX("")) - (gdjs.Level1Code.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.Level1Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDnameObjects1[0].getPointY("")) - 128);
}
}}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
gdjs.Level1Code.condition4IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
gdjs.Level1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.Level1Code.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level1Code.condition4IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.Level1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode2Objects1 */
gdjs.Level1Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].returnVariable(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")).add(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed"))) - 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level1Code.eventsList0x810384(runtimeScene);} //End of subevents
}

}


{

gdjs.Level1Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));
gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
gdjs.Level1Code.condition4IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects1[k] = gdjs.Level1Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects1.length = k;}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
gdjs.Level1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.Level1Code.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level1Code.condition4IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.Level1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode3Objects1 */
gdjs.Level1Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].returnVariable(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level1Code.eventsList0x810eb4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));
gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level1Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getY() < 415 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 4) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.25);
}}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getY() > 415 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 4) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getY() < 250 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 4) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].setY(628);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("teleports")).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Level1Code.eventsList0x81235c(runtimeScene);} //End of subevents
}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].returnVariable(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode2Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 89, 44, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level1Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcode3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects1[k] = gdjs.Level1Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects1.length = k;}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode3Objects1[i].getOpacity() == 0) ) {
        gdjs.Level1Code.condition3IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects1[k] = gdjs.Level1Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects1.length = k;}}
}
}
if (gdjs.Level1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDcode3Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].returnVariable(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 43, 232, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("text1")) == 0 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogueObjects1[i].setBBText("Wwhhaatt’’ss  ggooiinngg  oonn??");
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}}

}


{

gdjs.Level1Code.GDBugObjects1.createFrom(runtimeScene.getObjects("Bug"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBugObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBugObjects1 */
gdjs.Level1Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));
gdjs.Level1Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level1Code.GDBugObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcode3Objects1[i].setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error.wav", false, 100, 1);
}}

}


{

gdjs.Level1Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level1Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects1[i].getVariables().get("installed")) == 4 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDcode2Objects1[k] = gdjs.Level1Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDcode3Objects1[k] = gdjs.Level1Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Level1Code.GDcode2Objects1.length = 0;

gdjs.Level1Code.GDcode3Objects1.length = 0;


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.GDcode2Objects1_1final.length = 0;gdjs.Level1Code.GDcode3Objects1_1final.length = 0;gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.GDcode2Objects2.createFrom(runtimeScene.getObjects("code2"));
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode2Objects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level1Code.GDcode2Objects2[i].getVariables().get("installed")) == 4) ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDcode2Objects2[k] = gdjs.Level1Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode2Objects2.length = k;if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDcode2Objects2.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDcode2Objects1_1final.indexOf(gdjs.Level1Code.GDcode2Objects2[j]) === -1 )
            gdjs.Level1Code.GDcode2Objects1_1final.push(gdjs.Level1Code.GDcode2Objects2[j]);
    }
}
}
{
gdjs.Level1Code.GDcode3Objects2.createFrom(runtimeScene.getObjects("code3"));
for(var i = 0, k = 0, l = gdjs.Level1Code.GDcode3Objects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDcode3Objects2[i].getVariableNumber(gdjs.Level1Code.GDcode3Objects2[i].getVariables().get("installed")) == 2) ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDcode3Objects2[k] = gdjs.Level1Code.GDcode3Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDcode3Objects2.length = k;if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDcode3Objects2.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDcode3Objects1_1final.indexOf(gdjs.Level1Code.GDcode3Objects2[j]) === -1 )
            gdjs.Level1Code.GDcode3Objects1_1final.push(gdjs.Level1Code.GDcode3Objects2[j]);
    }
}
}
{
gdjs.Level1Code.GDcode2Objects1.createFrom(gdjs.Level1Code.GDcode2Objects1_1final);
gdjs.Level1Code.GDcode3Objects1.createFrom(gdjs.Level1Code.GDcode3Objects1_1final);
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDnameObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDdoorObjects1[i].getOpacity() == 0) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level1Code.condition3IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}}
}
}
if (gdjs.Level1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDdoorObjects1 */
gdjs.Level1Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 255, "easeInCubic", 2500, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].resetTimer("fadecounter");
}
}{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].returnVariable(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 1) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")) == 1 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDdoorObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdoorObjects1[i].returnVariable(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(2);
}
}}

}


{

gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.Level1Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].getVariableNumber(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDnameObjects1[k] = gdjs.Level1Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDnameObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].returnVariable(gdjs.Level1Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level1Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level1Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level1Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level1Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 4) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level1Code.GDdoorObjects1[i].getVariables().get("exit")) == 2 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDdoorObjects1[k] = gdjs.Level1Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDdoorObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}}

}


}; //End of gdjs.Level1Code.eventsList0xb4be0


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDvObjects1.length = 0;
gdjs.Level1Code.GDvObjects2.length = 0;
gdjs.Level1Code.GDvObjects3.length = 0;
gdjs.Level1Code.GDhObjects1.length = 0;
gdjs.Level1Code.GDhObjects2.length = 0;
gdjs.Level1Code.GDhObjects3.length = 0;
gdjs.Level1Code.GDnameObjects1.length = 0;
gdjs.Level1Code.GDnameObjects2.length = 0;
gdjs.Level1Code.GDnameObjects3.length = 0;
gdjs.Level1Code.GDcode2Objects1.length = 0;
gdjs.Level1Code.GDcode2Objects2.length = 0;
gdjs.Level1Code.GDcode2Objects3.length = 0;
gdjs.Level1Code.GDDialogueObjects1.length = 0;
gdjs.Level1Code.GDDialogueObjects2.length = 0;
gdjs.Level1Code.GDDialogueObjects3.length = 0;
gdjs.Level1Code.GDflashObjects1.length = 0;
gdjs.Level1Code.GDflashObjects2.length = 0;
gdjs.Level1Code.GDflashObjects3.length = 0;
gdjs.Level1Code.GDBugObjects1.length = 0;
gdjs.Level1Code.GDBugObjects2.length = 0;
gdjs.Level1Code.GDBugObjects3.length = 0;
gdjs.Level1Code.GDdoorObjects1.length = 0;
gdjs.Level1Code.GDdoorObjects2.length = 0;
gdjs.Level1Code.GDdoorObjects3.length = 0;
gdjs.Level1Code.GDcode3Objects1.length = 0;
gdjs.Level1Code.GDcode3Objects2.length = 0;
gdjs.Level1Code.GDcode3Objects3.length = 0;
gdjs.Level1Code.GDnameboxObjects1.length = 0;
gdjs.Level1Code.GDnameboxObjects2.length = 0;
gdjs.Level1Code.GDnameboxObjects3.length = 0;
gdjs.Level1Code.GDbgObjects1.length = 0;
gdjs.Level1Code.GDbgObjects2.length = 0;
gdjs.Level1Code.GDbgObjects3.length = 0;
gdjs.Level1Code.GDcommentObjects1.length = 0;
gdjs.Level1Code.GDcommentObjects2.length = 0;
gdjs.Level1Code.GDcommentObjects3.length = 0;

gdjs.Level1Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Level1Code'] = gdjs.Level1Code;
