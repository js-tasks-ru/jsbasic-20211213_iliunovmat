function makeFriendsList(friends) {
  // ваш код...
  const ul = document.createElement("ul");
  for (let i = 0; i < friends.length; i++) {
    //get values from Object and convert to the string
    let rawFullName = Object.values(friends[i]);
    let fullName = `${rawFullName[0]} ${rawFullName[1]}`;
    //create html elements
    let li = document.createElement("li");
    let textInside = document.createTextNode(fullName);
    //add elements to the HTML DOM tree
    li.appendChild(textInside);
    ul.appendChild(li);
  }
  return ul;
  
}
