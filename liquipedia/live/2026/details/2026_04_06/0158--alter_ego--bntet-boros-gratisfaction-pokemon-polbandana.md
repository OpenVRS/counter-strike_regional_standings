### Roster Details<br />
Team Name: Alter Ego<br />
Roster: BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana<br />
Global Rank: [158](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_05.md)<br />
Regional Rank: [20]( ../../standings_asia_2026_04_05.md)<br />
<br />
Final Rank Value:  842.4<br />
<br />
Final Rank Value (842.4) = Starting Rank Value (709.9) + Head To Head Adjustments (132.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.9
- 400 + ( ( 0.158 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 709.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.214
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      512 | 2026-03-26 | FengDa Gaming              | L   | 1.000      | -            | -                | -                | -         |   -17.49 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           12 |      563 | 2026-03-25 | The QUBE Esports           | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.218 (0.073)    | 0 (0.000) |    17.97 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           11 |      610 | 2026-03-24 | Just Swing (Chinese team)  | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.145 (0.048)    | 0 (0.000) |    11.89 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           10 |      689 | 2026-03-23 | Haunted House              | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.176 (0.059)    | 0 (0.000) |    13.32 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            9 |      741 | 2026-03-22 | Last Bullet (Chinese team) | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.185 (0.062)    | 0 (0.000) |    15.87 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            8 |      793 | 2026-03-21 | BORING PLAYER              | L   | 1.000      | -            | -                | -                | -         |   -19.26 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            7 |      850 | 2026-03-20 | Rare Atom                  | W   | 1.000      | 0.333        | 0.032 (0.011)    | 0.404 (0.135)    | 0 (0.000) |    27.99 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            6 |     1234 | 2026-03-12 | Lynn Vision Gaming         | L   | 1.000      | -            | -                | -                | -         |    -2.30 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            5 |     1238 | 2026-03-11 | FlyQuest                   | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.371 (0.053)    | 0 (0.000) |    29.74 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            4 |     1268 | 2026-03-10 | Chinggis Warriors          | L   | 1.000      | -            | -                | -                | -         |    -2.96 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            3 |     1376 | 2026-03-09 | Rare Atom                  | W   | 1.000      | 0.143        | 0.032 (0.005)    | 0.404 (0.058)    | 0 (0.000) |    29.30 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            2 |     1384 | 2026-03-08 | Lynn Vision Gaming         | W   | 1.000      | 0.143        | 0.048 (0.007)    | 0.370 (0.053)    | 0 (0.000) |    29.63 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            1 |     2853 | 2026-02-06 | Lynn Vision Gaming         | L   | 0.804      | -            | -                | -                | -         |    -1.16 | BnTeT, Gratisfaction, Polbandana, rate, Senpai   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $1,500.00      | $1,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
