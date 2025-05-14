// src/data/beneficios.js
import { ShieldCheck, Baby, Dog, Smartphone, Eye, BellRing } from 'lucide-react';

export const beneficios = [
  {
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    texto: "Controla a tu bebé desde cualquier lugar",
    descripcion:
      "Desde el salón, puedes ver y escuchar cómo duerme tu bebé tranquilo en su habitación. Porque nada da más paz que saber que está bien, descansando en el lugar más seguro del mundo: tu hogar.",
    imagen: "/images/beneficio-bebe.jpg",
  },
  {
    icon: <Dog className="w-8 h-8 text-blue-600" />,
    texto: "Vigila a tus mascotas cuando no estás",
    descripcion:
      "Consulta desde tu móvil cómo está tu compañero peludo cuando estás fuera de casa. Porque ellos también sienten tu ausencia.",
    imagen: "/images/beneficio-mascotas.jpg",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    texto: "Protege a tus mayores con tranquilidad",
    orientacion: "horizontal", // imagen 16:9
    descripcion:
      "Desde el móvil, puedes comprobar en tiempo real cómo está tu ser querido, descansando en su rincón favorito del hogar. Porque sentirse acompañado, aunque sea a distancia, es la forma más cálida de cuidar. La seguridad no es solo vigilancia, es amor, presencia y respeto.",
    imagen: "/images/beneficio-mayores.jpg",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-600" />,
    texto: "Detecta movimiento en tu hogar",
    orientacion: "horizontal", // Imagen 16:9
    descripcion:
      "La cámara detecta cualquier presencia inesperada y te avisa al instante. Desde el móvil puedes ver qué ocurre, aunque estés lejos. Una forma de mantener tu casa vigilada sin perder tu tranquilidad.",
    imagen: "/images/beneficio-movimiento.jpg",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    texto: "Accede desde el móvil, estés donde estés",
    orientacion: "horizontal", // Imagen 16:9
    descripcion:
      "Incluso de vacaciones, puedes ver al instante qué ocurre en tu casa cuando salta una alerta. Disfruta con tranquilidad sabiendo que la cámara te mantiene informado y tu hogar seguro.",
    imagen: "/images/beneficio-remoto.jpg",
  },
  {
    icon: <BellRing className="w-8 h-8 text-blue-600" />,
    texto: "Disuade a posibles intrusos con presencia visible",
    orientacion: "horizontal", // Imagen 16:9
    descripcion:
      "Un sistema de cámaras visibles es a menudo la mejor medida de prevención. Al detectar la presencia de vigilancia, muchos intrusos desisten antes de actuar. Porque la mejor seguridad es aquella que no tiene que activarse: simplemente está ahí.",
    imagen: "/images/beneficio-intrusos.jpg",
  },
];
