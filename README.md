# Discord.js Installation Script

Discord.js Installation Script is a script to make setting up a discord bot workspace easier..

## Installation

You need to install [node](https://nodejs.org) before running the following command

```
npm i --save
```

## Setting Up

First, go to the `config.json` file and edit the token to your token from the [development](https://discord.com/developers/applications) [portal](https://discord.com/developers/applications) and the prefix to whatever you want

```json
{
    "token": "", 
    "prefix": "!"
}
```

Then go to the `package.json` and change the author to whatever you'd like

```json
{
  "name": "discord-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "dependencies": {
      "discord.js": "^12.3.1"
  }
}
```

## Usage

To use your bot, and add stuff to it, you may use a website such as [discordjs.guide](https://discordjs.guide) or read the docs at [discord.js.org](https://discord.js.org)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU](https://choosealicense.com/licenses/agpl-3.0/)
