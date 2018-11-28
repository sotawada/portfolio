module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    category: DataTypes.STRING,
    blogImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING
  })

  return Blog
}
