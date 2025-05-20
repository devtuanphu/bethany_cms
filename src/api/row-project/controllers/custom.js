module.exports = {
  async findProjectBySlug(ctx) {
    try {
      const { slug } = ctx.params;

      // Lấy tất cả row-project, populate project và media nested
      const rows = await strapi.entityService.findMany(
        "api::row-project.row-project",
        {
          populate: {
            project: {
              populate: {
                groupMedia: true,
                avatar: true,
              },
            },
          },
        }
      );

      // Tìm project theo slug trong rows
      let foundProject = null;
      for (const row of rows) {
        if (row.project && row.project.length > 0) {
          foundProject = row.project.find((proj) => proj.slug === slug);
          if (foundProject) break;
        }
      }

      if (!foundProject) return ctx.notFound("Project not found");

      // Trả về project với đầy đủ media
      ctx.body = foundProject;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
