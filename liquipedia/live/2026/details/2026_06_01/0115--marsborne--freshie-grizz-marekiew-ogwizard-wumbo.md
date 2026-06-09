### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, marekiew, ogwizard, WUMBO<br />
Global Rank: [115](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [27]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1010.3<br />
<br />
Final Rank Value (1010.3) = Starting Rank Value (1010.2) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.602[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1010.2
- 400 + ( ( 0.321 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1010.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.228
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        1 | 2026-06-01 | Chicken Coop Esports | L   | 1.000      | -            | -                | -                | -         |   -15.67 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           12 |        6 | 2026-06-01 | SportsBetExpert      | W   | 1.000      | 0.294        | 0.003 (0.001)    | 0.166 (0.049)    | 1 (1.000) |     9.57 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           11 |       12 | 2026-06-01 | Chicken Coop Esports | L   | 1.000      | -            | -                | -                | -         |   -16.67 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |       30 | 2026-05-30 | Reign Above          | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.207 (0.061)    | 1 (1.000) |     4.31 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |       45 | 2026-05-30 | Life's A Game        | W   | 1.000      | 0.294        | 0.033 (0.010)    | 0.682 (0.201)    | 1 (1.000) |    14.16 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |      239 | 2026-05-24 | Overtake             | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.95 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |      243 | 2026-05-24 | SportsBetExpert      | L   | 1.000      | -            | -                | -                | -         |   -23.54 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     1200 | 2026-04-26 | Passion UA           | L   | 0.967      | -            | -                | -                | -         |    -6.70 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     1209 | 2026-04-26 | Fisher College       | L   | 0.966      | -            | -                | -                | -         |   -10.99 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     1253 | 2026-04-25 | M80                  | W   | 0.962      | 0.371        | 0.068 (0.024)    | 0.543 (0.194)    | 1 (0.962) |    26.19 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     1258 | 2026-04-25 | Team Voca            | W   | 0.961      | 0.371        | 0.053 (0.019)    | 0.662 (0.236)    | 1 (0.961) |    23.19 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     1265 | 2026-04-25 | FRZ Unit             | W   | 0.960      | 0.371        | 0.000 (0.000)    | 0.059 (0.021)    | 1 (0.960) |     1.60 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     1276 | 2026-04-25 | Team Voca            | L   | 0.960      | -            | -                | -                | -         |    -6.31 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,803.53)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-01 |      1.000 | $1,200.00      | $1,200.00       |
| 2026-05-24 |      1.000 | $250.00        | $250.00         |
| 2026-04-26 |      0.967 | $1,400.00      | $1,353.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
