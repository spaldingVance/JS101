function greetings(names, obj) {
  return `Hello, ${names[0]} ${names[1]} ${names[2]}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
