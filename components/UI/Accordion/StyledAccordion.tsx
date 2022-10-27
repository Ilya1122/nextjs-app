import {
  AccordionBox, AcordionContainer, AccordionHeader, TitleAcordion, AccordionDetail,
  AccordionDetailText, Image,
} from './styles';

interface IItemAccordion {
  text: string,
  title: string,
  id: string,
}

interface IPropsAccordion {
  mockDataAccordion: IItemAccordion[],
  changeOpenAccordion: (pane: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void,
  openIdAccordion: string | boolean,
}

const StyledAccordion: React.FC<IPropsAccordion> = ({
  mockDataAccordion, changeOpenAccordion, openIdAccordion,
}) => (
  <AcordionContainer>
    {mockDataAccordion.map(({ title, text, id }: IItemAccordion) => (
      <AccordionBox
        expanded={openIdAccordion === id}
        onChange={changeOpenAccordion(id)}
        key={id}
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
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <TitleAcordion>
            {title}
          </TitleAcordion>
        </AccordionHeader>
        <AccordionDetail>
          <AccordionDetailText>
            {text}
          </AccordionDetailText>
        </AccordionDetail>
      </AccordionBox>
    ))}
  </AcordionContainer>
);

export default StyledAccordion;
