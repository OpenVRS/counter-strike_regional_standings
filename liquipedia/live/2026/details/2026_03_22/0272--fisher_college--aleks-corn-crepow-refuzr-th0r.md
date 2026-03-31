### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, TH0R<br />
Global Rank: [272](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [172]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  596.3<br />
<br />
Final Rank Value (596.3) = Starting Rank Value (520.6) + Head To Head Adjustments (75.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.6
- 400 + ( ( 0.060 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 520.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.204
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       47 | 2026-03-18 | Chicken Coop Esports | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.134 (0.019)    | 0 (0.000) |    12.97 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           12 |       89 | 2026-03-16 | F5 Esports           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.102 (0.015)    | 0 (0.000) |    14.58 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           11 |      147 | 2026-03-14 | BEBRA1769            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.81 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           10 |      507 | 2026-03-07 | InControl            | L   | 1.000      | -            | -                | -                | -         |   -11.38 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            9 |      832 | 2026-02-28 | BOSS                 | L   | 1.000      | -            | -                | -                | -         |    -7.53 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            8 |      877 | 2026-02-27 | FlyQuest RED         | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.110 (0.016)    | 0 (0.000) |    18.39 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            7 |      926 | 2026-02-26 | Team Voca            | L   | 1.000      | -            | -                | -                | -         |    -0.59 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            6 |     1398 | 2026-02-17 | F5 Esports           | W   | 0.981      | 0.143        | 0.000 (0.000)    | 0.102 (0.014)    | 0 (0.000) |    15.12 | AlekS, CrePoW, sml, tatm, TH0R    |
|            5 |     1725 | 2026-02-11 | BOSS                 | L   | 0.939      | -            | -                | -                | -         |    -5.44 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            4 |     1747 | 2026-02-10 | Wildcard             | L   | 0.934      | -            | -                | -                | -         |    -4.02 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            3 |     1761 | 2026-02-10 | SkinRave Esports     | W   | 0.932      | 0.143        | 0.026 (0.003)    | 0.278 (0.037)    | 0 (0.000) |    25.55 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            2 |     1807 | 2026-02-08 | 1WIN (American team) | W   | 0.920      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.46 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            1 |     1885 | 2026-02-06 | NRG                  | L   | 0.905      | -            | -                | -                | -         |    -0.21 | AlekS, corn, CrePoW, ReFuZR, TH0R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
