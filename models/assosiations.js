import Sede from "./Sede";
import Horario from "./Horario";
import CursosFormacion from "./CursoFormacion";

// Define all associations here
Sede.belongsToMany(Horario, {
    through: 'horarios_sede_links',
    foreignKey: 'sede_id',
    otherKey: 'horario_id',
    timestamps: false
});

Horario.belongsToMany(Sede, {
    through: 'horarios_sede_links',
    foreignKey: 'horario_id',
    otherKey: 'sede_id',
    timestamps: false
});

Horario.belongsToMany(CursosFormacion, {
    through: 'horarios_cursos_formacion_links',
    foreignKey: 'horario_id',
    otherKey: 'cursos_formacion_id',
    timestamps: false
});

CursosFormacion.belongsToMany(Horario, {
    through: 'horarios_cursos_formacion_links',
    foreignKey: 'cursos_formacion_id',
    otherKey: 'horario_id',
    timestamps: false
});

export { Sede, Horario, CursosFormacion };
