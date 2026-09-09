### Roster Details<br />
Team Name: aimclub<br />
Roster: ERSIN, waZz, zewts<br />
Global Rank: [182](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [129]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  731.0<br />
<br />
Final Rank Value (731.0) = Starting Rank Value (705.3) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.140[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.160 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 705.3


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
|            8 |       76 | 2026-09-04 | FOKUS          | L   | 1.000      | -            | -                | -                | -         |    -2.37 | ERSIN, mhN1, ragga, waZz, zewts       |
|            7 |     1119 | 2026-08-02 | Spirit Academy | L   | 0.959      | -            | -                | -                | -         |   -10.16 | ADRON, ERSIN, ragga, waZz, zewts      |
|            6 |     1166 | 2026-08-01 | Young TigeRES  | W   | 0.952      | 0.278        | 0.001 (0.000)    | 0.037 (0.010)    | 0 (0.000) |     6.84 | ADRON, ERSIN, ragga, waZz, zewts      |
|            5 |     1230 | 2026-07-30 | Spirit Academy | W   | 0.939      | 0.278        | 0.005 (0.001)    | 0.283 (0.074)    | 0 (0.000) |    19.65 | ADRON, ERSIN, ragga, waZz, zewts      |
|            4 |     2201 | 2026-06-13 | Noir Verse     | L   | 0.626      | -            | -                | -                | -         |    -5.33 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            3 |     2213 | 2026-06-13 | Azuolas        | W   | 0.625      | 0.373        | 0.001 (0.000)    | 0.250 (0.058)    | 1 (0.625) |    14.22 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            2 |     2226 | 2026-06-13 | fnatic         | L   | 0.624      | -            | -                | -                | -         |    -0.69 | ERSIN, RoberttMP, waZz, XELLOW, zewts |
|            1 |     2238 | 2026-06-13 | 6666           | W   | 0.623      | 0.373        | 0.000 (0.000)    | 0.024 (0.006)    | 1 (0.623) |     3.48 | ERSIN, RoberttMP, waZz, XELLOW, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,193.55)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.959 | $750.00        | $719.26         |
| 2026-06-14 |      0.632 | $750.00        | $474.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
