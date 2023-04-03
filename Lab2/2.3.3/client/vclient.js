var app = new Vue({
    el: '#app',
    data: {
        message: "",
        messages: []
    },
    created() {
        this.socket = io.connect('localhost:8000'); //in loc de localhost se trece adresa de IP a calculatorului pe care este pornit serverul

        this.socket.on('connect', (data) => {
            this.socket.emit("message-from-client", "Hello to everyone");
            console.log("client started");
        });

        this.socket.on('message-from-server', (message) => {
            console.log("received message: "+message);
             this.messages.push(message)
        });

    },
    methods: {
        sendMessage() {
            this.socket.emit("message-from-client", this.message);
            this.messages.push(this.message)
        }
    }
});
