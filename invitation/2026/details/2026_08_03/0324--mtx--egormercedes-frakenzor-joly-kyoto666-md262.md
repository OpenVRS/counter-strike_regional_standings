### Roster Details<br />
Team Name: MTX<br />
Roster: EgorMercedes, frakenzor, joly, kyoto666, md262<br />
Global Rank: [324](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [208]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  581.4<br />
<br />
Final Rank Value (581.4) = Starting Rank Value (583.8) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 583.8
- 400 + ( ( 0.095 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 583.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1897 | 2026-05-16 | PURE           | L   | 0.673      | -            | -                | -                | -         |    -2.38 | EgorMercedes, frakenzor, joly, md262, Qweall   |
|           11 |     1911 | 2026-05-16 | BASEMENT BOYS  | L   | 0.671      | -            | -                | -                | -         |    -1.09 | EgorMercedes, frakenzor, joly, md262, Qweall   |
|           10 |     2092 | 2026-05-10 | BASEMENT BOYS  | L   | 0.634      | -            | -                | -                | -         |    -1.12 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            9 |     2107 | 2026-05-10 | HAFO           | W   | 0.632      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.632) |     5.23 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            8 |     2113 | 2026-05-10 | Coalesce       | L   | 0.631      | -            | -                | -                | -         |    -8.95 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            7 |     2306 | 2026-05-02 | Johnny Speeds  | L   | 0.579      | -            | -                | -                | -         |    -1.23 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            6 |     2324 | 2026-05-01 | ROUNDS         | L   | 0.575      | -            | -                | -                | -         |    -6.18 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            5 |     2328 | 2026-05-01 | SAW Youngsters | W   | 0.575      | 0.303        | 0.003 (0.001)    | 0.622 (0.108)    | 1 (0.575) |    13.82 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            4 |     2334 | 2026-05-01 | G2 Ares        | L   | 0.574      | -            | -                | -                | -         |    -2.12 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            3 |     4116 | 2026-03-23 | ASTRAL         | L   | 0.314      | -            | -                | -                | -         |    -0.28 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            2 |     4120 | 2026-03-23 | Wave           | W   | 0.314      | 0.333        | 0.000 (0.000)    | 0.030 (0.003)    | 1 (0.314) |     5.45 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            1 |     4126 | 2026-03-23 | OlyBet         | L   | 0.313      | -            | -                | -                | -         |    -3.56 | EgorMercedes, frakenzor, joly, kyoto666, md262 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
