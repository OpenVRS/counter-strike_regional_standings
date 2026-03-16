### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [147](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  810.5<br />
<br />
Final Rank Value (810.5) = Starting Rank Value (808.5) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.5
- 400 + ( ( 0.216 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 808.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.113
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2261 | 2025-11-30 | BIG EQUIPA          | L   | 0.585      | -            | -                | -                | -         |    -6.25 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           21 |     2332 | 2025-11-28 | Atrix Esports       | W   | 0.573      | 0.605        | 0.035 (0.012)    | 0.076 (0.026)    | 1 (0.573) |     8.67 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           20 |     2342 | 2025-11-28 | Team Pigeons        | W   | 0.572      | 0.605        | 0.066 (0.023)    | 0.399 (0.138)    | 1 (0.572) |    10.50 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           19 |     2803 | 2025-11-09 | Team Pigeons        | L   | 0.447      | -            | -                | -                | -         |    -6.13 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           18 |     2902 | 2025-11-07 | Nemesis Impact      | W   | 0.434      | 0.317        | 0.002 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     4.26 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           17 |     3067 | 2025-11-04 | NoKami              | W   | 0.412      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.11 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           16 |     3433 | 2025-10-24 | Let Her Cook        | W   | 0.341      | 0.523        | 0.047 (0.008)    | 0.155 (0.028)    | 0 (0.000) |     5.27 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           15 |     3507 | 2025-10-23 | RUBY                | L   | 0.332      | -            | -                | -                | -         |    -4.65 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           14 |     3521 | 2025-10-22 | ENCE Academy        | L   | 0.327      | -            | -                | -                | -         |    -5.17 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           13 |     3660 | 2025-10-16 | NOVAQ               | L   | 0.284      | -            | -                | -                | -         |    -1.24 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           12 |     3699 | 2025-10-15 | SPARTA Esports      | L   | 0.278      | -            | -                | -                | -         |    -4.16 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           11 |     3844 | 2025-10-09 | AKA HERO KAJO       | W   | 0.241      | 0.523        | 0.001 (0.000)    | 0.013 (0.002)    | 0 (0.000) |     1.81 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           10 |     4235 | 2025-10-01 | Hindsight           | W   | 0.187      | 0.523        | 0.003 (0.000)    | 0.046 (0.004)    | 0 (0.000) |     1.63 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            9 |     4528 | 2025-09-25 | 1w Team             | L   | 0.144      | -            | -                | -                | -         |    -0.85 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            8 |     4538 | 2025-09-24 | Flame Sharks Female | W   | 0.141      | 0.523        | 0.002 (0.000)    | 0.033 (0.002)    | 0 (0.000) |     1.21 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            7 |     4558 | 2025-09-24 | UNiTY esports       | L   | 0.138      | -            | -                | -                | -         |    -1.68 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            6 |     4835 | 2025-09-14 | ALGO Esports        | L   | 0.072      | -            | -                | -                | -         |    -1.93 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            5 |     4898 | 2025-09-13 | Square Sausages     | L   | 0.065      | -            | -                | -                | -         |    -1.73 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            4 |     5014 | 2025-09-10 | 888aura             | W   | 0.047      | 0.523        | 0.001 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.40 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            3 |     5156 | 2025-09-07 | ARCRED              | L   | 0.026      | -            | -                | -                | -         |    -0.16 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            2 |     5196 | 2025-09-06 | KHAN                | W   | 0.018      | 0.384        | 0.000 (0.000)    | 0.045 (0.000)    | 0 (0.000) |     0.10 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            1 |     5216 | 2025-09-05 | EYEBALLERS          | L   | 0.011      | -            | -                | -                | -         |    -0.03 | aiM, Nayomy, Qiyarah, vilga, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,533.78)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.586 | $26,500.00     | $15,533.78      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
