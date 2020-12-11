import React from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import './carrossel.css'
import { rolar } from './rolar.js'



export const Carrossel: React.FC = () => {
    return (
        <div id="carrossel_wrapper">
            <div id="carrossel">
                <IonButton className='botao_carrossel esquerdo' fill='clear'  onClick={rolar}></IonButton>
                <IonButton className='botao_carrossel direito'  fill='clear' onClick={rolar}></IonButton>
                <div id="a" className="carrossel_item">
                    <div className="carrossel_item_legenda">
                        <IonButton className="carrossel_link" fill='outline'>Conselho do Povo Brasileiro</IonButton>
                        <p className="carrossel_item_legenda_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti nihil molestias
                            ratione distinctio magnam, consequuntur officiis culpa. Ratione molestias excepturi amet
                            fugit, alias eligendi doloremque repudiandae obcaecati non voluptatibus?</p>
                    </div>
                </div>

                <div id="b" className="carrossel_item">
                    <div className="carrossel_item_legenda">
                        <IonButton className="carrossel_link" fill='outline'>Pais Afetivos</IonButton>
                        <p className="carrossel_item_legenda_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti nihil molestias
                            ratione distinctio magnam, consequuntur officiis culpa. Ratione molestias excepturi amet
                            fugit, alias eligendi doloremque repudiandae obcaecati non voluptatibus?</p>
                    </div>
                </div>

                <div id="c" className="carrossel_item">
                    <div className="carrossel_item_legenda">
                        <IonButton className="carrossel_link" fill='outline'>LGBT.ORG</IonButton>
                        <p className="carrossel_item_legenda_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti nihil molestias
                            ratione distinctio magnam, consequuntur officiis culpa. Ratione molestias excepturi amet
                            fugit, alias eligendi doloremque repudiandae obcaecati non voluptatibus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}