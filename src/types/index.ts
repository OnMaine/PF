
interface Team {
  name: string;
  color: string;
}

interface Insight {
  atm: string;
  draw: string;
  npl: string;
}

interface Stats {
  name: string;
  w: number;
  d: number;
  l: number;
}

export interface Game {
  id: number;
  tournament_name: string;
  date: string;
  teams: Team[];
  insights: Insight;
  stats: Stats;
  last_games: Array<string>;
}
