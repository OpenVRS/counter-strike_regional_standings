### Roster Details<br />
Team Name: Gentle Mates<br />
Roster: alex, dav1g, Martinez, mopoz, sausol<br />
Global Rank: [44](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [32]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1253.0<br />
<br />
Final Rank Value (1253.0) = Starting Rank Value (1222.5) + Head To Head Adjustments (30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.524[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.324[<sup>2</sup>](#table1)
- LAN Wins: 0.490[<sup>2</sup>](#table1)

The average of these factors is 0.434<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1222.5
- 400 + ( ( 0.434 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1222.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.461
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      345 | 2026-06-20 | Ex-RUBY              | L   | 1.000      | -            | -                | -                | -         |   -21.48 | alex, dav1g, Martinez, mopoz, sausol |
|           46 |      381 | 2026-06-18 | KOLESIE              | W   | 1.000      | 0.384        | 0.026 (0.010)    | 0.858 (0.330)    | -         |     8.04 | alex, dav1g, Martinez, mopoz, sausol |
|           45 |      400 | 2026-06-16 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -15.91 | alex, dav1g, Martinez, mopoz, sausol |
|           44 |      420 | 2026-06-15 | Acend                | W   | 1.000      | 0.435        | 0.072 (0.031)    | 0.898 (0.390)    | -         |    13.16 | alex, dav1g, Martinez, mopoz, sausol |
|           43 |      789 | 2026-05-31 | Team Nemesis         | L   | 0.917      | -            | -                | -                | -         |   -12.41 | alex, dav1g, Martinez, mopoz, sausol |
|           42 |      824 | 2026-05-30 | WW TEAM              | W   | 0.911      | -            | -                | -                | -         |     5.58 | alex, dav1g, Martinez, mopoz, sausol |
|           41 |      836 | 2026-05-30 | GenOne               | W   | 0.910      | 0.384        | -                | 1.000 (0.350)    | -         |     4.50 | alex, dav1g, Martinez, mopoz, sausol |
|           40 |      846 | 2026-05-30 | Eternal Fire         | W   | 0.909      | 0.435        | -                | 0.618 (0.244)    | -         |     8.41 | alex, dav1g, Martinez, mopoz, sausol |
|           39 |      863 | 2026-05-29 | Eternal Fire         | W   | 0.904      | 0.384        | -                | 0.618 (0.215)    | -         |     8.95 | alex, dav1g, Martinez, mopoz, sausol |
|           38 |      925 | 2026-05-28 | GenOne               | W   | 0.896      | 0.435        | -                | 1.000 (0.390)    | -         |     4.96 | alex, dav1g, Martinez, mopoz, sausol |
|           37 |      959 | 2026-05-27 | ALGO Esports         | W   | 0.891      | -            | -                | -                | -         |     2.10 | alex, dav1g, Martinez, mopoz, sausol |
|           36 |     1461 | 2026-05-12 | Magic                | L   | 0.795      | -            | -                | -                | -         |    -6.66 | alex, dav1g, Martinez, mopoz, sausol |
|           35 |     1488 | 2026-05-12 | FURIA                | L   | 0.790      | -            | -                | -                | -         |    -1.26 | alex, dav1g, Martinez, mopoz, sausol |
|           34 |     1542 | 2026-05-10 | HEROIC               | W   | 0.781      | 1.000        | 0.111 (0.087)    | 0.356 (0.278)    | 1 (0.781) |    15.58 | alex, dav1g, Martinez, mopoz, sausol |
|           33 |     1579 | 2026-05-09 | K27                  | W   | 0.775      | 1.000        | 0.082 (0.064)    | 0.665 (0.515)    | 1 (0.775) |    12.78 | alex, dav1g, Martinez, mopoz, sausol |
|           32 |     1604 | 2026-05-09 | MOUZ                 | L   | 0.769      | -            | -                | -                | -         |    -0.90 | alex, dav1g, Martinez, mopoz, sausol |
|           31 |     1719 | 2026-05-03 | Magic                | L   | 0.730      | -            | -                | -                | -         |    -5.85 | alex, dav1g, Martinez, mopoz, sausol |
|           30 |     1770 | 2026-05-02 | FOKUS                | W   | 0.723      | 0.435        | 0.084 (0.026)    | -                | -         |    12.74 | alex, dav1g, Martinez, mopoz, sausol |
|           29 |     1893 | 2026-04-29 | ASTRAL Esports       | W   | 0.705      | 0.435        | -                | 0.873 (0.267)    | -         |     6.03 | alex, dav1g, Martinez, mopoz, sausol |
|           28 |     2038 | 2026-04-26 | SINNERS Esports      | L   | 0.685      | -            | -                | -                | -         |   -10.16 | alex, dav1g, Martinez, mopoz, sausol |
|           27 |     2061 | 2026-04-26 | 9INE                 | W   | 0.683      | -            | -                | -                | 1 (0.683) |     5.99 | alex, dav1g, Martinez, mopoz, sausol |
|           26 |     2121 | 2026-04-25 | ASTRAL Esports       | W   | 0.677      | 0.435        | -                | 0.873 (0.257)    | 1 (0.677) |     5.56 | alex, dav1g, Martinez, mopoz, sausol |
|           25 |     2383 | 2026-04-14 | RED Canids           | L   | 0.604      | -            | -                | -                | -         |   -14.69 | alex, dav1g, Martinez, mopoz, sausol |
|           24 |     2401 | 2026-04-13 | G2 Esports           | L   | 0.597      | -            | -                | -                | -         |    -1.03 | alex, dav1g, Martinez, mopoz, sausol |
|           23 |     2907 | 2026-04-02 | 9INE                 | L   | 0.523      | -            | -                | -                | -         |   -11.76 | alex, dav1g, Martinez, mopoz, sausol |
|           22 |     2956 | 2026-04-01 | Ninjas in Pyjamas    | L   | 0.518      | -            | -                | -                | -         |    -5.41 | alex, dav1g, Martinez, mopoz, sausol |
|           21 |     3442 | 2026-03-25 | BIG                  | L   | 0.472      | -            | -                | -                | -         |    -2.58 | alex, dav1g, Martinez, mopoz, sausol |
|           20 |     3461 | 2026-03-25 | HYPERSPIRIT          | W   | 0.471      | -            | -                | -                | 1 (0.471) |     1.76 | alex, dav1g, Martinez, mopoz, sausol |
|           19 |     5006 | 2026-02-22 | HOTU                 | L   | 0.265      | -            | -                | -                | -         |    -3.69 | alex, dav1g, Martinez, mopoz, sausol |
|           18 |     5057 | 2026-02-22 | BetBoom Team         | W   | 0.263      | 0.341        | 0.357 (0.032)    | -                | 1 (0.263) |     7.91 | alex, dav1g, Martinez, mopoz, sausol |
|           17 |     5106 | 2026-02-21 | Passion UA           | W   | 0.256      | -            | -                | -                | 1 (0.256) |     2.56 | alex, dav1g, Martinez, mopoz, sausol |
|           16 |     5204 | 2026-02-19 | EYEBALLERS           | W   | 0.243      | 0.341        | 0.141 (0.012)    | -                | 1 (0.243) |     5.42 | alex, dav1g, Martinez, mopoz, sausol |
|           15 |     5208 | 2026-02-19 | FC Famalicão Esports | W   | 0.243      | -            | -                | -                | 1 (0.243) |     0.36 | alex, dav1g, Martinez, mopoz, sausol |
|           14 |     5450 | 2026-02-14 | HOTU                 | W   | 0.212      | -            | -                | -                | 1 (0.212) |     3.86 | alex, dav1g, Martinez, mopoz, sausol |
|           13 |     5485 | 2026-02-14 | Magic                | W   | 0.210      | 0.384        | 0.217 (0.018)    | -                | -         |     5.27 | alex, dav1g, Martinez, mopoz, sausol |
|           12 |     5544 | 2026-02-13 | Bushido Wildcats     | W   | 0.203      | -            | -                | -                | -         |     0.43 | alex, dav1g, Martinez, mopoz, sausol |
|           11 |     5585 | 2026-02-12 | LFO (Turkish team)   | W   | 0.196      | -            | -                | -                | -         |     0.06 | alex, dav1g, Martinez, mopoz, sausol |
|           10 |     5762 | 2026-02-06 | Ninjas in Pyjamas    | L   | 0.158      | -            | -                | -                | -         |    -1.53 | alex, dav1g, Martinez, mopoz, sausol |
|            9 |     6154 | 2026-01-23 | BetBoom Team         | W   | 0.066      | 0.769        | 0.357 (0.018)    | -                | -         |     1.98 | alex, dav1g, Martinez, mopoz, sausol |
|            8 |     6172 | 2026-01-23 | 9INE                 | W   | 0.064      | -            | -                | -                | -         |     0.12 | alex, dav1g, Martinez, mopoz, sausol |
|            7 |     6207 | 2026-01-22 | Ursa                 | W   | 0.059      | -            | -                | -                | -         |     0.23 | alex, dav1g, Martinez, mopoz, sausol |
|            6 |     6216 | 2026-01-22 | Team Nemesis         | W   | 0.058      | 0.769        | 0.229 (0.010)    | -                | -         |     1.26 | alex, dav1g, Martinez, mopoz, sausol |
|            5 |     6228 | 2026-01-22 | GenOne               | W   | 0.057      | -            | -                | -                | -         |     0.20 | alex, dav1g, Martinez, mopoz, sausol |
|            4 |     6253 | 2026-01-21 | HOTU                 | L   | 0.052      | -            | -                | -                | -         |    -0.67 | alex, dav1g, Martinez, mopoz, sausol |
|            3 |     6276 | 2026-01-21 | Nuclear TigeRES      | W   | 0.049      | -            | -                | -                | -         |     0.86 | alex, dav1g, Martinez, mopoz, sausol |
|            2 |     6384 | 2026-01-17 | Team Liquid          | L   | 0.024      | -            | -                | -                | -         |    -0.34 | alex, dav1g, Martinez, mopoz, sausol |
|            1 |     6491 | 2026-01-15 | M80                  | W   | 0.010      | -            | -                | -                | -         |     0.20 | alex, dav1g, Martinez, mopoz, sausol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,177.50)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-06-17 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-05-31 |      0.918 | $5,000.00      | $4,590.86       |
| 2026-05-30 |      0.911 | $10,000.00     | $9,111.11       |
| 2026-05-17 |      0.823 | $40,000.00     | $32,922.22      |
| 2026-04-26 |      0.685 | $9,000.00      | $6,160.83       |
| 2026-04-19 |      0.638 | $4,000.00      | $2,552.22       |
| 2026-04-04 |      0.538 | $7,500.00      | $4,033.33       |
| 2026-02-14 |      0.212 | $12,500.00     | $2,645.84       |
| 2026-01-18 |      0.032 | $28,750.00     | $911.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
