import MobileFilterForm from './MobileFilterForm';
import {
  AccordionBox, AcordionContainer, AccordionHeader, TitleAcordion, AccordionDetail,
  Image, TitleAcordionBox, ContainerReset, ButtonReset,
} from './styles';

interface IMobileFilter {
  changeOpenAccordion: () => void,
  open: boolean,
}

const MobileFilter: React.FC<IMobileFilter> = ({ open, changeOpenAccordion }) => (
  <AcordionContainer>
    <AccordionBox
      expanded={open}
      onChange={changeOpenAccordion}
      square
    >
      <AccordionHeader
        expandIcon={(
          <Image
            src="/icons/arrowBottom.svg"
            width={24}
            height={24}
            alt="arrow"
          />
          )}
        aria-controls="accordion-content"
        id="accordion-header"
      >
        <TitleAcordionBox>
          <Image src="/icons/filterIcon.svg" alt="icon" />
          <TitleAcordion>
            Свернуть фильтры
          </TitleAcordion>
        </TitleAcordionBox>
      </AccordionHeader>
      <AccordionDetail>
        <MobileFilterForm />
        <ContainerReset>
          <ButtonReset
            onClick={changeOpenAccordion}
            endIcon={(
              <Image src="/icons/closeIcon.svg" width={20} height={20} alt="close" />
            )}
          >
            Сбросить все фильтры
          </ButtonReset>
        </ContainerReset>
      </AccordionDetail>
    </AccordionBox>
  </AcordionContainer>
);

export default MobileFilter;
