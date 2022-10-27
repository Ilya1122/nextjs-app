export interface SelectProps {
  data?: { value: string | number, label: string }[],
}

export interface IPortfolioCard {
  id: number,
  title: string,
  image: string,
  count: number,
  text: string,
}

export interface ICardReviews {
  userName: string,
  img: string,
  coment: string,
  raiting: string,
  id: number,
}
