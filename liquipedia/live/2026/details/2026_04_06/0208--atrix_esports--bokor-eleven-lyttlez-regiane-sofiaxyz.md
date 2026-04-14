### Roster Details<br />
Team Name: Atrix Esports<br />
Roster: bokor, eleveN, LyttleZ, REGIANE, sofiaxyz<br />
Global Rank: [208](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [48]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  739.4<br />
<br />
Final Rank Value (739.4) = Starting Rank Value (749.1) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.1
- 400 + ( ( 0.178 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 749.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.050
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      741 | 2026-03-22 | Guará eSports | L   | 1.000      | -            | -                | -                | -         |   -22.24 | eleveN, LyttleZ, REGIANE, segalla, sofiaxyz |
|           11 |      781 | 2026-03-21 | DashSkins     | L   | 1.000      | -            | -                | -                | -         |    -4.54 | eleveN, LyttleZ, REGIANE, segalla, sofiaxyz |
|           10 |      842 | 2026-03-20 | Isurus        | W   | 1.000      | 0.363        | 0.056 (0.020)    | 0.475 (0.172)    | 0 (0.000) |    23.56 | eleveN, LyttleZ, REGIANE, segalla, sofiaxyz |
|            9 |     4212 | 2025-11-29 | MIBR Female   | L   | 0.346      | -            | -                | -                | -         |    -4.21 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            8 |     4233 | 2025-11-28 | NIP Impact    | L   | 0.340      | -            | -                | -                | -         |    -5.40 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            7 |     4239 | 2025-11-28 | MIBR Female   | W   | 0.340      | 0.605        | 0.043 (0.009)    | 0.047 (0.010)    | 1 (0.340) |     6.55 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            6 |     4560 | 2025-11-14 | MIBR Female   | L   | 0.248      | -            | -                | -                | -         |    -3.10 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            5 |     4571 | 2025-11-14 | FURIA Female  | L   | 0.246      | -            | -                | -                | -         |    -4.32 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            4 |     4590 | 2025-11-13 | Four Magic    | W   | 0.240      | 0.385        | 0.002 (0.000)    | 0.009 (0.001)    | 1 (0.240) |     2.36 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            3 |     5330 | 2025-10-24 | Four Magic    | W   | 0.108      | 0.520        | 0.002 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     1.07 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            2 |     5538 | 2025-10-16 | Thekillaz     | W   | 0.055      | 0.520        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.49 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |
|            1 |     5742 | 2025-10-09 | Capivaras     | W   | 0.008      | 0.520        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.05 | bokor, eleveN, LyttleZ, REGIANE, sofiaxyz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,917.16)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.353 | $17,000.00     | $6,004.91       |
| 2025-11-16 |      0.260 | $3,511.00      | $912.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
