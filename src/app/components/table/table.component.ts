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
    this.dataSource = new MatTableDataSource(this.playersList);
    console.log(this.playersList);
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
