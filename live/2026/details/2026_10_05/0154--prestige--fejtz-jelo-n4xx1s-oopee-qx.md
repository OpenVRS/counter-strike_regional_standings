### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Jelo, N4XX1S, oopee, qx<br />
Global Rank: [154](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [114]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  820.6<br />
<br />
Final Rank Value (820.6) = Starting Rank Value (772.8) + Head To Head Adjustments (47.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.362[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.8
- 400 + ( ( 0.186 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 772.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       70 | 2026-10-02 | Voca          | L   | 1.000      | -            | -                | -                | -         |    -3.66 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            8 |       76 | 2026-10-02 | Glitch        | L   | 1.000      | -            | -                | -                | -         |   -22.02 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            7 |       88 | 2026-10-02 | BASEMENT BOYS | L   | 1.000      | -            | -                | -                | -         |    -8.19 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            6 |      102 | 2026-10-02 | BC.Game       | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.359 (0.133)    | 1 (1.000) |    29.54 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            5 |      122 | 2026-10-02 | Sashi         | W   | 1.000      | 0.371        | 0.052 (0.019)    | 0.535 (0.198)    | 1 (1.000) |    28.13 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            4 |     2299 | 2026-08-09 | Betclic       | L   | 0.819      | -            | -                | -                | -         |    -1.04 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            3 |     2319 | 2026-08-08 | Metizport     | W   | 0.813      | 0.818        | 0.037 (0.025)    | 0.659 (0.438)    | 1 (0.813) |    23.94 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            2 |     2340 | 2026-08-08 | Dhala         | W   | 0.812      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.812) |     2.60 | fejtZ, Jelo, N4XX1S, oopee, qx |
|            1 |     2353 | 2026-08-07 | Metizport     | L   | 0.807      | -            | -                | -                | -         |    -1.46 | fejtZ, Jelo, N4XX1S, oopee, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
