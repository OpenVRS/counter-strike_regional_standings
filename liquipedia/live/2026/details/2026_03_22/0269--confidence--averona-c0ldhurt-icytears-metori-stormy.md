### Roster Details<br />
Team Name: Confidence<br />
Roster: AverOna, c0ldhurt, icytears, metori, Stormy<br />
Global Rank: [269](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [170]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  601.3<br />
<br />
Final Rank Value (601.3) = Starting Rank Value (620.5) + Head To Head Adjustments (-19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.5
- 400 + ( ( 0.110 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 620.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.010
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1692 | 2026-02-12 | Hindsight              | L   | 0.945      | -            | -                | -                | -         |   -14.65 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            4 |     1771 | 2026-02-10 | BIG EQUIPA             | L   | 0.931      | -            | -                | -                | -         |    -5.35 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            3 |     3767 | 2025-11-08 | BIG EQUIPA             | L   | 0.305      | -            | -                | -                | -         |    -1.73 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            2 |     3912 | 2025-11-06 | Team Pigeons           | L   | 0.291      | -            | -                | -                | -         |    -2.14 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            1 |     3970 | 2025-11-04 | Fingers Crossed Female | W   | 0.278      | 0.317        | 0.003 (0.000)    | 0.094 (0.008)    | 0 (0.000) |     4.70 | AverOna, c0ldhurt, icytears, metori, Stormy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($637.99)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.965 | $500.00        | $482.36         |
| 2025-11-09 |      0.311 | $500.00        | $155.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
