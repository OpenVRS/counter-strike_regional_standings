### Roster Details<br />
Team Name: F5 Esports<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [291](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [77]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  538.9<br />
<br />
Final Rank Value (538.9) = Starting Rank Value (582.5) + Head To Head Adjustments (-43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.144[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 582.5
- 400 + ( ( 0.093 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 582.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.068
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1223 | 2026-02-17 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |   -15.50 | bones, cmrn, Kermi, neight, Signal |
|           12 |     1500 | 2026-02-12 | Chicken Coop Esports | L   | 0.995      | -            | -                | -                | -         |   -18.45 | bones, cmrn, Kermi, neight, Signal |
|           11 |     1574 | 2026-02-10 | FlyQuest RED         | W   | 0.981      | 0.333        | 0.010 (0.003)    | 0.119 (0.039)    | 0 (0.000) |    18.96 | bones, cmrn, Kermi, neight, Signal |
|           10 |     1634 | 2026-02-08 | Team mouse           | L   | 0.968      | -            | -                | -                | -         |   -17.70 | bones, Kermi, neight, Signal, vin3 |
|            9 |     1732 | 2026-02-05 | Outfit 49            | L   | 0.948      | -            | -                | -                | -         |   -11.28 | bones, cmrn, Kermi, neight, Signal |
|            8 |     1754 | 2026-02-04 | OverKnight           | L   | 0.942      | -            | -                | -                | -         |   -12.99 | bones, cmrn, Kermi, neight, Signal |
|            7 |     2568 | 2026-01-03 | KOLESIE              | L   | 0.729      | -            | -                | -                | -         |    -0.59 | bones, cmrn, Kermi, neight, Signal |
|            6 |     2571 | 2026-01-03 | Memeories            | W   | 0.728      | 0.323        | 0.000 (0.000)    | 0.012 (0.003)    | 1 (0.728) |     6.21 | bones, cmrn, Kermi, neight, Signal |
|            5 |     2574 | 2026-01-03 | KOLESIE              | L   | 0.728      | -            | -                | -                | -         |    -0.55 | bones, cmrn, Kermi, neight, Signal |
|            4 |     3551 | 2025-11-09 | BC.Game Esports      | L   | 0.359      | -            | -                | -                | -         |    -0.09 | bones, cmrn, Kermi, neight, Signal |
|            3 |     3568 | 2025-11-08 | Chicken Coop Esports | W   | 0.355      | 0.333        | 0.000 (0.000)    | 0.102 (0.012)    | 1 (0.355) |     4.28 | bones, cmrn, Kermi, neight, Signal |
|            2 |     3573 | 2025-11-08 | Marsborne            | L   | 0.354      | -            | -                | -                | -         |    -0.24 | bones, cmrn, Kermi, neight, Signal |
|            1 |     3579 | 2025-11-08 | Chicken Coop Esports | W   | 0.353      | 0.333        | 0.000 (0.000)    | 0.102 (0.012)    | 1 (0.353) |     4.33 | bones, cmrn, Kermi, neight, Signal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
