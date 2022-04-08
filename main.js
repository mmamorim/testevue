const estrelas = {
    template: `
                <span v-for="x in qtdeEstrelas">
                    <span style="color: #aaaa00; font-size: 16pt;" class="iconify" data-icon="ic:round-stars" data-inline="false"></span>
                </span>
    `,
    data() {
        return {
            qtdeEstrelas: []
        }
    },
    props: {
        qtde: { default: 0, type: Number }
    },
    watch: {
        qtde() {
            this.qtdeEstrelas.push(1);
        }
    },
    mounted() {
        console.log("passei no mounted (estrela)");
        console.log("props: ", this.qtde);
        this.qtdeEstrelas = [];
    }
}

const meucomponente = {
    components: { estrelas },
    template: `
                <div style="border: 1px solid black; padding: 5px;">
                    <span style="font-size: 16pt;" class="iconify" data-icon="ic:twotone-thumb-up" data-inline="false"></span>
                    Valor do contador: {{contador}}
                    <button @click="clicou">clique</button>
                    <estrelas :qtde="contador"></estrelas>
                </div>
            `,
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        clicou() {
            console.log("cliquei");
            this.contador++;
        }
    }
};

const app = Vue.createApp({
    components: { meucomponente },
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        clicou() {
            console.log("cliquei");
            this.message = this.message + 'x';
        }
    }
}).mount('#app2')