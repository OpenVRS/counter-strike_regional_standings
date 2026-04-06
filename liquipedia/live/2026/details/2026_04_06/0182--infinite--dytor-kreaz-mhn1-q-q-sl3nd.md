### Roster Details<br />
Team Name: INFINITE<br />
Roster: Dytor, kreaz, mhN1, Q-Q, sl3nd<br />
Global Rank: [182](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [123]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  773.4<br />
<br />
Final Rank Value (773.4) = Starting Rank Value (727.7) + Head To Head Adjustments (45.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.7
- 400 + ( ( 0.168 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 727.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.090
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      296 | 2026-03-30 | Fnatic        | L   | 1.000      | -            | -                | -                | -         |    -3.00 | Dytor, kreaz, mhN1, Q-Q, sl3nd      |
|            6 |      305 | 2026-03-30 | Aurora Gaming | L   | 1.000      | -            | -                | -                | -         |    -0.09 | Dytor, kreaz, mhN1, Q-Q, sl3nd      |
|            5 |      335 | 2026-03-29 | Drama Esports | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.061 (0.022)    | 1 (1.000) |     6.21 | Dytor, kreaz, mhN1, Q-Q, sl3nd      |
|            4 |      357 | 2026-03-29 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |    -1.84 | Dytor, kreaz, mhN1, Q-Q, sl3nd      |
|            3 |      367 | 2026-03-29 | HYPERSPIRIT   | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.479 (0.170)    | 1 (1.000) |    26.05 | Dytor, kreaz, mhN1, Q-Q, sl3nd      |
|            2 |     1800 | 2026-02-28 | TNC Esports   | L   | 0.953      | -            | -                | -                | -         |    -3.18 | Dytor, kreaz, nbqq, sl3nd, spardaus |
|            1 |     1845 | 2026-02-27 | ENCE Academy  | W   | 0.946      | 0.384        | 0.001 (0.000)    | 0.513 (0.187)    | 0 (0.000) |    21.57 | Dytor, kreaz, nbqq, sl3nd, spardaus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($480.19)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      0.960 | $500.00        | $480.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
