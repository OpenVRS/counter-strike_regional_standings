### Roster Details<br />
Team Name: Fingers Crossed Female<br />
Roster: D7, IRBITka, Margo, v1spel, xia<br />
Global Rank: [239](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [156]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  639.4<br />
<br />
Final Rank Value (639.4) = Starting Rank Value (641.1) + Head To Head Adjustments (-1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.1
- 400 + ( ( 0.123 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 641.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.097
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1441 | 2026-02-14 | Let Her Cook           | L   | 1.000      | -            | -                | -                | -         |   -10.80 | D7, IRBITka, Margo, v1spel, xia        |
|           13 |     1457 | 2026-02-13 | BIG EQUIPA             | L   | 1.000      | -            | -                | -                | -         |    -6.67 | D7, IRBITka, Margo, v1spel, xia        |
|           12 |     1507 | 2026-02-12 | Peekaboo               | W   | 0.993      | 0.384        | 0.002 (0.001)    | 0.038 (0.014)    | 0 (0.000) |    15.04 | D7, IRBITka, Margo, v1spel, xia        |
|           11 |     1516 | 2026-02-12 | Imodium                | W   | 0.993      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.46 | D7, IRBITka, Margo, v1spel, xia        |
|           10 |     1618 | 2026-02-09 | Peekaboo               | L   | 0.974      | -            | -                | -                | -         |   -15.10 | D7, IRBITka, Margo, v1spel, xia        |
|            9 |     3555 | 2025-11-09 | BIG EQUIPA             | L   | 0.358      | -            | -                | -                | -         |    -2.19 | emocore, IRBITka, Margo, sosya, v1spel |
|            8 |     3603 | 2025-11-08 | Nemesis Impact         | W   | 0.352      | 0.317        | 0.001 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     5.59 | emocore, IRBITka, Margo, sosya, v1spel |
|            7 |     3745 | 2025-11-06 | Amateurs (Female team) | W   | 0.338      | 0.317        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.50 | emocore, IRBITka, Margo, sosya, v1spel |
|            6 |     3795 | 2025-11-04 | Confidence             | L   | 0.326      | -            | -                | -                | -         |    -5.50 | emocore, IRBITka, Margo, sosya, v1spel |
|            5 |     4128 | 2025-10-25 | Flame Sharks Female    | W   | 0.258      | 0.523        | 0.001 (0.000)    | 0.019 (0.003)    | 0 (0.000) |     3.84 | Deylary, IRBITka, Margo, sosya, v1spel |
|            4 |     4174 | 2025-10-24 | Amateurs (Female team) | W   | 0.253      | 0.523        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.68 | Deylary, IRBITka, Margo, sosya, v1spel |
|            3 |     4382 | 2025-10-16 | BIG EQUIPA             | L   | 0.200      | -            | -                | -                | -         |    -1.16 | Deylary, IRBITka, Margo, sosya, v1spel |
|            2 |     4976 | 2025-10-01 | Peekaboo               | L   | 0.100      | -            | -                | -                | -         |    -1.60 | Deylary, IRBITka, Margo, sosya, v1spel |
|            1 |     5432 | 2025-09-18 | Nemesis Impact         | W   | 0.013      | 0.523        | 0.001 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.21 | Deylary, IRBITka, Margo, sosya, v1spel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,179.53)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-11-09 |      0.359 | $500.00        | $179.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
