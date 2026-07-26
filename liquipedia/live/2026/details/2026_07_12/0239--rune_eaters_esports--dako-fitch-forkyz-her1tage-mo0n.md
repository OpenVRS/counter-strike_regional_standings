### Roster Details<br />
Team Name: Rune Eaters Esports<br />
Roster: dako, fitch, forkyz, her1tage, mo0N<br />
Global Rank: [239](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  672.6<br />
<br />
Final Rank Value (672.6) = Starting Rank Value (658.2) + Head To Head Adjustments (14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.2
- 400 + ( ( 0.136 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 658.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.062
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3811 | 2026-03-19 | HYPERSPIRIT      | L   | 0.431      | -            | -                | -                | -         |    -3.40 | dako, fitch, forkyz, her1tage, mo0N |
|           14 |     3845 | 2026-03-18 | Hindsight        | W   | 0.425      | 0.384        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.72 | dako, fitch, forkyz, her1tage, mo0N |
|           13 |     3900 | 2026-03-17 | Rebels Gaming    | L   | 0.417      | -            | -                | -                | -         |    -1.33 | dako, fitch, forkyz, her1tage, mo0N |
|           12 |     3946 | 2026-03-16 | KAJO             | W   | 0.411      | 0.384        | 0.000 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     2.33 | dako, fitch, forkyz, her1tage, mo0N |
|           11 |     4647 | 2026-03-02 | Clutchain Female | W   | 0.316      | 0.384        | 0.011 (0.001)    | 0.147 (0.018)    | 0 (0.000) |     5.57 | dako, fitch, forkyz, her1tage, mo0N |
|           10 |     4829 | 2026-02-26 | NOVAQ            | L   | 0.291      | -            | -                | -                | -         |    -2.65 | dako, fitch, forkyz, her1tage, mo0N |
|            9 |     5066 | 2026-02-21 | Nemiga Gaming    | L   | 0.262      | -            | -                | -                | -         |    -0.54 | dako, fitch, forkyz, her1tage, mo0N |
|            8 |     5294 | 2026-02-17 | FOKUS            | L   | 0.232      | -            | -                | -                | -         |    -0.23 | dako, fitch, forkyz, her1tage, mo0N |
|            7 |     5308 | 2026-02-17 | Nemiga Gaming    | W   | 0.231      | 0.624        | 0.108 (0.016)    | 0.746 (0.108)    | 0 (0.000) |     6.83 | dako, fitch, forkyz, her1tage, mo0N |
|            6 |     5411 | 2026-02-15 | Echo             | L   | 0.218      | -            | -                | -                | -         |    -0.20 | dako, fitch, forkyz, her1tage, mo0N |
|            5 |     5911 | 2026-02-01 | DEPO             | W   | 0.123      | 0.277        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.123) |     1.11 | dako, fitch, forkyz, her1tage, mo0N |
|            4 |     6043 | 2026-01-28 | ALLINNERS        | L   | 0.096      | -            | -                | -                | -         |    -1.74 | dako, fitch, forkyz, her1tage, mo0N |
|            3 |     6050 | 2026-01-27 | NOVAQ            | W   | 0.091      | 0.310        | 0.005 (0.000)    | 0.197 (0.006)    | 1 (0.091) |     2.04 | dako, fitch, forkyz, her1tage, mo0N |
|            2 |     6058 | 2026-01-27 | HOTU             | L   | 0.090      | -            | -                | -                | -         |    -0.08 | dako, fitch, forkyz, her1tage, mo0N |
|            1 |     6064 | 2026-01-27 | NOVAQ            | W   | 0.089      | 0.310        | 0.005 (0.000)    | 0.197 (0.005)    | 1 (0.089) |     2.01 | dako, fitch, forkyz, her1tage, mo0N |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($271.19)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      0.264 | $350.00        | $92.50          |
| 2026-02-01 |      0.123 | $1,055.00      | $130.21         |
| 2026-01-28 |      0.098 | $497.00        | $48.48          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
