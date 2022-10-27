export interface IFreelancer {
  id: number;
  photoUrl: string | null;
  firstName: string;
  lastName: string;
  city: string | null;
  description: string | null;
  special: string | null;
  portfolio: any[];
}
