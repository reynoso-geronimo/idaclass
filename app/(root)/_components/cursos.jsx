



const cursos = () => {
  const  cursos=[
    {
      title: "Programación Web",
      subtitle: "Aprende a programar páginas web increíbles desde cero",
      image: "https://source.unsplash.com/random/150x150",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      title: "Data Analytics",
      subtitle: "Capacítate para utilizar cualquier volumen de datos",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
      days: 1,
      turn: "Noche",
    },
    {
      title: "Data Science",
      subtitle: "Adéntrate en la aplicación de modelos de aprendizaje automático",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
      days: 1,
      turn: "Noche",
    },
    {
      title: "IA para Negocios",
      subtitle: "Aprenderás las principales características de las aplicaciones de Inteligencia Artificial en los negocios",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
      days: 1,
      turn: "Noche",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between  my-4 mx-2">
    {cursos.map((curso, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  my-4 mx-2"> 
        <div className="bg-gray-200 shadow-sm rounded-md p-4">
          <img
            className="h-36 w-full object-cover"
            src={curso.image}
            alt="Imagen del curso"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {curso.title}
          </h3>
          <p className="text-base text-gray-600">
            {curso.subtitle}
          </p>
          <p className="text-sm text-gray-500">
            {curso.hours} horas, {curso.days} días, {curso.turn}
          </p>
          <a
            href=""
            className="block text-center text-blue-500 hover:text-blue-700"
          >
            Ver más
          </a>
        </div>
      </div>
    ))}
  </div>
  );
};

export default cursos;