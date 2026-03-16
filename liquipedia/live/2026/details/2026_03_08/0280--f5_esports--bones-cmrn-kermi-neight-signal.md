### Roster Details<br />
Team Name: F5 Esports<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [280](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [75]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  542.8<br />
<br />
Final Rank Value (542.8) = Starting Rank Value (585.5) + Head To Head Adjustments (-42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 585.5
- 400 + ( ( 0.097 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 585.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.081
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      710 | 2026-02-17 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |   -15.56 | bones, cmrn, Kermi, neight, Signal |
|           12 |      968 | 2026-02-12 | Chicken Coop Esports | L   | 1.000      | -            | -                | -                | -         |   -17.32 | bones, cmrn, Kermi, neight, Signal |
|           11 |     1038 | 2026-02-10 | FlyQuest RED         | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.150 (0.050)    | 0 (0.000) |    18.73 | bones, cmrn, Kermi, neight, Signal |
|           10 |     1096 | 2026-02-08 | Team mouse           | L   | 1.000      | -            | -                | -                | -         |   -18.30 | bones, Kermi, neight, Signal, vin3 |
|            9 |     1193 | 2026-02-05 | Outfit 49            | L   | 0.994      | -            | -                | -                | -         |   -12.03 | bones, cmrn, Kermi, neight, Signal |
|            8 |     1213 | 2026-02-04 | OverKnight           | L   | 0.988      | -            | -                | -                | -         |   -13.29 | bones, cmrn, Kermi, neight, Signal |
|            7 |     2012 | 2026-01-03 | KOLESIE              | L   | 0.775      | -            | -                | -                | -         |    -0.85 | bones, cmrn, Kermi, neight, Signal |
|            6 |     2015 | 2026-01-03 | Memeories            | W   | 0.774      | 0.323        | 0.000 (0.000)    | 0.015 (0.004)    | 1 (0.774) |     6.52 | bones, cmrn, Kermi, neight, Signal |
|            5 |     2018 | 2026-01-03 | KOLESIE              | L   | 0.774      | -            | -                | -                | -         |    -0.78 | bones, cmrn, Kermi, neight, Signal |
|            4 |     2985 | 2025-11-09 | BC.Game Esports      | L   | 0.405      | -            | -                | -                | -         |    -0.09 | bones, cmrn, Kermi, neight, Signal |
|            3 |     3002 | 2025-11-08 | Chicken Coop Esports | W   | 0.401      | 0.333        | 0.000 (0.000)    | 0.175 (0.023)    | 1 (0.401) |     5.17 | bones, cmrn, Kermi, neight, Signal |
|            2 |     3007 | 2025-11-08 | Marsborne            | L   | 0.400      | -            | -                | -                | -         |    -0.24 | bones, cmrn, Kermi, neight, Signal |
|            1 |     3013 | 2025-11-08 | Chicken Coop Esports | W   | 0.400      | 0.333        | 0.000 (0.000)    | 0.175 (0.023)    | 1 (0.400) |     5.26 | bones, cmrn, Kermi, neight, Signal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
