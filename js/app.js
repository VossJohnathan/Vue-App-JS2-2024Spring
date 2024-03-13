const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            //Now how to I go adding this to a table?
            freezerContent: [
                {number: 1, name: 'Dino Nuggets', quantity: 12, quantityType: 'Bags', favorite: 'Favorite!'},
                {number: 2, name: 'Hot Pocket', quantity: 3, quantityType: 'Boxes', favorite: ' '},
                {number: 3, name: 'Ice Cream', quantity: 2, quantityType: 'Tubs', favorite: 'Favorite!'},
            ],

            itemInfo: [
                {number: 1, name: 'Dino Nuggets', buyDate: '3-6-2024', expirationDate: '4-20-2024'},
                {number: 2, name: 'Hot Pocket', buyDate: '2-26-2024', expirationDate: '3-12-2024'},
                {number: 3, name: 'Ice Cream', buyDate: '3-15-44 B.C.', expirationDate: 'N̴̡̰̠̟̩̱͍͇͕͓̮͔̪̜͊̽̉̏̾̐ͅÈ̵̥̠̗͈̬̯̣̯̯͇̥͇̙͔̘͋̇͠V̶̧̨̧̢̡̧̨̧̠͍̟̺͊̂͠ͅĖ̴̡͍̺͚̼̘̹Ř̵̪̠̪̽̾͋̒͂'},
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {

    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

    }
});
