#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let osascript = require('@expo/osascript');

async function mainAsync(file) {
  if (file) {
    let filePath = path.resolve(file);

    // If we open a directory, try to open the README.md here
    if (fs.existsSync(path.join(filePath, 'README.md'))) {
      filePath = path.join(filePath, 'README.md');
    }

    return await osascript.execAsync(`
tell application "Markoff"
    open ${JSON.stringify(filePath)}
end tell
`);
  } else {
    // Just open the application if there's no file argument given
    return await osascript.execAsync(`
tell application "Markoff"
    activate
end tell
`);
  }
}

module.exports = mainAsync;

if (require.main === module) {
  mainAsync(process.argv[2]);
}
