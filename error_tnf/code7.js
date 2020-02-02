gdjs.EndingCode = {};
gdjs.EndingCode.GDtextentryObjects1= [];
gdjs.EndingCode.GDtextentryObjects2= [];
gdjs.EndingCode.GDtextentryObjects3= [];
gdjs.EndingCode.GDnameboxObjects1= [];
gdjs.EndingCode.GDnameboxObjects2= [];
gdjs.EndingCode.GDnameboxObjects3= [];
gdjs.EndingCode.GDnameObjects1= [];
gdjs.EndingCode.GDnameObjects2= [];
gdjs.EndingCode.GDnameObjects3= [];
gdjs.EndingCode.GDnameend4Objects1= [];
gdjs.EndingCode.GDnameend4Objects2= [];
gdjs.EndingCode.GDnameend4Objects3= [];
gdjs.EndingCode.GDnameend3Objects1= [];
gdjs.EndingCode.GDnameend3Objects2= [];
gdjs.EndingCode.GDnameend3Objects3= [];
gdjs.EndingCode.GDnameend2Objects1= [];
gdjs.EndingCode.GDnameend2Objects2= [];
gdjs.EndingCode.GDnameend2Objects3= [];
gdjs.EndingCode.GDnameend1Objects1= [];
gdjs.EndingCode.GDnameend1Objects2= [];
gdjs.EndingCode.GDnameend1Objects3= [];
gdjs.EndingCode.GDtestObjects1= [];
gdjs.EndingCode.GDtestObjects2= [];
gdjs.EndingCode.GDtestObjects3= [];
gdjs.EndingCode.GDidenend9Objects1= [];
gdjs.EndingCode.GDidenend9Objects2= [];
gdjs.EndingCode.GDidenend9Objects3= [];
gdjs.EndingCode.GDidenend8Objects1= [];
gdjs.EndingCode.GDidenend8Objects2= [];
gdjs.EndingCode.GDidenend8Objects3= [];
gdjs.EndingCode.GDidenend7Objects1= [];
gdjs.EndingCode.GDidenend7Objects2= [];
gdjs.EndingCode.GDidenend7Objects3= [];
gdjs.EndingCode.GDidenend6Objects1= [];
gdjs.EndingCode.GDidenend6Objects2= [];
gdjs.EndingCode.GDidenend6Objects3= [];
gdjs.EndingCode.GDidenend5Objects1= [];
gdjs.EndingCode.GDidenend5Objects2= [];
gdjs.EndingCode.GDidenend5Objects3= [];
gdjs.EndingCode.GDidenend4Objects1= [];
gdjs.EndingCode.GDidenend4Objects2= [];
gdjs.EndingCode.GDidenend4Objects3= [];
gdjs.EndingCode.GDidenend3Objects1= [];
gdjs.EndingCode.GDidenend3Objects2= [];
gdjs.EndingCode.GDidenend3Objects3= [];
gdjs.EndingCode.GDidenend2Objects1= [];
gdjs.EndingCode.GDidenend2Objects2= [];
gdjs.EndingCode.GDidenend2Objects3= [];
gdjs.EndingCode.GDidenend1Objects1= [];
gdjs.EndingCode.GDidenend1Objects2= [];
gdjs.EndingCode.GDidenend1Objects3= [];
gdjs.EndingCode.GDfadeObjects1= [];
gdjs.EndingCode.GDfadeObjects2= [];
gdjs.EndingCode.GDfadeObjects3= [];
gdjs.EndingCode.GDnewend1Objects1= [];
gdjs.EndingCode.GDnewend1Objects2= [];
gdjs.EndingCode.GDnewend1Objects3= [];
gdjs.EndingCode.GDnewend2Objects1= [];
gdjs.EndingCode.GDnewend2Objects2= [];
gdjs.EndingCode.GDnewend2Objects3= [];
gdjs.EndingCode.GDnewend3Objects1= [];
gdjs.EndingCode.GDnewend3Objects2= [];
gdjs.EndingCode.GDnewend3Objects3= [];
gdjs.EndingCode.GDnewend4Objects1= [];
gdjs.EndingCode.GDnewend4Objects2= [];
gdjs.EndingCode.GDnewend4Objects3= [];

gdjs.EndingCode.conditionTrue_0 = {val:false};
gdjs.EndingCode.condition0IsTrue_0 = {val:false};
gdjs.EndingCode.condition1IsTrue_0 = {val:false};
gdjs.EndingCode.condition2IsTrue_0 = {val:false};
gdjs.EndingCode.condition3IsTrue_0 = {val:false};
gdjs.EndingCode.conditionTrue_1 = {val:false};
gdjs.EndingCode.condition0IsTrue_1 = {val:false};
gdjs.EndingCode.condition1IsTrue_1 = {val:false};
gdjs.EndingCode.condition2IsTrue_1 = {val:false};
gdjs.EndingCode.condition3IsTrue_1 = {val:false};


gdjs.EndingCode.eventsList0x8559d4 = function(runtimeScene) {

{

gdjs.EndingCode.GDnameObjects2.createFrom(gdjs.EndingCode.GDnameObjects1);


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects2.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects2[i].getVariableNumber(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("end")) == 1 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects2[k] = gdjs.EndingCode.GDnameObjects2[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects2.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects2 */
gdjs.EndingCode.GDnameboxObjects2.createFrom(runtimeScene.getObjects("namebox"));
gdjs.EndingCode.GDnameend1Objects2.createFrom(runtimeScene.getObjects("nameend1"));
{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects2[i].setPosition(671,206);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].setPosition(575,176);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Soft-electronic-track-loop.mp3", true, 80, 1);
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].resetTimer("nameend");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].returnVariable(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("progress")).setNumber(12);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend1Objects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend1Objects2[i].getBehavior("Tween").addObjectOpacityTween("name1", 255, "linear", 1000, false);
}
}}

}


{

gdjs.EndingCode.GDnameObjects2.createFrom(gdjs.EndingCode.GDnameObjects1);


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects2.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects2[i].getVariableNumber(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("end")) == 2 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects2[k] = gdjs.EndingCode.GDnameObjects2[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects2.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects2 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "Soft-electronic-track-loop.mp3", true, 80, 1);
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].returnVariable(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("progress")).setNumber(30);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].setBBText("I think I understand what they meant for me.");
}
}}

}


{

/* Reuse gdjs.EndingCode.GDnameObjects1 */

gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("end")) == 0 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "Soft-electronic-track-loop.mp3", true, 80, 1);
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(50);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Whoever made me gave me this name with a plan for me, but...");
}
}}

}


}; //End of gdjs.EndingCode.eventsList0x8559d4
gdjs.EndingCode.eventsList0x857504 = function(runtimeScene) {

{

gdjs.EndingCode.GDnameObjects2.createFrom(gdjs.EndingCode.GDnameObjects1);


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.conditionTrue_1.val = (gdjs.evtTools.string.strFind((gdjs.RuntimeObject.getVariableString(((gdjs.EndingCode.GDnameObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.EndingCode.GDnameObjects2[0].getVariables()).get("nocasename"))), "name") != -(1));
}
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects2 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].returnVariable(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("end")).setNumber(1);
}
}}

}


{

gdjs.EndingCode.GDnameObjects2.createFrom(gdjs.EndingCode.GDnameObjects1);


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.conditionTrue_1.val = (gdjs.evtTools.string.strFind((gdjs.RuntimeObject.getVariableString(((gdjs.EndingCode.GDnameObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.EndingCode.GDnameObjects2[0].getVariables()).get("nocasename"))), "iden") != -(1));
}
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects2 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].returnVariable(gdjs.EndingCode.GDnameObjects2[i].getVariables().get("end")).setNumber(2);
}
}}

}


{

gdjs.EndingCode.GDtextentryObjects2.createFrom(gdjs.EndingCode.GDtextentryObjects1);


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDtextentryObjects2.length;i<l;++i) {
    if ( gdjs.EndingCode.GDtextentryObjects2[i].getString() == gdjs.evtTools.string.newLine() ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDtextentryObjects2[k] = gdjs.EndingCode.GDtextentryObjects2[i];
        ++k;
    }
}
gdjs.EndingCode.GDtextentryObjects2.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
gdjs.EndingCode.GDnameObjects2.createFrom(gdjs.EndingCode.GDnameObjects1);

/* Reuse gdjs.EndingCode.GDtextentryObjects2 */
{for(var i = 0, len = gdjs.EndingCode.GDtextentryObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDtextentryObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects2[i].setBBText("");
}
}}

}


{

/* Reuse gdjs.EndingCode.GDtextentryObjects1 */

gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDtextentryObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDtextentryObjects1[i].getString() == " " ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDtextentryObjects1[k] = gdjs.EndingCode.GDtextentryObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDtextentryObjects1.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
/* Reuse gdjs.EndingCode.GDtextentryObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDtextentryObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDtextentryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}}

}


}; //End of gdjs.EndingCode.eventsList0x857504
gdjs.EndingCode.mapOfGDgdjs_46EndingCode_46GDtextentryObjects1Objects = Hashtable.newFrom({"textentry": gdjs.EndingCode.GDtextentryObjects1});gdjs.EndingCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
gdjs.EndingCode.GDfadeObjects1.createFrom(runtimeScene.getObjects("fade"));
gdjs.EndingCode.GDidenend1Objects1.createFrom(runtimeScene.getObjects("idenend1"));
gdjs.EndingCode.GDidenend2Objects1.createFrom(runtimeScene.getObjects("idenend2"));
gdjs.EndingCode.GDidenend3Objects1.createFrom(runtimeScene.getObjects("idenend3"));
gdjs.EndingCode.GDidenend4Objects1.createFrom(runtimeScene.getObjects("idenend4"));
gdjs.EndingCode.GDidenend5Objects1.createFrom(runtimeScene.getObjects("idenend5"));
gdjs.EndingCode.GDidenend6Objects1.createFrom(runtimeScene.getObjects("idenend6"));
gdjs.EndingCode.GDidenend7Objects1.createFrom(runtimeScene.getObjects("idenend7"));
gdjs.EndingCode.GDidenend8Objects1.createFrom(runtimeScene.getObjects("idenend8"));
gdjs.EndingCode.GDidenend9Objects1.createFrom(runtimeScene.getObjects("idenend9"));
gdjs.EndingCode.GDnameend1Objects1.createFrom(runtimeScene.getObjects("nameend1"));
gdjs.EndingCode.GDnameend2Objects1.createFrom(runtimeScene.getObjects("nameend2"));
gdjs.EndingCode.GDnameend3Objects1.createFrom(runtimeScene.getObjects("nameend3"));
gdjs.EndingCode.GDnameend4Objects1.createFrom(runtimeScene.getObjects("nameend4"));
gdjs.EndingCode.GDnewend1Objects1.createFrom(runtimeScene.getObjects("newend1"));
gdjs.EndingCode.GDnewend2Objects1.createFrom(runtimeScene.getObjects("newend2"));
gdjs.EndingCode.GDnewend3Objects1.createFrom(runtimeScene.getObjects("newend3"));
gdjs.EndingCode.GDnewend4Objects1.createFrom(runtimeScene.getObjects("newend4"));
{for(var i = 0, len = gdjs.EndingCode.GDnameend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend5Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend5Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend6Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend6Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend7Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend7Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend8Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend8Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend9Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend9Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDfadeObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnewend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnewend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnewend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnewend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend1Objects1[i].setOpacity(0);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 59 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("new", 16.5) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 58 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("new", 12) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDfadeObjects1.createFrom(runtimeScene.getObjects("fade"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(59);
}
}{for(var i = 0, len = gdjs.EndingCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 3000, false);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 57 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("new", 8) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnewend4Objects1.createFrom(runtimeScene.getObjects("newend4"));
{for(var i = 0, len = gdjs.EndingCode.GDnewend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend4Objects1[i].getBehavior("Tween").addObjectOpacityTween("new", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(58);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 56 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("new", 5) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnewend3Objects1.createFrom(runtimeScene.getObjects("newend3"));
{for(var i = 0, len = gdjs.EndingCode.GDnewend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend3Objects1[i].getBehavior("Tween").addObjectOpacityTween("new", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(57);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 55 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("new", 2) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnewend2Objects1.createFrom(runtimeScene.getObjects("newend2"));
{for(var i = 0, len = gdjs.EndingCode.GDnewend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend2Objects1[i].getBehavior("Tween").addObjectOpacityTween("new", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(56);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 54 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
gdjs.EndingCode.GDnewend1Objects1.createFrom(runtimeScene.getObjects("newend1"));
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(55);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnewend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnewend1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].resetTimer("new");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 53 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("I can build whatever world I want now.");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(54);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 52 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("My name is mine now.");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(53);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 51 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("This world is mine now.");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(52);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 50 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("I don’t want to follow that plan.");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(51);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 40 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 31) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 39 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 27) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDfadeObjects1.createFrom(runtimeScene.getObjects("fade"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(40);
}
}{for(var i = 0, len = gdjs.EndingCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 3000, false);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 38 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 24) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend8Objects1.createFrom(runtimeScene.getObjects("idenend8"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(39);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend8Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend8Objects1[i].setOpacity(0);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 37 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 21) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend7Objects1.createFrom(runtimeScene.getObjects("idenend7"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDidenend7Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend7Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(38);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 36 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 18) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend6Objects1.createFrom(runtimeScene.getObjects("idenend6"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDidenend6Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend6Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(37);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 35 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 15) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend5Objects1.createFrom(runtimeScene.getObjects("idenend5"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDidenend5Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend5Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(36);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 34 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 12) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend4Objects1.createFrom(runtimeScene.getObjects("idenend4"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(35);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend4Objects1[i].setOpacity(0);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 33 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 9) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend3Objects1.createFrom(runtimeScene.getObjects("idenend3"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(34);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend3Objects1[i].setOpacity(0);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 32 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 6) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend2Objects1.createFrom(runtimeScene.getObjects("idenend2"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDidenend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend2Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(33);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 31 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("iden", 3) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend1Objects1.createFrom(runtimeScene.getObjects("idenend1"));
gdjs.EndingCode.GDidenend2Objects1.createFrom(runtimeScene.getObjects("idenend2"));
gdjs.EndingCode.GDidenend3Objects1.createFrom(runtimeScene.getObjects("idenend3"));
gdjs.EndingCode.GDidenend4Objects1.createFrom(runtimeScene.getObjects("idenend4"));
gdjs.EndingCode.GDidenend5Objects1.createFrom(runtimeScene.getObjects("idenend5"));
gdjs.EndingCode.GDidenend6Objects1.createFrom(runtimeScene.getObjects("idenend6"));
gdjs.EndingCode.GDidenend7Objects1.createFrom(runtimeScene.getObjects("idenend7"));
gdjs.EndingCode.GDidenend8Objects1.createFrom(runtimeScene.getObjects("idenend8"));
gdjs.EndingCode.GDidenend9Objects1.createFrom(runtimeScene.getObjects("idenend9"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDidenend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend1Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(32);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend7Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend7Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend6Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend6Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend8Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend8Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend9Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend9Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend5Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend5Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend2Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 30 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDidenend1Objects1.createFrom(runtimeScene.getObjects("idenend1"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.EndingCode.GDidenend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDidenend1Objects1[i].getBehavior("Tween").addObjectOpacityTween("iden", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].resetTimer("iden");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(31);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 21 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("fade", 7) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 20 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("fade", 3) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
gdjs.EndingCode.GDfadeObjects1.createFrom(runtimeScene.getObjects("fade"));
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(21);
}
}{for(var i = 0, len = gdjs.EndingCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 3000, false);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 19 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(20);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].resetTimer("fade");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 18 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(19);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("I think I'm content with this.");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 17 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(18);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Maybe someday, I’ll discover who I want to be, but for now...");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 16 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(17);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Lost in the void.");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 15 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("nameend", 12) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameboxObjects1.createFrom(runtimeScene.getObjects("namebox"));
{for(var i = 0, len = gdjs.EndingCode.GDnameboxObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameboxObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("I guess I’m just... name.");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(16);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 14 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("nameend", 9) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameend3Objects1.createFrom(runtimeScene.getObjects("nameend3"));
{for(var i = 0, len = gdjs.EndingCode.GDnameend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend3Objects1[i].getBehavior("Tween").addObjectOpacityTween("name2", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(15);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 13 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("nameend", 6) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameend2Objects1.createFrom(runtimeScene.getObjects("nameend2"));
{for(var i = 0, len = gdjs.EndingCode.GDnameend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend2Objects1[i].getBehavior("Tween").addObjectOpacityTween("name2", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(14);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 12 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].timerElapsedTime("nameend", 3) ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDnameend1Objects1.createFrom(runtimeScene.getObjects("nameend1"));
gdjs.EndingCode.GDnameend2Objects1.createFrom(runtimeScene.getObjects("nameend2"));
gdjs.EndingCode.GDnameend3Objects1.createFrom(runtimeScene.getObjects("nameend3"));
gdjs.EndingCode.GDnameend4Objects1.createFrom(runtimeScene.getObjects("nameend4"));
{for(var i = 0, len = gdjs.EndingCode.GDnameend3Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend3Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend4Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend4Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameend1Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameend1Objects1[i].getBehavior("Tween").addObjectOpacityTween("name2", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(13);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 11 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}
{ //Subevents
gdjs.EndingCode.eventsList0x8559d4(runtimeScene);} //End of subevents
}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 10 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("My name...");
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(11);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.EndingCode.GDtextentryObjects1.createFrom(runtimeScene.getObjects("textentry"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
gdjs.EndingCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDtextentryObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDtextentryObjects1[i].getString() != "" ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDtextentryObjects1[k] = gdjs.EndingCode.GDtextentryObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDtextentryObjects1.length = k;}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition1IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 9 ) {
        gdjs.EndingCode.condition2IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
}
if (gdjs.EndingCode.condition2IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
/* Reuse gdjs.EndingCode.GDtextentryObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(10);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Yes, that's it...");
}
}{for(var i = 0, len = gdjs.EndingCode.GDtextentryObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDtextentryObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 9 ) {
        gdjs.EndingCode.condition0IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}if (gdjs.EndingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDtextentryObjects1.createFrom(runtimeScene.getObjects("textentry"));
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText((( gdjs.EndingCode.GDtextentryObjects1.length === 0 ) ? "" :gdjs.EndingCode.GDtextentryObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("nocasename")).setString(gdjs.evtTools.string.toLowerCase((gdjs.EndingCode.GDnameObjects1[i].getBBText())));
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("end")).setNumber(0);
}
}
{ //Subevents
gdjs.EndingCode.eventsList0x857504(runtimeScene);} //End of subevents
}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 8 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
gdjs.EndingCode.GDtextentryObjects1.length = 0;

{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(9);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EndingCode.mapOfGDgdjs_46EndingCode_46GDtextentryObjects1Objects, 0, 0, "");
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 7 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(8);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("[type the character's name, and click once you're done]");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 6 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(7);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Who am I now?");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 5 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(6);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("The person I thought I was?");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 4 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(5);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Am I either of those people anymore?");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 3 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(4);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Am I really \"name,\" either, though?");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 2 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(3);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("It feels so strange after thinking of myself as \"name\" for so long.");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 1 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(2);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("That’s the name I was given.");
}
}}

}


{

gdjs.EndingCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition0IsTrue_0;
gdjs.EndingCode.condition0IsTrue_1.val = false;
gdjs.EndingCode.condition1IsTrue_1.val = false;
gdjs.EndingCode.condition2IsTrue_1.val = false;
{
gdjs.EndingCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.EndingCode.condition0IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.EndingCode.condition1IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
gdjs.EndingCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.EndingCode.condition2IsTrue_1.val ) {
    gdjs.EndingCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndingCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDnameObjects1[i].getVariableNumber(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")) == 0 ) {
        gdjs.EndingCode.condition1IsTrue_0.val = true;
        gdjs.EndingCode.GDnameObjects1[k] = gdjs.EndingCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDnameObjects1.length = k;}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndingCode.GDnameObjects1 */
{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].returnVariable(gdjs.EndingCode.GDnameObjects1[i].getVariables().get("progress")).setNumber(1);
}
}{for(var i = 0, len = gdjs.EndingCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDnameObjects1[i].setBBText("Iden...");
}
}}

}


}; //End of gdjs.EndingCode.eventsList0xb4be0


gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDtextentryObjects1.length = 0;
gdjs.EndingCode.GDtextentryObjects2.length = 0;
gdjs.EndingCode.GDtextentryObjects3.length = 0;
gdjs.EndingCode.GDnameboxObjects1.length = 0;
gdjs.EndingCode.GDnameboxObjects2.length = 0;
gdjs.EndingCode.GDnameboxObjects3.length = 0;
gdjs.EndingCode.GDnameObjects1.length = 0;
gdjs.EndingCode.GDnameObjects2.length = 0;
gdjs.EndingCode.GDnameObjects3.length = 0;
gdjs.EndingCode.GDnameend4Objects1.length = 0;
gdjs.EndingCode.GDnameend4Objects2.length = 0;
gdjs.EndingCode.GDnameend4Objects3.length = 0;
gdjs.EndingCode.GDnameend3Objects1.length = 0;
gdjs.EndingCode.GDnameend3Objects2.length = 0;
gdjs.EndingCode.GDnameend3Objects3.length = 0;
gdjs.EndingCode.GDnameend2Objects1.length = 0;
gdjs.EndingCode.GDnameend2Objects2.length = 0;
gdjs.EndingCode.GDnameend2Objects3.length = 0;
gdjs.EndingCode.GDnameend1Objects1.length = 0;
gdjs.EndingCode.GDnameend1Objects2.length = 0;
gdjs.EndingCode.GDnameend1Objects3.length = 0;
gdjs.EndingCode.GDtestObjects1.length = 0;
gdjs.EndingCode.GDtestObjects2.length = 0;
gdjs.EndingCode.GDtestObjects3.length = 0;
gdjs.EndingCode.GDidenend9Objects1.length = 0;
gdjs.EndingCode.GDidenend9Objects2.length = 0;
gdjs.EndingCode.GDidenend9Objects3.length = 0;
gdjs.EndingCode.GDidenend8Objects1.length = 0;
gdjs.EndingCode.GDidenend8Objects2.length = 0;
gdjs.EndingCode.GDidenend8Objects3.length = 0;
gdjs.EndingCode.GDidenend7Objects1.length = 0;
gdjs.EndingCode.GDidenend7Objects2.length = 0;
gdjs.EndingCode.GDidenend7Objects3.length = 0;
gdjs.EndingCode.GDidenend6Objects1.length = 0;
gdjs.EndingCode.GDidenend6Objects2.length = 0;
gdjs.EndingCode.GDidenend6Objects3.length = 0;
gdjs.EndingCode.GDidenend5Objects1.length = 0;
gdjs.EndingCode.GDidenend5Objects2.length = 0;
gdjs.EndingCode.GDidenend5Objects3.length = 0;
gdjs.EndingCode.GDidenend4Objects1.length = 0;
gdjs.EndingCode.GDidenend4Objects2.length = 0;
gdjs.EndingCode.GDidenend4Objects3.length = 0;
gdjs.EndingCode.GDidenend3Objects1.length = 0;
gdjs.EndingCode.GDidenend3Objects2.length = 0;
gdjs.EndingCode.GDidenend3Objects3.length = 0;
gdjs.EndingCode.GDidenend2Objects1.length = 0;
gdjs.EndingCode.GDidenend2Objects2.length = 0;
gdjs.EndingCode.GDidenend2Objects3.length = 0;
gdjs.EndingCode.GDidenend1Objects1.length = 0;
gdjs.EndingCode.GDidenend1Objects2.length = 0;
gdjs.EndingCode.GDidenend1Objects3.length = 0;
gdjs.EndingCode.GDfadeObjects1.length = 0;
gdjs.EndingCode.GDfadeObjects2.length = 0;
gdjs.EndingCode.GDfadeObjects3.length = 0;
gdjs.EndingCode.GDnewend1Objects1.length = 0;
gdjs.EndingCode.GDnewend1Objects2.length = 0;
gdjs.EndingCode.GDnewend1Objects3.length = 0;
gdjs.EndingCode.GDnewend2Objects1.length = 0;
gdjs.EndingCode.GDnewend2Objects2.length = 0;
gdjs.EndingCode.GDnewend2Objects3.length = 0;
gdjs.EndingCode.GDnewend3Objects1.length = 0;
gdjs.EndingCode.GDnewend3Objects2.length = 0;
gdjs.EndingCode.GDnewend3Objects3.length = 0;
gdjs.EndingCode.GDnewend4Objects1.length = 0;
gdjs.EndingCode.GDnewend4Objects2.length = 0;
gdjs.EndingCode.GDnewend4Objects3.length = 0;

gdjs.EndingCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['EndingCode'] = gdjs.EndingCode;
