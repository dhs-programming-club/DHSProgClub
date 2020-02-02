gdjs.Level5Code = {};
gdjs.Level5Code.GDvObjects1= [];
gdjs.Level5Code.GDvObjects2= [];
gdjs.Level5Code.GDvObjects3= [];
gdjs.Level5Code.GDhObjects1= [];
gdjs.Level5Code.GDhObjects2= [];
gdjs.Level5Code.GDhObjects3= [];
gdjs.Level5Code.GDnameObjects1= [];
gdjs.Level5Code.GDnameObjects2= [];
gdjs.Level5Code.GDnameObjects3= [];
gdjs.Level5Code.GDcode2Objects1= [];
gdjs.Level5Code.GDcode2Objects2= [];
gdjs.Level5Code.GDcode2Objects3= [];
gdjs.Level5Code.GDDialogueObjects1= [];
gdjs.Level5Code.GDDialogueObjects2= [];
gdjs.Level5Code.GDDialogueObjects3= [];
gdjs.Level5Code.GDflash2Objects1= [];
gdjs.Level5Code.GDflash2Objects2= [];
gdjs.Level5Code.GDflash2Objects3= [];
gdjs.Level5Code.GDflashObjects1= [];
gdjs.Level5Code.GDflashObjects2= [];
gdjs.Level5Code.GDflashObjects3= [];
gdjs.Level5Code.GDBugObjects1= [];
gdjs.Level5Code.GDBugObjects2= [];
gdjs.Level5Code.GDBugObjects3= [];
gdjs.Level5Code.GDcode3Objects1= [];
gdjs.Level5Code.GDcode3Objects2= [];
gdjs.Level5Code.GDcode3Objects3= [];
gdjs.Level5Code.GDbgObjects1= [];
gdjs.Level5Code.GDbgObjects2= [];
gdjs.Level5Code.GDbgObjects3= [];
gdjs.Level5Code.GDenemyObjects1= [];
gdjs.Level5Code.GDenemyObjects2= [];
gdjs.Level5Code.GDenemyObjects3= [];
gdjs.Level5Code.GDbbegObjects1= [];
gdjs.Level5Code.GDbbegObjects2= [];
gdjs.Level5Code.GDbbegObjects3= [];
gdjs.Level5Code.GDnameboxObjects1= [];
gdjs.Level5Code.GDnameboxObjects2= [];
gdjs.Level5Code.GDnameboxObjects3= [];
gdjs.Level5Code.GDcodefObjects1= [];
gdjs.Level5Code.GDcodefObjects2= [];
gdjs.Level5Code.GDcodefObjects3= [];

gdjs.Level5Code.conditionTrue_0 = {val:false};
gdjs.Level5Code.condition0IsTrue_0 = {val:false};
gdjs.Level5Code.condition1IsTrue_0 = {val:false};
gdjs.Level5Code.condition2IsTrue_0 = {val:false};
gdjs.Level5Code.condition3IsTrue_0 = {val:false};
gdjs.Level5Code.condition4IsTrue_0 = {val:false};
gdjs.Level5Code.conditionTrue_1 = {val:false};
gdjs.Level5Code.condition0IsTrue_1 = {val:false};
gdjs.Level5Code.condition1IsTrue_1 = {val:false};
gdjs.Level5Code.condition2IsTrue_1 = {val:false};
gdjs.Level5Code.condition3IsTrue_1 = {val:false};
gdjs.Level5Code.condition4IsTrue_1 = {val:false};


gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDvObjects1Objects = Hashtable.newFrom({"v": gdjs.Level5Code.GDvObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.Level5Code.GDhObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode3Objects1Objects = Hashtable.newFrom({"code3": gdjs.Level5Code.GDcode3Objects1});gdjs.Level5Code.eventsList0x83ef34 = function(runtimeScene) {

{

gdjs.Level5Code.GDcode3Objects2.createFrom(gdjs.Level5Code.GDcode3Objects1);


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode3Objects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode3Objects2[i].getVariableNumber(gdjs.Level5Code.GDcode3Objects2[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcode3Objects2[k] = gdjs.Level5Code.GDcode3Objects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode3Objects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects2.createFrom(runtimeScene.getObjects("bbeg"));
/* Reuse gdjs.Level5Code.GDcode3Objects2 */
{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects2.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects2[i].returnVariable(gdjs.Level5Code.GDcode3Objects2[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects2.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects2[i].returnVariable(gdjs.Level5Code.GDbbegObjects2[i].getVariables().get("projspeed")).setNumber(1);
}
}}

}


{

/* Reuse gdjs.Level5Code.GDcode3Objects1 */

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode3Objects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode3Objects1[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcode3Objects1[k] = gdjs.Level5Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode3Objects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
/* Reuse gdjs.Level5Code.GDcode3Objects1 */
{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].returnVariable(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("projspeed")).setNumber(10);
}
}}

}


}; //End of gdjs.Level5Code.eventsList0x83ef34
gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcodefObjects1Objects = Hashtable.newFrom({"codef": gdjs.Level5Code.GDcodefObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level5Code.GDcode2Objects1});gdjs.Level5Code.eventsList0x84026c = function(runtimeScene) {

{

gdjs.Level5Code.GDcode2Objects2.createFrom(gdjs.Level5Code.GDcode2Objects1);


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level5Code.GDcode2Objects2[i].getVariables().get("installed")) == 4 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcode2Objects2[k] = gdjs.Level5Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode2Objects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects2.createFrom(runtimeScene.getObjects("bbeg"));
/* Reuse gdjs.Level5Code.GDcode2Objects2 */
{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects2[i].returnVariable(gdjs.Level5Code.GDcode2Objects2[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects2[i].returnVariable(gdjs.Level5Code.GDbbegObjects2[i].getVariables().get("shielddisabled")).setNumber(0);
}
}}

}


{

gdjs.Level5Code.GDcode2Objects2.createFrom(gdjs.Level5Code.GDcode2Objects1);


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode2Objects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode2Objects2[i].getVariableNumber(gdjs.Level5Code.GDcode2Objects2[i].getVariables().get("installed")) == 2 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcode2Objects2[k] = gdjs.Level5Code.GDcode2Objects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode2Objects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects2.createFrom(runtimeScene.getObjects("bbeg"));
/* Reuse gdjs.Level5Code.GDcode2Objects2 */
{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects2.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects2[i].returnVariable(gdjs.Level5Code.GDbbegObjects2[i].getVariables().get("projdisabled")).setNumber(1);
}
}}

}


{

/* Reuse gdjs.Level5Code.GDcode2Objects1 */

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode2Objects1[i].getVariables().get("installed")) == 3 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcode2Objects1[k] = gdjs.Level5Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode2Objects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
/* Reuse gdjs.Level5Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].returnVariable(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("shielddisabled")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].returnVariable(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("projdisabled")).setNumber(0);
}
}}

}


}; //End of gdjs.Level5Code.eventsList0x84026c
gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level5Code.GDnameObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode2Objects1Objects = Hashtable.newFrom({"code2": gdjs.Level5Code.GDcode2Objects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level5Code.GDnameObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode3Objects1Objects = Hashtable.newFrom({"code3": gdjs.Level5Code.GDcode3Objects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level5Code.GDnameObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level5Code.GDenemyObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level5Code.GDnameObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDbbegObjects1Objects = Hashtable.newFrom({"bbeg": gdjs.Level5Code.GDbbegObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects = Hashtable.newFrom({"name": gdjs.Level5Code.GDnameObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDbbegObjects1Objects = Hashtable.newFrom({"bbeg": gdjs.Level5Code.GDbbegObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level5Code.GDenemyObjects1});gdjs.Level5Code.eventsList0x84607c = function(runtimeScene) {

{

gdjs.Level5Code.GDflash2Objects2.createFrom(gdjs.Level5Code.GDflash2Objects1);


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDflash2Objects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDflash2Objects2[i].getVariableNumber(gdjs.Level5Code.GDflash2Objects2[i].getVariables().get("op")) == 128 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDflash2Objects2[k] = gdjs.Level5Code.GDflash2Objects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDflash2Objects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "LevelClear.mp3", false, 100, 1);
}}

}


{

/* Reuse gdjs.Level5Code.GDflash2Objects1 */

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDflash2Objects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDflash2Objects1[i].getVariableNumber(gdjs.Level5Code.GDflash2Objects1[i].getVariables().get("op")) == 256 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDflash2Objects1[k] = gdjs.Level5Code.GDflash2Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDflash2Objects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ending", false);
}}

}


}; //End of gdjs.Level5Code.eventsList0x84607c
gdjs.Level5Code.eventsList0x845ea4 = function(runtimeScene) {

{

gdjs.Level5Code.GDcodefObjects1.createFrom(runtimeScene.getObjects("codef"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcodefObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcodefObjects1[i].timerElapsedTime("finalflash", 0.3) ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDcodefObjects1[k] = gdjs.Level5Code.GDcodefObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcodefObjects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcodefObjects1 */
gdjs.Level5Code.GDflash2Objects1.createFrom(runtimeScene.getObjects("flash2"));
{for(var i = 0, len = gdjs.Level5Code.GDflash2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflash2Objects1[i].returnVariable(gdjs.Level5Code.GDflash2Objects1[i].getVariables().get("op")).add(16);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflash2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflash2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflash2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflash2Objects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level5Code.GDflash2Objects1[i].getVariables().get("op"))), "linear", 300, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].resetTimer("finalflash");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 40 - (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level5Code.GDflash2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level5Code.GDflash2Objects1[0].getVariables()).get("op"))) / 8, 1);
}
{ //Subevents
gdjs.Level5Code.eventsList0x84607c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level5Code.eventsList0x845ea4
gdjs.Level5Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level5Code.GDhObjects1.createFrom(runtimeScene.getObjects("h"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.Level5Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.Level5Code.GDvObjects1.createFrom(runtimeScene.getObjects("v"));
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDvObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].separateFromObjectsList(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDhObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setWrappingWidth((( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameboxObjects1[i].setPosition((( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointX("")) - 100,(( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointY("")) - 149);
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setPosition((( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointX("")) - (gdjs.Level5Code.GDDialogueObjects1[i].getWrappingWidth()) / 2,(( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointY("")) - 128);
}
}}

}


{

gdjs.Level5Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
gdjs.Level5Code.condition3IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode3Objects1.length;i<l;++i) {
    if ( !(gdjs.Level5Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode3Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcode3Objects1[k] = gdjs.Level5Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode3Objects1.length = k;}if ( gdjs.Level5Code.condition2IsTrue_0.val ) {
{
gdjs.Level5Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}}
}
}
if (gdjs.Level5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcode3Objects1 */
gdjs.Level5Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects1[i].returnVariable(gdjs.Level5Code.GDcode3Objects1[i].getVariables().get("installed")).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level5Code.eventsList0x83ef34(runtimeScene);} //End of subevents
}

}


{

gdjs.Level5Code.GDcodefObjects1.createFrom(runtimeScene.getObjects("codef"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
gdjs.Level5Code.condition3IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcodefObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcodefObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcodefObjects1[i].getVariableNumber(gdjs.Level5Code.GDcodefObjects1[i].getVariables().get("installed")) == 1 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcodefObjects1[k] = gdjs.Level5Code.GDcodefObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcodefObjects1.length = k;}if ( gdjs.Level5Code.condition2IsTrue_0.val ) {
{
gdjs.Level5Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}}
}
}
if (gdjs.Level5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcodefObjects1 */
gdjs.Level5Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level5Code.GDflash2Objects1.createFrom(runtimeScene.getObjects("flash2"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].resetTimer("finalflash");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("end")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].returnVariable(gdjs.Level5Code.GDcodefObjects1[i].getVariables().get("installed")).add(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflash2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflash2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Level5Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
gdjs.Level5Code.condition3IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level5Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode2Objects1[i].getVariables().get("installed")) == 0) ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcode2Objects1[k] = gdjs.Level5Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode2Objects1.length = k;}if ( gdjs.Level5Code.condition2IsTrue_0.val ) {
{
gdjs.Level5Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}}
}
}
if (gdjs.Level5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcode2Objects1 */
gdjs.Level5Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].getBehavior("Tween").addObjectOpacityTween("enemyflash", 0, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects1[i].returnVariable(gdjs.Level5Code.GDcode2Objects1[i].getVariables().get("installed")).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Logon Sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level5Code.eventsList0x84026c(runtimeScene);} //End of subevents
}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
gdjs.Level5Code.condition2IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level5Code.condition2IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")) == 2 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(3);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
gdjs.Level5Code.condition2IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level5Code.condition2IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")) == 1 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setBBText("I’ve got to defeat it!");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(2);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
gdjs.Level5Code.condition2IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level5Code.condition2IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")) == 0 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setBBText("I can feel that my name is within it...");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text1")).setNumber(1);
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
gdjs.Level5Code.GDcodefObjects1.createFrom(runtimeScene.getObjects("codef"));
gdjs.Level5Code.GDflashObjects1.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level5Code.GDflash2Objects1.createFrom(runtimeScene.getObjects("flash2"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
{for(var i = 0, len = gdjs.Level5Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflashObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level5Code.GDflash2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDflash2Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Tension-music-loop-114-bpm.mp3", 2, true, 80, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].resetTimer("projectile");
}
}{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].returnVariable(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("projspeed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}}

}


{

gdjs.Level5Code.GDcode2Objects1.createFrom(runtimeScene.getObjects("code2"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode2Objects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode2Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode2Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcode2Objects1[k] = gdjs.Level5Code.GDcode2Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode2Objects1.length = k;}}
}
if (gdjs.Level5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcode2Objects1 */
{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects1[i].returnVariable(gdjs.Level5Code.GDcode2Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode2Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 37, 180, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level5Code.GDcode3Objects1.createFrom(runtimeScene.getObjects("code3"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDcode3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcode3Objects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcode3Objects1[i].getVariableNumber(gdjs.Level5Code.GDcode3Objects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcode3Objects1[k] = gdjs.Level5Code.GDcode3Objects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcode3Objects1.length = k;}}
}
if (gdjs.Level5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDcode3Objects1 */
{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects1[i].returnVariable(gdjs.Level5Code.GDcode3Objects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcode3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcode3Objects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 45, 33, "easeInQuad", 300, false);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")) == 0 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")) == 1 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 1 / 16, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(2);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")) == 2 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].timerElapsedTime("bounce", 1) ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("bounce")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].resetTimer("bounce");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("Tween").addObjectScaleYTween("bounce", 9 / 160, "easeInOutQuad", 1000, false);
}
}}

}


{

gdjs.Level5Code.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("end")) == 0 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].setPosition(911,628);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}}

}


{

gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDbbegObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDbbegObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDbbegObjects1[i].getVariableNumber(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("shielddisabled")) == 0 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDbbegObjects1[k] = gdjs.Level5Code.GDbbegObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDbbegObjects1.length = k;}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("end")) == 0 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
}
if (gdjs.Level5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].setPosition(911,628);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "XP Critical Error Sound Effect-1.mp3", false, 100, 1);
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.condition0IsTrue_1.val = false;
gdjs.Level5Code.condition1IsTrue_1.val = false;
gdjs.Level5Code.condition2IsTrue_1.val = false;
{
gdjs.Level5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.Level5Code.condition0IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Level5Code.condition1IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Level5Code.condition2IsTrue_1.val ) {
    gdjs.Level5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text2")) == 1 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(0);
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text2")).setNumber(2);
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 1;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level5Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameboxObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.Level5Code.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameboxObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
gdjs.Level5Code.GDcodefObjects1.createFrom(runtimeScene.getObjects("codef"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDnameObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDbbegObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDbbegObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDbbegObjects1[i].getVariableNumber(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("shielddisabled")) == 1 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDbbegObjects1[k] = gdjs.Level5Code.GDbbegObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDbbegObjects1.length = k;}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDcodefObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDcodefObjects1[i].getVariableNumber(gdjs.Level5Code.GDcodefObjects1[i].getVariables().get("installed")) == 0 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDcodefObjects1[k] = gdjs.Level5Code.GDcodefObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDcodefObjects1.length = k;}}
}
if (gdjs.Level5Code.condition2IsTrue_0.val) {
gdjs.Level5Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
/* Reuse gdjs.Level5Code.GDcodefObjects1 */
/* Reuse gdjs.Level5Code.GDnameObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].getBehavior("Tween").addObjectPositionTween("addtobank", 0, 686, "easeInQuad", 300, false);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].returnVariable(gdjs.Level5Code.GDcodefObjects1[i].getVariables().get("installed")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDcodefObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDcodefObjects1[i].getBehavior("Tween").addObjectOpacityTween("fadein", 255, "linear", 300, false);
}
}{runtimeScene.getGame().getVariables().get("talking").setNumber(1);
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogueObjects1[i].setBBText("That’s my name...? Iden?");
}
}{for(var i = 0, len = gdjs.Level5Code.GDnameObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDnameObjects1[i].returnVariable(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("text2")).setNumber(1);
}
}}

}


{

gdjs.Level5Code.GDbbegObjects1.createFrom(runtimeScene.getObjects("bbeg"));
gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
gdjs.Level5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDbbegObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDbbegObjects1[i].timerElapsedTime("projectile", 1) ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDbbegObjects1[k] = gdjs.Level5Code.GDbbegObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDbbegObjects1.length = k;}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDbbegObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDbbegObjects1[i].getVariableNumber(gdjs.Level5Code.GDbbegObjects1[i].getVariables().get("projdisabled")) == 0 ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDbbegObjects1[k] = gdjs.Level5Code.GDbbegObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDbbegObjects1.length = k;}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("end")) == 0 ) {
        gdjs.Level5Code.condition2IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}if ( gdjs.Level5Code.condition2IsTrue_0.val ) {
{
gdjs.Level5Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("talking")) == 0;
}}
}
}
if (gdjs.Level5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDbbegObjects1 */
/* Reuse gdjs.Level5Code.GDnameObjects1 */
gdjs.Level5Code.GDenemyObjects1.length = 0;

{for(var i = 0, len = gdjs.Level5Code.GDbbegObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDbbegObjects1[i].resetTimer("projectile");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDenemyObjects1Objects, (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointX("")), (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level5Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionTween("projectile", (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointX("")) + 10 * ((( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointX("")) - (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointX(""))), (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointY("")) + 10 * ((( gdjs.Level5Code.GDnameObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDnameObjects1[0].getPointY("")) - (( gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? 0 :gdjs.Level5Code.GDbbegObjects1[0].getPointY(""))), "easeInQuad", 1000 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level5Code.GDbbegObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level5Code.GDbbegObjects1[0].getVariables()).get("projspeed"))), true);
}
}}

}


{

gdjs.Level5Code.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDnameObjects1[i].getVariableNumber(gdjs.Level5Code.GDnameObjects1[i].getVariables().get("end")) == 1 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDnameObjects1[k] = gdjs.Level5Code.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDnameObjects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 2) - (1));
}
{ //Subevents
gdjs.Level5Code.eventsList0x845ea4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level5Code.eventsList0xb4be0


gdjs.Level5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level5Code.GDvObjects1.length = 0;
gdjs.Level5Code.GDvObjects2.length = 0;
gdjs.Level5Code.GDvObjects3.length = 0;
gdjs.Level5Code.GDhObjects1.length = 0;
gdjs.Level5Code.GDhObjects2.length = 0;
gdjs.Level5Code.GDhObjects3.length = 0;
gdjs.Level5Code.GDnameObjects1.length = 0;
gdjs.Level5Code.GDnameObjects2.length = 0;
gdjs.Level5Code.GDnameObjects3.length = 0;
gdjs.Level5Code.GDcode2Objects1.length = 0;
gdjs.Level5Code.GDcode2Objects2.length = 0;
gdjs.Level5Code.GDcode2Objects3.length = 0;
gdjs.Level5Code.GDDialogueObjects1.length = 0;
gdjs.Level5Code.GDDialogueObjects2.length = 0;
gdjs.Level5Code.GDDialogueObjects3.length = 0;
gdjs.Level5Code.GDflash2Objects1.length = 0;
gdjs.Level5Code.GDflash2Objects2.length = 0;
gdjs.Level5Code.GDflash2Objects3.length = 0;
gdjs.Level5Code.GDflashObjects1.length = 0;
gdjs.Level5Code.GDflashObjects2.length = 0;
gdjs.Level5Code.GDflashObjects3.length = 0;
gdjs.Level5Code.GDBugObjects1.length = 0;
gdjs.Level5Code.GDBugObjects2.length = 0;
gdjs.Level5Code.GDBugObjects3.length = 0;
gdjs.Level5Code.GDcode3Objects1.length = 0;
gdjs.Level5Code.GDcode3Objects2.length = 0;
gdjs.Level5Code.GDcode3Objects3.length = 0;
gdjs.Level5Code.GDbgObjects1.length = 0;
gdjs.Level5Code.GDbgObjects2.length = 0;
gdjs.Level5Code.GDbgObjects3.length = 0;
gdjs.Level5Code.GDenemyObjects1.length = 0;
gdjs.Level5Code.GDenemyObjects2.length = 0;
gdjs.Level5Code.GDenemyObjects3.length = 0;
gdjs.Level5Code.GDbbegObjects1.length = 0;
gdjs.Level5Code.GDbbegObjects2.length = 0;
gdjs.Level5Code.GDbbegObjects3.length = 0;
gdjs.Level5Code.GDnameboxObjects1.length = 0;
gdjs.Level5Code.GDnameboxObjects2.length = 0;
gdjs.Level5Code.GDnameboxObjects3.length = 0;
gdjs.Level5Code.GDcodefObjects1.length = 0;
gdjs.Level5Code.GDcodefObjects2.length = 0;
gdjs.Level5Code.GDcodefObjects3.length = 0;

gdjs.Level5Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Level5Code'] = gdjs.Level5Code;
