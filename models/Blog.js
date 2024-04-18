import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

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
}

)
export default Blog;