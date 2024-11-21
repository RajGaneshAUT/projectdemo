const {testLogin} = require ('../command/login.js');

async function ArtilleryScript(page) {

   await testLogin(page);
    
}
module.exports = {

    ArtilleryScript
}; 