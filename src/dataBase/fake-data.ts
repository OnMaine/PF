import type { Game } from '@/types';

const tournaments: Game[] = [
  {
    id: 1,
    tournament_name: 'La Liga Santander',
    date: 'Sat 6 May, 17:00',
    teams: [
      { name: 'FC Real Madrid', color: '#004996' },
      { name: 'FC Barcelona', color: '#A50044' },
    ],
    insights: {
      atm: '50',
      draw: '30',
      npl: '20'
    },
    stats: [
      {
        name: 'FC Real Madrid',
        w: 20,
        d: 5,
        l: 10,
      },
      {
        name: 'FC Barcelona',
        w: 15,
        d: 10,
        l: 10,
      }
    ],
    last_games: ['2-1', '1-3', '0-1', '2-0', '0-3']
  },
  {
    id: 2,
    tournament_name: 'Premier League',
    date: 'Sun 7 May, 16:00',
    teams: [
      { name: 'Manchester United', color: '#DA291C' },
      { name: 'Liverpool FC', color: '#C8102E' },
    ],
    insights: {
      atm: '45',
      draw: '35',
      npl: '20'
    },
    stats: [
      {
        name: 'Manchester United',
        w: 18,
        d: 8,
        l: 6,
      },
      {
        name: 'Liverpool FC',
        w: 16,
        d: 10,
        l: 6,
      }
    ],
    last_games: ['1-1', '2-2', '3-1', '0-0', '1-0']
  },
  {
    id: 3,
    tournament_name: 'Serie A',
    date: 'Sun 7 May, 18:00',
    teams: [
      { name: 'Juventus', color: '#000000' },
      { name: 'AC Milan', color: '#FB090B' },
    ],
    insights: {
      atm: '55',
      draw: '25',
      npl: '20'
    },
    stats: [
      {
        name: 'Juventus',
        w: 19,
        d: 7,
        l: 6,
      },
      {
        name: 'AC Milan',
        w: 17,
        d: 9,
        l: 6,
      }
    ],
    last_games: ['2-2', '1-1', '3-2', '0-1', '2-0']
  },
  {
    id: 4,
    tournament_name: 'Bundesliga',
    date: 'Sat 6 May, 15:30',
    teams: [
      { name: 'Bayern Munich', color: '#DC052D' },
      { name: 'Borussia Dortmund', color: '#FFE600' },
    ],
    insights: {
      atm: '60',
      draw: '20',
      npl: '20'
    },
    stats: [
      {
        name: 'Bayern Munich',
        w: 21,
        d: 6,
        l: 3,
      },
      {
        name: 'Borussia Dortmund',
        w: 18,
        d: 8,
        l: 4,
      }
    ],
    last_games: ['2-1', '1-3', '0-1', '2-0', '0-3']
  },
  {
    id: 5,
    tournament_name: 'Ligue 1',
    date: 'Sun 7 May, 21:00',
    teams: [
      { name: 'PSG', color: '#004170' },
      { name: 'OL', color: '#EF4135' },
    ],
    insights: {
      atm: '65',
      draw: '15',
      npl: '20'
    },
    stats: [
      {
        name: 'PSG',
        w: 22,
        d: 5,
        l: 3,
      },
      {
        name: 'OL',
        w: 15,
        d: 10,
        l: 5,
      }
    ],
    last_games: ['2-1', '1-3', '0-1', '2-0', '0-3']
  },
  {
    id: 6,
    tournament_name: 'Eredivisie',
    date: 'Sun 7 May, 14:30',
    teams: [
      { name: 'Ajax', color: '#D50032' },
      { name: 'PSV Eindhoven', color: '#FF0000' },
    ],
    insights: {
      atm: '50',
      draw: '30',
      npl: '20'
    },
    stats: [
      {
        name: 'Ajax',
        w: 20,
        d: 6,
        l: 4,
      },
      {
        name: 'PSV Eindhoven',
        w: 18,
        d: 8,
        l: 4,
      }
    ],
    last_games: ['2-1', '1-3', '0-1', '2-0', '0-3']
  }
];

export default tournaments;
