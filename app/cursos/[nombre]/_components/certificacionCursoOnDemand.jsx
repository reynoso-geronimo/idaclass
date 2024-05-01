"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const CertificacionCursoOnDemand = () => {
  return (
    <div className="flex flex-col justify-end gap-2 w-auto h-[180px] py-4 mt-8 max-sm:px-3 px-6 bg-gradient-to-t from-[#3A5DAE] to-[#1D2F57] rounded-3xl text-white relative">
      <Image
        src={"/cursosFormacion/Ribbon.svg"}
        height={50}
        width={50}
        alt="certificado"
        className="absolute top-6 right-6"
      />
      <span className="lg:text-xl font-medium ">
        Certificado <br /> IdaClass con <br /> autenticación QR
      </span>
      {/* MODAL TRIGGER */}
      <Dialog>
        <DialogTrigger className="max-lg:text-sm text-idaclass3 font-bold text-left">
          {" "}
          VER CERTIFICADO
        </DialogTrigger>
        <DialogContent>
          <DialogDescription>CERTIFCIADO</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificacionCursoOnDemand;
