import clsx from "clsx";

const Stepper = ({ currentStep }) => {
  const totalSteps = 3;
  const stepPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className=" px-4 w-full">
      <div className="bg-muted rounded-2xl w-full py-4 flex justify-start items-center gap-4 px-4">
        <div
          className={clsx(
            "rounded-full flex items-center justify-center",
            "w-12 h-12" // Ajustamos el tamaño del div
          )}
          style={{
            background: `conic-gradient(#3a5dae ${stepPercentage}%, #A59C94 ${stepPercentage}%)`,
          }}
        >
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
            {currentStep}/{totalSteps}
          </div>
        </div>
        <div>
          {(() => {
            switch (currentStep) {
              case 1:
                return (
                  <>
                    <h3 className="font-medium">Datos Personales</h3>
                    <p className="text-muted-foreground text-sm">Siguiente: Información de pago</p>
                  </>
                );
              case 2:
                return (
                  <>
                    <h3 className="font-medium">Información de Pago</h3>
                    <p className="text-muted-foreground  text-sm">Siguiente: Confirmación</p>
                  </>
                );
              case 3:
                return (
                  <>
                    <h3 className="font-medium">Confirmación</h3>
                    <p className="text-muted-foreground  text-sm">Este es el último paso</p>
                  </>
                );
              default:
                return "Paso no encontrado";
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
