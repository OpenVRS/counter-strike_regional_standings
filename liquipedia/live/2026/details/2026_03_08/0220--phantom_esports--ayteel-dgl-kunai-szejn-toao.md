### Roster Details<br />
Team Name: Phantom Esports<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [220](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  665.2<br />
<br />
Final Rank Value (665.2) = Starting Rank Value (663.7) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.7
- 400 + ( ( 0.137 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 663.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.051
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3188 | 2025-11-06 | ALLINNERS        | L   | 0.383      | -            | -                | -                | -         |    -5.67 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           15 |     3212 | 2025-11-05 | NOVAQ            | L   | 0.377      | -            | -                | -                | -         |    -1.09 | Ayteel, DGL, Kunai, lunAtic, szejn |
|           14 |     3292 | 2025-11-01 | Team Nemesis     | L   | 0.353      | -            | -                | -                | -         |    -3.78 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           13 |     3304 | 2025-11-01 | 8Sins            | W   | 0.352      | 0.305        | 0.007 (0.001)    | 0.129 (0.014)    | 1 (0.352) |     7.26 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           12 |     3311 | 2025-11-01 | Prestige Esport  | L   | 0.351      | -            | -                | -                | -         |    -3.92 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           11 |     3343 | 2025-10-31 | GenOne           | L   | 0.343      | -            | -                | -                | -         |    -1.15 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           10 |     3450 | 2025-10-27 | MOUZ NXT         | W   | 0.318      | 0.344        | 0.036 (0.004)    | 1.000 (0.109)    | 0 (0.000) |     9.71 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            9 |     3493 | 2025-10-26 | KONO.ECF         | L   | 0.312      | -            | -                | -                | -         |    -2.88 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            8 |     3537 | 2025-10-25 | 9BoomPro         | L   | 0.306      | -            | -                | -                | -         |    -6.93 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            7 |     3548 | 2025-10-25 | Dziuseppe        | W   | 0.305      | 0.344        | 0.001 (0.000)    | 0.048 (0.005)    | 0 (0.000) |     4.91 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            6 |     3596 | 2025-10-24 | Monte            | L   | 0.299      | -            | -                | -                | -         |    -0.20 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            5 |     4157 | 2025-10-06 | Sangrija         | W   | 0.179      | 0.447        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.02 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            4 |     4545 | 2025-09-27 | BIG              | L   | 0.118      | -            | -                | -                | -         |    -0.87 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            3 |     4564 | 2025-09-27 | Fnatic           | L   | 0.116      | -            | -                | -                | -         |    -0.11 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            2 |     4593 | 2025-09-26 | Wildcard         | W   | 0.111      | 0.378        | 0.006 (0.000)    | 0.060 (0.003)    | 1 (0.111) |     1.94 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            1 |     4616 | 2025-09-26 | Friendly Campers | W   | 0.110      | 0.378        | 0.065 (0.003)    | 0.373 (0.015)    | 1 (0.110) |     3.20 | Ayteel, DGL, Kunai, szejn, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($164.77)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      0.358 | $460.43        | $164.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
