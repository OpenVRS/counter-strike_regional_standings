### Roster Details<br />
Team Name: Team mouse<br />
Roster: Burglar, DYLAN, Jolts, Panic, Sunk<br />
Global Rank: [312](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [77]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  533.5<br />
<br />
Final Rank Value (533.5) = Starting Rank Value (535.0) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.0
- 400 + ( ( 0.071 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 535.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.086
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1256 | 2026-04-25 | ClayMakers Reborn         | L   | 0.961      | -            | -                | -                | -         |   -16.40 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|           13 |     1521 | 2026-04-16 | Zomblers                  | L   | 0.901      | -            | -                | -                | -         |    -7.07 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|           12 |     1587 | 2026-04-12 | Incognito (American team) | L   | 0.875      | -            | -                | -                | -         |   -13.86 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|           11 |     1642 | 2026-04-10 | Life's A Game             | W   | 0.861      | 0.333        | 0.033 (0.009)    | 0.682 (0.196)    | 0 (0.000) |    25.33 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|           10 |     1715 | 2026-04-07 | Girl kissers              | W   | 0.841      | 0.333        | 0.000 (0.000)    | 0.033 (0.009)    | 0 (0.000) |    11.89 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|            9 |     1856 | 2026-04-04 | BOSS                      | L   | 0.821      | -            | -                | -                | -         |    -3.20 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|            8 |     2305 | 2026-03-30 | FarmVille                 | L   | 0.788      | -            | -                | -                | -         |    -5.31 | Burglar, DYLAN, Jolts, Panic, Sunk  |
|            7 |     4555 | 2026-02-15 | Life's A Game             | L   | 0.503      | -            | -                | -                | -         |    -0.52 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     4809 | 2026-02-10 | BOSS                      | L   | 0.467      | -            | -                | -                | -         |    -4.64 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     4818 | 2026-02-10 | Passion UA                | L   | 0.466      | -            | -                | -                | -         |    -0.23 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            4 |     4864 | 2026-02-08 | F5 Esports                | W   | 0.454      | 0.624        | 0.007 (0.002)    | 0.335 (0.095)    | 0 (0.000) |    12.55 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            3 |     4929 | 2026-02-06 | Regain                    | L   | 0.441      | -            | -                | -                | -         |    -2.94 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     4963 | 2026-02-05 | Mythic                    | W   | 0.434      | 0.333        | 0.000 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     5.65 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     5042 | 2026-02-02 | Regain                    | L   | 0.414      | -            | -                | -                | -         |    -2.76 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
