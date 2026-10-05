### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: D1zzyg, Jun7, Miszary, tutu, zdr<br />
Global Rank: [333](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  510.0<br />
<br />
Final Rank Value (510.0) = Starting Rank Value (504.8) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.8
- 400 + ( ( 0.052 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 504.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4854 | 2026-05-03 | JiJieHao         | L   | 0.165      | -            | -                | -                | -         |    -0.02 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            7 |     4884 | 2026-05-02 | Wings of Freedom | W   | 0.159      | 0.471        | 0.000 (0.000)    | 0.010 (0.001)    | 1 (0.159) |     2.53 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            6 |     4904 | 2026-05-01 | bLight blue      | W   | 0.157      | 0.471        | 0.000 (0.000)    | 0.039 (0.003)    | 1 (0.157) |     1.83 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            5 |     4947 | 2026-05-01 | UR               | W   | 0.152      | 0.471        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.152) |     1.72 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            4 |     4994 | 2026-04-30 | Wings of Freedom | L   | 0.145      | -            | -                | -                | -         |    -2.29 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            3 |     5071 | 2026-04-28 | Just Swing       | L   | 0.133      | -            | -                | -                | -         |    -1.06 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            2 |     5114 | 2026-04-27 | Haunted House    | W   | 0.126      | 0.333        | 0.002 (0.000)    | 0.050 (0.002)    | 0 (0.000) |     2.79 | D1zzyg, Jun7, Miszary, tutu, zdr |
|            1 |     5177 | 2026-04-26 | NEXVOID          | L   | 0.120      | -            | -                | -                | -         |    -0.32 | D1zzyg, Jun7, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
