### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, TH0R<br />
Global Rank: [134](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [94]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  929.4<br />
<br />
Final Rank Value (929.4) = Starting Rank Value (919.1) + Head To Head Adjustments (10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.1
- 400 + ( ( 0.265 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 919.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.324
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      324 | 2026-03-29 | Life's A Game                | L   | 1.000      | -            | -                | -                | -         |   -16.09 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           21 |      325 | 2026-03-29 | Team Voca                    | L   | 1.000      | -            | -                | -                | -         |    -3.64 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           20 |      340 | 2026-03-29 | Life's A Game                | W   | 1.000      | 0.354        | 0.027 (0.010)    | 0.679 (0.241)    | 1 (1.000) |    15.95 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           19 |      381 | 2026-03-28 | InControl                    | W   | 1.000      | 0.404        | 0.004 (0.002)    | 0.224 (0.091)    | 0 (0.000) |     8.15 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           18 |      387 | 2026-03-28 | Memeories                    | W   | 1.000      | 0.354        | -                | 0.037 (0.013)    | 1 (1.000) |     3.08 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           17 |      412 | 2026-03-28 | F5 Esports                   | W   | 1.000      | 0.354        | 0.002 (0.001)    | 0.203 (0.072)    | 1 (1.000) |     8.38 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           16 |      435 | 2026-03-28 | AURA Esports (American team) | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.64 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           15 |      459 | 2026-03-27 | FarmVille                    | W   | 1.000      | 0.404        | 0.008 (0.003)    | 0.158 (0.064)    | 0 (0.000) |     8.86 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           14 |      638 | 2026-03-23 | Chicken Coop Esports         | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.186 (0.027)    | 0 (0.000) |     9.24 | AlekS, corn, CrePoW, TH0R, z0mb1e |
|           13 |      914 | 2026-03-18 | Chicken Coop Esports         | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.186 (0.027)    | 0 (0.000) |     8.48 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           12 |     1008 | 2026-03-16 | F5 Esports                   | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.203 (0.029)    | 0 (0.000) |     9.84 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           11 |     1090 | 2026-03-14 | BEBRA1769                    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.05 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|           10 |     1458 | 2026-03-07 | InControl                    | L   | 1.000      | -            | -                | -                | -         |   -22.94 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            9 |     1783 | 2026-02-28 | BOSS                         | L   | 0.955      | -            | -                | -                | -         |   -14.70 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            8 |     1828 | 2026-02-27 | FlyQuest RED                 | W   | 0.949      | 0.143        | 0.007 (0.001)    | -                | -         |     5.19 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            7 |     1877 | 2026-02-26 | Team Voca                    | L   | 0.943      | -            | -                | -                | -         |    -3.13 | AlekS, CrePoW, ReFuZR, tatm, TH0R |
|            6 |     2349 | 2026-02-17 | F5 Esports                   | W   | 0.883      | 0.143        | 0.002 (0.000)    | 0.203 (0.026)    | -         |     7.88 | AlekS, CrePoW, sml, tatm, TH0R    |
|            5 |     2676 | 2026-02-11 | BOSS                         | L   | 0.841      | -            | -                | -                | -         |   -19.27 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            4 |     2698 | 2026-02-10 | Wildcard                     | L   | 0.836      | -            | -                | -                | -         |    -8.90 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            3 |     2712 | 2026-02-10 | SkinRave Esports             | W   | 0.834      | 0.143        | 0.018 (0.002)    | 0.204 (0.024)    | -         |    10.35 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            2 |     2758 | 2026-02-08 | 1WIN (American team)         | W   | 0.822      | -            | -                | -                | -         |     1.34 | AlekS, corn, CrePoW, ReFuZR, TH0R |
|            1 |     2836 | 2026-02-06 | NRG                          | L   | 0.807      | -            | -                | -                | -         |    -1.54 | AlekS, corn, CrePoW, ReFuZR, TH0R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,750.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $3,750.00      | $3,750.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
