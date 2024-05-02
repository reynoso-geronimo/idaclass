import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Curso from "./Curso";
import Categoria from "./Categoria";

const Blog = sequelize.define("blogs", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    titulo: {
        type: DataTypes.STRING,

    },
    tag: {
        type: DataTypes.STRING,

    },
    subtitulo: {
        type: DataTypes.STRING,

    },
    introduccion: {
        type: DataTypes.STRING,

    },
    foto: {
        type: DataTypes.STRING,

    },
    cuerpo: {
        type: DataTypes.TEXT('long'),

    }

}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true
})
Blog.belongsToMany(Curso, {
    through: 'blogs_curso_links',
    foreignKey: 'blog_id',
    otherKey: 'curso_id',
    timestamps: false
}
)
Blog.belongsToMany(Categoria, {
    through: 'blogs_categoria_links',
    foreignKey: 'blog_id',
    otherKey: 'categoria_id',
    timestamps: false
})
export default Blog;