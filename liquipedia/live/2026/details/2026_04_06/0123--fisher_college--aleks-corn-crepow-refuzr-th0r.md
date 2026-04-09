### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, TH0R<br />
Global Rank: [123](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [86]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  983.9<br />
<br />
Final Rank Value (983.9) = Starting Rank Value (967.1) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.1
- 400 + ( ( 0.290 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 967.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.385
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       76 | 2026-04-03 | Life's A Game                | W   | 1.000      | 0.143        | 0.060 (0.009)    | 0.714 (0.102)    | 0 (0.000) |    15.57 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           27 |       79 | 2026-04-03 | FarmVille                    | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.219 (0.031)    | 0 (0.000) |     7.85 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           26 |      117 | 2026-04-02 | BOSS                         | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.316 (0.045)    | 0 (0.000) |    15.09 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           25 |      121 | 2026-04-02 | BEBRA1769                    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.80 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           24 |      175 | 2026-04-01 | FarmVille                    | L   | 1.000      | -            | -                | -                | -         |   -23.34 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           23 |      234 | 2026-03-31 | Zomblers                     | W   | 1.000      | 0.143        | -                | 0.253 (0.036)    | 0 (0.000) |     6.03 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           22 |      342 | 2026-03-29 | Life's A Game                | L   | 1.000      | -            | -                | -                | -         |   -16.71 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           21 |      343 | 2026-03-29 | Team Voca                    | L   | 1.000      | -            | -                | -                | -         |    -4.17 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           20 |      357 | 2026-03-29 | Life's A Game                | W   | 1.000      | 0.354        | 0.060 (0.021)    | 0.714 (0.253)    | 1 (1.000) |    15.25 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           19 |      399 | 2026-03-28 | InControl                    | W   | 1.000      | 0.404        | 0.004 (0.002)    | 0.224 (0.091)    | 0 (0.000) |     7.38 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           18 |      405 | 2026-03-28 | Memeories                    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.61 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           17 |      430 | 2026-03-28 | F5 Esports                   | W   | 1.000      | 0.354        | -                | 0.203 (0.072)    | 1 (1.000) |     7.38 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           16 |      453 | 2026-03-28 | AURA Esports (American team) | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.37 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           15 |      477 | 2026-03-27 | FarmVille                    | W   | 1.000      | 0.404        | 0.008 (0.003)    | 0.219 (0.088)    | -         |     7.91 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           14 |      656 | 2026-03-23 | Chicken Coop Esports         | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.186 (0.027)    | -         |     8.12 | AlekS, corn, CrePoW, TH0R, z0mb1e |
|           13 |      932 | 2026-03-18 | Chicken Coop Esports         | W   | 1.000      | 0.143        | 0.017 (0.002)    | -                | -         |     7.33 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           12 |     1026 | 2026-03-16 | F5 Esports                   | W   | 1.000      | 0.143        | -                | 0.203 (0.029)    | -         |     8.51 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           11 |     1108 | 2026-03-14 | BEBRA1769                    | W   | 1.000      | -            | -                | -                | -         |     2.82 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           10 |     1476 | 2026-03-07 | InControl                    | L   | 1.000      | -            | -                | -                | -         |   -23.97 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            9 |     1801 | 2026-02-28 | BOSS                         | L   | 0.955      | -            | -                | -                | -         |   -15.70 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            8 |     1846 | 2026-02-27 | FlyQuest RED                 | W   | 0.949      | 0.143        | 0.007 (0.001)    | -                | -         |     4.31 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            7 |     1895 | 2026-02-26 | Team Voca                    | L   | 0.943      | -            | -                | -                | -         |    -3.79 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            6 |     2373 | 2026-02-17 | F5 Esports                   | W   | 0.883      | -            | -                | -                | -         |     6.61 | AlekS, CrePoW, sml, tatm, TH0R    |
|            5 |     2701 | 2026-02-11 | BOSS                         | L   | 0.841      | -            | -                | -                | -         |   -20.43 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            4 |     2723 | 2026-02-10 | Wildcard                     | L   | 0.836      | -            | -                | -                | -         |   -10.24 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            3 |     2737 | 2026-02-10 | SkinRave Esports             | W   | 0.834      | 0.143        | 0.018 (0.002)    | -                | -         |     9.03 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            2 |     2783 | 2026-02-08 | 1WIN (American team)         | W   | 0.822      | -            | -                | -                | -         |     1.04 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            1 |     2861 | 2026-02-06 | NRG                          | L   | 0.807      | -            | -                | -                | -         |    -1.96 | AlekS, corn, CrePoW, ReFuZR, TH0R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,250.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-03-29 |      1.000 | $3,750.00      | $3,750.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
