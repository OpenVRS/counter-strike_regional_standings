### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, jelo<br />
Global Rank: [264](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [167]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  617.1<br />
<br />
Final Rank Value (617.1) = Starting Rank Value (625.2) + Head To Head Adjustments (-8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.2
- 400 + ( ( 0.116 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 625.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.011
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3132 | 2026-01-13 | CSDIILIT     | L   | 0.696      | -            | -                | -                | -         |    -7.37 | 1mackez, allu, HENU, jelo, Julbord |
|            7 |     3141 | 2026-01-12 | Illwill      | L   | 0.689      | -            | -                | -                | -         |    -0.26 | 1mackez, allu, HENU, jelo, Julbord |
|            6 |     3168 | 2026-01-09 | WOPA Esport  | L   | 0.669      | -            | -                | -                | -         |    -2.43 | 1mackez, allu, HENU, jelo, Julbord |
|            5 |     3180 | 2026-01-05 | Bebop        | L   | 0.642      | -            | -                | -                | -         |    -4.84 | 1mackez, allu, HENU, jelo, Julbord |
|            4 |     4980 | 2025-10-18 | ENCE Academy | W   | 0.118      | 0.309        | 0.001 (0.000)    | 0.557 (0.020)    | 1 (0.118) |     2.81 | allu, HENU, jelo, juho, xseveN     |
|            3 |     4989 | 2025-10-18 | HAVU         | W   | 0.117      | 0.309        | 0.006 (0.000)    | 0.518 (0.019)    | 1 (0.117) |     3.24 | allu, HENU, jelo, juho, xseveN     |
|            2 |     5008 | 2025-10-17 | ENCE Academy | L   | 0.111      | -            | -                | -                | -         |    -0.86 | allu, HENU, jelo, juho, xseveN     |
|            1 |     5013 | 2025-10-17 | CSDIILIT     | W   | 0.110      | 0.309        | 0.001 (0.000)    | 0.032 (0.001)    | 1 (0.110) |     1.71 | allu, HENU, jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($413.94)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.118 | $3,498.12      | $413.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
