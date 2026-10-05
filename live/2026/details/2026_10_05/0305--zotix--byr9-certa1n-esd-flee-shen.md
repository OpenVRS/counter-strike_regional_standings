### Roster Details<br />
Team Name: ZOTIX<br />
Roster: byr9, certa1n, EsD, flee, shen<br />
Global Rank: [305](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  555.0<br />
<br />
Final Rank Value (555.0) = Starting Rank Value (517.2) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.2
- 400 + ( ( 0.059 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 517.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      873 | 2026-09-16 | Banger Gang   | L   | 1.000      | -            | -                | -                | -         |   -13.92 | byr9, certa1n, EsD, flee, shen   |
|            5 |      928 | 2026-09-14 | Drama         | W   | 1.000      | 0.357        | 0.001 (0.000)    | 0.627 (0.224)    | 0 (0.000) |    26.89 | byr9, certa1n, EsD, flee, shen   |
|            4 |     1062 | 2026-09-11 | ex-VP.Prodigy | W   | 1.000      | 0.357        | 0.000 (0.000)    | 0.037 (0.013)    | 0 (0.000) |    14.04 | byr9, certa1n, EsD, flee, shen   |
|            3 |     1177 | 2026-09-09 | B8 Academy    | W   | 1.000      | 0.357        | 0.003 (0.001)    | 0.103 (0.037)    | 0 (0.000) |    21.22 | byr9, certa1n, EsD, flee, shen   |
|            2 |     1364 | 2026-09-05 | Falcons Force | L   | 1.000      | -            | -                | -                | -         |    -4.63 | byr9, certa1n, EsD, flee, shen   |
|            1 |     3791 | 2026-06-05 | Banger Gang   | L   | 0.388      | -            | -                | -                | -         |    -5.79 | byr9, EsD, ink mate, munch, shen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
