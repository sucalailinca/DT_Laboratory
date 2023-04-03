var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        process: function(){
            if(this.message == '123')
                console.log("Message is equal to", this.message);
            //else console.log(this.message);
        }
    }
})