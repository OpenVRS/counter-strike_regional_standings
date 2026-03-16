### Roster Details<br />
Team Name: Universe<br />
Roster: allu, HENU, jelo<br />
Global Rank: [215](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  677.9<br />
<br />
Final Rank Value (677.9) = Starting Rank Value (675.5) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.5
- 400 + ( ( 0.143 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 675.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.029
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1955 | 2026-01-09 | WOPA Esport  | L   | 0.810      | -            | -                | -                | -         |    -2.86 | 1mackez, allu, HENU, jelo, Julbord |
|            5 |     1967 | 2026-01-05 | Bebop        | L   | 0.783      | -            | -                | -                | -         |    -7.96 | 1mackez, allu, HENU, jelo, Julbord |
|            4 |     3733 | 2025-10-18 | ENCE Academy | W   | 0.259      | 0.309        | 0.003 (0.000)    | 0.400 (0.032)    | 1 (0.259) |     5.39 | allu, HENU, jelo, juho, xseveN     |
|            3 |     3742 | 2025-10-18 | HAVU         | W   | 0.258      | 0.309        | 0.012 (0.001)    | 0.498 (0.040)    | 1 (0.258) |     7.01 | allu, HENU, jelo, juho, xseveN     |
|            2 |     3761 | 2025-10-17 | ENCE Academy | L   | 0.252      | -            | -                | -                | -         |    -2.69 | allu, HENU, jelo, juho, xseveN     |
|            1 |     3766 | 2025-10-17 | CSDIILIT     | W   | 0.251      | 0.309        | 0.003 (0.000)    | 0.040 (0.003)    | 1 (0.251) |     3.53 | allu, HENU, jelo, juho, xseveN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($907.16)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.259 | $3,498.12      | $907.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
