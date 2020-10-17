const fs = require('fs');
const chalk = require('chalk')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function createIndex(path) {
    try {
        console.log(chalk.yellow("Generating index.js"))
        var stream = fs.createWriteStream(path + "/index.js");
        stream.once('open', function(fd) {
            stream.write("const Discord = require('discord.js');\n");
            stream.write("const client = new Discord.Client();\n");
            stream.write('const config = require("./config.json");\n');
            stream.write('const prefix = config.prefix;\n');
            stream.write('\n');
            stream.write('\n');
            stream.write('client.once("ready", () => {\n');
            stream.write('  console.log("Ready!");\n');
            stream.write('});\n');
            stream.write('\n');
            stream.write('\n');
            stream.write('client.on("message", async msg => {\n');
            stream.write('  //Put message code here\n')
            stream.write('});\n')
            stream.write('\n');
            stream.write('\n');
            stream.write('client.login(config.token)\n');
            stream.end();
        });
        console.log('Created index.js')
    } catch(e) {
        console.log(chalk.red("ERR! ") + chalk.white(e.message))
        console.log("There was an error running this script, please restart it")
        console.log('==============================================');
        console.log("Thanks for using this script")
        console.log("Github: https://github.com/SuperS123/discord-js-installation-script")
        console.log("Note: IF YOU PAID FOR THIS SCRIPT, YOU WERE SCAMMED. PLEASE CHARGE-BACK THAT PURCHASE")
        console.log("==============================================");
    }
}


function createPackage(path) {
    try {
        console.log(chalk.yellow("Generating package.json"))
        var stream = fs.createWriteStream(path + "/package.json");

        stream.once('open', function(fd) {
            stream.write('{\n');
            stream.write('  "name": "discord-bot",\n');
            stream.write('  "version": "1.0.0",\n');
            stream.write('  "description": "",\n');
            stream.write('  "main": "index.js",\n');
            stream.write('  "author": "author",\n');
            stream.write('  "license": "ISC",\n');
            stream.write('  "dependencies": {\n');
            stream.write('      "discord.js": "^12.3.1"\n');
            stream.write('  }\n');
            stream.write('}\n');
            stream.close();
        });
        console.log('Created package.json')
    } catch(e) {
        console.log(chalk.red("ERR! ") + chalk.white(e.message))
        console.log("There was an error running this script, please restart it")
        console.log('==============================================');
        console.log("Thanks for using this script")
        console.log("Github: https://github.com/SuperS123/discord-js-installation-script")
        console.log("Note: IF YOU PAID FOR THIS SCRIPT, YOU WERE SCAMMED. PLEASE CHARGE-BACK THAT PURCHASE")
        console.log("==============================================");
    }
}

function createConfig(path) {
    try {
        console.log(chalk.yellow("Generating config.json (This will store your token and prefix)"))
        var stream = fs.createWriteStream(path + "/config.json");
        stream.once('open', function(fd) {
            stream.write("{\n");
            stream.write(' "token": "input-bot-token-here",\n');
            stream.write(' "prefix": "!"\n');
            stream.write("}\n");
            stream.end();
        });
        console.log(chalk.green('Created config.json'))
    } catch(e) {
        console.log(chalk.red("ERR! ") + chalk.white(e.message))
        console.log("There was an error running this script, please restart it")
        console.log('==============================================');
        console.log("Thanks for using this script")
        console.log("Github: https://github.com/SuperS123/discord-js-installation-script")
        console.log("Note: IF YOU PAID FOR THIS SCRIPT, YOU WERE SCAMMED. PLEASE CHARGE-BACK THAT PURCHASE")
        console.log("==============================================");
    }
}


readline.question('Please input a path for installation (You may enter .. for the directory before | Ex: ../Discord Bot)\n', path => {
    readline.close();
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
        console.log("Creating Directory")
        console.log('-------------------')
    }
    createIndex(path)
    console.log('-------------------')
    createPackage(path)
    console.log('-------------------')
    createConfig(path)
    console.log(chalk.green('=============================================='));
    console.log(chalk.blueBright("Thanks for using this script"))
    console.log(chalk.green("Github: https://github.com/SuperS123/discord-js-installation-script"))
    console.log(chalk.green("Note: IF YOU PAID FOR THIS SCRIPT, YOU WERE SCAMMED. PLEASE CHARGE-BACK THAT PURCHASE"))
    console.log(chalk.green("=============================================="));
});