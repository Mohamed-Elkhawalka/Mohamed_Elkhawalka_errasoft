function add_item(new_item, items) {
  items.push(new_item);
}
function display_items(items) {
  items.forEach(function (item) {
    console.log(item);
  });
}
function change_items_name(item_index, items) {
  var new_name = prompt("Enter the new name: ");
  items[item_index] = new_name;
}
function delete_item(item_index, items) {
  items.splice(item_index, 1);
}
var items = [];

document
  .getElementById("Additem_button")
  .addEventListener("click", function () {
    var new_item = prompt("Enter new item: ");
    add_item(new_item, items);
  });
document
  .getElementById("Display_button")
  .addEventListener("click", function () {
    display_items(items);
  });
document
  .getElementById("changeitem_button")
  .addEventListener("click", function () {
    var item_index =
      Number(
        prompt(`which item you want to change? (${items}) (Enter item number)`),
      ) - 1;
    change_items_name(item_index, items);
  });
document
  .getElementById("deleteitem_button")
  .addEventListener("click", function () {
    var item_index =
      Number(
        prompt(`which item you want to delete? (${items}) (Enter item number)`),
      ) - 1;
    delete_item(item_index, items);
  });
