import React, { useState } from 'react'
import { IonButton, IonIcon, IonToolbar, IonHeader, IonTitle, IonModal, IonList, IonItem, IonInput, IonLabel } from '@ionic/react'
import './login.css'



export const Login_button_opens_modal: React.FC = () => {
    const [show, setShow] = useState(false)
    return (
        <div id="entre_ou_cadastre">
            <IonButton size='large' fill='solid' expand='full' className='entre' onClick={() => setShow(true)}>Entrar</IonButton>
            
            <IonModal isOpen={show} backdropDismiss={false} cssClass='login'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                        <IonIcon className='close_icon' name='close' onClick={() => setShow(false)}></IonIcon>
                    </IonToolbar>
                </IonHeader>
                <IonList className='lista'>
                    <IonItem>
                        <IonLabel className='label' position="stacked">E-mail</IonLabel>
                        <IonInput type='email' className='login_input'> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel className='label' position="stacked">Senha</IonLabel>
                        <IonInput type='password' className='login_input'> </IonInput>
                    </IonItem>
                    <IonButton expand='block' onClick={() => setShow(false)} className='modal_entrar'>Entrar</IonButton>
                    <a className='esqueceu' href='#'>Esqueceu a sua senha?</a>
                </IonList>
            </IonModal>
        </div>
    )
}
