// PoliticaPrivacidad.jsx
import React from "react";
import Header from "../components/Header";

const PoliticaPrivacidad = () => (
  <>
  <Header />
  <div className="pt-32 max-w-3xl mx-auto px-6 py-12 text-sm leading-6">
    <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
    <p className="mb-4">
      SeguridadHogar360 no recoge datos personales de los usuarios ni utiliza formularios de
      contacto, comentarios o suscripción.
    </p>
    <p className="mb-4">
      Este sitio puede incluir enlaces de afiliación a plataformas de terceros (como Amazon), los
      cuales podrían usar cookies u otros mecanismos de seguimiento según sus propias políticas de
      privacidad, ajenas a este sitio.
    </p>
    <p className="mb-4">
      Para más información sobre el tratamiento de datos o condiciones de uso de dichas plataformas,
      consulta directamente en la web del proveedor (por ejemplo: Amazon).
    </p>
  </div>
  </>
);

export default PoliticaPrivacidad;
