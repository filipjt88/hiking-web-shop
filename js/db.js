let products = [
  {
    id: 0,
    name: "Boots",
    price: "$210",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men", "Women"],
    quantity: 4,
    image: "boots.jpg",
  },
  {
    id: 1,
    name: "Gloves",
    price: "$30",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men"],
    quantity: 3,
    image: "gloves.jpg",
  },
  {
    id: 2,
    name: "Jackets",
    price: "$110",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men", "Women"],
    quantity: 5,
    image: "jackets.jpg",
  },
  {
    id: 3,
    name: "Pants",
    price: "$60",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men", "Women"],
    quantity: 4,
    image: "pants.jpg",
  },
  {
    id: 4,
    name: "Poles",
    price: "$40",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men", "Women"],
    quantity: 4,
    image: "poles.jpg",
  },
  {
    id: 5,
    name: "Shirts",
    price: "$70",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Women"],
    quantity: 4,
    image: "shirts.jpg",
  },
  {
    id: 6,
    name: "Skirts",
    price: "$80",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Women"],
    quantity: 4,
    image: "skirts.jpg",
  },
  {
    id: 7,
    name: "Socks",
    price: "$10",
    decription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error ullam ratione recusandae delectus, esse, odio id quibusdam, neque optio natus voluptate odit. Dolores molestias delectus rem earum autem odit. Corporis eos, dolores consectetur eaque, laboriosam fuga est velit, dicta in beatae earum. Architecto ex quasi nesciunt similique! Perferendis, itaque.",
    category: ["Men", "Women"],
    quantity: 4,
    image: "socks.jpg",
  },
];

if (localStorage.product) {
  products = JSON.parse(localStorage.product);
}
