import sequelize  from "../lib/sequelize";
import { DataTypes }  from "sequelize";

const Blog = sequelize.define("blog", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    titulo: {
        type: DataTypes.STRING,

    },
   introduccion: {
        type: DataTypes.STRING,

    },
foto: {
        type: DataTypes.STRING,

    },
   cuerpo: {
        type: DataTypes.TEXT('long') ,

    }

}, {
    timestamps: false
}
, {
    freezeTableName: true
  }
)
export default Blog;