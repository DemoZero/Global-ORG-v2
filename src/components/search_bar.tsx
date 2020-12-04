import React, {useState} from 'react'
import { IonSearchbar } from '@ionic/react'

export const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonSearchbar  placeholder='Pesquisar vagas' className='search_bar ion-align-self-end' value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
    )
}