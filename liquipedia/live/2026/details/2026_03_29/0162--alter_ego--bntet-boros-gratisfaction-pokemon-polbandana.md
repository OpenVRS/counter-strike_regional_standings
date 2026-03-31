### Roster Details<br />
Team Name: Alter Ego<br />
Roster: BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana<br />
Global Rank: [162](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_29.md)<br />
Regional Rank: [20]( ../../standings_asia_2026_03_29.md)<br />
<br />
Final Rank Value:  815.3<br />
<br />
Final Rank Value (815.3) = Starting Rank Value (699.3) + Head To Head Adjustments (116.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.3
- 400 + ( ( 0.154 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 699.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.220
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       97 | 2026-03-26 | FengDa Gaming              | L   | 1.000      | -            | -                | -                | -         |   -17.05 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           12 |      141 | 2026-03-25 | The QUBE Esports           | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.228 (0.076)    | 0 (0.000) |    17.76 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           11 |      181 | 2026-03-24 | Just Swing (Chinese team)  | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.127 (0.042)    | 0 (0.000) |    10.51 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|           10 |      253 | 2026-03-23 | Haunted House              | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.122 (0.041)    | 0 (0.000) |    14.28 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            9 |      297 | 2026-03-22 | Last Bullet (Chinese team) | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.168 (0.056)    | 0 (0.000) |    14.59 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            8 |      343 | 2026-03-21 | BORING PLAYER              | L   | 1.000      | -            | -                | -                | -         |   -18.66 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            7 |      395 | 2026-03-20 | Rare Atom                  | W   | 1.000      | 0.333        | 0.027 (0.009)    | 0.320 (0.107)    | 0 (0.000) |    25.42 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            6 |      765 | 2026-03-12 | Lynn Vision Gaming         | L   | 1.000      | -            | -                | -                | -         |    -5.13 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            5 |      769 | 2026-03-11 | FlyQuest                   | W   | 1.000      | 0.143        | 0.060 (0.009)    | 0.328 (0.047)    | 0 (0.000) |    28.96 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            4 |      799 | 2026-03-10 | Chinggis Warriors          | L   | 1.000      | -            | -                | -                | -         |    -4.75 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            3 |      907 | 2026-03-09 | Rare Atom                  | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.320 (0.046)    | 0 (0.000) |    27.29 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            2 |      915 | 2026-03-08 | Lynn Vision Gaming         | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.295 (0.042)    | 0 (0.000) |    26.45 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana |
|            1 |     2384 | 2026-02-06 | Lynn Vision Gaming         | L   | 0.855      | -            | -                | -                | -         |    -3.70 | BnTeT, Gratisfaction, Polbandana, rate, Senpai   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $1,500.00      | $1,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
