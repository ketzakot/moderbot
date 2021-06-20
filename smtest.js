const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

async function iniciar () { 
        const client = new WAConnection()                                                                                                                                
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron. 
        client.logger.level = 'warn' 

//llamar al código QR                                                                               
        client.on('qr', () => {                                                                         
        })                       
                                                                   
//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {                                                                 
        console.log('Conectando')                                                                       
        })                        
                                                            
//La conexión fue en éxito👌🏻                                                                          
        client.on('open', () => {                                                                       
        console.log('Conectado exitosamente :D')                                                        
        })                                                                                              
        await client.connect({timeoutMs: 30*1000})                                                      
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))                                                                                                                                                                                            
        }    
                                                                                                                                                                                        
iniciar ()                                                                                      
.catch (err => console.log("unexpected error: " + err))
