import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CalendarIcon } from "lucide-react";

export function ScheduleCard() {
  return (
    <Card className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl lg:text-3xl font-bold text-center text-primary">Días y Horarios</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 lg:space-y-8">
        <div className="space-y-4 lg:space-y-6">
          <TimeSlot day="Martes" time="9:00 - 11:00" />
          <TimeSlot day="Sábados" time="19:00 - 21:00" />
        </div>
        <div className="space-y-2 lg:space-y-4">
          <h3 className="font-semibold text-center lg:text-xl">Fecha de inicio:</h3>
          <div className="flex items-center justify-center space-x-2 p-2 lg:p-4 rounded-lg bg-secondary lg:text-lg">
            <CalendarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            <span className="text-sm lg:text-base">Sábado 15 y Martes 18 de Marzo</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TimeSlot({ day, time }) {
  return (
    <div className="flex items-center justify-between p-2 lg:p-4 rounded-lg bg-secondary">
      <Badge variant="outline" className="text-sm lg:text-base font-medium">
        {day}
      </Badge>
      <div className="flex items-center space-x-2 text-sm lg:text-base">
        <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>{time}</span>
      </div>
    </div>
  );
}
