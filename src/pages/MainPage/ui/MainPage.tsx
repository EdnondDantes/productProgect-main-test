import React from 'react';
import {useTranslation} from "react-i18next";
import { Text } from 'shared/ui/Text/Text';

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Text title='ыфлваьь' text='лыфаль' />
        </div>
    );
};

export default MainPage;
