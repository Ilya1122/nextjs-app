export interface IBestFreelancer {
  id: number;
  photoUrl: string | null;
  firstName: string;
  lastName: string;
  city: string | null;
  description: string | null;
  special: string | null;
  _count: {
      projects: number;
  }
}
