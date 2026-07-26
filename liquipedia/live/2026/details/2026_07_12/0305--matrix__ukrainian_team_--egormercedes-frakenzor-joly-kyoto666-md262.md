### Roster Details<br />
Team Name: Matrix (Ukrainian team)<br />
Roster: EgorMercedes, frakenzor, joly, kyoto666, md262<br />
Global Rank: [305](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  576.2<br />
<br />
Final Rank Value (576.2) = Starting Rank Value (595.7) + Head To Head Adjustments (-19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.208[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.7
- 400 + ( ( 0.103 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 595.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.076
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1363 | 2026-05-16 | PURE            | L   | 0.817      | -            | -                | -                | -         |   -16.06 | EgorMercedes, frakenzor, joly, md262, Qweall        |
|           13 |     1370 | 2026-05-16 | BASEMENT BOYS   | L   | 0.816      | -            | -                | -                | -         |    -1.65 | EgorMercedes, frakenzor, joly, md262, Qweall        |
|           12 |     1548 | 2026-05-10 | BASEMENT BOYS   | L   | 0.778      | -            | -                | -                | -         |    -1.74 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|           11 |     1565 | 2026-05-10 | HAFO            | W   | 0.776      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.776) |     6.16 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|           10 |     1575 | 2026-05-10 | Ex-Coalesce     | L   | 0.776      | -            | -                | -                | -         |   -11.31 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            9 |     1768 | 2026-05-02 | Johnny Speeds   | L   | 0.723      | -            | -                | -                | -         |    -1.33 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            8 |     1785 | 2026-05-01 | ROUNDS          | L   | 0.720      | -            | -                | -                | -         |    -8.65 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            7 |     1790 | 2026-05-01 | SAW Youngsters  | W   | 0.719      | 0.303        | 0.003 (0.001)    | 0.401 (0.087)    | 1 (0.719) |    16.02 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            6 |     1793 | 2026-05-01 | G2 Ares         | L   | 0.719      | -            | -                | -                | -         |    -2.93 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            5 |     3570 | 2026-03-23 | ASTRAL Esports  | L   | 0.459      | -            | -                | -                | -         |    -0.99 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            4 |     3580 | 2026-03-23 | Wave Esports    | W   | 0.458      | 0.333        | 0.000 (0.000)    | 0.041 (0.006)    | 1 (0.458) |     8.14 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            3 |     3583 | 2026-03-23 | Hypewrld        | L   | 0.458      | -            | -                | -                | -         |    -5.02 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            2 |     6488 | 2026-01-15 | Ex-MANA eSports | L   | 0.010      | -            | -                | -                | -         |    -0.09 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |
|            1 |     6493 | 2026-01-15 | MOUZ NXT        | L   | 0.009      | -            | -                | -                | -         |    -0.05 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
