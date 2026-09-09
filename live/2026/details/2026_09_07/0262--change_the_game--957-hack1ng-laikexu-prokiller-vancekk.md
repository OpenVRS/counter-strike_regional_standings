### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [262](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  639.3<br />
<br />
Final Rank Value (639.3) = Starting Rank Value (639.7) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.7
- 400 + ( ( 0.126 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 639.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3205 | 2026-05-13 | Haunted House | L   | 0.415      | -            | -                | -                | -         |    -5.71 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     3231 | 2026-05-12 | Vitalem Aerem | W   | 0.411      | 0.548        | 0.000 (0.000)    | 0.184 (0.041)    | 1 (0.411) |     7.58 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     3270 | 2026-05-11 | SemperFi      | L   | 0.404      | -            | -                | -                | -         |    -5.57 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           11 |     4470 | 2026-04-04 | 5star         | L   | 0.157      | -            | -                | -                | -         |    -1.13 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           10 |     4473 | 2026-04-04 | TYLOO         | L   | 0.157      | -            | -                | -                | -         |    -0.10 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            9 |     4550 | 2026-04-03 | FengDa        | L   | 0.150      | -            | -                | -                | -         |    -2.41 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            8 |     4558 | 2026-04-03 | Rare Atom     | W   | 0.150      | 0.352        | 0.001 (0.000)    | 0.032 (0.002)    | 1 (0.150) |     2.52 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            7 |     4567 | 2026-04-03 | TYLOO         | L   | 0.149      | -            | -                | -                | -         |    -0.10 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            6 |     4660 | 2026-04-02 | Eruption      | W   | 0.144      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.92 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            5 |     4664 | 2026-04-02 | Vitalem Aerem | W   | 0.143      | 0.352        | 0.000 (0.000)    | 0.184 (0.009)    | 1 (0.143) |     2.67 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            4 |     4912 | 2026-03-30 | Lynn Vision   | L   | 0.124      | -            | -                | -                | -         |    -0.10 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            3 |     4923 | 2026-03-30 | Vitalem Aerem | W   | 0.123      | 0.352        | 0.000 (0.000)    | 0.184 (0.008)    | 1 (0.123) |     2.31 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            2 |     5454 | 2026-03-21 | Haunted House | L   | 0.064      | -            | -                | -                | -         |    -0.88 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            1 |     5517 | 2026-03-20 | 5star         | L   | 0.057      | -            | -                | -                | -         |    -0.40 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($235.25)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.164 | $1,438.00      | $235.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
