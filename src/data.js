const fs = require('fs');
const path = require('path');

const accountData= fs.readFileSync(
    path.join(__dirname,'json','accounts.json'),'utf-8');
    //src/json/accounts.json',options:{encoding?)
const accounts=JSON.parse(accountData);
const userData=fs.readFileSync(
    path.join(__dirname,'json','users.json'),'utf-8');
const users=JSON.parse(userData);
