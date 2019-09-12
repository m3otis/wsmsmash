import { Component, OnInit } from '@angular/core';
import players from '../../../assets/sept2019.json';
import { Player } from 'src/app/models/player.js';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  playersList: Array<Player>;
  dataSource: MatTableDataSource<Player>;
  displayedColumns: string[] = [
    'position',
    'name',
    'characters',
    'wins',
    'losses',
    'totalgames',
    'placementPoints',
    'score',
    'winPercent',
    'totalScore',
    'notablePlacements'
  ];

  constructor() {}

  ngOnInit() {
    this.playersList = this.mapToPlayers();
    this.replacePlacementWithIcon();
    this.replaceCharacterWithIcon();
    this.dataSource = new MatTableDataSource(this.playersList);
  }

  replaceCharacterWithIcon() {
    this.playersList.forEach(p => {
      let characters = p.characters.split(',');
      characters = characters.map(x => {
        return x.trim();
      });

      const charactersWithImage = characters.map(c => {
        if (c === 'Ken') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/ken.png">';
        } else if (c === 'Chrom') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/chrom.png">';
        } else if (c === 'Bowser') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/bowser.png">';
        } else if (c === 'Ganondorf') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/ganondorf.png">';
        } else if (c === 'Capt. Falcon') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/captain_falcon.png">';
        } else if (c === 'Link') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/link.png">';
        } else if (c === 'Roy') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/roy.png">';
        } else {
          return c;
        }
      });

      console.log(charactersWithImage);

      p.characters = charactersWithImage.join(' ');
      // const placementsWithEmojiArray: string[] = placements.map(x => {
      //   if (x === '[**1st**]') {
      //     return '🥇';
      //   } else if (x === '[*2nd*]') {
      //     return '🥈';
      //   } else if (x === '[3rd]') {
      //     return '🥉';
      //   } else {
      //     return '';
      //   }
      // });

      // const placementsWithEmojiString: string = placementsWithEmojiArray.join('');
      // console.log(placementsWithEmojiString);

      // p.notablePlacements = placementsWithEmojiString;
    });
  }

  replacePlacementWithIcon() {
    this.playersList.forEach(p => {
      const placements = p.notablePlacements.split(' ');

      const placementsWithEmojiArray: string[] = placements.map(x => {
        if (x === '[**1st**]') {
          return '🥇';
        } else if (x === '[*2nd*]') {
          return '🥈';
        } else if (x === '[3rd]') {
          return '🥉';
        } else {
          return '';
        }
      });

      const placementsWithEmojiString: string = placementsWithEmojiArray.join(
        ''
      );
      p.notablePlacements = placementsWithEmojiString;
    });
  }

  mapToPlayers() {
    const playerObjects: Array<Player> = new Array<Player>();

    players.forEach(p => {
      const currentPlayer: Player = {
        position: playerObjects.length + 1,
        name: p.Name,
        characters: p.Characters,
        wins: p.Wins,
        losses: p.Losses,
        totalgames: p.TotalGames,
        placementPoints: p.Placement_Points,
        score: p.Score,
        winPercent: p.WinPercent,
        totalScore: p.Total_Score,
        notablePlacements: p.Notable_placements
      };

      playerObjects.push(currentPlayer);
    });

    return playerObjects;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
