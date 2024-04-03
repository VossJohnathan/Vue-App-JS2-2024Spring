function FreezerItem() {
    this.frozen = frozen;

}

function Item(name, quantity, type, favorite) {
    this.name = name;
    this.quantity = quantity;
    this.type = type;
    this.favorite = favorite;
}

class ItemsInStock {
    name;
    quantity;
    type;
    favorite;

    constructor(name, quantity, type, favorite) {
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.favorite = favorite;
    }
}

let iceCubes = new FreezerItem(new ItemsInStock(
    'Ice Cubes', 55, 'cubes', 'Favorite'
));
console.log(iceCubes);

let chickenNuggets = new FreezerItem(new ItemsInStock(
    'Chicken Nuggets', 2, 'bags', ' '
));
console.log(chickenNuggets);

let icePacks = new FreezerItem(new ItemsInStock(
    'Ice Packs', 4, 'Individual', ' '
));
console.log(icePacks);

let frozenPizza = new FreezerItem(new ItemsInStock(
    'Frozen Pizza', 1, 'Pizza', 'Favorite'
));
console.log(frozenPizza);