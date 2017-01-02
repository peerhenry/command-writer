# Command Writer

Command Writer is a simple node application that runs in one execution: it reads a json file "commandlist.json" and converts all objects within to command files for Windows.

## How to run

Simply run either "npm start" or "node filewriter.js". This will evaluate the file "commandlist.json" and will generate files to the path specified within (the default is "./commands").

## commandlist.json

The "path" property specifies the target directory to which the command files will be written. If the directory doesn't exist it will be created automatically.
The "commandList" property contains all objects that will be converted to files. These objects must have properties: 
* "filename": a string
* "content": a string or an array of strings.
If content is an array of strings, the elements will be written as separate lines in the output file.

## Command Files

Put the output files in some directory (eg. C:/commands) and add that directory to your systems path variable.