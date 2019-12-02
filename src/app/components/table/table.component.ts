import { Component, OnInit } from '@angular/core';
import players from '../../../assets/nov2019-2.json';
import { Player } from 'src/app/models/player.js';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  a = '';
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // try {
    //   this.playersList = this.dataService.mapToPlayers(new Array<Player>());
    //   this.replacePlacementWithIcon();
    //   this.replaceCharacterWithIcon();
    //   this.dataSource = new MatTableDataSource(this.playersList);
    // } catch (e) {
      // console.log(e + ' something went wrong during the get request');
      this.playersList = this.mapToPlayers();
      this.replacePlacementWithIcon();
      this.replaceCharacterWithIcon();
      this.dataSource = new MatTableDataSource(this.playersList);
    //}
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
        } else if (c === 'Wii Fit Trainer') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/wii_fit_trainer.png">';
        } else if (c === 'Mr. Game and Watch') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/mr_game_and_watch.png">';
        } else if (c === 'Joker') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/joker.png">';
        } else if (c === 'King K. Rool') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/king_k_rool.png">';
        } else if (c === 'Sonic') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/sonic.png">';
        } else if (c === 'Zelda') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/zelda.png">';
        } else if (c === 'Samus') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/samus.png">';
        } else if (c === 'Falco') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/falco.png">';
        } else if (c === 'Little Mac') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/little_mac.png">';
        } else if (c === 'Palutena') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/palutena.png">';
        } else if (c === 'Incineroar') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/gaogaen.png">';
        } else if (c === 'Marth') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/marth.png">';
        } else if (c === 'Lucina') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/lucina.png">';
        } else if (c === 'Lucas') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/lucas.png">';
        } else if (c === 'Villager') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/villager.png">';
        } else if (c === 'Robin') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/robin.png">';
        } else if (c === 'Ridley') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/ridley.png">';
        } else if (c === 'King Dedede') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/king_dedede.png">';
        } else if (c === 'R.O.B.') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/rob.png">';
        } else if (c === 'Kirby') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/kirby.png">';
        } else if (c === 'Luigi') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/luigi.png">';
        } else if (c === 'Snake') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/snake.png">';
        } else if (c === 'Pokemon Trainer') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/pokemon_trainer.png">';
        } else if (c === 'Cloud') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/cloud.png">';
        } else if (c === 'Captain Falcon') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/captain_falcon.png">';
        } else if (c === 'Mewtwo') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/mewtwo.png">';
        } else if (c === 'Inkling') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/inkling.png">';
        } else if (c === 'Banjo-Kazooie') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/banjo_and_kazooie.png">';
        } else if (c === 'Ness') {
          return '<img height="50px" src="https://www.smashbros.com/assets_v2/img/fighter/pict/ness.png">';
        } else {
          return c;
        }
      });

      p.characters = charactersWithImage.join(' ');
    });
  }
}
