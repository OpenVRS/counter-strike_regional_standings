### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SeRCEra, swayu<br />
Global Rank: [330](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  502.8<br />
<br />
Final Rank Value (502.8) = Starting Rank Value (494.8) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.8
- 400 + ( ( 0.050 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 494.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.022
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4685 | 2026-02-13 | Iowa Stormboar         | L   | 0.488      | -            | -                | -                | -         |    -2.45 | cobalt, colin, ryn, SeRCEra, swayu        |
|            6 |     4843 | 2026-02-09 | Insane players         | L   | 0.462      | -            | -                | -                | -         |    -2.81 | cobalt, colin, ryn, SeRCEra, swayu        |
|            5 |     4923 | 2026-02-06 | FlyQuest RED           | W   | 0.441      | 0.333        | 0.000 (0.000)    | 0.035 (0.005)    | 0 (0.000) |     8.73 | cobalt, colin, ryn, SeRCEra, swayu        |
|            4 |     5037 | 2026-02-02 | Life's A Game          | L   | 0.415      | -            | -                | -                | -         |    -0.33 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     5815 | 2026-01-03 | Marsborne              | L   | 0.214      | -            | -                | -                | -         |    -0.28 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     5820 | 2026-01-03 | EMPIRE (American team) | W   | 0.213      | 0.323        | 0.002 (0.000)    | 0.213 (0.015)    | 1 (0.213) |     5.44 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     5826 | 2026-01-03 | Marsborne              | L   | 0.212      | -            | -                | -                | -         |    -0.26 | cobalt, colin, SayYouWill, SeRCEra, swayu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
