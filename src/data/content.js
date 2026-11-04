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
    { value: '1 €', label: 'de cada entrada a conservación' },
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
    tagline: 'Una cúpula entera de océano sobre tu cabeza',
    text: 'Te tumbas en butacas reclinables y la cúpula se llena de agua: ballenas que pasan por encima, bancos de sardinas que giran a tu alrededor y el silencio del fondo marino.',
    facts: [['Duración', '30 min'], ['Edad mínima', 'Todas las edades'], ['Sesiones', 'Cada hora en punto']],
    hue: 'from-indigo-400/40 to-blue-950/10',
    icon: 'Orbit',
  },
  {
    id: 'cine-4d',
    name: 'Cine 4D',
    tagline: 'Siente la corriente en la piel',
    text: 'Película en 3D con butacas en movimiento, viento, agua pulverizada y aromas a mar. La experiencia más intensa del acuario: perfecta para los que quieren algo de aventura.',
    facts: [['Duración', '15 min'], ['Altura mínima', '1,10 m'], ['Sesiones', 'Cada 30 min']],
    hue: 'from-cyan-300/40 to-slate-900/10',
    icon: 'Waves',
  },
]

export const restaurant = {
  name: 'La Corriente',
  text: 'Nuestro restaurante, a 1.200 metros de profundidad simulada, sirve cocina mediterránea con pescado de lonja local y temporada. Trabajamos solo con especies certificadas como sostenibles y la carta cambia según lo que entra en puerto.',
  hours: [['Lunes a jueves', '12:00 – 17:00'], ['Viernes a domingo', '12:00 – 23:00']],
  menu: [
    { dish: 'Arroz meloso de sepia y alcachofa', price: '16 €' },
    { dish: 'Ceviche de corvina con leche de tigre de cítricos', price: '14 €' },
    { dish: 'Menú Mobi infantil (croquetas, pescado rebozado y helado)', price: '11 €' },
    { dish: 'Menú del día con postre y bebida', price: '18 €' },
  ],
}

export const gallery = [
  { caption: 'Mobi, nuestra guía, en la Sala Arrecifes', image: '/mobi-asistente.jpeg', span: 'md:col-span-2 md:row-span-2' },
  { caption: 'Bosque de kelp en la Sala RV', art: 'kelp' },
  { caption: 'La cúpula del Cine 360º', art: 'dome' },
  { caption: 'Medusas luminosas, zona de medianoche', art: 'jelly', span: 'md:row-span-2' },
  { caption: 'Banco de sardinas en el Cine 4D', art: 'school' },
  { caption: 'Esqueleto de rorcual en el museo', art: 'museum', span: 'md:col-span-2' },
]

export const merch = [
  { name: 'Peluche Mobi', detail: '30 cm, relleno reciclado', price: '19,90 €', image: '/mobi-asistente.jpeg' },
  { name: 'Camiseta “Sumérgete”', detail: 'Algodón orgánico, tallas XS–XXL', price: '22 €', icon: 'Shirt' },
  { name: 'Taza abisal', detail: 'Cambia de color con el calor', price: '12 €', icon: 'Coffee' },
  { name: 'Gorra Mobula', detail: 'Bordada, ajustable', price: '18 €', icon: 'Sun' },
  { name: 'Botella reutilizable', detail: 'Acero, 750 ml', price: '16 €', icon: 'Droplet' },
  { name: 'Libro “Gigantes del océano”', detail: 'Ilustrado, de 7 a 12 años', price: '15 €', icon: 'BookOpen' },
]

export const tickets = [
  {
    id: 'visita-escolar',
    name: 'Visita escolar',
    includes: ['Experiencia inmersiva (Sala RV + Sala Arrecifes)', 'Museo con guía educativa', 'Material didáctico para el aula'],
    price: '9 €',
    unit: 'por alumno',
    note: 'Grupos desde 15 alumnos. Un docente gratis por cada 10. De lunes a viernes, mañanas.',
    cta: 'Solicitar visita',
    href: '#contacto',
  },
  {
    id: 'pase-libre',
    name: 'Pase libre',
    includes: ['Experiencia inmersiva (Sala RV + Sala Arrecifes)', 'Museo del océano', 'Una sesión de Cine 360º'],
    price: '29 €',
    unit: 'adulto, 22 € niños de 4 a 12 años',
    note: 'La forma de verlo todo. Válido todo el día de la fecha elegida.',
    cta: 'Comprar pase libre',
    featured: true,
  },
  {
    id: 'experiencia-inmersiva',
    name: 'Experiencia inmersiva',
    includes: ['Sala RV', 'Sala Arrecifes'],
    price: '19 €',
    unit: 'adulto, 15 € niños',
    note: 'La Sala RV requiere 8 años o más. Los menores pueden disfrutar de la Sala Arrecifes.',
    cta: 'Comprar experiencia',
  },
  {
    id: 'cine',
    name: 'Cine',
    includes: ['Cine 360º: 8 €', 'Cine 4D: 10 €', 'Las dos sesiones: 15 €'],
    price: 'desde 8 €',
    unit: 'por sesión',
    note: 'Elige la hora de la sesión al comprar.',
    cta: 'Elegir sesión',
  },
  {
    id: 'reservas',
    name: 'Reservas',
    includes: ['Mesa en el restaurante La Corriente', 'Sin necesidad de entrada al acuario'],
    price: 'Gratis',
    unit: 'la reserva',
    note: 'Grupos de más de 8 personas: escríbenos.',
    cta: 'Reservar mesa',
    href: '#contacto',
  },
]

export const contact = {
  address: 'Av. del Puerto 12, 46024 Valencia',
  phone: '+34 960 000 000',
  email: 'hola@mobula-acuario.es',
  hours: [['Lunes a jueves', '10:00 – 20:00'], ['Viernes a domingo y festivos', '10:00 – 22:00']],
  socials: ['Instagram', 'TikTok', 'YouTube'],
  reasons: ['Información general', 'Visita escolar', 'Reserva de grupo', 'Restaurante', 'Prensa', 'Otro'],
}

export const faq = [
  { q: '¿Qué horario tenéis?', a: 'Abrimos de lunes a jueves de 10:00 a 20:00 y de viernes a domingo y festivos de 10:00 a 22:00.', href: '#contacto', link: 'Ver contacto' },
  { q: '¿Cuánto cuesta la entrada?', a: 'El Pase libre, que incluye casi todo, cuesta 29 € para adultos y 22 € para niños. La Experiencia inmersiva sola cuesta 19 €.', href: '#entradas', link: 'Ver entradas' },
  { q: '¿Desde qué edad se puede usar la RV?', a: 'La Sala RV es a partir de 8 años. Los más pequeños disfrutan muchísimo de la Sala Arrecifes, que no necesita gafas.', href: '#sala-rv', link: 'Ver Sala RV' },
  { q: 'Quiero traer a mi clase', a: 'La visita escolar cuesta 9 € por alumno e incluye la experiencia inmersiva, el museo y material para el aula.', href: '#visita-escolar', link: 'Ver visita escolar' },
  { q: '¿Puedo reservar en el restaurante?', a: 'Sí, y la reserva es gratis. No hace falta entrada al acuario para comer en La Corriente.', href: '#reservas', link: 'Reservar mesa' },
  { q: '¿Cómo llego?', a: 'Estamos en la Av. del Puerto 12, en Valencia. Metro Marítim a 5 minutos y parking propio para 200 coches.', href: '#contacto', link: 'Ver mapa' },
]
