import { Movies } from "./movies";


export interface ApiRes {
  Search:        Movies[];
  totalResults:  string;
  Response:      string;
}
