const FrozenItemListComp = app.component('FrozenItemList', {
    data() {
        return{
            freezer: [
                new FreezerItem( new ItemsInStock(
                    'Ice Cubes', 55, 'cubes', 'Favorite'
                )),
                new FreezerItem(new ItemsInStock(
                    'Chicken Nuggets', 2, 'bags', ' '
                )),
                new FreezerItem(new ItemsInStock(
                    'Ice Packs', 4, 'Individual', ' '
                )),
                new FreezerItem(new ItemsInStock(
                    'Frozen Pizza', 1, 'Pizza', 'Favorite'
                )),
            ]
        }
    },

    props:{},

    methods: {

    },

    computed: {

    },

    template: `
    <div v-for="item in freezer">
      <FreezerItem :item="item"></FreezerItem>
    </div>
    `
})