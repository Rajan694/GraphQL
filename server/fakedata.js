const Userlist = [
  {
    id: 1,
    name: "Rajan",
    username: "Raj",
    email: "rajan@test.com",
    friends: [
      {
        id: 5,
        name: "Sandeep",
        username: "Sandy",
        email: "sandy@test.com",
      },
      {
        id: 3,
        name: "Aman",
        username: "Mandi",
        email: "aman@test.com",
      },
    ],
  },
  {
    id: 2,
    name: "Abhishek",
    username: "Abhi",
    email: "abhi@test.com",
    friends: [
      {
        id: "4",
        name: "Ankit",
        username: "Anki",
        email: "anki@test.com",
      },
    ],
  },
  {
    id: 3,
    name: "Aman",
    username: "Mandi",
    email: "aman@test.com",
    friends: [
      {
        id: 1,
        name: "Rajan",
        username: "Raj",
        email: "rajan@test.com",
      },
    ],
  },
  {
    id: 4,
    name: "Ankit",
    username: "Anki",
    email: "anki@test.com",
    friends: [
      {
        id: 2,
        name: "Abhishek",
        username: "Abhi",
        email: "abhi@test.com",
      },
    ],
  },
  {
    id: 5,
    name: "Sandeep",
    username: "Sandy",
    email: "sandy@test.com",
    friends: [
      {
        id: 1,
        name: "Rajan",
        username: "Raj",
        email: "rajan@test.com",
      },
      {
        id: 3,
        name: "Aman",
        username: "Mandi",
        email: "aman@test.com",
      },
    ],
  },
  {
    id: 6,
    name: "Rahul",
    username: "Rah",
    email: "rahul@test.com",
    friends: [
      {
        id: 5,
        name: "Sandeep",
        username: "Sandy",
        email: "sandy@test.com",
      },
    ],
  },
];

const Movielist = [
  { id: 1, title: "3 Idiots", year: 2009, isInfo: true },
  { id: 2, title: "Lagaan", year: 2001, isInfo: true },
  { id: 3, title: "Dangal", year: 2016, isInfo: true },
  { id: 4, title: "Bahubali", year: 2015, isInfo: true },
  { id: 5, title: "Dil Chahta Hai", year: 2001, isInfo: true },
  { id: 6, title: "Gully Boy", year: 2019, isInfo: true },
];

module.exports = {
  Userlist,
  Movielist,
};
