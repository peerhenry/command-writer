var fs = require('fs');

const pathProp = "path";
const commandListProp = "commandList";
const mainObjectFileName = "commandlist.json";

console.log("Here we go.");
var mainObject = JSON.parse(fs.readFileSync(mainObjectFileName));
processObject(mainObject);


function processObject(mainObject){
  if(!isValid(mainObject)) return;
  var targetDir = mainObject[pathProp];
  if (!fs.existsSync(targetDir)) {
    console.log("Directory " + targetDir + " does not exist. Now creating.")
    fs.mkdirSync(targetDir);
  }
  if(!targetDir.endsWith("/")) {
    targetDir = targetDir + "/";
  }
  var commandList = mainObject[commandListProp];
  writeFiles(targetDir, commandList);
}


function isValid(mainObject){
  if(!mainObject){
    console.log("commandlist.json could not be found!");
    return false;
  }
  var targetDir = mainObject[pathProp];
  if(!targetDir){
    console.log("commandlist.json did not contain " + pathProp + "!");
    return false;
  }
  if(typeof targetDir != 'string'){
    console.log(pathProp + " was not of type string !");
    return false;
  }
  var commandList = mainObject[commandListProp];
  if(!commandList){
    console.log("commandlist.json did not contain " + commandListProp + "!");
    return false;
  }
  return true;
}


function writeFiles(targetDir, commandList){
  for(var commandObjectName in commandList){
    console.log("writing: " + JSON.stringify(commandObjectName));
    var nextObject = commandList[commandObjectName];
    makeFile(targetDir, nextObject);
  }
  console.log("done!");
}


function makeFile(targetDir, nextObject){
    var filename = nextObject["filename"];
    if(!filename || typeof filename != "string"){
      console.log("Object did not have filename or was not of type string!");
      return;
    }
    var content = nextObject["content"];
    if(!content || typeof content != "string"){
      console.log("Object did not have content or was not of type string!");
      return;
    }
    fs.writeFile((targetDir+filename), content, function(err){
      if(err){
        return console.log(err);
      }
  });
}