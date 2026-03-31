### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, jelo<br />
Global Rank: [240](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  644.7<br />
<br />
Final Rank Value (644.7) = Starting Rank Value (651.1) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.1
- 400 + ( ( 0.126 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 651.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.017
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2650 | 2026-01-13 | CSDIILIT     | L   | 0.743      | -            | -                | -                | -         |    -8.31 | 1mackez, allu, HENU, jelo, Julbord |
|            7 |     2659 | 2026-01-12 | Illwill      | L   | 0.736      | -            | -                | -                | -         |    -0.20 | 1mackez, allu, HENU, jelo, Julbord |
|            6 |     2686 | 2026-01-09 | WOPA Esport  | L   | 0.716      | -            | -                | -                | -         |    -2.46 | 1mackez, allu, HENU, jelo, Julbord |
|            5 |     2698 | 2026-01-05 | Bebop        | L   | 0.689      | -            | -                | -                | -         |    -5.07 | 1mackez, allu, HENU, jelo, Julbord |
|            4 |     4498 | 2025-10-18 | ENCE Academy | W   | 0.165      | 0.309        | 0.001 (0.000)    | 0.470 (0.024)    | 1 (0.165) |     3.96 | allu, HENU, jelo, juho, xseveN     |
|            3 |     4507 | 2025-10-18 | HAVU         | W   | 0.164      | 0.309        | 0.007 (0.000)    | 0.520 (0.026)    | 1 (0.164) |     4.54 | allu, HENU, jelo, juho, xseveN     |
|            2 |     4526 | 2025-10-17 | ENCE Academy | L   | 0.158      | -            | -                | -                | -         |    -1.18 | allu, HENU, jelo, juho, xseveN     |
|            1 |     4531 | 2025-10-17 | CSDIILIT     | W   | 0.157      | 0.309        | 0.002 (0.000)    | 0.041 (0.002)    | 1 (0.157) |     2.35 | allu, HENU, jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($577.68)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.165 | $3,498.12      | $577.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
