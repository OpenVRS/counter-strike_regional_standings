### Roster Details<br />
Team Name: DEPO<br />
Roster: dako, sh1seido, shoxs, w1nt3r, wetfy<br />
Global Rank: [249](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [26]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  646.4<br />
<br />
Final Rank Value (646.4) = Starting Rank Value (638.3) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.3
- 400 + ( ( 0.119 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 638.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3958 | 2026-05-30 | Omega      | L   | 0.347      | -            | -                | -                | -         |    -0.48 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            4 |     3973 | 2026-05-30 | HOTU       | L   | 0.345      | -            | -                | -                | -         |    -0.14 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            3 |     3997 | 2026-05-29 | Dark Moon  | W   | 0.340      | 0.354        | 0.000 (0.000)    | 0.149 (0.018)    | 1 (0.340) |     5.64 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            2 |     4004 | 2026-05-29 | Omega      | L   | 0.339      | -            | -                | -                | -         |    -0.43 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            1 |     4016 | 2026-05-29 | Game Point | W   | 0.338      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.338) |     3.51 | dako, sh1seido, shoxs, w1nt3r, wetfy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($353.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.353 | $1,000.00      | $353.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
