const request = require("supertest");
const app = require("./app");

describe("test all routes app.js", () => {
  test("GET List Movies and 200 status", async () => {
    const expectedStatus = 200;
    const expectedBody = [
      {
        actors: [
          "Quentin Deleau",
          "Lucie Foncelle",
          "Maxime Goudal",
          "Julien Paris",
          "Sylvain Robert",
        ],
        director: "ESMA",
        duration: "351",
        genres: ["Animation"],
        host: "youtube",
        image: "https://i.ytimg.com/vi/vYRu6MwmFYE/maxresdefault.jpg",
        synopsis:
          "In the middle of a desert, soldiers are protecting a marvelous pearl, but a huge creature will try to steal it.",
        title: "Sand Castle",
        type: "short",
        url: "https://www.youtube.com/watch?v=7HS6V0S7YbM",
        country: "Canada",
        reviews: [
          {
            id: "603b1f330b7e9a3c82a74f02",
            userId: "603b1e0b0b7e9a3c82a74eff",
            rating: 4.5,
            content: "This movie was amazing!",
            timestamp: "2022-03-01T10:30:00Z",
          },
        ],
        userCreator: {
          userName: "gorge_alt",
          userId: "6472a0f7bce995ad4b0ec274",
        },
        id: "64729febc6c9137e388ef706",
        releaseYear: "",
        likes: 0,
        dislikes: 0,
      },
      {
        actors: [
          "Katee Sackhoff",
          "James Van Der Beek",
          "Russ Bain",
          "Will Yun Lee",
        ],
        director: "Joseph Kahn",
        duration: "859",
        genres: ["Action"],
        host: "youtube",
        image: "https://i.ytimg.com/vi/VvAITtWL6A8/maxresdefault.jpg",
        synopsis: "A Mighty Morphin' Power Rangers Bootleg Film",
        title: "POWER/RANGERS UNAUTHORIZED",
        type: "short",
        country: "USA",
        url: "https://www.youtube.com/watch?v=vw5vcUPyL90",
        reviews: [
          {
            id: "603b1f330b7e9a3c82a74f02",
            userId: "603b1e0b0b7e9a3c82a74eff",
            rating: 4.5,
            content: "This movie was amazing!",
            timestamp: "2022-03-01T10:30:00Z",
          },
        ],
        userCreator: {
          userName: "gorge_alt",
          userId: "6472a0f7bce995ad4b0ec274",
        },
        id: "64729ff08abd14a2697d089b",
        releaseYear: "",
        likes: 0,
        dislikes: 0,
      },
    ];

    //Act
    // await request(app)
    //   .get("/movies")
    const response = await request(app).get("/movies");
    //Assert
    // .expect(expectedStatus)
    // .expect((response) => {
    //   expect(response.body).toEqual(expectedBody);
    // });
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });
});
