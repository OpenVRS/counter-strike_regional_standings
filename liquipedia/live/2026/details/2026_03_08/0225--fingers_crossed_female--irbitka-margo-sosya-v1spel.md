### Roster Details<br />
Team Name: Fingers Crossed Female<br />
Roster: IRBITka, Margo, sosya, v1spel<br />
Global Rank: [225](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [150]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  654.3<br />
<br />
Final Rank Value (654.3) = Starting Rank Value (643.0) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.0
- 400 + ( ( 0.127 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 643.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.116
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      914 | 2026-02-14 | Let Her Cook           | L   | 1.000      | -            | -                | -                | -         |   -12.02 | D7, IRBITka, Margo, v1spel, xia        |
|           13 |      930 | 2026-02-13 | BIG EQUIPA             | L   | 1.000      | -            | -                | -                | -         |    -6.65 | D7, IRBITka, Margo, v1spel, xia        |
|           12 |      975 | 2026-02-12 | Peekaboo               | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.015 (0.006)    | 0 (0.000) |    13.36 | D7, IRBITka, Margo, v1spel, xia        |
|           11 |      983 | 2026-02-12 | Imodium                | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     9.92 | D7, IRBITka, Margo, v1spel, xia        |
|           10 |     2989 | 2025-11-09 | BIG EQUIPA             | L   | 0.405      | -            | -                | -                | -         |    -2.26 | emocore, IRBITka, Margo, sosya, v1spel |
|            9 |     3037 | 2025-11-08 | Nemesis Impact         | W   | 0.398      | 0.303        | 0.001 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     6.23 | emocore, IRBITka, Margo, sosya, v1spel |
|            8 |     3178 | 2025-11-06 | Amateurs (Female team) | W   | 0.385      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.92 | emocore, IRBITka, Margo, sosya, v1spel |
|            7 |     3224 | 2025-11-04 | Confidence             | L   | 0.372      | -            | -                | -                | -         |    -6.36 | emocore, IRBITka, Margo, sosya, v1spel |
|            6 |     3547 | 2025-10-25 | Flame Sharks Female    | W   | 0.305      | 0.338        | 0.002 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     4.60 | Deylary, IRBITka, Margo, sosya, v1spel |
|            5 |     3591 | 2025-10-24 | Amateurs (Female team) | W   | 0.299      | 0.338        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.13 | Deylary, IRBITka, Margo, sosya, v1spel |
|            4 |     3791 | 2025-10-16 | BIG EQUIPA             | L   | 0.246      | -            | -                | -                | -         |    -1.29 | Deylary, IRBITka, Margo, sosya, v1spel |
|            3 |     4369 | 2025-10-01 | Peekaboo               | L   | 0.146      | -            | -                | -                | -         |    -2.44 | Deylary, IRBITka, Margo, sosya, v1spel |
|            2 |     4812 | 2025-09-18 | Nemesis Impact         | W   | 0.059      | 0.338        | 0.001 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     0.94 | Deylary, IRBITka, Margo, sosya, v1spel |
|            1 |     5084 | 2025-09-11 | Team Pigeons           | W   | 0.013      | 0.338        | 0.063 (0.000)    | 0.344 (0.001)    | 0 (0.000) |     0.30 | Deylary, IRBITka, Margo, sosya, v1spel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
