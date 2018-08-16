const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;
const User = require("../../src/db/models").User;

describe("Post", () => {

      beforeEach((done) => {
        this.topic;
        this.post;
        this.user;
   
        sequelize.sync({force: true}).then((res) => {
          User.create({
            email: "starman@tesla.com",
            password: "Trekkie4lyfe"
          })
          .then((user) => {
            this.user = user; //store the user
            Topic.create({
              title: "Expeditions to Alpha Centauri",
              description: "A compilation of reports from recent visits to the star system.",
              posts: [{
                title: "My first visit to Proxima Centauri b",
                body: "I saw some rocks.",
                userId: this.user.id
              }]
            }, {
              include: {
                model: Post,
                as: "posts"
              }
            })
            .then((topic) => {
              this.topic = topic; //store the topic
              this.post = topic.posts[0]; //store the post
              done();
            })
          })
        });  
  
    describe("#create()", () => {
  
      it("should create a topic object with a title and description", (done) => {
        Topic.create({
          title: "Microtransactions: A greedy practice or beneficial to game's life?",
          description: "From cosmetics to items that speed up progress or reduce grinding"
        })
        .then((topic) => {
          expect(topic.title).toBe("Microtransactions: A greedy practice or beneficial to game's life?");
          expect(topic.description).toBe("From cosmetics to items that speed up progress or reduce grinding");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
  
      it("should not create a topic with missing title or description", (done) => {
        Topic.create({
          title: "Microtransactions: A greedy practice or beneficial to game's life?"
        })
        .then((post) => {
         // the code in this block will not be evaluated since the validation error
         // will skip it. Instead, we'll catch the error in the catch block below
         // and set the expectations there
          done();
        })
        .catch((err) => {
          expect(err.message).toContain("Topic.description cannot be null");
          done();
        })
      });
    });
  
    describe("#getPosts()", () => {
  
      it("should return an array of posts associated with the topic the method is called on", (done) => {
        this.topic.getPosts()
        .then((associatedPosts) => {
          expect(associatedPosts[0].title).toBe("My first visit to Proxima Centauri b");
          expect(associatedPosts[0].body).toBe("I saw some rocks.");
          expect(associatedPosts[0].topicId).toBe(this.topic.id);
          done();
        });
      });
    });
  });
});