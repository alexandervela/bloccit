module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const postRoutes = require("../routes/posts");
      const topicRoutes = require("../routes/topics");
      const adRoutes = require("../routes/advertisements");
      app.use(staticRoutes);
      app.use(postRoutes);
      app.use(topicRoutes);
      app.use(adRoutes);
    }
  }