### Roster Details<br />
Team Name: FarmVille<br />
Roster: BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar<br />
Global Rank: [203](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [48]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  735.6<br />
<br />
Final Rank Value (735.6) = Starting Rank Value (704.4) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.4
- 400 + ( ( 0.156 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 704.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.158
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      459 | 2026-03-27 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |    -8.86 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|           10 |     2073 | 2026-02-22 | Life's A Game        | L   | 0.915      | -            | -                | -                | -         |    -7.37 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            9 |     2149 | 2026-02-21 | Outfit 49            | W   | 0.909      | 0.333        | 0.008 (0.002)    | 0.311 (0.094)    | 0 (0.000) |    13.69 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            8 |     2412 | 2026-02-16 | Zomblers             | W   | 0.876      | 0.333        | 0.002 (0.001)    | 0.253 (0.074)    | 0 (0.000) |    13.84 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            7 |     2455 | 2026-02-15 | Chicken Coop Esports | W   | 0.869      | 0.333        | 0.017 (0.005)    | 0.186 (0.054)    | 0 (0.000) |    13.60 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            6 |     2466 | 2026-02-15 | Life's A Game        | L   | 0.867      | -            | -                | -                | -         |    -6.76 | BeaKie, cJ-dA-K1nG, HAMBOOGA, sava9e, Umar |
|            5 |     2516 | 2026-02-14 | SkinRave Esports     | W   | 0.862      | 0.303        | 0.018 (0.005)    | 0.204 (0.053)    | 0 (0.000) |    18.00 | BeaKie, cJ-dA-K1nG, HAMBOOGA, sava9e, Umar |
|            4 |     2628 | 2026-02-12 | Team Aether          | L   | 0.849      | -            | -                | -                | -         |   -11.84 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            3 |     2667 | 2026-02-11 | OverKnight           | W   | 0.843      | 0.333        | 0.000 (0.000)    | 0.075 (0.021)    | 0 (0.000) |     6.94 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            2 |     2857 | 2026-02-05 | Regain               | L   | 0.802      | -            | -                | -                | -         |   -13.61 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |
|            1 |     2881 | 2026-02-04 | Sakura Esports       | W   | 0.795      | 0.333        | 0.021 (0.006)    | 0.054 (0.014)    | 0 (0.000) |    13.53 | BeaKie, calamity, cJ-dA-K1nG, sava9e, Umar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,745.45)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-02-22 |      0.915 | $3,000.00      | $2,745.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
