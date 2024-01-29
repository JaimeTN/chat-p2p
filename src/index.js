import { createLibp2p } from '../services/libp2p.js';
import { stdinToStream, streamToConsole } from '../services/stream.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

import { User } from '../models/User.js';





const main = async () => {
    const userName = prompt('Please, enter your username: ');
    const user = new User(userName, []);
    let logged = true;
    
    const node = await createLibp2p({
        addresses: {
            listen: ['/ip4/127.0.0.1/tcp/0']
        },
      });
    console.log(`${user.userName} ready, listening on:`);
    node.getMultiaddrs().forEach((ma) => {
      user.address = ma.toString();
    })
    
    console.log(user.address);

    const getCommand = (command) => {
      switch(command){
        case "list":
          node.addEventListener('peer:discovery', (evt) => console.log('Available:', evt.detail.id.toString()));
          break;
        case "add_friend":
          break;
        case "send_message":
          break;
        case "remove_friend":
          break;
        case "accept":
          break;
        case "reject":
          break;
        case "exit":
          logged = false;
          console.log("Press CTRL+C to exit.");
          break;
        default:
          console.log("Invalid command");
      };
    };

    let isChatting = false;
    let command;
    while(logged){
      while(isChatting){
        //To do
      }
      command = prompt("> ");
      getCommand(command.trim().toLowerCase());


    //stdinToStream(stream)

    //streamToConsole(stream)
  };
};

main().then().catch(console.error);
