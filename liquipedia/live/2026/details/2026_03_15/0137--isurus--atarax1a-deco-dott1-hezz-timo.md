### Roster Details<br />
Team Name: Isurus<br />
Roster: atarax1a, deco, dott1, Hezz, timo<br />
Global Rank: [137](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [28]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  865.8<br />
<br />
Final Rank Value (865.8) = Starting Rank Value (896.2) + Head To Head Adjustments (-30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.2
- 400 + ( ( 0.254 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 896.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.442
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       30 | 2026-03-14 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |    -5.48 | atarax1a, BK1, deco, dott1, Hezz     |
|           27 |       37 | 2026-03-14 | R2 Esports Club          | W   | 1.000      | 0.354        | 0.004 (0.002)    | 0.304 (0.108)    | 1 (1.000) |    10.16 | atarax1a, BK1, deco, dott1, Hezz     |
|           26 |      185 | 2026-03-10 | Procyon Team             | W   | 1.000      | 0.143        | 0.013 (0.002)    | -                | 0 (0.000) |    13.68 | atarax1a, BK1, deco, dott1, Hezz     |
|           25 |      188 | 2026-03-10 | LUNA Esports             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.38 | atarax1a, BK1, deco, dott1, Hezz     |
|           24 |      229 | 2026-03-09 | PaiN Gaming Academy      | L   | 1.000      | -            | -                | -                | -         |   -22.80 | atarax1a, deco, dott1, Hezz, timo    |
|           23 |      361 | 2026-03-07 | UNO MILLE                | L   | 1.000      | -            | -                | -                | -         |   -23.16 | atarax1a, deco, dott1, Hezz, timo    |
|           22 |      432 | 2026-03-05 | Keyd Stars               | L   | 1.000      | -            | -                | -                | -         |   -19.13 | atarax1a, deco, dott1, Hezz, timo    |
|           21 |      445 | 2026-03-05 | FOLHA AMARELA            | L   | 1.000      | -            | -                | -                | -         |   -17.19 | atarax1a, deco, dott1, Hezz, timo    |
|           20 |      460 | 2026-03-05 | R2 Esports Club          | W   | 1.000      | 0.371        | 0.004 (0.002)    | 0.304 (0.112)    | 0 (0.000) |     8.33 | atarax1a, deco, dott1, Hezz, timo    |
|           19 |      501 | 2026-03-04 | FURIA Female             | W   | 1.000      | 0.371        | 0.008 (0.003)    | -                | 0 (0.000) |     7.01 | atarax1a, deco, dott1, Hezz, timo    |
|           18 |      530 | 2026-03-03 | Fake do Biru             | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.310 (0.115)    | 0 (0.000) |    16.17 | atarax1a, deco, dott1, Hezz, timo    |
|           17 |      577 | 2026-03-02 | Crashers                 | W   | 1.000      | 0.333        | -                | 0.268 (0.089)    | 0 (0.000) |     4.95 | atarax1a, deco, dott1, Hezz, timo    |
|           16 |      627 | 2026-03-01 | Procyon Team             | L   | 1.000      | -            | -                | -                | -         |   -18.67 | atarax1a, deco, dott1, Hezz, timo    |
|           15 |      639 | 2026-03-01 | Despedidos               | W   | 1.000      | 0.371        | 0.006 (0.002)    | -                | 1 (1.000) |     7.18 | atarax1a, deco, dott1, Hezz, timo    |
|           14 |      660 | 2026-02-28 | Vasco eSports            | W   | 1.000      | 0.371        | 0.003 (0.001)    | 0.354 (0.131)    | 0 (0.000) |    11.59 | atarax1a, deco, dott1, Hezz, timo    |
|           13 |      665 | 2026-02-28 | Procyon Team             | L   | 1.000      | -            | -                | -                | -         |   -19.31 | atarax1a, deco, dott1, Hezz, timo    |
|           12 |      825 | 2026-02-25 | Players (Brazilian team) | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.82 | atarax1a, deco, dott1, Hezz, timo    |
|           11 |      863 | 2026-02-24 | FOLHA AMARELA            | L   | 1.000      | -            | -                | -                | -         |   -17.01 | atarax1a, deco, dott1, Hezz, timo    |
|           10 |     1052 | 2026-02-21 | DashSkins                | W   | 1.000      | 0.371        | 0.012 (0.004)    | 0.638 (0.237)    | -         |    15.31 | atarax1a, deco, dott1, Hezz, timo    |
|            9 |     1921 | 2026-01-30 | Procyon Team             | L   | 0.906      | -            | -                | -                | -         |   -16.26 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            8 |     1928 | 2026-01-30 | BESTIA                   | L   | 0.905      | -            | -                | -                | -         |    -3.43 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            7 |     2039 | 2026-01-25 | MIBR                     | L   | 0.872      | -            | -                | -                | -         |    -2.05 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            6 |     2058 | 2026-01-24 | Yawara E-Sports          | W   | 0.868      | 0.371        | 0.002 (0.001)    | 0.262 (0.084)    | -         |    13.46 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            5 |     2102 | 2026-01-23 | ShindeN                  | W   | 0.860      | 0.371        | 0.054 (0.017)    | 0.513 (0.163)    | -         |    23.73 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            4 |     2228 | 2026-01-20 | Crashers                 | W   | 0.840      | 0.371        | -                | 0.268 (0.084)    | -         |     3.62 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            3 |     2264 | 2026-01-18 | Players (Brazilian team) | L   | 0.828      | -            | -                | -                | -         |   -20.06 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            2 |     2358 | 2026-01-16 | Pugdesonesto             | W   | 0.813      | -            | -                | -                | -         |     2.65 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            1 |     2452 | 2026-01-14 | Game Hunters             | W   | 0.798      | 0.371        | -                | 0.405 (0.120)    | -         |     8.08 | atarax1a, deco, dott1, FraGuTy, Hezz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,355.20)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-03-05 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-03-01 |      1.000 | $2,400.00      | $2,400.00       |
| 2026-02-01 |      0.921 | $700.00        | $644.75         |
| 2026-01-25 |      0.874 | $1,500.00      | $1,310.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
