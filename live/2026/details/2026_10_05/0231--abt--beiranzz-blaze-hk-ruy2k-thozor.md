### Roster Details<br />
Team Name: ABT<br />
Roster: BeiranZz, blaze, hK, Ruy2k, ThozoR<br />
Global Rank: [231](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [159]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  664.3<br />
<br />
Final Rank Value (664.3) = Starting Rank Value (646.1) + Head To Head Adjustments (18.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.1
- 400 + ( ( 0.123 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 646.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      165 | 2026-10-01 | PURE          | L   | 1.000      | -            | -                | -                | -         |   -10.99 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            7 |      167 | 2026-10-01 | Next Up       | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.034 (0.012)    | 1 (1.000) |    11.78 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            6 |      173 | 2026-10-01 | Falcons Force | W   | 1.000      | 0.349        | 0.002 (0.001)    | 0.460 (0.161)    | 1 (1.000) |    22.71 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            5 |      177 | 2026-10-01 | NAVI Junior   | L   | 1.000      | -            | -                | -                | -         |    -5.03 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            4 |      182 | 2026-10-01 | aimclub       | L   | 1.000      | -            | -                | -                | -         |    -1.77 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            3 |     2307 | 2026-08-08 | 9INE          | L   | 0.813      | -            | -                | -                | -         |    -1.79 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            2 |     2377 | 2026-08-07 | REM           | W   | 0.806      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.806) |     5.06 | BeiranZz, blaze, hK, Ruy2k, ThozoR |
|            1 |     2390 | 2026-08-07 | 9INE          | L   | 0.806      | -            | -                | -                | -         |    -1.73 | BeiranZz, blaze, hK, Ruy2k, ThozoR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
