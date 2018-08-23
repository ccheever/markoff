#!/usr/bin/env node

let path = require('path');

let osascript = require('@expo/osascript');

async function mainAsync(file) {
  if (file) {
    return await osascript.execAsync(`
tell application "Markoff"
    open ${JSON.stringify(path.resolve(file))}
end tell
`);
  } else {
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
