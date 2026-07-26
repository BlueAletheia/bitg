import lunesGameImg from '../img/games/juego-lunes.jpg'
import martesGameImg from '../img/games/juego-martes.jpg'
import miercolesGameImg from '../img/games/juego-miercoles.jpg'
import juevesGameImg from '../img/games/juego-jueves.jpg'
import viernesGameImg from '../img/games/juego-viernes.jpg'
import sabadoGameImg from '../img/games/juego-sabado.jpg'
import domingoGameImg from '../img/games/juego-domingo.jpg'

export const CATALOGO_ACTIVIDADES = [
    {
        id: 1,
        dia: 'Lunes',
        fecha: '2 de junio',
        juego: 'Tekken 8',
        descripcion: 'Abrimos la semana por todo lo alto con un torneo de Tekken 8, el rey de la lucha 1 contra 1, en formato eliminatoria directa entre jugadores locales.',
        artistaId: 1,
        imagen: lunesGameImg
    },
    {
        id: 2,
        dia: 'Martes',
        fecha: '3 de junio',
        juego: 'Fortnite',
        descripcion: 'Todos contra todos por la victoria royal. Apuesta por tus favoritos con la moneda de la retransmisión oficial y consigue premios de nuestros patrocinadores',
        artistaId: 2,
        imagen: martesGameImg
    },
    {
        id: 3,
        dia: 'Miércoles',
        fecha: '4 de junio',
        juego: 'Mecha chameleon',
        descripcion: 'Oculto a plena vista o planteando una estrategia de evasión, el juego para artistas que ha revolucionado internet',
        artistaId: 3,
        imagen: miercolesGameImg
    },
    {
        id: 4,
        dia: 'Jueves',
        fecha: '5 de junio',
        juego: 'FC26',
        descripcion: 'Revive la emoción del mundial en un mismo lugar: El bracket oficial del torneo más famoso del mundo del deporte en vivo y en directo',
        artistaId: 4,
        imagen: juevesGameImg
    },
    {
        id: 5,
        dia: 'Viernes',
        fecha: '6 de junio',
        juego: 'League of Legends',
        descripcion: 'La grieta del invocador se llena de amistosos entre creadores de contenido invitados, con premios para el público.',
        artistaId: 5,
        imagen: viernesGameImg
    },
    {
        id: 6,
        dia: 'Sábado',
        fecha: '7 de junio',
        juego: 'Valorant',
        descripcion: 'Showmatch 5vs5 de Valorant por el honor y la gloria, con sorteo de merchandising entre quienes donen durante la emisión.',
        artistaId: 6,
        imagen: sabadoGameImg
    },
    {
        id: 7,
        dia: 'Domingo',
        fecha: '8 de junio',
        juego: 'Counter Strike 2',
        descripcion: 'Cerramos la semana benéfica con un torneo amistoso de CS2 y un concierto de despedida.',
        artistaId: 7,
        imagen: domingoGameImg
    },
]