gdjs.Level3Code = {};
gdjs.Level3Code.GDvObjects1= [];
gdjs.Level3Code.GDvObjects2= [];
gdjs.Level3Code.GDvObjects3= [];
gdjs.Level3Code.GDhObjects1= [];
gdjs.Level3Code.GDhObjects2= [];
gdjs.Level3Code.GDhObjects3= [];
gdjs.Level3Code.GDnameObjects1= [];
gdjs.Level3Code.GDnameObjects2= [];
gdjs.Level3Code.GDnameObjects3= [];
gdjs.Level3Code.GDcode2Objects1= [];
gdjs.Level3Code.GDcode2Objects2= [];
gdjs.Level3Code.GDcode2Objects3= [];
gdjs.Level3Code.GDDialogueObjects1= [];
gdjs.Level3Code.GDDialogueObjects2= [];
gdjs.Level3Code.GDDialogueObjects3= [];
gdjs.Level3Code.GDflashObjects1= [];
gdjs.Level3Code.GDflashObjects2= [];
gdjs.Level3Code.GDflashObjects3= [];
gdjs.Level3Code.GDBugObjects1= [];
gdjs.Level3Code.GDBugObjects2= [];
gdjs.Level3Code.GDBugObjects3= [];
gdjs.Level3Code.GDdoorObjects1= [];
gdjs.Level3Code.GDdoorObjects2= [];
gdjs.Level3Code.GDdoorObjects3= [];
gdjs.Level3Code.GDwall2Objects1= [];
gdjs.Level3Code.GDwall2Objects2= [];
gdjs.Level3Code.GDwall2Objects3= [];
gdjs.Level3Code.GDenemyObjects1= [];
gdjs.Level3Code.GDenemyObjects2= [];
gdjs.Level3Code.GDenemyObjects3= [];
gdjs.Level3Code.GDwall1Objects1= [];
gdjs.Level3Code.GDwall1Objects2= [];
gdjs.Level3Code.GDwall1Objects3= [];
gdjs.Level3Code.GDnameboxObjects1= [];
gdjs.Level3Code.GDnameboxObjects2= [];
gdjs.Level3Code.GDnameboxObjects3= [];
gdjs.Level3Code.GDbgObjects1= [];
gdjs.Level3Code.GDbgObjects2= [];
gdjs.Level3Code.GDbgObjects3= [];
gdjs.Level3Code.GDcommentObjects1= [];
gdjs.Level3Code.GDcommentObjects2= [];
gdjs.Level3Code.GDcommentObjects3= [];

gdjs.Level3Code.conditionTrue_0 = {val:false};
gdjs.Level3Code.condition0IsTrue_0 = {val:false};
gdjs.Level3Code.condition1IsTrue_0 = {val:false};
gdjs.Level3Code.condition2IsTrue_0 = {val:false};
gdjs.Level3Code.condition3IsTrue_0 = {val:false};
gdjs.Level3Code.condition4IsTrue_0 = {val:false};
gdjs.Level3Code.condition5IsTrue_0 = {val:false};
gdjs.Level3Code.conditionTrue_1 = {val:false};
gdjs.Level3Code.condition0IsTrue_1 = {val:false};
gdjs.Level3Code.condition1IsTrue_1 = {val:false};
gdjs.Level3Code.condition2IsTrue_1 = {val:false};
gdjs.Level3Code.condition3IsTrue_1 = {val:false};
gdjs.Level3Code.condition4IsTrue_1 = {val:false};
gdjs.Level3Code.condition5IsTrue_1 = {val:false};


gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.Level3Code.GDvObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.Level3Code.GDhObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDwall2Objects2Objects = Hashtable.newFrom({"wall2": gdjs.Level3Code.GDwall2Objects2});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDwall1Objects1Objects = Hashtable.newFrom({"wall1": gdjs.Level3Code.GDwall1Objects1});gdjs.Level3Code.eventsList0x827024 = function(runtimeScene) {

{

gdjs.Level3Code.GDcode2Objects2.createFrom(runtimeScene.getObjects("code2"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects2.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")) == 4) ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects2[k] = gdjs.Level3Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects2.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDnameObjects2.createFrom(gdjs.Level3Code.GDnameObjects1);

gdjs.Level3Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects2[i].separateFromObjectsList(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDwall2Objects2Objects, false);
}
}}

}


{

gdjs.Level3Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")) == 5) ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects1[k] = gdjs.Level3Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects1.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDnameObjects1 */
gdjs.Level3Code.GDwall1Objects1.createFrom(runtimeScene.getObjects("wall1"));
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDwall1Objects1Objects, false);
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x827024
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level3Code.GDcode2Objects1});gdjs.Level3Code.eventsList0x8277ac = function(runtimeScene) {

{

gdjs.Level3Code.GDcode2Objects2.createFrom(gdjs.Level3Code.GDcode2Objects1);


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")) == 6 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects2[k] = gdjs.Level3Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects2.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDcode2Objects2 */
gdjs.Level3Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
{for(var i = 0, len = gdjs.Level3Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level3Code.GDcode2Objects2[i].returnVariable(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level3Code.GDwall1Objects2[i].setOpacity(255);
}
}}

}


{

gdjs.Level3Code.GDcode2Objects2.createFrom(gdjs.Level3Code.GDcode2Objects1);


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects2[k] = gdjs.Level3Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects2.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.Level3Code.GDcode2Objects2.createFrom(gdjs.Level3Code.GDcode2Objects1);


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects2[k] = gdjs.Level3Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects2.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDdoorObjects2.createFrom(gdjs.Level3Code.GDdoorObjects1);

gdjs.Level3Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.Level3Code.GDcode2Objects2.createFrom(gdjs.Level3Code.GDcode2Objects1);


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects2[i].getVariables().get("installed")) == 4 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects2[k] = gdjs.Level3Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects2.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDdoorObjects2.createFrom(gdjs.Level3Code.GDdoorObjects1);

gdjs.Level3Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level3Code.GDwall2Objects2[i].setOpacity(0);
}
}}

}


{

/* Reuse gdjs.Level3Code.GDcode2Objects1 */

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")) == 5 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects1[k] = gdjs.Level3Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects1.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDwall1Objects1.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level3Code.GDwall2Objects1.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level3Code.GDwall2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDwall2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwall1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDwall1Objects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x8277ac
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level3Code.GDnameObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level3Code.GDcode2Objects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level3Code.GDnameObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Level3Code.GDdoorObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level3Code.GDnameObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level3Code.GDenemyObjects1});gdjs.Level3Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Level3Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level3Code.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level3Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.Level3Code.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDhObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setWrappingWidth((( gdjs.Level3Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level3Code.GDnameObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameboxObjects1[i].setPosition((( gdjs.Level3Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level3Code.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.Level3Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level3Code.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setPosition((( gdjs.Level3Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level3Code.GDnameObjects1[0].getPointX("")) - (gdjs.Level3Code.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.Level3Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level3Code.GDnameObjects1[0].getPointY("")) - 128);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x827024(runtimeScene);} //End of subevents
}

}


{

gdjs.Level3Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level3Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
gdjs.Level3Code.condition3IsTrue_0.val = false;
gdjs.Level3Code.condition4IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDcode2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level3Code.condition2IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects1[k] = gdjs.Level3Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects1.length = k;}if ( gdjs.Level3Code.condition2IsTrue_0.val ) {
{
gdjs.Level3Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if ( gdjs.Level3Code.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level3Code.condition4IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}}
}
}
}
if (gdjs.Level3Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDcode2Objects1 */
gdjs.Level3Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level3Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDcode2Objects1[i].returnVariable(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")).add(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDcode2Objects1[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed"))) - 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level3Code.eventsList0x8277ac(runtimeScene);} //End of subevents
}

}


{

gdjs.Level3Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "en1x");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDenemyObjects1[i].getVariableNumber(gdjs.Level3Code.GDenemyObjects1[i].getVariables().get("dir")) == 0 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDenemyObjects1[k] = gdjs.Level3Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDenemyObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 427, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects1[i].returnVariable(gdjs.Level3Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(1);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "en1x");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 1216, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects1[i].returnVariable(gdjs.Level3Code.GDenemyObjects1[i].getVariables().get("dir")).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "en1x");
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")) == 3 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(4);
}
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")) == 2 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setBBText("...What am I supposed to be doing? Who am I supposed to be?");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(3);
}
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setBBText("...and I’m supposed to be the main character...");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")) == 0 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogueObjects1[i].setBBText("This seems to be some sort of unfinished game...");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level3Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level3Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "en1x");
}{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("slider", 1216, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level3Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDcode2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level3Code.condition2IsTrue_0.val = true;
        gdjs.Level3Code.GDcode2Objects1[k] = gdjs.Level3Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level3Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDcode2Objects1[i].returnVariable(gdjs.Level3Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDcode2Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 46, 40, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level3Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
gdjs.Level3Code.condition3IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDdoorObjects1[i].getOpacity() == 0) ) {
        gdjs.Level3Code.condition2IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}if ( gdjs.Level3Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")) == 0 ) {
        gdjs.Level3Code.condition3IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}}
}
}
if (gdjs.Level3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDdoorObjects1 */
gdjs.Level3Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 255, "easeInCubic", 2500, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects1[i].resetTimer("fadecounter");
}
}{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects1[i].returnVariable(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.Level3Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 1) ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")) == 1 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDdoorObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDdoorObjects1[i].returnVariable(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")).setNumber(2);
}
}}

}


{

gdjs.Level3Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDnameObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDenemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDenemyObjects1[i].getOpacity() == 0) ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDenemyObjects1[k] = gdjs.Level3Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDenemyObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].setPosition(911,628);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.Level3Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].getVariableNumber(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDnameObjects1[k] = gdjs.Level3Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDnameObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].returnVariable(gdjs.Level3Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level3Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level3Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level3Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level3Code.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].timerElapsedTime("fadecounter", 4) ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDdoorObjects1[i].getVariableNumber(gdjs.Level3Code.GDdoorObjects1[i].getVariables().get("exit")) == 2 ) {
        gdjs.Level3Code.condition1IsTrue_0.val = true;
        gdjs.Level3Code.GDdoorObjects1[k] = gdjs.Level3Code.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDdoorObjects1.length = k;}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", true);
}}

}


}; //End of gdjs.Level3Code.eventsList0xb4be0


gdjs.Level3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level3Code.GDvObjects1.length = 0;
gdjs.Level3Code.GDvObjects2.length = 0;
gdjs.Level3Code.GDvObjects3.length = 0;
gdjs.Level3Code.GDhObjects1.length = 0;
gdjs.Level3Code.GDhObjects2.length = 0;
gdjs.Level3Code.GDhObjects3.length = 0;
gdjs.Level3Code.GDnameObjects1.length = 0;
gdjs.Level3Code.GDnameObjects2.length = 0;
gdjs.Level3Code.GDnameObjects3.length = 0;
gdjs.Level3Code.GDcode2Objects1.length = 0;
gdjs.Level3Code.GDcode2Objects2.length = 0;
gdjs.Level3Code.GDcode2Objects3.length = 0;
gdjs.Level3Code.GDDialogueObjects1.length = 0;
gdjs.Level3Code.GDDialogueObjects2.length = 0;
gdjs.Level3Code.GDDialogueObjects3.length = 0;
gdjs.Level3Code.GDflashObjects1.length = 0;
gdjs.Level3Code.GDflashObjects2.length = 0;
gdjs.Level3Code.GDflashObjects3.length = 0;
gdjs.Level3Code.GDBugObjects1.length = 0;
gdjs.Level3Code.GDBugObjects2.length = 0;
gdjs.Level3Code.GDBugObjects3.length = 0;
gdjs.Level3Code.GDdoorObjects1.length = 0;
gdjs.Level3Code.GDdoorObjects2.length = 0;
gdjs.Level3Code.GDdoorObjects3.length = 0;
gdjs.Level3Code.GDwall2Objects1.length = 0;
gdjs.Level3Code.GDwall2Objects2.length = 0;
gdjs.Level3Code.GDwall2Objects3.length = 0;
gdjs.Level3Code.GDenemyObjects1.length = 0;
gdjs.Level3Code.GDenemyObjects2.length = 0;
gdjs.Level3Code.GDenemyObjects3.length = 0;
gdjs.Level3Code.GDwall1Objects1.length = 0;
gdjs.Level3Code.GDwall1Objects2.length = 0;
gdjs.Level3Code.GDwall1Objects3.length = 0;
gdjs.Level3Code.GDnameboxObjects1.length = 0;
gdjs.Level3Code.GDnameboxObjects2.length = 0;
gdjs.Level3Code.GDnameboxObjects3.length = 0;
gdjs.Level3Code.GDbgObjects1.length = 0;
gdjs.Level3Code.GDbgObjects2.length = 0;
gdjs.Level3Code.GDbgObjects3.length = 0;
gdjs.Level3Code.GDcommentObjects1.length = 0;
gdjs.Level3Code.GDcommentObjects2.length = 0;
gdjs.Level3Code.GDcommentObjects3.length = 0;

gdjs.Level3Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Level3Code'] = gdjs.Level3Code;
