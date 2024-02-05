interface Article {
  id: number;
  title: string;
  description: string;
  begin: string | null;
  end: string | null;
  posted: string;
  modified: string;
  url: string;
  files: any[];
  links: any[];
}

interface NewsApiResponse {
  total?: number;
  data?: Article[];
  error?: string;
}

interface Query {
  locale: string;
  page: number;
}

interface localeMappingNewsLang {
  [key: string]: string;
  us: string;
  tw: string;
}
