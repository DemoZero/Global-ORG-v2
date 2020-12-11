import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import { Search } from '../components/search_bar'
import { Login_button_opens_modal } from '../components/login'
import { Carrossel } from '../components/carrossel'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <div id="toolbar">

            <div className='logo_wrapper'>
              <svg className='logo_svg' width="40" height="40" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9988 31C59.9988 47.0163 47.0152 60 30.9991 60C14.9831 60 1.99947 47.0163 1.99947 31C1.99947 14.9837 14.9831 2 30.9991 2C47.0152 2 59.9988 14.9837 59.9988 31Z" stroke="#ffffff" stroke-width="2"/>
                <line x1="30.9991" y1="2" x2="30.9991" y2="61" stroke="#ffffff" stroke-width="2"/>
                <path d="M17.9992 30.9999C17.9992 8.49992 30.999 1.99992 30.999 1.99992C32.8095 1.8422 43.9989 8.49992 43.9989 30.9999C43.9989 53.4999 32.8095 60.1576 30.9991 59.9999C29.1886 60.1576 17.9992 53.4999 17.9992 30.9999Z" stroke="#ffffff" stroke-width="2"/>
                <line x1="0.998718" y1="30.7885" x2="59.9994" y2="30.7885" stroke="#ffffff" stroke-width="2"/>
                <path d="M10.9993 53C10.9993 53 13.9993 42 30.4991 42C46.9989 42 49.9988 53 49.9988 53" stroke="#ffffff" stroke-width="2"/>
                <path d="M11.4993 9.5C11.4993 9.5 14.4993 20.5 30.9991 20.5C47.4989 20.5 50.4988 9.5 50.4988 9.5" stroke="#ffffff" stroke-width="2"/>
                </svg>.ORG
            </div>
            <div id="menu">
              <IonButton className='menu_item' color='f4f5f8' fill='clear'>Início</IonButton>
              <IonButton className='menu_item' color='f4f5f8' fill='clear'>Vagas</IonButton>
              <IonButton className='menu_item' color='f4f5f8' fill='clear'>Sobre nós</IonButton>
            </div>
            <Search />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <main className='main_content'>
          <div className="inicio_texto_wrapper">
            <h2 className='inicio_texto_header'>
              A plataforma <strong>GLOBAL.ORG</strong> existe para conectar ONGs com pessoas.
            </h2>

            <Login_button_opens_modal />
          </div>
          <div className='carrossel_wrapper'>
            <Carrossel />
          </div>
        </main>
      </IonContent>

    </IonPage>
  );
};

export default Home;
