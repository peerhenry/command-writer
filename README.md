# Command Writer

This is a simple node application that reads a json file "commandlist.json", and converts all objects within to files.
The objects within commandlist.json must contain properties "filename" and "content" as strings.

## How to run

Simply run either "npm start" or "node filewriter.js". This will evaluate the file "commandlist.json" and generate files in the path specified within (default "./commands").

## commandlist.json

The "path" property specifies the target directory to which the command files will be written. If the directory doesn't exist it will automatically be created.
The "commandList" property contains all objects that will be converted to files. These objects must have properties: 
* "filename": a string,
* "content": A string or an array of strings.