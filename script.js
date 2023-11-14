function addNewItem() {
  const valueInput = document.getElementById("input").value;
  const list = document.getElementById("list");
  const newListItem = document.createElement("li");
  const remove = document.createElement("button");
  remove.appendChild(document.createTextNode("delete"));

  remove.addEventListener('click', function(){
    list.removeChild(newListItem);
  })
  const itemValue = document.createTextNode(valueInput);
  newListItem.appendChild(itemValue);
  newListItem.appendChild(remove);
  list.appendChild(newListItem);

  document.getElementById("input").value = "";

}

