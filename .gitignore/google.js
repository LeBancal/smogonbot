module.exports = class Google {

    static match (message) {
       if (message.content.startsWith('!smogon')) {
           let args = message.content.split (' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/pokemon/' + args.join('%20'))
       }
       if (message.content.startsWith('!atk')) {
           let args = message.content.split (' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/moves/' + args.join('%20'))
       }
       if (message.content.startsWith('!talent')) {
           let args = message.content.split(' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/abilities/' + args.join('%20'))
       }
       if (message.content.startsWith('!type')) {
           let args = message.content.split(' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/types/' + args.join('%20'))
       }
       if  (message.content.startsWith('!item')) {
           let args = message.content.split(' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/item/' + args.join('%20'))
       }
       if  (message.content.startsWith('!formats')) {
           let args = message.content.split(' ')
           args.shift()
           message.reply('https://www.smogon.com/dex/ss/formats/' + args.join('%20'))
       } 
    }


}
