import { TrendingUp } from "lucide-react";

export default function StatisticsCard() {
    return (
      <div className="bg-gray-900 text-white p-4 rounded-2xl w-full min-w-[250px] relative">
        {/* Gráfico simple en la esquina superior derecha */}
        <div className="absolute top-2 right-6">
          <TrendingUp size={24} className="text-cyan-400" />
        </div>
  
        {/* Contenido principal */}
        <div className="space-y-3 text-xs">
          {/* Primera estadística */}
          <div className="space-y-2">
            <div className="font-bold text-white">+50.000</div>
            <div className="">CERTIFICADOS ENTREGADOS</div>
          </div>
  
          {/* Segunda estadística */}
          <div className="flex items-center">
            <span className="font-bold text-white">
              80% &nbsp;
            </span>
           DE EMPLEABILIDAD
          </div>
  
          {/* Tercera estadística */}
          <div className="font-light tracking-tight">
            <span className=" font-bold text-white">25 &nbsp;</span>
           AÑOS DE TRAYECTORIA
          </div>
        </div>
      </div>
    )
  }
  