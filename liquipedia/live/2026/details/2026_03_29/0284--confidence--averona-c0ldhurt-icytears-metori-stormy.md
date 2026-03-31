### Roster Details<br />
Team Name: Confidence<br />
Roster: AverOna, c0ldhurt, icytears, metori, Stormy<br />
Global Rank: [284](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  588.1<br />
<br />
Final Rank Value (588.1) = Starting Rank Value (607.7) + Head To Head Adjustments (-19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.7
- 400 + ( ( 0.107 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 607.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2174 | 2026-02-12 | Hindsight              | L   | 0.898      | -            | -                | -                | -         |   -13.91 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            4 |     2253 | 2026-02-10 | BIG EQUIPA             | L   | 0.885      | -            | -                | -                | -         |    -5.84 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            3 |     4249 | 2025-11-08 | BIG EQUIPA             | L   | 0.258      | -            | -                | -                | -         |    -1.70 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            2 |     4394 | 2025-11-06 | Team Pigeons           | L   | 0.244      | -            | -                | -                | -         |    -1.97 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            1 |     4452 | 2025-11-04 | Fingers Crossed Female | W   | 0.231      | 0.317        | 0.002 (0.000)    | 0.077 (0.006)    | 0 (0.000) |     3.89 | AverOna, c0ldhurt, icytears, metori, Stormy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($591.18)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.918 | $500.00        | $458.96         |
| 2025-11-09 |      0.264 | $500.00        | $132.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
