### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SeRCEra, swayu<br />
Global Rank: [329](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  497.4<br />
<br />
Final Rank Value (497.4) = Starting Rank Value (491.0) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.0
- 400 + ( ( 0.047 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 491.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.018
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4795 | 2026-02-13 | Iowa Stormboar         | L   | 0.436      | -            | -                | -                | -         |    -2.20 | cobalt, colin, ryn, SeRCEra, swayu        |
|            6 |     4953 | 2026-02-09 | Insane players         | L   | 0.410      | -            | -                | -                | -         |    -2.51 | cobalt, colin, ryn, SeRCEra, swayu        |
|            5 |     5033 | 2026-02-06 | FlyQuest RED           | W   | 0.389      | 0.333        | 0.000 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     7.79 | cobalt, colin, ryn, SeRCEra, swayu        |
|            4 |     5147 | 2026-02-02 | Life's A Game          | L   | 0.363      | -            | -                | -                | -         |    -0.31 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     5925 | 2026-01-03 | Marsborne              | L   | 0.161      | -            | -                | -                | -         |    -0.24 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     5930 | 2026-01-03 | EMPIRE (American team) | W   | 0.160      | 0.323        | 0.002 (0.000)    | 0.200 (0.010)    | 1 (0.160) |     4.09 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     5936 | 2026-01-03 | Marsborne              | L   | 0.160      | -            | -                | -                | -         |    -0.23 | cobalt, colin, SayYouWill, SeRCEra, swayu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
