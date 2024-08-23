<const fs = require('fs')
const chalk = require('chalk')

global.antipalavrao = []
global.isVisualizar = true 
//caso queora desligar a visualização de mensage
//Para desligar coloque: global.isVisualizar = false
//Para ativar coloque: global.isVisualizar = true

//configuracoes do dono e do bot
global.numerododono = ['2250500107363'] //número do dono
global.nomedobot = `🔞𝐗-𝐓𝐄𝐂𝐇🔰` //nome do bot
global.nomedodono = '🔞𝐗-𝐓𝐄𝐂𝐇🔰'
global.packnome = '🔞𝐗-𝐓𝐄𝐂𝐇🔰\n🎭Criador: 🔞𝐗-𝐓𝐄𝐂𝐇🔰'
global.author = '📞Whatsapp: 225 0500107362\n🔔Canal: youtube.com/@X-TECH-CORP
global.nomedoqr = 'X-TECH'
global.prefixos = ['🔞','!','🚯']
global.venomemoji = '🚯'
global.reagir2 = "🎭️"
global.reagir3 = "🦠️"

//configuração de respostas
global.resposta = {
    sucesso: '✓ Sucesso!',
    admin: '*Este comando só pode ser usado pelo administradores do grupo‼️*',
    botAdmin: '*Para eu executar este comando preciso se tornar adm deste grupo‼️*.',
    dono: '*Este comando só pode ser usado pelo meu proprietário ‼️*',
    grupo: '*Este comando só pode ser usado em grupos‼️*',
    premium: '*Este comamdo só pode ser usado por usuário preimium‼️*\n*caso queira comprar seu acesso vip ebtre em contato com o venom*\n*Contato:* wa.me/2250500107362',
    privado: '*Este comando so pode ser usado em um bate-papo privado‼️*',
    bot: '*Este comando só pode ser usado pelo próprio número do bot‼️*',
    espere: '*Espere uns minutos..⌛*',
    endLimit: '*Limite esgotado, ele sera resetado em 24hrs.✍️*',
}

global.limitawal = {
    premium: "Infinity",
    free: 10
}

//fotos 
global.thumb = fs.readFileSync('./dados/imagem/venombot.jpg')
global.fotomenu = fs.readFileSync('./dados/imagem/venombot.jpg')
global.semperfil = fs.readFileSync('./dados/imagem/semperfil.jpg')
global.thumb1 = fs.readFileSync('./dados/imagem/venombot.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`O arquivo '${__filename}' \nFoi atualizado!!`))
	delete require.cache[file]
	require(file)
})
