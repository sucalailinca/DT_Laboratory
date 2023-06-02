var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        enc1: [],
        enc2: [],
        enc3: [],
        enc4: [],
        enc5: [],
        status: '',
        numberOfBits: 16,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.enc2 = get4B5BNRZI(this.bits);
            this.enc1 = getManchesterLevelEncoding(this.bits);
            this.enc3 = getNRZM(this.bits);
            this.enc4 = getAMIEncoding(this.bits);
            this.enc5 = getNRZ(this.bits);
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');