### Roster Details<br />
Team Name: train launcher<br />
Roster: bsover, Leon1das, Majkn, Siz, timothybtw<br />
Global Rank: [223](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  729.5<br />
<br />
Final Rank Value (729.5) = Starting Rank Value (707.7) + Head To Head Adjustments (21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.7
- 400 + ( ( 0.159 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 707.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      782 | 2026-06-27 | roamsfiest    | L   | 0.953      | -            | -                | -                | -         |   -11.06 | bsover, Leon1das, Majkn, Siz, timothybtw |
|            5 |      795 | 2026-06-26 | ReThink       | L   | 0.948      | -            | -                | -                | -         |    -8.86 | bsover, Leon1das, Majkn, Siz, timothybtw |
|            4 |      797 | 2026-06-26 | roamsfiest    | W   | 0.947      | 0.325        | 0.004 (0.001)    | 0.175 (0.054)    | 1 (0.947) |    17.89 | bsover, Leon1das, Majkn, Siz, timothybtw |
|            3 |      835 | 2026-06-24 | Entropy       | W   | 0.934      | 0.313        | 0.004 (0.001)    | 0.823 (0.240)    | 0 (0.000) |    19.99 | bsover, Leon1das, Majkn, Siz, timothybtw |
|            2 |      849 | 2026-06-23 | Johnny Speeds | L   | 0.928      | -            | -                | -                | -         |    -3.26 | bsover, Leon1das, Majkn, Siz, timothybtw |
|            1 |      850 | 2026-06-23 | LEO           | W   | 0.927      | 0.313        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.15 | agoz, bsover, Majkn, Siz, timothybtw     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,252.72)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      0.954 | $1,313.00      | $1,252.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
