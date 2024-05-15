import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Curso from "./Curso";
import Categoria from "./Categoria";
import Profesional from "./Profesional";

const Blog = sequelize.define("blogs", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    titulo: {
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
Blog.belongsToMany(Curso, {
    through: 'blogs_cursos_embudo_links',
    foreignKey: 'blog_id',
    otherKey: 'curso_id',
    timestamps: false,
    as: 'cursosEmbudo'
}

)
Blog.belongsToMany(Categoria, {
    through: 'blogs_categoria_links',
    foreignKey: 'blog_id',
    otherKey: 'categoria_id',
    timestamps: false
})
Blog.belongsToMany(Profesional, {
    through: 'blogs_profesional_links',
    foreignKey: 'blog_id',
    otherKey: 'profesional_id',
    timestamps: false
});
export default Blog;