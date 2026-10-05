### Roster Details<br />
Team Name: Reign Above<br />
Roster: AEROj, cobalt, dAVE, louie, SeRCEra<br />
Global Rank: [307](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [71]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  554.2<br />
<br />
Final Rank Value (554.2) = Starting Rank Value (533.3) + Head To Head Adjustments (20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.158[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.3
- 400 + ( ( 0.067 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 533.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3912 | 2026-05-31 | SportsBetExpert | L   | 0.353      | -            | -                | -                | -         |    -0.21 | AEROj, cobalt, dAVE, louie, SeRCEra      |
|            8 |     3929 | 2026-05-30 | NuTorious       | W   | 0.349      | 0.294        | 0.000 (0.000)    | 0.196 (0.020)    | 1 (0.349) |     8.09 | AEROj, cobalt, dAVE, louie, SeRCEra      |
|            7 |     3933 | 2026-05-30 | Marsborne       | L   | 0.348      | -            | -                | -                | -         |    -1.27 | AEROj, cobalt, dAVE, louie, SeRCEra      |
|            6 |     3942 | 2026-05-30 | Wanted Goons    | W   | 0.347      | 0.294        | 0.000 (0.000)    | 0.118 (0.012)    | 1 (0.347) |     7.42 | AEROj, cobalt, dAVE, louie, SeRCEra      |
|            5 |     3953 | 2026-05-30 | FRZ             | W   | 0.347      | 0.294        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.347) |     3.69 | AEROj, cobalt, dAVE, louie, SeRCEra      |
|            4 |     5004 | 2026-04-29 | Fisher College  | L   | 0.143      | -            | -                | -                | -         |    -1.23 | cobalt, dAVE, louie, SayYouWill, SeRCEra |
|            3 |     5042 | 2026-04-28 | NuTorious       | W   | 0.137      | 0.363        | 0.000 (0.000)    | 0.196 (0.010)    | 0 (0.000) |     3.24 | cobalt, dAVE, louie, SayYouWill, SeRCEra |
|            2 |     5082 | 2026-04-27 | FarmVille       | L   | 0.130      | -            | -                | -                | -         |    -1.15 | cobalt, dAVE, louie, SayYouWill, SeRCEra |
|            1 |     5134 | 2026-04-26 | Marsborne       | W   | 0.122      | 0.363        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.33 | cobalt, dAVE, louie, SayYouWill, SeRCEra |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
