// src/data/productos.js

const productos = [
    {
      nombre: "Xiaomi Smart Camera C300 – Cámara de vigilancia 360°",
      imagen: "https://m.media-amazon.com/images/I/61IPSGiPJFL._AC_SX679_.jpg",
      descripcion: "Cámara WiFi 2K para interiores con detección de movimiento y visión nocturna.",
      enlace: "https://www.amazon.es/dp/B0B6PG6S81?tag=seguhogar360-21&th=1",
      detalles: {
        ideal_para: "Ideal para hogares con bebés, mascotas o personas mayores. Puedes vigilar desde el móvil con audio y visión nocturna avanzada.",
        caracteristicas: [
          "Resolución 2K (2304x1296p)",
          "Visión nocturna por infrarrojos",
          "Detección de movimiento y personas",
          "Audio bidireccional (altavoz y micrófono)",
          "Grabación en tarjeta MicroSD (hasta 256 GB)",
          "Compatible con asistentes de voz (Alexa y Google Home)",
          "Rotación 360° horizontal y 118° vertical"
        ]
      },
      valoracion: 4.4,
      resenas: 6330,
      ventas_ultimo_anio: "Más de 3.600 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "2K",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: true
      },
    },
    {
      nombre: "TP-Link Tapo C210 – Cámara de vigilancia 3MP",
      imagen: "https://m.media-amazon.com/images/I/81Uq0-NNY8L._AC_SX679_.jpg",
      descripcion: "Cámara WiFi motorizada con resolución 3MP, visión nocturna y seguimiento.",
      enlace: "https://www.amazon.es/dp/B095CLQ1PT?tag=seguhogar360-21&th=1",
      detalles: {
        ideal_para: "Ideal para quienes necesitan un mayor nivel de detalle en la imagen, con seguimiento automático de movimiento en habitaciones completas.",
        caracteristicas: [
          "Resolución 3MP (2304 x 1296 píxeles)",
          "Visión nocturna por infrarrojos (hasta 9 metros)",
          "Detección de movimiento con notificaciones instantáneas",
          "Audio bidireccional (micrófono + altavoz)",
          "Almacenamiento local en tarjeta microSD (hasta 256 GB)",
          "Rotación motorizada: 360° horizontal y 114° vertical",
          "Modo privacidad y compatibilidad con Alexa"
        ]
      },
      valoracion: 4.6,
      resenas: 32362,
      ventas_ultimo_anio: "Más de 24.000 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "2K",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: true
      },
    },
    {
      nombre: "EZVIZ C6N – Cámara interior motorizada",
      imagen: "https://m.media-amazon.com/images/I/61XVb52W37L._AC_SX569_.jpg",
      descripcion: "Cámara domo 1080P con audio bidireccional y control remoto desde app móvil.",
      enlace: "https://www.amazon.es/dp/B07W4FMSD9?tag=seguhogar360-21&th=1",
      detalles: {
        ideal_para: "Perfecta para vigilar habitaciones interiores, niños pequeños o mascotas mientras no estás en casa.",
        caracteristicas: [
          "Resolución Full HD 1080p",
          "Visión nocturna por infrarrojos (hasta 10 m)",
          "Rotación motorizada 360° horizontal y 55° vertical",
          "Audio bidireccional (micrófono + altavoz)",
          "Seguimiento automático de movimiento",
          "Grabación local en tarjeta microSD (hasta 256 GB)",
          "Compatible con Alexa y Google Assistant"
        ]
      },
      valoracion: 4.4,
      resenas: 29673,
      ventas_ultimo_anio: "Más de 6.000 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "1080p",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: true
      },
    },
    {
      nombre: "TP-Link Tapo C200 — Cámara de seguridad WiFi 360°",
      imagen: "https://m.media-amazon.com/images/I/81Lwf+nrLqL._AC_SX679_.jpg",
      descripcion: "Cámara motorizada 1080p con visión nocturna y control desde el móvil.",
      enlace: "https://www.amazon.es/dp/B07XLML2YS?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Diseñada para hogares que quieren controlar habitaciones completas con movimiento automático, ideal para bebés, mascotas o salones.",
        caracteristicas: [
          "Resolución Full HD 1080p",
          "Visión nocturna infrarroja (hasta 9 m)",
          "Rotación 360° horizontal y 114° vertical",
          "Detección de movimiento y alertas en tiempo real",
          "Audio bidireccional (altavoz y micrófono)",
          "Modo privacidad con cobertura de lente",
          "Almacenamiento local en tarjeta microSD (hasta 128 GB)",
          "Compatible con Alexa y Google Assistant"
        ]
      },
      valoracion: 4.6,
      resenas: 132811,
      ventas_ultimo_anio: "Más de 48.000 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "1080p",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: true,
        compatibleAlexa: true
      },
    },
    {
      nombre: "Imou Ranger 2 — Cámara IP WiFi para interiores",
      imagen: "https://m.media-amazon.com/images/I/61awm6iKjaL._AC_SY879_.jpg",
      descripcion: "Cámara 1080p con seguimiento automático, micrófono y altavoz integrados.",
      enlace: "https://www.amazon.es/dp/B09VY4D8VY?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Ideal para hogares con mascotas o personas mayores. Ofrece seguimiento automático y audio bidireccional para estar conectado estés donde estés.",
        caracteristicas: [
          "Resolución Full HD 1080p",
          "Visión nocturna por infrarrojos (hasta 10 m)",
          "Detección de movimiento con seguimiento automático",
          "Audio bidireccional (altavoz + micrófono integrados)",
          "Rotación 355° horizontal y 80° vertical",
          "Grabación local en tarjeta microSD (hasta 256 GB)",
          "Compatible con Alexa y Google Assistant",
          "Modo privacidad activable desde la app"
        ]
      },
      valoracion: 4.4,
      resenas: 3703,
      ventas_ultimo_anio: "Más de 1.200 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "1080p",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: true
      },
    },
    {
      nombre: "TP-Link Tapo C100 — Cámara fija WiFi 1080p",
      imagen: "https://m.media-amazon.com/images/I/41AdkkInfcL._AC_SX679_.jpg",
      descripcion: "Compacta y económica. Ideal para escritorio, bebés o mascotas.",
      enlace: "https://www.amazon.es/dp/B083V41T6M?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Ideal para quienes buscan una cámara fija sencilla para colocar en estanterías, escritorios o rincones del hogar sin complicaciones.",
        caracteristicas: [
          "Resolución Full HD 1080p",
          "Visión nocturna de hasta 9 metros",
          "Detección de movimiento con alertas automáticas",
          "Audio bidireccional (micrófono y altavoz integrados)",
          "Grabación en tarjeta microSD (hasta 128 GB)",
          "Modo privacidad con desconexión remota",
          "Instalación sencilla y base ajustable",
          "Compatible con Alexa y Google Assistant"
        ]
      },
        valoracion: 4.5,
        resenas: 22134,
        ventas_ultimo_anio: "Más de 3.600 unidades vendidas el último año",
        filtros: {
          interior: true,
          exterior: false,
          movil: false,
          fija: true,
          resolucion: "1080p",
          visionNocturna: true,
          audioBidireccional: true,
          deteccionMovimiento: true,
          almacenamientoSD: true,
          enmascaramientoZonas: true,
          compatibleAlexa: true
        },
    },
    {
      nombre: "TP-Link Tapo C225 — Cámara WiFi con IA y seguimiento",
      imagen: "https://m.media-amazon.com/images/I/81DMXue4d4L._AC_SL1500_.jpg",
      descripcion: "Cámara interior 2K QHD con IA para detección avanzada y visión nocturna en color.",
      enlace: "https://www.amazon.es/dp/B0BN4BQ1DM?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Perfecta para usuarios exigentes que buscan máxima nitidez, inteligencia artificial para distinguir personas y visión nocturna a color.",
        caracteristicas: [
          "Resolución 2K QHD (2560 × 1440p)",
          "Visión nocturna en color con luz estelar integrada",
          "IA para detección de personas, mascotas y llanto de bebé",
          "Audio bidireccional (micrófono + altavoz)",
          "Rotación 360° horizontal y 149° vertical",
          "Modo privacidad con obturador físico de lente",
          "Grabación local en microSD (hasta 512 GB)",
          "Compatible con Alexa y Google Assistant"
        ]
      },
      valoracion: 4.6,
      resenas: 1930,
      ventas_ultimo_anio: "Más de 2.400 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "2K",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: true,
        compatibleAlexa: true
      },
    },
    {
      nombre: "EZVIZ H6c — Cámara motorizada WiFi 360º",
      imagen: "https://m.media-amazon.com/images/I/61OcKxul3GL._AC_SX679_.jpg",
      descripcion: "Rotación 360º, audio bidireccional, compatible con Alexa. Ideal para interiores.",
      enlace: "https://www.amazon.es/dp/B0BPR55F4Q?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Perfecta para vigilar mascotas o habitaciones amplias con movimiento. Ideal para hogares con niños o personas dependientes.",
        caracteristicas: [
          "Resolución Full HD 1080p",
          "Rotación motorizada 360° horizontal y 75° vertical",
          "Seguimiento inteligente de movimiento (Smart Tracking)",
          "Audio bidireccional con cancelación de ruido",
          "Visión nocturna infrarroja (hasta 10 m)",
          "Compatible con Alexa y Google Home",
          "Grabación en tarjeta microSD (hasta 256 GB)",
          "Modo privacidad con control desde la app"
        ]
      },
      valoracion: 4.0,
      resenas: 0,
      ventas_ultimo_anio: "",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "1080p",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: true,
        compatibleAlexa: true
      },
    },
    {
      nombre: "TP-Link Tapo C110 — Cámara fija FHD 3MP con tarjeta SD",
      imagen: "https://m.media-amazon.com/images/I/51MuR4pHUML._AC_SX679_.jpg",
      descripcion: "Cámara fija con resolución 3MP, detección de movimiento y almacenamiento local.",
      enlace: "https://www.amazon.es/dp/B094DM9LZQ?tag=seguhogar360-21",
      detalles: {
        ideal_para: "Pensada para quienes buscan una cámara fija sencilla, con mejor definición que una 1080p y con grabación sin nube.",
        caracteristicas: [
          "Resolución 3MP (2304x1296p)",
          "Detección de movimiento con alertas automáticas",
          "Audio bidireccional con micrófono y altavoz integrados",
          "Modo privacidad desde la app",
          "Grabación en tarjeta microSD (hasta 256 GB)",
          "Visión nocturna por infrarrojos (hasta 9 m)",
          "Compatible con Alexa y Google Assistant",
          "Fácil de instalar y configurar"
        ]
      },
      valoracion: 4.5,
      resenas: 4516,
      ventas_ultimo_anio: "Más de 1.200 unidades vendidas el último año",
      filtros: {
        interior: true,
        exterior: false,
        movil: false,
        fija: true,
        resolucion: "2K",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: true,
        compatibleAlexa: true
      },
    },
    {
      nombre: "EZVIZ CP1 4MP:",
      imagen: "https://m.media-amazon.com/images/I/61lpI7-1LTL._AC_SX679_.jpg",
      descripcion: "Camara de Vigilancia Interior con Seguimiento Automático, 4MP Cámara IP Domicilio WiFi 360° para Bebe con Visión Nocturna Color, Detección Humana,Llamada Bidireccional, Soporta 512GB, CP1 4MP",
      enlace: "https://www.amazon.es/dp/B095YN4TML?tag=seguhogar360-21&th=1",
      detalles: {
        ideal_para: "Seguridad interior, Monitoreo de mascotas, Monitoreo de bebé",
        caracteristicas: [
          "4MP Resolución & 360° Protección con Patrulla Personalizada",
          "Detección Humanas y Seguimiento Automático",
          "Visión Nocturna en Color Inteligente",
          "Detección de Ruido Fuerte & Llamadas Bidireccionales",
          "Soporta Tarjeta MicroSD hasta 512GB & EZVIZ CloudPlay"
        ]
      },
      valoracion: 4.5,
      resenas: 2141,
      ventas_ultimo_anio: "600",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "4MP",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: false
      }
    },
    {
      nombre: " Imou Cámara Vigilancia Interior Ranger 2C",
      imagen: "https://m.media-amazon.com/images/I/614UL3k1ZaL._AC_SY879_.jpg",
      descripcion: "Imou 4MP Cámara Vigilancia WiFi Interior para Mascotas",
      enlace: "https://www.amazon.es/dp/B095Y1JNHG/?tag=seguhogar360-21&th=1",
      detalles: {
        ideal_para: "para Mascotas,360° Cámara IP WiFi con Detección de Humano, Visión Nocturna, Audio Bidireccional, Control Remoto, Modo Privacidad,Compatible con Alexa",
        caracteristicas: [
          "QHD 2.5K y Cobertura de 360​°",
          "Detección Humana y Alarmas con Inteligencia Artificial",
          "Detección Humana y Alarmas con Inteligencia Artificial",
          "Seguimiento Inteligente y Funciona con Alexa",
          "Puede grabar videos en una tarjeta SD de hasta 256 GB (no incluida) o en Imou Cloud"
        ]
      },
      valoracion: 4.4,
      resenas: 7188,
      ventas_ultimo_anio: "6000",
      filtros: {
        interior: true,
        exterior: false,
        movil: true,
        fija: false,
        resolucion: "undefined",
        visionNocturna: true,
        audioBidireccional: true,
        deteccionMovimiento: true,
        almacenamientoSD: true,
        enmascaramientoZonas: false,
        compatibleAlexa: true
      }
    }    
  ];
  
  export default productos;
  