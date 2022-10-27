export interface IItemPlatform {
  id: string,
  text: string,
  icon: string,
}

export interface IPlatformAdvantages {
  platformCustomers: IItemPlatform[]
  widthitemtext?: number,
}
