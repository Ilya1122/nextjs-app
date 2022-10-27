import { ListBox, ListRow, IconListRow } from './styles';

interface IListText {
  text: string,
  id?: number,
}

interface IListTextDocument {
  marginTop?: number
  listText: IListText[],
}

const ListTextDocument: React.FC<IListTextDocument> = ({ marginTop, listText }) => (
  <ListBox marginTop={marginTop}>
    {listText.map(({ id, text }: IListText) => (
      <ListRow key={id}>
        <IconListRow /> {text}
      </ListRow>
    ))}
  </ListBox>
);

export default ListTextDocument;
