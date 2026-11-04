// Todo el texto de la landing vive aquí. Precios, horarios y datos de contacto son de ejemplo:
// sustitúyelos por los reales antes de publicar.

// Sustituir por la URL de la plataforma de venta de entradas cuando exista.
export const TICKETING_URL = '#contacto'

export const nav = [
  {
    label: 'Home',
    href: '#inicio',
    children: [
      { label: 'Sobre nosotros', href: '#sobre-nosotros' },
      { label: 'Novedades', href: '#novedades' },
    ],
  },
  {
    label: 'Experiencias',
    href: '#experiencias',
    children: [
      { label: 'Sala RV', href: '#sala-rv' },
      { label: 'Sala Arrecifes', href: '#sala-arrecifes' },
      { label: 'Museo', href: '#museo' },
      { label: 'Cine 360º', href: '#cine-360' },
      { label: 'Cine 4D', href: '#cine-4d' },
    ],
  },
  {
    label: 'Servicios',
    href: '#servicios',
    children: [{ label: 'Restaurante', href: '#restaurante' }],
  },
  { label: 'Galería', href: '#galeria' },
  { label: 'Merch', href: '#merch' },
  { label: 'Contacto', href: '#contacto' },
]

export const ticketsNav = {
  label: 'Entradas',
  href: '#entradas',
  children: [
    { label: 'Visita escolar', hint: 'Experiencia inmersiva + museo', href: '#visita-escolar' },
    { label: 'Pase libre', hint: 'Inmersiva + museo + cine 360º', href: '#pase-libre' },
    { label: 'Experiencia inmersiva', hint: 'Sala RV y Sala Arrecifes', href: '#experiencia-inmersiva' },
    { label: 'Cine', hint: '360º y 4D', href: '#cine' },
    { label: 'Reservas', hint: 'Restaurante', href: '#reservas' },
  ],
}

// Profundidad simulada: la página entera equivale a un descenso de 0 a 4.000 m.
export const zones = [
  { from: 0, name: 'Superficie' },
  { from: 1, name: 'Zona de luz' },
  { from: 200, name: 'Zona crepuscular' },
  { from: 1000, name: 'Zona de medianoche' },
  { from: 3000, name: 'Llanura abisal' },
]

export const hero = {
  title: 'El océano te espera\nUna nueva forma de descubrir el océano',
  text: 'Sumergite en un mundo extraordinario donde la tecnología, la imaginación y la vida acuática se encuentran. Explorá, sentí y descubrí sin límites',
  primary: { label: 'Comprar entradas', href: '#entradas' },
  secondary: { label: 'Ver experiencias', href: '#experiencias' },
}

export const about = {
  title: 'Un acuario sin peceras',
  paragraphs: [
    'MOBULA es un espacio de exploración, aprendizaje y asombro. Unimos experiencias inmersivas, tecnología y concientización para acercarte a la vida acuática de una manera nueva donde las emociones flotan. Vení a formar parte del océano, conocer sus habitantes y descubrir por qué vale la pena cuidarlo.',
    'Trabajamos con biólogos marinos y centros de investigación para que cada especie se mueva, suene y se comporte como en libertad. Una parte de cada entrada financia proyectos de conservación de mantas y arrecifes en el Mediterráneo y el Índico.',
  ],
  stats: [
    { value: '120', label: 'especies recreadas' },
    { value: '2.400 m²', label: 'de salas inmersivas' },
    { value: '0', label: 'animales en cautividad' },
    { value: '1 $', label: 'de cada entrada a conservación' },
  ],
}

export const news = [
  {
    date: 'Octubre 2026',
    title: 'CONICET: 57 nuevas especies marinas descubiertas',
    text: 'El CONICET confirmó el descubrimiento de 57 nuevas especies marinas y 5 nuevos géneros tras analizar muestras del cañón submarino de Mar del Plata.',
  },
  {
    date: 'Diciembre 2026',
    title: 'Temporada de verano Cine 4D',
    text: 'Whalefall 2026·1h 46m\nUn thriller de supervivencia submarina dirigido por Brian Duffield en el que un buzo (Austin Abrams) busca los restos de su padre y es tragado por un cachalote de 60 toneladas, disponiendo de solo sesenta minutos de oxígeno para escapar.',
  },
  {
    date: 'Todo el curso',
    title: 'Talleres de biología marina para familias',
    text: 'Sábados por la mañana, de 6 a 12 años. Diseccionamos (virtualmente) un tiburón y aprendemos a leer las mareas.',
  },
]

export const experiences = [
  {
    id: 'sala-rv',
    name: 'Sala RV',
    tagline: 'Animate a nadar con nuestros lentes de realidad virtual',
    text: 'Animate a nadar con nuestros lentes de realidad virtual y sumergite en nuestras experiencias inmersivas. Eligí que corriente tomar y nada con tu animal favorito.',
    facts: [['Duración', '25 min'], ['Edad mínima', '8 años'], ['Aforo', '16 personas por pase']],
    hue: 'from-sky-400/40 to-blue-900/10',
    icon: 'Glasses',
  },
  {
    id: 'sala-arrecifes',
    name: 'Sala Arrecifes',
    tagline: 'Sin gafas; paredes, suelo y techo se convierten en un ecosistema',
    text: 'Sin gafas; paredes, suelo y techo se convierten en un ecosistema perfecto para que hagas una pausa, disfrutes de las profundidades y aprendas junto a tu guía de confianza.',
    facts: [['Duración', '20 min'], ['Edad mínima', 'Todas las edades'], ['Aforo', '40 personas']],
    hue: 'from-coral/40 to-teal-700/10',
    icon: 'Shell',
  },
  {
    id: 'museo',
    name: 'Museo analógico',
    tagline: 'Descubrí nuestras últimas noticias',
    text: 'Descubrí nuestras últimas noticias a nivel nacional; historias, especies, y curiosidades para comprender mejor la vida acuática que tanto nos intriga y emociona.',
    facts: [['Duración', 'Libre (20 min)'], ['Edad mínima', 'Todas las edades'], ['Accesible', 'Sí, con audioguía']],
    hue: 'from-amber-200/30 to-blue-900/10',
    icon: 'Landmark',
  },
  {
    id: 'cine-360',
    name: 'Cine 360º',
    tagline: 'Más allá de la superficie',
    text: 'Dejá que el océano te rodee por completo. A través de una proyección panorámica de 360°, viajá por paisajes submarinos, descubrí especies fascinantes y explorá rincones del mundo acuático como si estuvieras allí. Una experiencia audiovisual inmersiva que transforma cada mirada en un nuevo descubrimiento y te acerca a la inmensidad de la vida bajo el agua.',
    facts: [['Duración', '30 min'], ['Edad mínima', 'Todas las edades'], ['Sesiones', 'Cada hora en punto']],
    hue: 'from-indigo-400/40 to-blue-950/10',
    icon: 'Orbit',
  },
  {
    id: 'cine-4d',
    name: 'Cine 4D',
    tagline: 'Sentí la corriente en la piel',
    text: 'Prepará tus sentidos para vivir el océano de una manera diferente. A través de películas inspiradas en la vida acuática, viajá junto a sus protagonistas, explorá hábitats sorprendentes y acompañá sus aventuras. Con efectos especiales que incorporan movimiento, viento, agua y otras sensaciones, cada historia trasciende la pantalla para convertirse en una experiencia que vas a sentir en primera persona.',
    facts: [['Duración', '1 hora 30 minutos'], ['Altura mínima', '1,10 m'], ['Sesiones', 'Cada 2 horas']],
    hue: 'from-cyan-300/40 to-slate-900/10',
    icon: 'Waves',
  },
]

export const restaurant = {
  name: 'La Corriente',
  text: 'Una pausa para disfrutar, compartir y descubrir nuevos sabores. En MOBULA, la experiencia continúa en la mesa, con una propuesta gastronómica que combina ingredientes regionales, productos frescos y sabores inspirados en la riqueza de nuestro entorno. Un espacio pensado para disfrutar en familia, compartir buenos momentos y encontrar opciones para todos los gustos.',
  hours: [['Viernes a domingo', '12:00 – 17:00 / 19:00 – 00:00']],
  menu: [
    { dish: 'Empanadas mendocinas', description: 'Carne cortada a cuchillo, aceitunas y especias, acompañadas de salsa criolla.', price: '12.000 $' },
    { dish: 'Milanesa de ternera', description: 'Milanesa casera con papas rústicas y limón.', price: '20.000 $' },
    { dish: 'Risotto de hongos y zapallo', description: 'Arroz cremoso con hongos salteados, calabaza asada y parmesano. (vegetariano | sin TAC)', price: '19.000 $' },
    { dish: 'Ravioles de calabaza y ricota', description: 'Pasta casera rellena de calabaza y ricota con salsa suave de manteca y salvia. (vegetariano)', price: '18.000 $' },
    { dish: 'Pequeños exploradores', description: 'Bastoncitos de pollo crocantes con papas fritas y bebida. (menú infantil)', price: '14.000 $' },
    { dish: 'Tesoro de chocolate', description: 'Brownie de chocolate con helado de vainilla. (disponible sin TAC)', price: '9.000 $' },
    { dish: 'Dulce profundidad', description: 'Flan casero con dulce de leche y crema. (sin TAC)', price: '8.000 $' },
  ],
}

export const gallery = [
  { caption: 'Mobu, nuestra guía, en la Sala Arrecifes', image: '/mobi-asistente.jpeg', span: 'md:col-span-2 md:row-span-2' },
  { caption: 'Bosque de kelp en la Sala RV', art: 'kelp' },
  { caption: 'La cúpula del Cine 360º', art: 'dome' },
  { caption: 'Medusas luminosas, zona de medianoche', art: 'jelly', span: 'md:row-span-2' },
  { caption: 'Banco de sardinas en el Cine 4D', art: 'school' },
  { caption: 'Esqueleto de rorcual en el museo', art: 'museum', span: 'md:col-span-2' },
]

export const merch = [
  { name: 'Peluche Mobu', detail: 'Tamaño grande 40cm, tamaño mediano 15cm', price: '19,90 $', image: '/merch/image.png' },
  { name: 'Remera Mobu', detail: 'Algodón orgánico, tallas XS–XXL', price: '22 $', image: '/merch/image copy.png' },
  { name: 'Gorra Mobula', detail: 'Gabardina/algodón, azul marino bordado', price: '18 $', image: '/merch/image copy 2.png' },
  { name: 'Tote Bag', detail: 'Lienzo/algodón orgánico, natural + logo', price: '16 $', image: '/merch/image copy 3.png' },
  { name: 'Botella reutilizable', detail: 'Acero inoxidable, azul marino 750ml', price: '24 $', image: '/merch/image copy 4.png' },
  { name: 'Cuaderno', detail: 'Hojas de material reciclado, tapa dura', price: '14 $', image: '/merch/image copy 5.png' },
  { name: 'Llavero Mobu', detail: 'Acompañante compacto', price: '8 $', image: '/merch/image copy 6.png' },
]

export const tickets = [
  {
    id: 'visita-escolar',
    name: 'Visita escolar',
    includes: ['Experiencia inmersiva (Sala RV + Sala Arrecifes)', 'Museo con guía educativa', 'Material didáctico para el aula'],
    price: '9 $',
    unit: 'por alumno',
    note: 'Grupos desde 15 alumnos. Un docente gratis por cada 10. De lunes a viernes, mañanas.',
    cta: 'Solicitar visita',
    href: '#contacto',
  },
  {
    id: 'pase-libre',
    name: 'Pase libre',
    includes: ['Experiencia inmersiva (Sala RV + Sala Arrecifes)', 'Museo del océano', 'Una sesión de Cine 360º'],
    price: '29 $',
    unit: 'adulto, 22 $ niños de 4 a 12 años',
    note: 'La mejor forma de verlo todo. Válido todo el día de la fecha elegida.',
    cta: 'Comprar pase libre',
    featured: true,
  },
  {
    id: 'experiencia-inmersiva',
    name: 'Experiencia inmersiva',
    includes: ['Sala RV', 'Sala Arrecifes'],
    price: '19 $',
    unit: 'adulto, 15 $ niños',
    note: 'La Sala RV requiere 8 años o más. Los menores pueden disfrutar de la Sala Arrecifes.',
    cta: 'Comprar experiencia',
  },
  {
    id: 'cine',
    name: 'Cine',
    includes: ['Cine 360º: 8 $', 'Cine 4D: 10 $', 'Las dos sesiones: 15 $'],
    price: 'desde 8 $',
    unit: 'por sesión',
    note: 'Seleccionar la hora de la sesión al comprar.',
    cta: 'Seleccionar sesión',
  },
  {
    id: 'reservas',
    name: 'Reservas',
    includes: ['Mesa en el restaurante La Corriente', 'Sin necesidad de entrada al acuario'],
    price: 'Gratis',
    unit: 'la reserva',
    note: 'Grupos de más de 8 personas: comuníquense con nosotros.',
    cta: 'Reservar mesa',
    href: '#contacto',
  },
]

export const contact = {
  address: 'Rivadavia 701-799, M5504 Godoy Cruz, Mendoza',
  phone: '+54 261 6323186',
  email: 'experienciamobula@gmail.com',
  hours: [['Lunes a jueves', '09:00 – 16:00 / 18:00 – 22:00'], ['Viernes a domingo y feriados', '17:00 – 22:00']],
  socials: ['Instagram', 'TikTok', 'YouTube'],
  reasons: ['Información general', 'Visita escolar', 'Reserva de grupo', 'Restaurante', 'Prensa', 'Otro'],
}

export const faq = [
  { q: '¿Qué horario tienen?', a: 'Abrimos de lunes a jueves de 10:00 a 20:00 y de viernes a domingo y festivos de 10:00 a 22:00.', href: '#contacto', link: 'Ver contacto' },
  { q: '¿Cuánto cuesta la entrada?', a: 'El Pase libre, que incluye casi todo, cuesta 29 $ para adultos y 22 $ para niños. La Experiencia inmersiva sola cuesta 19 $.', href: '#entradas', link: 'Ver entradas' },
  { q: '¿Desde qué edad se puede usar la RV?', a: 'La Sala RV es a partir de 8 años. Los más pequeños disfrutan muchísimo de la Sala Arrecifes, que no necesita gafas.', href: '#sala-rv', link: 'Ver Sala RV' },
  { q: 'Quiero traer a mi clase', a: 'La visita escolar cuesta 9 $ por alumno e incluye la experiencia inmersiva, el museo y material para el aula.', href: '#visita-escolar', link: 'Ver visita escolar' },
  { q: '¿Puedo reservar en el restaurante?', a: 'Sí, y la reserva es gratis. No se requiere entrada al acuario para comer en La Corriente.', href: '#reservas', link: 'Reservar mesa' },
  { q: '¿Cómo llego?', a: 'Estamos en la Av. del Puerto 12, en Valencia. Metro Marítim a 5 minutos y parking propio para 200 coches.', href: '#contacto', link: 'Ver mapa' },
]
