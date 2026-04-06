### Roster Details<br />
Team Name: Inner Circle Academy<br />
Roster: 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz<br />
Global Rank: [270](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [171]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  614.5<br />
<br />
Final Rank Value (614.5) = Starting Rank Value (631.0) + Head To Head Adjustments (-16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.0
- 400 + ( ( 0.118 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 631.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.057
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      678 | 2026-03-23 | Magic (Russian team)     | L   | 1.000      | -            | -                | -                | -         |    -0.76 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |
|            5 |     1077 | 2026-03-15 | Okura                    | L   | 1.000      | -            | -                | -                | -         |   -14.45 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |
|            4 |     1086 | 2026-03-15 | B8 Academy               | W   | 1.000      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.80 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |
|            3 |     1152 | 2026-03-13 | Misa Esports             | L   | 1.000      | -            | -                | -                | -         |    -8.52 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |
|            2 |     2510 | 2026-02-15 | WROTBERRY                | L   | 0.865      | -            | -                | -                | -         |   -12.76 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |
|            1 |     2570 | 2026-02-14 | Legends (Ukrainian team) | W   | 0.858      | 0.294        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.22 | 3ippoch, Dy4ka, L1seYoung, n0rths, NaYz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,545.17)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $680.35        | $680.35         |
| 2026-02-15 |      0.865 | $1,000.00      | $864.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
