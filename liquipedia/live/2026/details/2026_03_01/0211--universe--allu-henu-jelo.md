### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, jelo<br />
Global Rank: [211](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [140]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  672.4<br />
<br />
Final Rank Value (672.4) = Starting Rank Value (681.4) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.4
- 400 + ( ( 0.149 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 681.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.034
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1741 | 2026-01-13 | CSDIILIT     | L   | 0.878      | -            | -                | -                | -         |   -12.41 | 1mackez, allu, HENU, jelo, Julbord |
|            7 |     1750 | 2026-01-12 | Illwill      | L   | 0.871      | -            | -                | -                | -         |    -0.41 | 1mackez, allu, HENU, jelo, Julbord |
|            6 |     1771 | 2026-01-09 | WOPA Esport  | L   | 0.851      | -            | -                | -                | -         |    -3.25 | 1mackez, allu, HENU, jelo, Julbord |
|            5 |     1783 | 2026-01-05 | Bebop        | L   | 0.825      | -            | -                | -                | -         |    -8.26 | 1mackez, allu, HENU, jelo, Julbord |
|            4 |     3583 | 2025-10-18 | ENCE Academy | W   | 0.301      | 0.309        | 0.003 (0.000)    | 0.427 (0.040)    | 1 (0.301) |     6.18 | allu, HENU, jelo, juho, xseveN     |
|            3 |     3592 | 2025-10-18 | HAVU         | W   | 0.299      | 0.309        | 0.012 (0.001)    | 0.530 (0.049)    | 1 (0.299) |     8.23 | allu, HENU, jelo, juho, xseveN     |
|            2 |     3611 | 2025-10-17 | ENCE Academy | L   | 0.293      | -            | -                | -                | -         |    -3.18 | allu, HENU, jelo, juho, xseveN     |
|            1 |     3616 | 2025-10-17 | CSDIILIT     | W   | 0.293      | 0.309        | 0.003 (0.000)    | 0.064 (0.006)    | 1 (0.293) |     4.03 | allu, HENU, jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,051.86)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.301 | $3,498.12      | $1,051.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
