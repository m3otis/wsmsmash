import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player.js';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;

  constructor(private http: HttpClient) {}

  getData(): Observable<Player[]> {
    const a = this.http
      .get<Player[]>(this.url)
      .pipe(map(x => this.mapToPlayers(x)));

    return a;
  }

  getData2(): Observable<string> {
    return this.http.get<string>('http://192.168.178.26:5010/').pipe(
      tap(x => {
        console.log(x);
      })
    );
  }

  mapToPlayers(players: Array<Player>): Array<Player> {
    const playerObjects: Array<Player> = new Array<Player>();

    players.forEach(p => {
      const currentPlayer: Player = {
        position: playerObjects.length + 1,
        name: p.name,
        characters: p.characters,
        wins: p.wins,
        losses: p.losses,
        totalgames: p.totalgames,
        placementPoints: p.placementPoints,
        score: p.score,
        winPercent: p.winPercent,
        totalScore: p.totalScore,
        notablePlacements: p.notablePlacements
      };

      playerObjects.push(currentPlayer);
    });

    return playerObjects;
  }
}
