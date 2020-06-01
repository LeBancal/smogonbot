const Discord = require('discord.js')
const smogon = new Discord.Client()
const google = require ('./commands/google')

smogon.on('ready', function() {
    smogon.user.setActivity('Showdown')

})

smogon.on('message', function (message) {
    if (google.match(message)) {
        google.action(message)
        }
})

smogon.login(process.env.TOKEN)
