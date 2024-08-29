// Menu.js
import React from 'react';

import styles from './Menu.module.css';
import Subsection from './Subsection.js';
import { bocadilloItems, dessertItems, ensaladaItems, entrantesItems, fajitaItems, hamburgPerritoItems, hamburguesasEspecialesItems, menusMokiItems, paAmbOliItems, pepiSandwichItems, pizzaItems, platoCombinadoItems, toastItems, veganoItems } from './menuData.js';
import { useMenuToggle } from './menuLogic.js';


const MenuComidas = () => {
    const { visibleSections, toggleSection } = useMenuToggle();

    return (
        <>
            <div className={styles.desplegables}>
                <h3 className={styles.numero} onClick={() => toggleSection('toast')}>TOSTADAS</h3>
                <div className={`${styles.contenedor} ${visibleSections.toast ? styles.mostrar : ''}`}>
                    <Subsection title="" items={toastItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('bocatas')}>BOCADILLOS</h3>
                <div className={`${styles.contenedor} ${visibleSections.bocatas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={bocadilloItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('sanpepis')}>SANDWICHES Y PEPITOS</h3>
                <div className={`${styles.contenedor} ${visibleSections.sanpepis ? styles.mostrar : ''}`}>
                    <Subsection title="" items={pepiSandwichItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('entrantes')}>ENTRANTES</h3>
                <div className={`${styles.contenedor} ${visibleSections.entrantes ? styles.mostrar : ''}`}>
                    <Subsection title="" items={entrantesItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('perriguesas')}>PERRITOS Y HAMBURGUESAS</h3>
                <div className={`${styles.contenedor} ${visibleSections.perriguesas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={hamburgPerritoItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('hamburguesasEspeciales')}>NUESTRAS HAMBURGUESAS ESPECIALES</h3>
                <div className={`${styles.contenedor} ${visibleSections.hamburguesasEspeciales ? styles.mostrar : ''}`}>
                    <Subsection title="" items={hamburguesasEspecialesItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('paAmbOli')}>PA AMB OLI</h3>
                <div className={`${styles.contenedor} ${visibleSections.paAmbOli ? styles.mostrar : ''}`}>
                    <Subsection title="" items={paAmbOliItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('fajitas')}>FAJITAS</h3>
                <div className={`${styles.contenedor} ${visibleSections.fajitas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={fajitaItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('ensaladas')}>ENSALADAS</h3>
                <div className={`${styles.contenedor} ${visibleSections.ensaladas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={ensaladaItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('veganos')}>NUESTROS VEGANOS</h3>
                <div className={`${styles.contenedor} ${visibleSections.veganos ? styles.mostrar : ''}`}>
                    <Subsection title="" items={veganoItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('menusMoki')}>NUESTROS MENUS MOKITROKIS O TRADICIONAL DIMONIS</h3>
                <div className={`${styles.contenedor} ${visibleSections.menusMoki ? styles.mostrar : ''}`}>
                    <Subsection title="" items={menusMokiItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('platosCombinados')}>PLATOS COMBINADOS</h3>
                <div className={`${styles.contenedor} ${visibleSections.platosCombinados ? styles.mostrar : ''}`}>
                    <Subsection title="" items={platoCombinadoItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('pizza')}>PIZZAS</h3>
                <div className={`${styles.contenedor} ${visibleSections.pizza ? styles.mostrar : ''}`}>
                    <Subsection title="" items={pizzaItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('desserts')}>POSTRES</h3>
                <div className={`${styles.contenedor} ${visibleSections.desserts ? styles.mostrar : ''}`}>
                    <Subsection title="" items={dessertItems} />
                </div>
            </div>
        </>
    );
};

export default MenuComidas;

