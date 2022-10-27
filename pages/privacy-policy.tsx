import Head from 'next/head';
import { NextPage } from 'next';
import { WrapperFixed } from 'components/Wrappers';
import { TextDocument, TitleDocument } from 'components/UI/Typography';
import ListTextDocument from 'components/ListTextDocument';
import TitleBreadcrumbsBlock from 'components/TitleBreadcrumbsBlock';
import { mockListText } from 'utils/constants/constants';

const PrivacyPolicy: NextPage = () => (
  <>
    <Head>
      <title>honf.ru - FAQ</title>
    </Head>

    <WrapperFixed spacesBootom={60}>

      <TitleBreadcrumbsBlock isLink nameActiveLink="Политика конфиденциальности" title="Политика конфиденциальности" marginTop={24} />
      <TextDocument marginTop={18}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель организационной
        деятельности играет важную роль в формировании соответствующий условий активизации.
        Товарищи! рамки и место обучения кадров играет важную роль в формировании дальнейших
        направлений развития.
      </TextDocument>

      <TitleDocument marginTop={20}>Повседневная практика</TitleDocument>
      <TextDocument marginTop={12}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель организационной
        деятельности играет важную роль в формировании соответствующий условий активизации.
        Товарищи! рамки и место обучения кадров играет важную роль в формировании дальнейших
        направлений развития.
      </TextDocument>

      <ListTextDocument listText={mockListText} marginTop={10} />

      <TitleDocument marginTop={20}>Повседневная практика</TitleDocument>
      <TextDocument marginTop={12}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель организационной
        деятельности играет важную роль в формировании соответствующий условий активизации.
        Товарищи! рамки и место обучения кадров играет важную роль в формировании дальнейших
        направлений развития.
      </TextDocument>
      <TextDocument marginTop={10}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель организационной
        деятельности играет важную роль в формировании соответствующий условий активизации.
        Товарищи! рамки и место обучения кадров играет важную роль в формировании дальнейших
        направлений развития.
      </TextDocument>
      <TextDocument marginTop={10}>
        Задача организации, в особенности же постоянный количественный рост и сфера нашей
        активности играет важную роль в формировании форм развития.
        Повседневная практика показывает, что начало повседневной работы по формированию позиции
        требуют от нас анализа систем массового участия. Таким образом новая модель организационной
        деятельности играет важную роль в формировании соответствующий условий активизации.
        Товарищи! рамки и место обучения кадров играет важную роль в формировании дальнейших
        направлений развития.
      </TextDocument>

    </WrapperFixed>
  </>
);

export default PrivacyPolicy;