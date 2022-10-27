/* eslint-disable max-len */
import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { WrapperFixed } from 'components/Wrappers';
import { TextDocument, TitleDocument } from 'components/UI/Typography';
import TitleBreadcrumbsBlock from 'components/TitleBreadcrumbsBlock';
import StyledAccordion from 'components/UI/Accordion';
import { mockDataAccordion } from 'utils/constants/constants';

const FAQ: NextPage = () => {
  const [openIdAccordion, setOpenIdAccordion] = useState<string | boolean>(false);

  const changeOpenAccordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setOpenIdAccordion(isExpanded ? panel : false);
  };

  return (
    <>
      <Head>
        <title>honf.ru - FAQ</title>
      </Head>

      <WrapperFixed spacesBootom={60}>

        <TitleBreadcrumbsBlock isLink nameActiveLink="FAQ" title="FAQ" marginTop={24} />
        <TextDocument marginTop={18}>
          Задача организации, в особенности же постоянный количественный рост и сфера нашей
          активности играет важную роль в формировании форм развития.
          Повседневная практика показывает, что начало повседневной работы по формированию позиции
          требуют от нас анализа систем массового участия. Таким образом новая модель
          организационной деятельности играет важную роль в формировании соответствующий
          условий активизации. Товарищи! рамки и место обучения кадров играет важную роль в
          формировании дальнейших направлений развития.
        </TextDocument>

        <TitleDocument marginTop={20}>Часто задаваемые вопросы</TitleDocument>
        <TextDocument marginTop={12}>
          Задача организации, в особенности же постоянный количественный рост и нашей активности
          играет важную роль в формировании форм развития. Повседневная практика показывает, начало
          повседневной работы по формированию позиции требуют от нас анализа систем массового.
        </TextDocument>

        <StyledAccordion
          mockDataAccordion={mockDataAccordion}
          changeOpenAccordion={changeOpenAccordion}
          openIdAccordion={openIdAccordion}
        />

      </WrapperFixed>
    </>
  );
};

export default FAQ;
