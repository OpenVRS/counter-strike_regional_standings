### Roster Details<br />
Team Name: Trainwrecks<br />
Roster: AhMa, Hattivatti, LapaSSS, melty<br />
Global Rank: [336](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [215]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  559.5<br />
<br />
Final Rank Value (559.5) = Starting Rank Value (547.9) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 547.9
- 400 + ( ( 0.076 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 547.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       57 | 2026-07-31 | BC.Game     | L   | 1.000      | -            | -                | -                | -         |    -2.09 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            4 |       60 | 2026-07-31 | ROUNDS      | W   | 1.000      | 0.362        | 0.001 (0.000)    | 0.280 (0.101)    | 1 (1.000) |    21.23 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            3 |       66 | 2026-07-31 | HAVU        | L   | 1.000      | -            | -                | -                | -         |    -4.40 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            2 |     1666 | 2026-05-23 | Strael Bora | L   | 0.719      | -            | -                | -                | -         |    -2.85 | AhMa, Hattivatti, Lapa, LapaSSS, melty   |
|            1 |     1686 | 2026-05-23 | 100 Thieves | L   | 0.718      | -            | -                | -                | -         |    -0.29 | AhMa, Hattivatti, Lapa, LapaSSS, melty   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
