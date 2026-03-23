### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, jelo<br />
Global Rank: [233](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  652.1<br />
<br />
Final Rank Value (652.1) = Starting Rank Value (659.7) + Head To Head Adjustments (-7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.7
- 400 + ( ( 0.133 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 659.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.021
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2475 | 2026-01-13 | CSDIILIT     | L   | 0.790      | -            | -                | -                | -         |    -9.64 | 1mackez, allu, HENU, jelo, Julbord |
|            7 |     2484 | 2026-01-12 | Illwill      | L   | 0.784      | -            | -                | -                | -         |    -0.24 | 1mackez, allu, HENU, jelo, Julbord |
|            6 |     2511 | 2026-01-09 | WOPA Esport  | L   | 0.764      | -            | -                | -                | -         |    -2.74 | 1mackez, allu, HENU, jelo, Julbord |
|            5 |     2523 | 2026-01-05 | Bebop        | L   | 0.737      | -            | -                | -                | -         |    -6.92 | 1mackez, allu, HENU, jelo, Julbord |
|            4 |     4323 | 2025-10-18 | ENCE Academy | W   | 0.213      | 0.309        | 0.002 (0.000)    | 0.469 (0.031)    | 1 (0.213) |     4.90 | allu, HENU, jelo, juho, xseveN     |
|            3 |     4332 | 2025-10-18 | HAVU         | W   | 0.212      | 0.309        | 0.008 (0.001)    | 0.520 (0.034)    | 1 (0.212) |     5.84 | allu, HENU, jelo, juho, xseveN     |
|            2 |     4351 | 2025-10-17 | ENCE Academy | L   | 0.206      | -            | -                | -                | -         |    -1.73 | allu, HENU, jelo, juho, xseveN     |
|            1 |     4356 | 2025-10-17 | CSDIILIT     | W   | 0.205      | 0.309        | 0.002 (0.000)    | 0.044 (0.003)    | 1 (0.205) |     2.97 | allu, HENU, jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($744.89)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.213 | $3,498.12      | $744.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
