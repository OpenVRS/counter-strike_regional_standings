### Roster Details<br />
Team Name: Dark Moon<br />
Roster: d3j4vy, keiyon, Maison, modeSavage, ri0dayungog<br />
Global Rank: [209](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [145]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  696.9<br />
<br />
Final Rank Value (696.9) = Starting Rank Value (664.4) + Head To Head Adjustments (32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.4
- 400 + ( ( 0.139 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 664.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        1 | 2026-09-08 | WBT Academy   | L   | 1.000      | -            | -                | -                | -         |    -9.37 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|           12 |        3 | 2026-09-08 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -11.35 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|           11 |        6 | 2026-09-07 | HAVU          | W   | 1.000      | 0.317        | 0.004 (0.001)    | 0.451 (0.143)    | 0 (0.000) |    23.07 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|           10 |       11 | 2026-09-07 | Vexar         | W   | 1.000      | 0.317        | 0.001 (0.000)    | 0.516 (0.164)    | 0 (0.000) |    19.90 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            9 |       27 | 2026-09-06 | Noir Verse    | W   | 1.000      | 0.317        | 0.002 (0.001)    | 0.519 (0.165)    | 0 (0.000) |    20.14 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            8 |       53 | 2026-09-06 | BASEMENT BOYS | L   | 1.000      | -            | -                | -                | -         |    -3.98 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            7 |     2062 | 2026-06-25 | DEPO          | L   | 0.697      | -            | -                | -                | -         |    -1.15 | d3j4vy, keiyon, Maison, ri0dayungog, Rui        |
|            6 |     2066 | 2026-06-25 | UPGRADE       | L   | 0.697      | -            | -                | -                | -         |    -2.29 | d3j4vy, keiyon, Maison, ri0dayungog, Rui        |
|            5 |     2645 | 2026-05-29 | DEPO          | L   | 0.519      | -            | -                | -                | -         |    -0.75 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            4 |     2650 | 2026-05-29 | Game Point    | W   | 0.518      | 0.354        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.518) |     4.94 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            3 |     2665 | 2026-05-29 | Omega         | L   | 0.517      | -            | -                | -                | -         |    -0.69 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            2 |     2762 | 2026-05-26 | Color         | L   | 0.500      | -            | -                | -                | -         |    -1.91 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |
|            1 |     2767 | 2026-05-26 | CYBERSHOKE    | L   | 0.499      | -            | -                | -                | -         |    -4.05 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($266.02)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.532 | $500.00        | $266.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
