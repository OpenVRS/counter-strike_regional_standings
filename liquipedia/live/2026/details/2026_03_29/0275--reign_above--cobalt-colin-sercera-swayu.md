### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SeRCEra, swayu<br />
Global Rank: [275](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [68]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  602.3<br />
<br />
Final Rank Value (602.3) = Starting Rank Value (583.3) + Head To Head Adjustments (19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 583.3
- 400 + ( ( 0.094 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 583.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.118
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      209 | 2026-03-23 | Outfit 49              | L   | 1.000      | -            | -                | -                | -         |   -10.56 | cobalt, dAVE, Louie, SeRCEra, swayu       |
|           14 |      274 | 2026-03-22 | Sakura Esports         | W   | 1.000      | 0.363        | 0.022 (0.008)    | 0.063 (0.023)    | 0 (0.000) |    17.07 | cobalt, dAVE, Louie, SeRCEra, swayu       |
|           13 |      310 | 2026-03-21 | NuTorious              | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.063 (0.023)    | 0 (0.000) |    11.27 | cobalt, dAVE, Louie, SeRCEra, swayu       |
|           12 |      364 | 2026-03-20 | Team Aether            | L   | 1.000      | -            | -                | -                | -         |    -8.98 | cobalt, dAVE, Louie, SeRCEra, swayu       |
|           11 |     2112 | 2026-02-13 | InControl              | L   | 0.907      | -            | -                | -                | -         |   -10.73 | cobalt, colin, ryn, SeRCEra, swayu        |
|           10 |     2270 | 2026-02-09 | SportsBetExpert        | L   | 0.881      | -            | -                | -                | -         |    -8.13 | cobalt, colin, ryn, SeRCEra, swayu        |
|            9 |     2350 | 2026-02-06 | FlyQuest RED           | W   | 0.860      | 0.333        | 0.007 (0.002)    | 0.086 (0.025)    | 0 (0.000) |    15.70 | cobalt, colin, ryn, SeRCEra, swayu        |
|            8 |     2464 | 2026-02-02 | Life's A Game          | L   | 0.834      | -            | -                | -                | -         |    -4.27 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            7 |     3233 | 2026-01-03 | Marsborne              | L   | 0.632      | -            | -                | -                | -         |    -0.65 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            6 |     3238 | 2026-01-03 | EMPIRE (American team) | W   | 0.631      | 0.323        | 0.004 (0.001)    | 0.126 (0.026)    | 1 (0.631) |    12.67 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            5 |     3244 | 2026-01-03 | Marsborne              | L   | 0.631      | -            | -                | -                | -         |    -0.59 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            4 |     4206 | 2025-11-09 | M80                    | L   | 0.264      | -            | -                | -                | -         |    -0.14 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     4224 | 2025-11-08 | Memeories              | W   | 0.260      | 0.333        | 0.000 (0.000)    | 0.040 (0.003)    | 1 (0.260) |     3.25 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     4228 | 2025-11-08 | NRG                    | L   | 0.260      | -            | -                | -                | -         |    -0.16 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     4237 | 2025-11-08 | Memeories              | W   | 0.259      | 0.333        | 0.000 (0.000)    | 0.040 (0.003)    | 1 (0.259) |     3.25 | cobalt, colin, SayYouWill, SeRCEra, swayu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
