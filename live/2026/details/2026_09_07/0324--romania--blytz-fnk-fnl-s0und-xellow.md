### Roster Details<br />
Team Name: Romania<br />
Roster: Blytz, fNk, fnl, s0und, XELLOW<br />
Global Rank: [324](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [206]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  539.9<br />
<br />
Final Rank Value (539.9) = Starting Rank Value (518.0) + Head To Head Adjustments (21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.0
- 400 + ( ( 0.062 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 518.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1564 | 2026-07-19 | ex-Zero Tenacity | W   | 0.864      | 0.143        | 0.031 (0.004)    | 1.000 (0.123)    | 0 (0.000) |    23.46 | fNk, HOLY, lauNX, s0und, XELLOW |
|            8 |     4962 | 2026-03-29 | Inner Circle     | L   | 0.118      | -            | -                | -                | -         |    -0.01 | Blytz, fNk, fnl, s0und, XELLOW  |
|            7 |     5003 | 2026-03-29 | BASEMENT BOYS    | L   | 0.116      | -            | -                | -                | -         |    -0.17 | Blytz, fNk, fnl, s0und, XELLOW  |
|            6 |     5250 | 2026-03-24 | aimclub          | L   | 0.085      | -            | -                | -                | -         |    -1.29 | Blytz, fNk, fnl, s0und, XELLOW  |
|            5 |     5285 | 2026-03-24 | MOUZ NXT         | L   | 0.083      | -            | -                | -                | -         |    -0.86 | Blytz, fNk, fnl, s0und, XELLOW  |
|            4 |     5796 | 2026-03-13 | GRINGOS          | W   | 0.013      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.013) |     0.14 | Blytz, fNk, fnl, s0und, XELLOW  |
|            3 |     5797 | 2026-03-13 | BC.Game          | W   | 0.013      | 0.350        | 0.008 (0.000)    | 0.007 (0.000)    | 1 (0.013) |     0.29 | Blytz, fNk, fnl, s0und, XELLOW  |
|            2 |     5800 | 2026-03-13 | OG               | L   | 0.013      | -            | -                | -                | -         |    -0.03 | Blytz, fNk, fnl, s0und, XELLOW  |
|            1 |     5812 | 2026-03-13 | Alliance         | W   | 0.012      | 0.350        | 0.209 (0.001)    | 0.444 (0.002)    | 1 (0.012) |     0.38 | Blytz, fNk, fnl, s0und, XELLOW  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
