module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const postRoutes = require("../routes/posts");
      const flairRoutes = require("../routes/flairs");
      const userRoutes = require("../routes/users");
      const topicRoutes = require("../routes/topics");
      const adRoutes = require("../routes/advertisements");
      app.use(staticRoutes);
      app.use(postRoutes);
      app.use(flairRoutes);
      app.use(userRoutes);
      app.use(topicRoutes);
      app.use(adRoutes);
    }
  }