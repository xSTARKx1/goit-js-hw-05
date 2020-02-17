class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    const addedItem = this.items.includes(item);

    if (addedItem === false) {
      this.items.push(item);
    }
  }

  removeItem(item) {
    const numberToRemove = this.items.indexOf(item);

    if (numberToRemove !== -1) {
      this.items.splice(numberToRemove, 1);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
