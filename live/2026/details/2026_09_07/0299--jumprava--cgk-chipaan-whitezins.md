### Roster Details<br />
Team Name: Jumprava<br />
Roster: cgk, ChipaaN, whitezins<br />
Global Rank: [299](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [194]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  594.5<br />
<br />
Final Rank Value (594.5) = Starting Rank Value (615.0) + Head To Head Adjustments (-20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.0
- 400 + ( ( 0.113 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 615.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1376 | 2026-07-26 | Aimhaus    | L   | 0.911      | -            | -                | -                | -         |    -7.44 | cgk, ChipaaN, OXFROG, proxi, whitezins |
|            5 |     1381 | 2026-07-26 | FERAX      | W   | 0.910      | 0.284        | 0.000 (0.000)    | 0.035 (0.009)    | 1 (0.910) |    12.05 | cgk, ChipaaN, OXFROG, proxi, whitezins |
|            4 |     1394 | 2026-07-25 | Fraternity | W   | 0.905      | 0.284        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.905) |     7.20 | cgk, ChipaaN, OXFROG, proxi, whitezins |
|            3 |     1409 | 2026-07-25 | FERAX      | L   | 0.904      | -            | -                | -                | -         |   -16.25 | cgk, ChipaaN, OXFROG, proxi, whitezins |
|            2 |     1594 | 2026-07-18 | ex-MANA    | L   | 0.857      | -            | -                | -                | -         |    -9.12 | cgk, ChipaaN, hexoq, imp, whitezins    |
|            1 |     1947 | 2026-06-29 | DONSTU     | L   | 0.730      | -            | -                | -                | -         |    -6.92 | cgk, ChipaaN, Frip, hexoq, whitezins   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($455.29)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.911 | $500.00        | $455.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
