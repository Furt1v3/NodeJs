const events = require("events");
const eventsEmmiter = new events.EventEmitter();

const connectHandle = function connected(){
  console.log("Connected Successfully");
  eventsEmmiter.emit("data received")
}

eventsEmmiter.on ('connection' , connectHandle);
eventsEmmiter.on('data received' , () => {
  console.log("Data Received Successfully");
})

eventsEmmiter.emit('connection');
console.log('End Programing');