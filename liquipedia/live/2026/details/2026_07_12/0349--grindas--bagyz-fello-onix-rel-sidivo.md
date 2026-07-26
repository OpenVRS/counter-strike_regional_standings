### Roster Details<br />
Team Name: Grindas<br />
Roster: BaGyZ, fello, OniX, REL, Sidivo<br />
Global Rank: [349](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [219]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  502.4<br />
<br />
Final Rank Value (502.4) = Starting Rank Value (482.4) + Head To Head Adjustments (20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.4
- 400 + ( ( 0.043 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 482.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.059
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2880 | 2026-04-02 | Atreides   | L   | 0.525      | -            | -                | -                | -         |    -3.12 | BaGyZ, fello, OniX, REL, Sidivo |
|            4 |     2992 | 2026-04-01 | BIG EQUIPA | W   | 0.517      | 0.384        | 0.001 (0.000)    | 0.043 (0.008)    | 0 (0.000) |     9.96 | BaGyZ, fello, OniX, REL, Sidivo |
|            3 |     3087 | 2026-03-31 | Bibimbap   | W   | 0.510      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.96 | BaGyZ, fello, OniX, REL, Sidivo |
|            2 |     3146 | 2026-03-30 | PsychoFace | L   | 0.505      | -            | -                | -                | -         |    -0.75 | BaGyZ, fello, OniX, REL, Sidivo |
|            1 |     3211 | 2026-03-29 | Home       | W   | 0.498      | 0.384        | 0.000 (0.000)    | 0.017 (0.003)    | 0 (0.000) |     8.01 | BaGyZ, fello, OniX, REL, Sidivo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
