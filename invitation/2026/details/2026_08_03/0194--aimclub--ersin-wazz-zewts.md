### Roster Details<br />
Team Name: aimclub<br />
Roster: ERSIN, waZz, zewts<br />
Global Rank: [194](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [135]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  759.9<br />
<br />
Final Rank Value (759.9) = Starting Rank Value (741.2) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.2
- 400 + ( ( 0.176 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 741.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |        3 | 2026-08-02 | Spirit Academy | L   | 1.000      | -            | -                | -                | -         |   -15.13 | ADRON, ERSIN, ragga, waZz, zewts      |
|            6 |       24 | 2026-08-01 | Young TigeRES  | W   | 1.000      | 0.278        | 0.001 (0.000)    | 0.047 (0.013)    | 0 (0.000) |     6.27 | ADRON, ERSIN, ragga, waZz, zewts      |
|            5 |       71 | 2026-07-30 | Spirit Academy | W   | 1.000      | 0.278        | 0.003 (0.001)    | 0.273 (0.076)    | 0 (0.000) |    15.71 | ADRON, ERSIN, ragga, waZz, zewts      |
|            4 |      994 | 2026-06-13 | Noir Verse     | L   | 0.861      | -            | -                | -                | -         |    -8.33 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            3 |     1006 | 2026-06-13 | PURE           | W   | 0.860      | 0.373        | 0.001 (0.000)    | 0.260 (0.083)    | 1 (0.860) |    19.44 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            2 |     1019 | 2026-06-13 | fnatic         | L   | 0.859      | -            | -                | -                | -         |    -3.59 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            1 |     1031 | 2026-06-13 | 6666           | W   | 0.858      | 0.373        | 0.000 (0.000)    | 0.040 (0.013)    | 1 (0.858) |     4.32 | ERSIN, RoberttMP, waZz, XELLOW, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.73)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $750.00        | $750.00         |
| 2026-06-14 |      0.868 | $750.00        | $650.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
