// AvisoLegal.jsx
import React from "react";
import Header from "../components/Header";

const AvisoLegal = () => (
  <>
  <Header />
  <div className="pt-32 max-w-3xl mx-auto px-6 py-12 text-sm leading-6">
    <h1 className="text-2xl font-bold mb-4">Aviso Legal</h1>
    <p className="mb-4">
      SeguridadHogar360 es un sitio web con fines exclusivamente informativos y comparativos. No
      vendemos directamente ningún producto ni gestionamos pedidos, garantías ni envíos.
    </p>
    <p className="mb-4">
      Los productos mostrados en esta web pertenecen a terceros, y su compra se realiza a través de
      plataformas externas, como Amazon. Cualquier responsabilidad derivada del uso, compra o
      malfuncionamiento de los productos corresponde a sus respectivos fabricantes o plataformas de
      venta.
    </p>
    <p className="mb-4">
      Al hacer clic en los enlaces de producto, puedes ser redirigido a Amazon u otras plataformas
      de afiliación, donde aplican sus propias condiciones de uso, política de cookies y privacidad.
    </p>
  </div>
  </>
);

export default AvisoLegal;