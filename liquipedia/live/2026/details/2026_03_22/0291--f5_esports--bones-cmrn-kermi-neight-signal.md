### Roster Details<br />
Team Name: F5 Esports<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [291](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [77]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  542.3<br />
<br />
Final Rank Value (542.3) = Starting Rank Value (578.8) + Head To Head Adjustments (-36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.8
- 400 + ( ( 0.090 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 578.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.102
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       89 | 2026-03-16 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |   -14.58 | bones, cmrn, Kermi, neight, Signal |
|           14 |      111 | 2026-03-15 | Mythic               | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.073 (0.010)    | 0 (0.000) |    18.86 | bones, cmrn, Kermi, neight, Signal |
|           13 |     1398 | 2026-02-17 | Fisher College       | L   | 0.981      | -            | -                | -                | -         |   -15.12 | bones, cmrn, Kermi, neight, Signal |
|           12 |     1675 | 2026-02-12 | Chicken Coop Esports | L   | 0.947      | -            | -                | -                | -         |   -16.94 | bones, cmrn, Kermi, neight, Signal |
|           11 |     1749 | 2026-02-10 | FlyQuest RED         | W   | 0.934      | 0.333        | 0.009 (0.003)    | 0.110 (0.034)    | 0 (0.000) |    18.24 | bones, cmrn, Kermi, neight, Signal |
|           10 |     1809 | 2026-02-08 | Team mouse           | L   | 0.920      | -            | -                | -                | -         |   -16.75 | bones, Kermi, neight, Signal, vin3 |
|            9 |     1907 | 2026-02-05 | Outfit 49            | L   | 0.900      | -            | -                | -                | -         |   -10.39 | bones, cmrn, Kermi, neight, Signal |
|            8 |     1929 | 2026-02-04 | OverKnight           | L   | 0.894      | -            | -                | -                | -         |   -12.42 | bones, cmrn, Kermi, neight, Signal |
|            7 |     2743 | 2026-01-03 | KOLESIE              | L   | 0.681      | -            | -                | -                | -         |    -0.53 | bones, cmrn, Kermi, neight, Signal |
|            6 |     2746 | 2026-01-03 | Memeories            | W   | 0.680      | 0.323        | 0.000 (0.000)    | 0.011 (0.002)    | 1 (0.680) |     5.87 | bones, cmrn, Kermi, neight, Signal |
|            5 |     2749 | 2026-01-03 | KOLESIE              | L   | 0.680      | -            | -                | -                | -         |    -0.49 | bones, cmrn, Kermi, neight, Signal |
|            4 |     3726 | 2025-11-09 | BC.Game Esports      | L   | 0.311      | -            | -                | -                | -         |    -0.08 | bones, cmrn, Kermi, neight, Signal |
|            3 |     3743 | 2025-11-08 | Chicken Coop Esports | W   | 0.307      | 0.333        | 0.000 (0.000)    | 0.134 (0.014)    | 1 (0.307) |     3.96 | bones, cmrn, Kermi, neight, Signal |
|            2 |     3748 | 2025-11-08 | Marsborne            | L   | 0.306      | -            | -                | -                | -         |    -0.19 | bones, cmrn, Kermi, neight, Signal |
|            1 |     3754 | 2025-11-08 | Chicken Coop Esports | W   | 0.305      | 0.333        | 0.000 (0.000)    | 0.134 (0.014)    | 1 (0.305) |     4.00 | bones, cmrn, Kermi, neight, Signal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
