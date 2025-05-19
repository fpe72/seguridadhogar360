// src/data/beneficios.js
import { ShieldCheck, Baby, Dog, Smartphone, Eye, BellRing } from 'lucide-react';

export const beneficios = [
  {
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    texto: "Vigila a tu bebé en todo momento",
    descripcion:
      "Desde el salón puedes ver y escuchar cómo duerme tu bebé tranquilo en su habitación. Porque nada da más paz que saber que está bien, en el lugar más seguro del mundo: tu hogar.",
    imagen: "/images/beneficio-bebe.jpg",
  },
  {
    icon: <Dog className="w-8 h-8 text-blue-600" />,
    texto: "Controla a tus mascotas desde el móvil",
    descripcion:
      "Consulta desde el móvil cómo está tu compañero peludo mientras estás fuera. Habla con él, míralo, tranquilízalo. Porque ellos también sienten tu ausencia.",
    imagen: "/images/beneficio-mascotas.jpg",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    texto: "Cuida a tus mayores sin invadir su espacio",
    orientacion: "horizontal",
    descripcion:
      "Observa en tiempo real cómo está tu ser querido desde el móvil, sin molestar. Porque la seguridad también es respeto y cariño, incluso a distancia.",
    imagen: "/images/beneficio-mayores.jpg",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-600" />,
    texto: "Recibe alertas de movimiento inesperado",
    orientacion: "horizontal",
    descripcion:
      "La cámara detecta cualquier presencia y te avisa al instante. Así puedes actuar con calma desde cualquier lugar, sabiendo que tu hogar está vigilado.",
    imagen: "/images/beneficio-movimiento.jpg",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    texto: "Accede estés donde estés con tu móvil",
    orientacion: "horizontal",
    descripcion:
      "Incluso de vacaciones, puedes comprobar al instante qué ocurre en casa si se activa una alerta. Control total desde la app.",
    imagen: "/images/beneficio-remoto.jpg",
  },
  {
    icon: <BellRing className="w-8 h-8 text-blue-600" />,
    texto: "Disuade intrusos con presencia visible",
    orientacion: "horizontal",
    descripcion:
      "Una cámara visible ya es protección. Muchos intrusos desisten antes de actuar si ven que hay vigilancia activa. Seguridad silenciosa, pero efectiva.",
    imagen: "/images/beneficio-intrusos.jpg",
  },
];
