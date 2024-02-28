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
