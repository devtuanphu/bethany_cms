module.exports = {
  routes: [
    {
      method: "GET",
      path: "/row-project/project/:slug",
      handler: "custom.findProjectBySlug",
      config: {
        policies: [], // Bạn có thể thêm các policy nếu cần
        middlewares: [], // Thêm middleware nếu cần
      },
    },
  ],
};
