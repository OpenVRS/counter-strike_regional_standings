### Roster Details<br />
Team Name: FarmVille<br />
Roster: BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar<br />
Global Rank: [193](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [41]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  740.5<br />
<br />
Final Rank Value (740.5) = Starting Rank Value (705.3) + Head To Head Adjustments (35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.157 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 705.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.171
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       60 | 2026-03-27 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |    -9.26 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|           10 |     1604 | 2026-02-22 | Life's A Game        | L   | 0.966      | -            | -                | -                | -         |    -8.15 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            9 |     1680 | 2026-02-21 | Outfit 49            | W   | 0.960      | 0.333        | 0.008 (0.002)    | 0.337 (0.108)    | 0 (0.000) |    14.40 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            8 |     1943 | 2026-02-16 | Zomblers             | W   | 0.927      | 0.333        | 0.003 (0.001)    | 0.279 (0.086)    | 0 (0.000) |    14.66 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            7 |     1986 | 2026-02-15 | Chicken Coop Esports | W   | 0.921      | 0.333        | 0.016 (0.005)    | 0.203 (0.062)    | 0 (0.000) |    13.99 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            6 |     1997 | 2026-02-15 | Life's A Game        | L   | 0.919      | -            | -                | -                | -         |    -7.40 | BeaKie, cJ-dA-K1nG, HAMBOOGA, sava9e, Umar |
|            5 |     2047 | 2026-02-14 | SkinRave Esports     | W   | 0.913      | 0.303        | 0.019 (0.005)    | 0.237 (0.065)    | 0 (0.000) |    19.41 | BeaKie, cJ-dA-K1nG, HAMBOOGA, sava9e, Umar |
|            4 |     2159 | 2026-02-12 | Team Aether          | L   | 0.900      | -            | -                | -                | -         |   -12.47 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            3 |     2198 | 2026-02-11 | OverKnight           | W   | 0.894      | 0.333        | 0.000 (0.000)    | 0.090 (0.027)    | 0 (0.000) |     9.99 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            2 |     2388 | 2026-02-05 | Regain               | L   | 0.853      | -            | -                | -                | -         |   -14.40 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            1 |     2412 | 2026-02-04 | Sakura Esports       | W   | 0.847      | 0.333        | 0.022 (0.006)    | 0.063 (0.018)    | 0 (0.000) |    14.41 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,898.89)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-02-22 |      0.966 | $3,000.00      | $2,898.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
