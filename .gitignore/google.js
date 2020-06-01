module.exports = class Google {

    static match (message) {
        return message.content.startsWith('!smogon')
    }

    static action (message ) {
        let args = message.content.split (' ')
        args.shift()
        message.reply('https://www.smogon.com/dex/sm/pokemon/' + args.join('%20'))
    }

}
