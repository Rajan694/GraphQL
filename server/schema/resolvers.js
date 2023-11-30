const { Userlist, Movielist } = require("../fakedata");

//TO USE API
// const axios = require("axios");
// const getUsers = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     if (response.status === 200) {
//       userarray = response.data;
//     } else {
//       throw new Error("Failed to fetch users");
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch users");
//   }
// };
// getUsers();
const resolvers = {
  Query: {
    //USERS
    users: () => {
      return Userlist;
    },

    user: (parent, args) => {
      const id = Number(args.id);

      return Userlist.find((user) => user.id === id);
    },

    //MOVIES
    movies: () => {
      return Movielist;
    },

    movie: (parent, args) => {
      const name = args.name;
      return Movielist.find((movie) => movie.title === name);
    },
  },

  User: {
    favouriteMovies: () => {
      return Movielist.filter((movie) => movie.year > 1980);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      user.id = Userlist.length + 1;

      console.log(user);
      Userlist.push(user);
      return user;
    },
  },
};

module.exports = {
  resolvers,
};
