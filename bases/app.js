
const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // `
    
    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log( 'Hola Mundo' )
            this.author = 'Fernando Herrera'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
    
})


app.mount('#myApp')




