import React from 'react'
import { IonButton } from '@ionic/react'


export const Botoes_inicio: React.FC = () => {
    return (
        <div id="entre_ou_cadastre">
        <p className='entre_ou_cadastre'><IonButton size='large' fill='solid' className='entre'>Entrar</IonButton> <IonButton size='large' className='cadastre'>Cadastre-se</IonButton></p>
        </div>
    )
}
