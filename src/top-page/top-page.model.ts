export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: string;
    middleSalary: string;
    seniorSalary: string;
  }
  advantages: Array<{
    title: string;
    description: string;
  }>;
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
