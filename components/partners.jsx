import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"; // Ajusta la ruta según tu estructura de carpetas
  
  const Partners = () => {
    const partnerLogos = [
      "LOGO1",
      "LOGO2",
      "LOGO3",
      "LOGO4",
      "LOGO5",
      "LOGO6",
    ];
  
    return (
      <section className="w-full flex flex-col items-center space-y-4 bg-gray-300 px-4 min-h-72 py-12">
        <h2 className="text-center text-2xl font-bold mb-6">Nuestros Partners</h2>
        <div className="w-full max-w-4xl flex flex-wrap justify-evenly items-center gap-6">
          {partnerLogos.map((logoText, index) => (
            <Card
              className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl shadow-2xl"
              key={index}
            >
              {logoText}
            </Card>
          ))}
        </div>
      </section>
    );
  };
  
  export default Partners;
  