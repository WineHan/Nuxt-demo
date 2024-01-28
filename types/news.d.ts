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

interface ApiResponse {
  total?: number;
  data?: Article[];
  error?: string;
}

interface Query {
  locale: string;
  page: number;
}
