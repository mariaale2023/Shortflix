const request = require("supertest");
const app = require("./app");

describe("test all routes app.js", () => {
  test("GET List Movies and 200 status", async (done) => {
    const expectedStatus = 200;
    const expectedBody = [
      {
        id: "6472e7351fd880ed0da88cfc",
        title: "Sand Castle",
        director: "ESMA",
        actors: [
          "Quentin Deleau",
          "Lucie Foncelle",
          "Maxime Goudal",
          "Julien Paris",
          "Sylvain Robert",
        ],
        url: "https://www.youtube.com/watch?v=7HS6V0S7YbM",
        genres: ["Animation"],
        country: "Canada",
        synopsis:
          "In the middle of a desert, soldiers are protecting a marvelous pearl, but a huge creature will try to steal it.",
      },
      {
        id: "6472e7351fd880ed0da88cfd",
        title: "POWER/RANGERS UNAUTHORIZED",
        director: "Joseph Kahn",
        actors: [
          "Katee Sackhoff",
          "James Van Der Beek",
          "Russ Bain",
          "Will Yun Lee",
        ],
        url: "https://www.youtube.com/watch?v=vw5vcUPyL90",
        genres: ["Action"],
        country: "USA",
        synopsis: "A Mighty Morphin' Power Rangers Bootleg Film",
      },
      {
        id: "6472e7351fd880ed0da88cfe",
        title: "n3trunner (Netrunner)",
        director: "Vincenzo Molinaro",
        actors: ["Francesco Formichetti", "Giulia Montalti", "Sole Sun"],
        url: "https://www.youtube.com/watch?v=tcHd9e-gNL4",
        genres: ["Sci-Fi", " Cyberpunk"],
        country: "Italy",
        synopsis: "A parking lot, two people and a machine. Is any of it real?",
      },
      {
        id: "6472e7351fd880ed0da88cff",
        title: "True Skin",
        director: "Stephan Zlotescu",
        actors: ["Stephan Zlotescu", "Jen Oda"],
        url: "https://www.youtube.com/watch?v=hoj4Qv7nrN8",
        genres: ["Sci-Fi"],
        country: "Thailand",
        synopsis:
          "Bangkok, in a near future, in a world where humans are augmented. A man need to blend in.",
      },
      {
        id: "6472e7351fd880ed0da88d00",
        title: "Singularity",
        director: "Samuel Jorgensen",
        actors: [
          "Mark Hyde",
          "Seth Olson",
          "Amahaad Lee",
          "Javier Lezama",
          "Eddie Lee",
          "Craig Bachmann",
          "Alex Castillo",
          "Andrew Varenhorst",
        ],
        url: "https://www.youtube.com/watch?v=FpoSxh--5qE",
        genres: ["Sci-Fi", "Action"],
        country: "USA",
        synopsis:
          "In the midst of a war between humans and sentient androids, a Delta Force team must battle a dangerous enemy to rescue the US President.",
      },
      {
        id: "6472e7351fd880ed0da88d01",
        title: "The Shaman",
        director: "Marco Kalantari",
        actors: ["Danny Shayler", "David Sayers", "Susanne Wuest"],
        url: "https://www.youtube.com/watch?v=80EQZaYV9TA",
        genres: ["Sci-Fi"],
        country: "United Kingdom",
        synopsis:
          "The dark year 2204, in a world that has seen 73 years of continuous war. Recently mankind re-discovered the arts of Shamanism. The Shaman’s school of thought believes that every person or object has a soul. During battle Shamans step over into the Netherworld to find and convert the souls of their enemies’ giant battle machines. This tactic enables a single man to overcome an invincibly seeming steel monster.  This is the story of Joshua, a Shaman, who is sent on a mission to convert the soul of a giant battle colossus. He does not yet know that the soul is prepared for his coming and that the deadly psychological soul-to-soul confrontation in the Netherworld will be on eye level.",
      },
      {
        id: "6472e7351fd880ed0da88d02",
        title: "The Present",
        director: "Jacob Frey",
        actors: ["Quinn Nealy", "Sam Brown"],
        url: "https://www.youtube.com/watch?v=GrW8Is6j4Mg",
        genres: ["Animation", "Family"],
        country: "Germany",
        synopsis:
          "A little boy sees his life being turned around by a present from his parents. Sometimes it's all it takes",
      },
      {
        id: "6472e7351fd880ed0da88d03",
        title: "Uncanny Valley",
        director: "Federico Heller",
        actors: [
          "Marcela Sandra Ballestrero",
          "Steve Kisicki",
          "Ivan Steinhardt",
          "Agustin Olgese",
          "Raymon Lee",
          "Nicole Apstein",
        ],
        url: "https://www.youtube.com/watch?v=UXX0TRtg5Vk",
        genres: ["Sci-Fi"],
        country: "Argentina",
        synopsis:
          "In the slums of the future, virtual reality junkies satisfy their violent impulses in online entertainment. An expert player discovers that the line between games and reality is starting to fade away. ",
      },
      {
        id: "6472e7351fd880ed0da88d04",
        title: "Darth Maul: Apprentice",
        director: "Shawn Bu",
        actors: [
          "Ben Schamma",
          "Mathis Landwehr",
          "Svenja Jung",
          "Eskindir Tesfay",
          "Maja Felicitas",
        ],
        url: "https://www.youtube.com/watch?v=Djo_91jN3Pk",
        genres: ["Sci-Fi", "Adventure"],
        country: "Germany",
        synopsis:
          "The 17-minute fan film opens with Darth Maul scrolling through data while we get voice over narration from the Emperor himself, who tells his apprentice that he must protect their secret at all costs. We also see snippets of footage of Darth Maul's training, when a Jedi ship is seen landing on the Sith apprentice's planet. The Emperor tells Maul that any intruder \"must be destroyed immediately,\" which lead to an epic lightsaber duel.",
      },
    ];

    //Act
    await request(app)
      .get("/movies")
      //Assert
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expectedBody);
        done();
      });
  });
});
