import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import EldenRing from '../images/eldenringmanga.webp';
import Slime from '../images/slime.jpeg';
import SwordArt from '../images/saocalibur1.webp';
import ChainSawMan from '../images/chainsawman13.jpg';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const hotItems = [
    {
        id: 1,
        title: "Elden Ring 01",
        description: "Las Tierras Intermedias se encuentran en un conflicto continuo a causa de la fragmentación del Anillo de Elden. En medio de las batallas y el caos, aparece un tiznado que debe seguir la Guía de la Gracia y convertirse en el Señor de Elden. Elegido por el corcel espectral Torrent y protegido por la doncella Melina, inicia su aventura…",
        image: EldenRing,
        price: 2000
    },
    {
        id: 2,
        title: "Aquella vez que me convertí en Slime 04",
        description: "EMPIEZA UNA NUEVA INVASIÓN! ¿QUÉ HARÁ NUESTRO PROTAGONISTA? Una noticia sacude el gran bosque de Jura... El señor de los orcos, el monstruo de la desgracia, ha empezado a invadirlo con un ejército de 200 000 soldados. Tras aceptar la petición de la supervisora del bosque, Rimur planea una alianza con los hombres lagarto...",
        image: Slime,
        price: 2000
    },
    {
        id: 3,
        title: "Sword Art Online: Calibur",
        description: "¡Sumamos un nuevo arco de SAO, esta vez en tomo único! Kirito enfrenta una complicada travesía para obtener la implacable arma legendaria \"Holy Sword Excalibur\" y así salvar a la diosa Urd de la invasión de los gigantes de hielo a su tierra natal, Jotunheim.",
        image: SwordArt,
        price: 2200
    }
];

const Home = () => {
    return (
        <React.Fragment>
            <Box>
                <Typography variant="h3" gutterBottom color="text.secondary">
                    Hot Items!
                </Typography>
            </Box>
            <ItemListContainer items={hotItems} />
        </React.Fragment>
    )
}
export default Home
