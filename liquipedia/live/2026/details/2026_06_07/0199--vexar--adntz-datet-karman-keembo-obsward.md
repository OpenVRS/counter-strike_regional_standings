### Roster Details<br />
Team Name: Vexar<br />
Roster: ADntZ, datet, KarmaN, keembo, obsward<br />
Global Rank: [199](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [128]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  747.5<br />
<br />
Final Rank Value (747.5) = Starting Rank Value (671.2) + Head To Head Adjustments (76.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.2
- 400 + ( ( 0.141 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 671.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.248
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       88 | 2026-05-31 | G2 Ares              | L   | 1.000      | -            | -                | -                | -         |    -6.92 | ADntZ, datet, KarmaN, keembo, obsward    |
|           11 |      127 | 2026-05-30 | Brazylijski luz      | W   | 1.000      | 0.303        | 0.006 (0.002)    | 0.422 (0.128)    | 0 (0.000) |    20.35 | ADntZ, datet, KarmaN, keembo, obsward    |
|           10 |      162 | 2026-05-29 | NEW VISION           | W   | 1.000      | 0.303        | 0.009 (0.003)    | 0.376 (0.114)    | 0 (0.000) |    19.91 | ADntZ, datet, KarmaN, keembo, obsward    |
|            9 |      219 | 2026-05-28 | Dripmen              | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.237 (0.072)    | 0 (0.000) |    15.44 | ADntZ, datet, KarmaN, keembo, obsward    |
|            8 |      255 | 2026-05-27 | Project 91 Team      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.100 (0.030)    | 0 (0.000) |     8.00 | ADntZ, datet, KarmaN, keembo, obsward    |
|            7 |      297 | 2026-05-26 | Lilmix               | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.392 (0.119)    | 0 (0.000) |    18.81 | ADntZ, datet, KarmaN, keembo, obsward    |
|            6 |      423 | 2026-05-23 | Hashiras             | L   | 1.000      | -            | -                | -                | -         |    -6.99 | ADntZ, datet, KarmaN, keembo, obsward    |
|            5 |     1699 | 2026-04-12 | ENJOY (Russian team) | L   | 0.821      | -            | -                | -                | -         |   -11.08 | ADntZ, datet, KarmaN, keembo, obsward    |
|            4 |     1706 | 2026-04-12 | CYBERSHOKE Prospects | W   | 0.820      | 0.278        | 0.006 (0.001)    | 0.529 (0.121)    | 0 (0.000) |    21.77 | ADntZ, datet, KarmaN, keembo, obsward    |
|            3 |     1725 | 2026-04-11 | ZOTIX                | W   | 0.814      | 0.278        | 0.000 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     7.30 | ADntZ, datet, KarmaN, keembo, obsward    |
|            2 |     1761 | 2026-04-10 | Young TigeRES        | W   | 0.806      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.79 | ADntZ, datet, KarmaN, keembo, obsward    |
|            1 |     2713 | 2026-03-26 | Basement Bobs        | L   | 0.706      | -            | -                | -                | -         |   -15.04 | ADntZ, KarmaN, keembo, observerward, xds |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,115.43)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $500.00        | $500.00         |
| 2026-04-12 |      0.821 | $750.00        | $615.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
